export type SiteLanguage = 'ru' | 'ro';

const LANGUAGE_STORAGE_KEY = 'zoomama-language';

export function isSiteLanguage(value: string): value is SiteLanguage {
  return value === 'ru' || value === 'ro';
}

export function getStoredLanguage(): SiteLanguage {
  if (typeof window === 'undefined') return 'ru';

  const raw = window.localStorage.getItem(LANGUAGE_STORAGE_KEY);
  if (raw && isSiteLanguage(raw)) {
    return raw;
  }

  return 'ru';
}

export function setStoredLanguage(language: SiteLanguage) {
  if (typeof window === 'undefined') return;
  window.localStorage.setItem(LANGUAGE_STORAGE_KEY, language);
}
