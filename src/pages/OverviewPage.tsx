import SiteLayout from '../layouts/SiteLayout';
import { GiCat, GiGecko, GiSeatedMouse, GiSittingDog } from 'react-icons/gi';
import {
  chiefDoctorTimeline,
  clinicFacts,
  diagnosticHighlights,
  importantNotes,
  phoneContacts,
  animalTypes
} from './siteData';

function OverviewPage() {
  return (
    <SiteLayout
      activePath="/"
      kicker="Главная"
      title="Ветеринарная клиника ZooMama 24/7"
      subtitle="Круглосуточная помощь, диагностика, лаборатория, хирургия и профильные специалисты для точной и своевременной помощи вашему питомцу."
    >
      {/* Emergency banner */}
      <section className="bg-gradient-to-r from-clay/90 to-clay py-4">
        <div className="container-shell flex flex-col items-center gap-3 sm:flex-row sm:justify-between">
          <div className="flex items-center gap-3 text-white">
            <span className="relative flex h-3 w-3">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-75" />
              <span className="relative inline-flex h-3 w-3 rounded-full bg-white" />
            </span>
            <p className="text-base font-semibold">
              Экстренная помощь 24/7 — Реанимация и интенсивная терапия
            </p>
          </div>
          <a
            href="tel:+37368285128"
            className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2 text-sm font-bold text-clay transition hover:bg-white/90"
          >
            Звонок: 068 28 51 28
          </a>
        </div>
      </section>

      <section className="section-tinted py-10 sm:py-14">
        <div className="container-shell grid gap-5 lg:grid-cols-[1fr_1fr]">
          <div className="panel p-6 sm:p-8">
            <p className="text-sm uppercase tracking-[0.2em] text-pine/70">Основные контакты</p>
            <div className="mt-4 grid gap-3">
              {phoneContacts.map((contact) => (
                <a
                  key={contact.phone}
                  href={`tel:+373${contact.phone.replace(/\s/g, '')}`}
                  className={[
                    'rounded-xl border p-4 transition hover:shadow-md',
                    contact.accent === 'clay'
                      ? 'border-clay/20 bg-clay/5 hover:bg-clay/10'
                      : 'border-pine/10 bg-white hover:bg-sage/30'
                  ].join(' ')}
                >
                  <p className={[
                    'text-sm uppercase tracking-[0.16em]',
                    contact.accent === 'clay' ? 'text-clay/80' : 'text-pine/70'
                  ].join(' ')}>{contact.label}</p>
                  <p className={[
                    'mt-1 font-serifDisplay text-2xl leading-none',
                    contact.accent === 'clay' ? 'text-clay' : 'text-pine'
                  ].join(' ')}>
                    {contact.phone}
                  </p>
                  <p className="mt-2 text-base leading-7 text-ink/90">{contact.note}</p>
                </a>
              ))}
            </div>
          </div>

          <div className="panel p-6 sm:p-8">
            <p className="text-sm uppercase tracking-[0.2em] text-pine/70">Диагностика и специализации</p>
            <div className="mt-4 grid gap-3">
              {diagnosticHighlights.map((item) => (
                <div key={item} className="flex gap-3 rounded-xl border border-pine/10 bg-white p-4">
                  <div className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-brass" />
                  <p className="text-base leading-7 text-ink/95">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Animal types — colorful cards */}
      <section className="bg-gradient-to-br from-pine to-moss py-10 sm:py-14">
        <div className="container-shell">
          <p className="text-center text-sm font-semibold uppercase tracking-[0.22em] text-white/60">
            Мы принимаем
          </p>
          <h2 className="mt-2 text-center text-3xl text-white sm:text-4xl">
            Типы животных
          </h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
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

      <section className="section-warm pb-10 sm:pb-14">
        {/* ...existing code... */}
        <div className="container-shell grid gap-5 xl:grid-cols-[1.05fr_0.95fr]">
          <div className="panel overflow-hidden">
            <div className="bg-gradient-to-br from-pine to-moss p-6 text-white sm:p-8">
              <p className="text-sm uppercase tracking-[0.2em] text-white/70">О клинике</p>
              <h2 className="mt-2 text-3xl text-white sm:text-4xl">
                Краткое позиционирование клиники
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-7 text-white/85 sm:text-lg">
                Мы объединяем диагностику, терапию, хирургическое направление и интенсивную
                терапию в одном госпитале, чтобы быстрее принимать клинические решения.
              </p>
            </div>
            <div className="grid gap-4 p-6 sm:grid-cols-2 sm:p-8">
              {clinicFacts.map((fact) => (
                <div key={fact.title} className="rounded-xl border border-pine/10 bg-white p-4">
                  <p className="font-semibold text-pine">{fact.title}</p>
                  <p className="mt-2 text-base leading-7 text-ink/90">{fact.text}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-5">
            <div className="panel overflow-hidden">
              <div className="bg-gradient-to-r from-brass/90 to-brass px-6 py-4 sm:px-8">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/80">
                  <i className="fas fa-exclamation-triangle mr-2" />
                  Важная информация
                </p>
              </div>
              <div className="p-6 sm:p-8">
                <div className="grid gap-3">
                  {importantNotes.map((note) => (
                    <div key={note} className="flex gap-3 rounded-xl border border-brass/15 bg-sand/30 p-4">
                      <div className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-brass" />
                      <p className="text-base leading-7 text-ink/95">{note}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="panel p-6 sm:p-8">
              <p className="text-sm uppercase tracking-[0.2em] text-pine/70">
                Профиль главного врача (кратко)
              </p>
              <div className="mt-4 grid gap-3">
                {chiefDoctorTimeline.map((item) => (
                  <div key={`${item.year}-${item.title}`} className="rounded-xl border border-pine/10 bg-white p-4">
                    <p className="text-sm uppercase tracking-[0.16em] text-pine/70">{item.year}</p>
                    <p className="mt-1 font-semibold text-pine">{item.title}</p>
                    <p className="mt-1 text-base leading-7 text-ink/90">{item.detail}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick actions */}
      <section className="bg-gradient-to-r from-sage/60 to-linen py-10 sm:py-12">
        <div className="container-shell text-center">
          <h2 className="text-3xl sm:text-4xl">Быстрый доступ</h2>
          <p className="mt-3 text-base leading-7 text-ink/95">
            Перейдите к нужному разделу клиники
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a href="/uslugi" className="btn-primary">Услуги</a>
            <a href="/tarify" className="btn-secondary">Прайс-лист</a>
            <a href="/komanda" className="btn-secondary">Наша команда</a>
            <a href="/kontakty" className="btn-secondary">Контакты</a>
            <a href="/opyt-i-obrazovanie" className="btn-secondary">Опыт врача</a>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}

export default OverviewPage;


