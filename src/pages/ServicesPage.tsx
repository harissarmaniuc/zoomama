import SiteLayout from '../layouts/SiteLayout';
import { GiCat, GiGecko, GiSeatedMouse, GiSittingDog } from 'react-icons/gi';
import { animalTypes, importantNotesRo, serviceDomains } from './siteData';

function ServicesPage() {
  return (
    <SiteLayout
      activePath="/uslugi"
      kicker="Услуги"
      title="Категории услуг и медицинские направления"
      subtitle="Терапия, диагностика, хирургия, кардиология, эндокринология и другие направления клиники."
    >
      {/* Animal types served */}
      <section className="bg-gradient-to-br from-pine to-moss py-10 sm:py-14">
        <div className="container-shell">
          <p className="text-center text-sm font-semibold uppercase tracking-[0.22em] text-white/70">
            Мы принимаем
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {animalTypes.map((animal, index) => {
              const icons = ['cat', 'dog', 'hamster', 'lizard'] as const;
              const icon = icons[index];

              return (
                <div
                  key={animal.name}
                  className="rounded-2xl border border-white/15 bg-white/10 p-5 text-center"
                >
                  {icon === 'cat' ? (
                    <GiCat className="mx-auto text-3xl text-white/90" aria-hidden="true" />
                  ) : icon === 'dog' ? (
                    <GiSittingDog className="mx-auto text-3xl text-white/90" aria-hidden="true" />
                  ) : icon === 'hamster' ? (
                    <GiSeatedMouse className="mx-auto text-3xl text-white/90" aria-hidden="true" />
                  ) : icon === 'lizard' ? (
                    <GiGecko className="mx-auto text-3xl text-white/90" aria-hidden="true" />
                  ) : null}
                  <h3 className="mt-3 text-xl font-semibold text-white">{animal.name}</h3>
                  <p className="mt-2 text-base leading-7 text-white/80">{animal.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-tinted py-10 sm:py-14">
        <div className="container-shell">
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {serviceDomains.map((service, index) => (
              <article
                key={service.name}
                className="panel group relative overflow-hidden p-5 animate-rise"
                style={{ animationDelay: `${60 * index}ms` }}
              >
                <div className="absolute right-0 top-0 h-24 w-24 translate-x-8 -translate-y-8 rounded-full border border-brass/30 bg-brass/5 transition group-hover:scale-110" />
                <div className="relative">
                  <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full border border-pine/15 bg-sage/50 text-base font-semibold text-pine">
                    {String(index + 1).padStart(2, '0')}
                  </div>
                  <h2 className="text-2xl leading-tight">{service.name}</h2>
                  <p className="mt-3 text-base leading-7 text-ink/75">{service.summary}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {service.examples.map((example) => (
                      <span
                        key={example}
                        className="rounded-full border border-pine/15 bg-sage/40 px-3 py-1 text-sm font-semibold uppercase tracking-[0.14em] text-pine"
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

      {/* Важные примечания */}
      <section className="bg-linen py-10 sm:py-14">
        <div className="container-shell">
          <div className="rounded-2xl border border-brass/30 bg-white p-6 sm:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brass">
              <i className="fas fa-exclamation-triangle mr-2" />
              Важно
            </p>
            <div className="mt-4 grid gap-3">
              {importantNotesRo.map((note) => (
                <p key={note} className="text-base leading-7 text-ink/80">
                  {note}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}

export default ServicesPage;
