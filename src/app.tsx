import { useCallback, useEffect, useMemo, useState } from 'react';
import AppRouter from './routes/AppRouter';
import { LanguageContext } from './i18n/LanguageContext';
import { getStoredLanguage, setStoredLanguage, type SiteLanguage } from './i18n/language';
import { restoreRussianContent, scheduleRomanianTranslation } from './i18n/domTranslator';

function getCurrentPath() {
  return window.location.pathname;
}

function App() {
  const [language, setLanguageState] = useState<SiteLanguage>(getStoredLanguage);
  const [pathname, setPathname] = useState(getCurrentPath);

  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
  }, []);

  useEffect(() => {
    const handlePopState = () => {
      setPathname(getCurrentPath());
    };

    const handleDocumentClick = (event: MouseEvent) => {
      if (event.defaultPrevented || event.button !== 0) return;
      if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;

      const target = event.target;
      if (!(target instanceof Element)) return;

      const anchor = target.closest('a');
      if (!(anchor instanceof HTMLAnchorElement)) return;
      if (anchor.target && anchor.target !== '_self') return;
      if (anchor.hasAttribute('download')) return;

      const rawHref = anchor.getAttribute('href');
      if (!rawHref || rawHref.startsWith('#')) return;

      const url = new URL(anchor.href, window.location.href);
      if (url.origin !== window.location.origin) return;

      const currentUrl = new URL(window.location.href);

      // Keep native behavior for in-page anchors on the same page.
      if (url.pathname === currentUrl.pathname && url.search === currentUrl.search && url.hash) {
        return;
      }

      if (url.pathname === currentUrl.pathname && url.search === currentUrl.search) {
        event.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return;
      }

      event.preventDefault();
      window.history.pushState({}, '', `${url.pathname}${url.search}${url.hash}`);
      setPathname(url.pathname);
    };

    window.addEventListener('popstate', handlePopState);
    document.addEventListener('click', handleDocumentClick);

    return () => {
      window.removeEventListener('popstate', handlePopState);
      document.removeEventListener('click', handleDocumentClick);
    };
  }, []);

  useEffect(() => {
    window.requestAnimationFrame(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }, [pathname]);

  useEffect(() => {
    document.documentElement.lang = language === 'ro' ? 'ro' : 'ru';
  }, [language]);

  useEffect(() => {
    if (language !== 'ro') {
      restoreRussianContent();
      return;
    }
    scheduleRomanianTranslation();
  }, [language]);

  useEffect(() => {
    if (language !== 'ro') return;
    // Re-translate newly rendered route content.
    scheduleRomanianTranslation();
  }, [language, pathname]);

  useEffect(() => {
    if (language !== 'ro') return;

    const observer = new MutationObserver(() => {
      scheduleRomanianTranslation();
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
      attributes: true,
      attributeFilter: ['placeholder', 'title', 'aria-label']
    });

    return () => observer.disconnect();
  }, [language]);

  const setLanguage = useCallback((nextLanguage: SiteLanguage) => {
    if (nextLanguage === language) return;

    setStoredLanguage(nextLanguage);
    setLanguageState(nextLanguage);
  }, [language]);

  const languageContextValue = useMemo(() => ({
    language,
    setLanguage
  }), [language, setLanguage]);

  return (
    <LanguageContext.Provider value={languageContextValue}>
      <AppRouter pathname={pathname} />
    </LanguageContext.Provider>
  );
}

export default App;
