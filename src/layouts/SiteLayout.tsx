import type { ReactNode } from 'react';

type SiteLayoutProps = {
  children: ReactNode;
  activePath:
    | '/'
    | '/overview'
    | '/o-klinike'
    | '/uslugi'
    | '/tarify'
    | '/komanda'
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

function SiteLayout({ children, activePath, title, subtitle, kicker }: SiteLayoutProps) {
  return (
    <div className="min-h-screen">
      <div className="border-b border-pine/10 bg-white/60 backdrop-blur">
        <div className="container-shell flex flex-col gap-2 py-3 text-base text-pine sm:flex-row sm:items-center sm:justify-between">
          <p className="tracking-wide">Ветеринарная клиника и госпиталь ZooMama</p>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm uppercase tracking-[0.18em]">
            <span>Кишинев • 24/7</span>
            <span className="hidden sm:inline text-brass">•</span>
            <a className="hover:text-ink" href="tel:+37368178419">
              +373 68 17 84 19
            </a>
          </div>
        </div>
      </div>

      <header className="sticky top-0 z-30 border-b border-pine/10 bg-parchment/90 backdrop-blur">
        <div className="container-shell flex items-center justify-between py-4">
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

          <nav aria-label="Основная навигация" className="hidden items-center gap-6 md:flex">
            {navItems.map((item) => {
              const isActive = activePath === item.href;

              return (
                <a
                  key={item.href}
                  href={item.href}
                  className={[
                    'text-base font-semibold uppercase tracking-[0.14em] transition',
                    isActive ? 'text-pine' : 'text-pine/75 hover:text-ink'
                  ].join(' ')}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>

          <a href="/opyt-i-obrazovanie" className="btn-primary hidden sm:inline-flex">
            Профиль врача
          </a>
        </div>
      </header>

      <main>
        <section className="border-b border-pine/10 bg-white/35 py-10 sm:py-12">
          <div className="container-shell">
            {kicker ? <span className="section-kicker">{kicker}</span> : null}
            <h1 className="max-w-4xl text-4xl leading-tight sm:text-5xl">{title}</h1>
            <p className="mt-4 max-w-3xl text-lg leading-8 text-ink/80">{subtitle}</p>
          </div>
        </section>

        {children}
      </main>

      <footer className="mt-8 border-t border-pine/10 bg-white/50 py-8">
        <div className="container-shell flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="font-serifDisplay text-2xl text-pine">ZooMama</p>
            <p className="text-sm uppercase tracking-[0.2em] text-pine/70">
              Ветеринарная клиника • Кишинев • 24/7
            </p>
          </div>
          <div className="text-base text-ink/70">
            ул. А. Маринеску 11/3 • +373 68 17 84 19 • Zoomama
          </div>
        </div>
      </footer>
    </div>
  );
}

export default SiteLayout;
