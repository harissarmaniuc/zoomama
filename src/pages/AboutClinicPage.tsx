import SiteLayout from '../layouts/SiteLayout';

const aboutParagraphs = [
  'Клиника Zoomama основана 23 мая 2019 года главным врачом - Еленой Дмитриевной Цвентарной.',
  'За короткое время, путем упорного труда, мы смогли превратиться из обычного ветеринарного кабинета в современный и мультифункциональный ветеринарный госпиталь с круглосуточной работой и огромным, по меркам Республики Молдова, коллективом.',
  'Мы оснастили нашу клинику передовым оборудованием, включая несколько аппаратов УЗИ экспертного уровня и лучший в Республике Молдова цифровой рентген, что позволяет нам проводить точную и быструю диагностику различных заболеваний.',
  'Благодаря полному спектру лабораторных анализов, которые мы выполняем в клинике, наша команда специалистов может оперативно определить причину проблемы и разработать наилучший план лечения для вашего питомца.',
  'В клинике в наличии 24/7 - биохимический анализатор крови автоматический и полуавтоматический, гематологический анализатор крови, собственная цитологическая лаборатория.',
  'Отдельного внимания заслуживает отделение реанимации и интенсивной терапии, а также ультрасовременная хирургия.'
] as const;

function AboutClinicPage() {
  return (
    <SiteLayout
      activePath="/o-klinike"
      kicker="О клинике"
      title="О клинике Zoomama"
      subtitle="История клиники, ключевые направления развития и основные инфраструктурные преимущества."
    >
      <section className="py-10 sm:py-14">
        <div className="container-shell grid gap-5 xl:grid-cols-[1.05fr_0.95fr]">
          <div className="panel overflow-hidden">
            <div className="bg-gradient-to-br from-pine to-moss p-6 text-white sm:p-8">
              <p className="text-sm uppercase tracking-[0.2em] text-white/70">Zoomama</p>
              <h2 className="mt-2 text-3xl text-white sm:text-4xl">
                Современный ветеринарный госпиталь с круглосуточной работой
              </h2>
              <p className="mt-4 text-base leading-7 text-white/85 sm:text-lg">
                Диагностика, лаборатория, реанимация и хирургия в единой клинической системе.
              </p>
            </div>

            <div className="grid gap-4 p-6 sm:p-8">
              {aboutParagraphs.map((paragraph, index) => (
                <div
                  key={paragraph}
                  className="rounded-xl border border-pine/10 bg-white p-5 animate-rise"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <p className="text-base leading-7 text-ink/85 sm:text-lg">{paragraph}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-5">
            <div className="panel p-6 sm:p-8">
              <p className="text-sm uppercase tracking-[0.2em] text-pine/70">Ключевые акценты</p>
              <div className="mt-4 grid gap-3">
                {[
                  'Основана 23 мая 2019 года',
                  'Круглосуточный формат работы (24/7)',
                  'Экспертное УЗИ и цифровой рентген',
                  'Полный спектр лабораторной диагностики в клинике',
                  'Отделение реанимации и интенсивной терапии',
                  'Современное хирургическое направление'
                ].map((item) => (
                  <div key={item} className="flex gap-3 rounded-xl border border-pine/10 bg-white p-4">
                    <div className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-brass" />
                    <p className="text-base leading-7 text-ink/80">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="panel p-6 sm:p-8">
              <p className="text-sm uppercase tracking-[0.2em] text-pine/70">Навигация</p>
              <div className="mt-4 flex flex-wrap gap-2">
                <a href="/" className="btn-secondary">
                  Главная
                </a>
                <a href="/uslugi" className="btn-secondary">
                  Услуги
                </a>
                <a href="/tarify" className="btn-secondary">
                  Тарифы
                </a>
                <a href="/kontakty" className="btn-secondary">
                  Контакты
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}

export default AboutClinicPage;