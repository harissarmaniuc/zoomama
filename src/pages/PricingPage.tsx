import SiteLayout from '../layouts/SiteLayout';
import { representativePrices } from './siteData';

function PricingPage() {
  return (
    <SiteLayout
      activePath="/tarife"
      kicker="Тарифы"
      title="Ориентировочные цены (репрезентативная выборка)"
      subtitle="Примеры цен, собранные с главной страницы. Для production-версии лучше подключить обновляемый источник данных."
    >
      <section className="py-10 sm:py-14">
        <div className="container-shell grid gap-5 xl:grid-cols-[1.1fr_0.9fr]">
          <div className="panel overflow-hidden">
            <div className="grid grid-cols-[1.1fr_1fr_auto] bg-pine px-4 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-white">
              <span>Категория</span>
              <span>Услуга</span>
              <span>Цена</span>
            </div>
            <div className="divide-y divide-pine/10 bg-white">
              {representativePrices.map((row) => (
                <div
                  key={`${row.category}-${row.service}`}
                  className="grid grid-cols-1 gap-1 px-4 py-3 sm:grid-cols-[1.1fr_1fr_auto] sm:items-center sm:gap-3"
                >
                  <span className="text-xs font-semibold uppercase tracking-[0.16em] text-pine/75">
                    {row.category}
                  </span>
                  <span className="text-sm text-ink/85">{row.service}</span>
                  <span className="text-sm font-semibold text-pine">{row.price}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-5">
            <div className="panel p-6 sm:p-8">
              <p className="text-xs uppercase tracking-[0.2em] text-pine/70">Примечания</p>
              <div className="mt-4 grid gap-3">
                {[
                  'Цены представлены как ориентировочная выборка, а не полный прайс-лист.',
                  'Часть услуг тарифицируется в зависимости от сложности, веса пациента или длительности госпитализации.',
                  'Для реального сайта стоит добавить дату последнего обновления прайса.'
                ].map((note) => (
                  <div key={note} className="rounded-xl border border-pine/10 bg-white p-4">
                    <p className="text-sm leading-6 text-ink/80">{note}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="panel p-6 sm:p-8">
              <p className="text-xs uppercase tracking-[0.2em] text-pine/70">Быстрая навигация</p>
              <div className="mt-4 flex flex-wrap gap-2">
                <a href="/servicii" className="btn-secondary">
                  Услуги
                </a>
                <a href="/contact" className="btn-secondary">
                  Контакты
                </a>
                <a href="/echipa" className="btn-secondary">
                  Команда
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}

export default PricingPage;
