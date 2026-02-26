import SiteLayout from '../layouts/SiteLayout';
import { serviceDomains } from './HomePage';

function ServicesPage() {
  return (
    <SiteLayout
      activePath="/servicii"
      kicker="Servicii"
      title="Categorii de servicii si profile medicale"
      subtitle="Pagina separata pentru servicii, pe baza categoriilor mentionate pe homepage-ul Zoomama."
    >
      <section className="py-10 sm:py-14">
        <div className="container-shell">
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {serviceDomains.map((service, index) => (
              <article
                key={service.name}
                className="panel group relative overflow-hidden p-5 animate-rise"
                style={{ animationDelay: `${60 * index}ms` }}
              >
                <div className="absolute right-0 top-0 h-24 w-24 translate-x-8 -translate-y-8 rounded-full border border-brass/20 transition group-hover:scale-110" />
                <div className="relative">
                  <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full border border-pine/15 bg-white text-sm font-semibold text-pine">
                    {String(index + 1).padStart(2, '0')}
                  </div>
                  <h2 className="text-2xl leading-tight">{service.name}</h2>
                  <p className="mt-3 text-sm leading-6 text-ink/75">{service.summary}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {service.examples.map((example) => (
                      <span
                        key={example}
                        className="rounded-full border border-pine/10 bg-parchment px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-pine"
                      >
                        {example}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}

export default ServicesPage;
