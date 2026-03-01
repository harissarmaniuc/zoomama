import { type ReactNode, useEffect, useState } from 'react';
import { useLanguage } from '../i18n/LanguageContext';

type SiteLayoutProps = {
  children: ReactNode;
  activePath:
    | '/'
    | '/overview'
    | '/o-klinike'
    | '/uslugi'
    | '/tarify'
    | '/komanda'
    | '/opyt-i-obrazovanie'
    | '/kontakty';
  title: string;
  subtitle: string;
  kicker?: string;
};

const navItems = [
  { label: 'Главная', href: '/' },
  { label: 'О клинике', href: '/o-klinike' },
  { label: 'Услуги', href: '/uslugi' },
  { label: 'Тарифы', href: '/tarify' },
  { label: 'Команда', href: '/komanda' },
  { label: 'Опыт', href: '/opyt-i-obrazovanie' },
  { label: 'Контакты', href: '/kontakty' }
] as const;

const footerSocials = [
  { label: 'Instagram', href: 'https://instagram.com/zoomama_md?igshid=MmJiY2I4NDBkZg==', icon: 'fab fa-instagram' },
  { label: 'Facebook', href: 'https://www.facebook.com/vetzoomama/', icon: 'fab fa-facebook-f' },
  { label: 'Telegram', href: 'https://t.me/zoomama_chisinau', icon: 'fab fa-telegram-plane' },
  { label: 'WhatsApp', href: 'https://wa.me/37368178419', icon: 'fab fa-whatsapp' }
];

