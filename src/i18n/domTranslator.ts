const TRANSLATION_CACHE_KEY = 'zoomama-ro-translation-cache-v2';
const CYRILLIC_PATTERN = /[А-Яа-яЁё]/;
const SKIP_TAGS = new Set([
  'SCRIPT',
  'STYLE',
  'NOSCRIPT',
  'SVG',
  'PATH',
  'CODE',
  'PRE',
  'TEXTAREA'
]);

type TranslatableAttribute = 'placeholder' | 'title' | 'aria-label';

type TranslateTarget =
  | {
      kind: 'text';
      text: string;
      node: Text;
    }
  | {
      kind: 'attribute';
      text: string;
      node: Element;
      attribute: TranslatableAttribute;
    };

let cacheLoaded = false;
let cache = new Map<string, string>();
const inFlight = new Map<string, Promise<string>>();

const trackedTextNodes = new Set<Text>();
const originalTextByNode = new WeakMap<Text, string>();
const trackedElements = new Set<Element>();
const originalAttrsByElement = new WeakMap<Element, Map<TranslatableAttribute, string>>();

let activeRunId = 0;
let scheduledTimer: number | null = null;

function loadCache() {
  if (cacheLoaded || typeof window === 'undefined') return;
  cacheLoaded = true;

  try {
    const raw = window.localStorage.getItem(TRANSLATION_CACHE_KEY);
    if (!raw) return;
    const parsed = JSON.parse(raw) as Record<string, string>;
    for (const [source, translated] of Object.entries(parsed)) {
      cache.set(source, translated);
    }
  } catch {
    // Ignore corrupt cache data.
  }
}

function saveCache() {
  if (typeof window === 'undefined') return;

  try {
    const serialized = JSON.stringify(Object.fromEntries(cache.entries()));
    window.localStorage.setItem(TRANSLATION_CACHE_KEY, serialized);
  } catch {
    // Ignore storage failures.
  }
}

function shouldTranslate(text: string) {
  const normalized = text.trim();
  if (!normalized) return false;
  return CYRILLIC_PATTERN.test(normalized);
}

function rememberTextNode(node: Text) {
  if (originalTextByNode.has(node)) return;
  originalTextByNode.set(node, node.nodeValue ?? '');
  trackedTextNodes.add(node);
}

function rememberAttribute(element: Element, attribute: TranslatableAttribute, value: string) {
  let attrMap = originalAttrsByElement.get(element);
  if (!attrMap) {
    attrMap = new Map<TranslatableAttribute, string>();
    originalAttrsByElement.set(element, attrMap);
    trackedElements.add(element);
  }

  if (!attrMap.has(attribute)) {
    attrMap.set(attribute, value);
  }
}

async function requestTranslation(text: string): Promise<string> {
  const url =
    'https://translate.googleapis.com/translate_a/single' +
    `?client=gtx&sl=ru&tl=ro&dt=t&q=${encodeURIComponent(text)}`;

  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Translation request failed with status ${response.status}`);
  }

  const payload = (await response.json()) as unknown;
  if (!Array.isArray(payload) || !Array.isArray(payload[0])) {
    return text;
  }

  const segments = payload[0] as unknown[];
  const translated = segments
    .map((segment) => {
      if (!Array.isArray(segment)) return '';
      const value = segment[0];
      return typeof value === 'string' ? value : '';
    })
    .join('');

  return translated || text;
}

async function translateText(text: string): Promise<string> {
  loadCache();

  const cached = cache.get(text);
  if (cached) return cached;

  const existing = inFlight.get(text);
  if (existing) return existing;

  const promise = requestTranslation(text)
    .then((translated) => {
      cache.set(text, translated);
      saveCache();
      return translated;
    })
    .catch(() => text)
    .finally(() => {
      inFlight.delete(text);
    });

  inFlight.set(text, promise);
  return promise;
}

function collectTextTargets(root: ParentNode): TranslateTarget[] {
  const targets: TranslateTarget[] = [];
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);

  while (walker.nextNode()) {
    const node = walker.currentNode;
    if (!(node instanceof Text)) continue;

    const parent = node.parentElement;
    if (!parent) continue;
    if (parent.closest('[data-no-translate]')) continue;
    if (SKIP_TAGS.has(parent.tagName)) continue;

    const rawText = node.nodeValue ?? '';
    if (!shouldTranslate(rawText)) continue;

    rememberTextNode(node);
    targets.push({ kind: 'text', text: rawText, node });
  }

  return targets;
}

function collectAttributeTargets(root: ParentNode): TranslateTarget[] {
  const targets: TranslateTarget[] = [];
  if (!(root instanceof Element || root instanceof Document)) {
    return targets;
  }

  const selector = '[placeholder], [title], [aria-label]';
  const elements = root.querySelectorAll(selector);

  elements.forEach((element) => {
    if (element.closest('[data-no-translate]')) return;
    if (SKIP_TAGS.has(element.tagName)) return;

    (['placeholder', 'title', 'aria-label'] as const).forEach((attribute) => {
      const value = element.getAttribute(attribute);
      if (!value || !shouldTranslate(value)) return;

      rememberAttribute(element, attribute, value);
      targets.push({
        kind: 'attribute',
        text: value,
        node: element,
        attribute
      });
    });
  });

  return targets;
}

async function runTranslation(root: ParentNode, runId: number) {
  const targets = [...collectTextTargets(root), ...collectAttributeTargets(root)];
  if (targets.length === 0) return;

  const targetsByText = new Map<string, TranslateTarget[]>();
  targets.forEach((target) => {
    const existing = targetsByText.get(target.text);
    if (existing) {
      existing.push(target);
    } else {
      targetsByText.set(target.text, [target]);
    }
  });

  const uniqueTexts = Array.from(targetsByText.keys());

  let index = 0;
  const workerCount = Math.min(8, uniqueTexts.length);

  async function worker() {
    while (index < uniqueTexts.length) {
      const current = uniqueTexts[index];
      index += 1;
      const translated = await translateText(current);
      if (runId !== activeRunId) return;

      const bucket = targetsByText.get(current);
      if (!bucket || !translated) continue;

      bucket.forEach((target) => {
        if (target.kind === 'text') {
          target.node.nodeValue = translated;
          return;
        }
        target.node.setAttribute(target.attribute, translated);
      });
    }
  }

  await Promise.all(Array.from({ length: workerCount }, worker));
}

export function scheduleRomanianTranslation(root: ParentNode = document.documentElement) {
  if (typeof window === 'undefined') return;
  if (scheduledTimer !== null) return;

  scheduledTimer = window.setTimeout(() => {
    scheduledTimer = null;
    activeRunId += 1;
    const runId = activeRunId;
    void runTranslation(root, runId);
  }, 0);
}

export function restoreRussianContent() {
  if (typeof window === 'undefined') return;

  if (scheduledTimer !== null) {
    window.clearTimeout(scheduledTimer);
    scheduledTimer = null;
  }

  // Cancel any still-running translation result application.
  activeRunId += 1;

  trackedTextNodes.forEach((node) => {
    if (!node.isConnected) {
      trackedTextNodes.delete(node);
      return;
    }

    const original = originalTextByNode.get(node);
    if (typeof original === 'string' && node.nodeValue !== original) {
      node.nodeValue = original;
    }
  });

  trackedElements.forEach((element) => {
    if (!element.isConnected) {
      trackedElements.delete(element);
      return;
    }

    const attrMap = originalAttrsByElement.get(element);
    if (!attrMap) return;

    attrMap.forEach((originalValue, attribute) => {
      element.setAttribute(attribute, originalValue);
    });
  });
}