function SiteLayout({ children, activePath, title, subtitle, kicker }: SiteLayoutProps) {
  const { language, setLanguage } = useLanguage();
  const [menuOpen, setMenuOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Update page title
  useEffect(() => {
    document.title = `${title} — ZooMama | Ветеринарная клиника 24/7`;
  }, [title]);

  // Show scroll-to-top after scrolling 600px
  useEffect(() => {
    function onScroll() {
      setShowScrollTop(window.scrollY > 600);
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [activePath]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  return (
    <div className="min-h-screen">
      {/* Top utility bar */}
      <div className="border-b border-forest/30 bg-forest text-white/90">
        <div className="container-shell flex flex-col gap-2 py-3 text-base sm:flex-row sm:items-center sm:justify-between">
          <p className="tracking-wide">Ветеринарная клиника и госпиталь ZooMama</p>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm uppercase tracking-[0.18em] text-white/75">
            <span>Кишинев • 24/7</span>
            <span className="hidden sm:inline text-brass">•</span>
            <a className="hover:text-white" href="tel:+37368178419">
              +373 68 17 84 19
            </a>
          </div>
        </div>
      </div>

      {/* Sticky header */}
      <header className="sticky top-0 z-30 border-b border-pine/15 bg-cream/95 shadow-sm backdrop-blur">
        <div className="container-shell relative flex items-center justify-between py-4">
          <a href="/" className="group inline-flex items-center gap-3">
            <span className="grid h-11 w-11 place-items-center rounded-full border border-brass/40 bg-white shadow-inset">
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden="true"
                className="text-pine"
              >
                <path
                  d="M12 14c1.9 0 3.4 1.1 4.3 2.7.5.9-.2 2.1-1.3 2.1H8.9c-1.1 0-1.8-1.2-1.3-2.1C8.6 15.1 10.1 14 12 14Z"
                  stroke="currentColor"
                  strokeWidth="1.3"
                />
                <path
                  d="M8.2 10.3a1.4 1.4 0 1 0 0-2.8 1.4 1.4 0 0 0 0 2.8Zm7.6 0a1.4 1.4 0 1 0 0-2.8 1.4 1.4 0 0 0 0 2.8Zm-3.8-4a1.7 1.7 0 1 0 0-3.4 1.7 1.7 0 0 0 0 3.4Zm-5 6.5a1.1 1.1 0 1 0 0-2.2 1.1 1.1 0 0 0 0 2.2Zm10 0a1.1 1.1 0 1 0 0-2.2 1.1 1.1 0 0 0 0 2.2Z"
                  stroke="currentColor"
                  strokeWidth="1.3"
                />
              </svg>
            </span>
            <span>
              <span className="block font-serifDisplay text-2xl leading-none tracking-wide text-pine">
                ZooMama
              </span>
              <span className="block text-xs uppercase tracking-[0.35em] text-pine/70">
                Ветеринарная клиника 24/7
              </span>
            </span>
          </a>

          {/* Desktop nav */}
          <nav aria-label="Основная навигация" className="hidden items-center gap-4 md:flex md:flex-1 md:justify-center lg:gap-6">
            {navItems.map((item) => {
              const isActive = activePath === item.href;
              return (
                <a
                  key={item.href}
                  href={item.href}
                  className={[
                    'whitespace-nowrap text-base font-semibold uppercase tracking-[0.14em] transition',
                    isActive ? 'text-pine' : 'text-pine/75 hover:text-ink'
                  ].join(' ')}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>

          <div className="hidden items-center gap-2 md:flex">
            <div
              data-no-translate
              className="inline-flex items-center rounded-full border border-pine/15 bg-white p-1"
            >
              <button
                type="button"
                onClick={() => setLanguage('ru')}
                className={[
                  'rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] transition',
                  language === 'ru' ? 'bg-pine text-white' : 'text-pine/80 hover:bg-sage/40'
                ].join(' ')}
              >
                RU
              </button>
              <button
                type="button"
                onClick={() => setLanguage('ro')}
                className={[
                  'rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] transition',
                  language === 'ro' ? 'bg-pine text-white' : 'text-pine/80 hover:bg-sage/40'
                ].join(' ')}
              >
                RO
              </button>
            </div>

            {/* Emergency button — desktop */}
            <a
              href="tel:+37368285128"
              className="inline-flex items-center gap-2 rounded-full border border-clay/30 bg-clay/10 px-4 py-2 text-sm font-semibold text-clay transition hover:bg-clay/20"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-clay opacity-75" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-clay" />
              </span>
              SOS 24/7
            </a>
          </div>
          {/* Hamburger button — mobile */}
          <button
            type="button"
            aria-label={menuOpen ? 'Закрыть меню' : 'Открыть меню'}
            aria-expanded={menuOpen}
            className="relative z-50 grid h-10 w-10 place-items-center rounded-lg border border-pine/15 bg-white md:hidden"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            <div className="flex w-5 flex-col gap-[5px]">
              <span
                className={[
                  'block h-[2px] w-full rounded-full bg-pine transition-all duration-300',
                  menuOpen ? 'translate-y-[7px] rotate-45' : ''
                ].join(' ')}
              />
              <span
                className={[
                  'block h-[2px] w-full rounded-full bg-pine transition-all duration-300',
                  menuOpen ? 'opacity-0' : ''
                ].join(' ')}
              />
              <span
                className={[
                  'block h-[2px] w-full rounded-full bg-pine transition-all duration-300',
                  menuOpen ? '-translate-y-[7px] -rotate-45' : ''
                ].join(' ')}
              />
            </div>
          </button>
        </div>
      </header>

      {/* Mobile slide-over menu */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div
            className="absolute inset-0 bg-ink/40 backdrop-blur-sm"
            onClick={() => setMenuOpen(false)}
          />
          <nav className="absolute right-0 top-0 flex h-full w-72 flex-col bg-cream shadow-xl">
            <div className="flex items-center justify-between border-b border-pine/10 px-5 py-5">
              <span className="font-serifDisplay text-xl text-pine">Меню</span>
            </div>
            <div className="border-b border-pine/10 px-4 py-3" data-no-translate>
              <div className="inline-flex w-full items-center rounded-full border border-pine/15 bg-white p-1">
                <button
                  type="button"
                  onClick={() => setLanguage('ru')}
                  className={[
                    'w-1/2 rounded-full px-3 py-2 text-sm font-semibold uppercase tracking-[0.16em] transition',
                    language === 'ru' ? 'bg-pine text-white' : 'text-pine/80 hover:bg-sage/40'
                  ].join(' ')}
                >
                  RU
                </button>
                <button
                  type="button"
                  onClick={() => setLanguage('ro')}
                  className={[
                    'w-1/2 rounded-full px-3 py-2 text-sm font-semibold uppercase tracking-[0.16em] transition',
                    language === 'ro' ? 'bg-pine text-white' : 'text-pine/80 hover:bg-sage/40'
                  ].join(' ')}
                >
                  RO
                </button>
              </div>
            </div>
            <div className="flex flex-1 flex-col gap-1 overflow-y-auto px-4 py-4">
              {navItems.map((item) => {
                const isActive = activePath === item.href;
                return (
                  <a
                    key={item.href}
                    href={item.href}
                    className={[
                      'rounded-xl px-4 py-3 text-base font-semibold transition',
                      isActive
                        ? 'bg-pine text-white'
                        : 'text-pine hover:bg-sage/40'
                    ].join(' ')}
                  >
                    {item.label}
                  </a>
                );
              })}
            </div>
            <div className="border-t border-pine/10 p-4">
              <a
                href="tel:+37368285128"
                className="flex items-center justify-center gap-2 rounded-full bg-clay px-5 py-3 text-base font-semibold text-white transition hover:bg-clay/90"
              >
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-75" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-white" />
                </span>
                SOS: 068 28 51 28
              </a>
            </div>
          </nav>
        </div>
      )}

      <main>
        {/* Hero banner */}
        <section className="border-b border-pine/15 bg-gradient-to-br from-pine via-moss to-forest py-10 sm:py-12">
          <div className="container-shell">
            {kicker ? (
              <span className="section-kicker border-white/20 bg-white/10 text-white">{kicker}</span>
            ) : null}
            <h1 className="max-w-4xl text-4xl leading-tight text-white sm:text-5xl">{title}</h1>
            <p className="mt-4 max-w-3xl text-lg leading-8 text-white/80">{subtitle}</p>
          </div>
        </section>

        {children}
      </main>

      {/* Enhanced footer */}
      <footer className="mt-8 border-t border-forest/30 bg-forest">
        <div className="container-shell py-10 sm:py-12">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {/* Brand */}
            <div>
              <p className="font-serifDisplay text-2xl text-white">ZooMama</p>
              <p className="mt-1 text-sm uppercase tracking-[0.2em] text-white/70">
                Ветеринарная клиника • 24/7
              </p>
              <p className="mt-4 text-base leading-7 text-white/80">
                Круглосуточная помощь, диагностика, лаборатория и хирургия в Кишиневе.
              </p>
            </div>

            {/* Navigation */}
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white">Навигация</p>
              <div className="mt-4 grid gap-2">
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="text-base text-white/85 transition hover:text-white"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </div>

            {/* Contacts */}
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white">Контакты</p>
              <div className="mt-4 grid gap-3">
                <a href="tel:+37368178419" className="text-base text-white/85 transition hover:text-white">
                  <i className="fas fa-phone mr-2 text-sm" />068 17 84 19 — Рецепция
                </a>
                <a href="tel:+37368285128" className="text-base text-white/85 transition hover:text-white">
                  <i className="fas fa-truck-medical mr-2 text-sm" />068 28 51 28 — ОРИТ 24/7
                </a>
                <a href="tel:+37369036647" className="text-base text-white/85 transition hover:text-white">
                  <i className="fas fa-phone mr-2 text-sm" />069 03 66 47 — Корпус 2
                </a>
                <p className="text-base text-white/70">
                  <i className="fas fa-map-marker-alt mr-2 text-sm" />ул. А. Маринеску 11/3, Кишинев
                </p>
              </div>
            </div>

            {/* Social */}
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white">Мы в сети</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {footerSocials.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3.5 py-2 text-sm font-semibold text-white/85 transition hover:bg-white/15 hover:text-white"
                  >
                    <i className={social.icon} />
                    {social.label}
                  </a>
                ))}
              </div>
              <a
                href="mailto:doctor_tsvent@mail.ru"
                className="mt-4 inline-flex items-center gap-2 text-base text-white/70 transition hover:text-white"
              >
                <i className="fas fa-envelope text-sm" />
                doctor_tsvent@mail.ru
              </a>
            </div>
          </div>

          <div className="mt-8 border-t border-white/10 pt-6 text-center text-sm text-white/55">
            © {new Date().getFullYear()} ZooMama. Все права защищены.
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp button */}
      <a
        href="https://wa.me/37368178419"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Написать в WhatsApp"
        className="fixed bottom-6 right-6 z-40 grid h-14 w-14 place-items-center rounded-full bg-[#25D366] shadow-lg transition hover:scale-110 hover:shadow-xl"
      >
        <svg width="28" height="28" viewBox="0 0 24 24" fill="white">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      </a>

      {/* Scroll to top button */}
      <button
        type="button"
        aria-label="Наверх"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className={[
          'fixed bottom-6 right-[5.5rem] z-40 grid h-12 w-12 place-items-center rounded-full border border-pine/20 bg-white shadow-lg transition-all duration-300',
          showScrollTop ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0 pointer-events-none'
        ].join(' ')}
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-pine">
          <polyline points="18 15 12 9 6 15" />
        </svg>
      </button>
    </div>
  );
}

export default SiteLayout;

