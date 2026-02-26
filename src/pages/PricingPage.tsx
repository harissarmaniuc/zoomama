import { useState } from 'react';

import SiteLayout from '../layouts/SiteLayout';
import { pricingCategories } from './pricingData';

const pricingCategoryLabels: Record<string, string> = {
  'cat-1': 'Консультации',
  'cat-2': 'Инструментальная диагностика',
  'cat-3': 'Лабораторные исследования',
  'cat-4': 'Паразитологические исследования',
  'cat-5': 'Цитология и биоптаты',
  'cat-6': 'Мягкотканная хирургия',
  'cat-7': 'Анестезия',
  'cat-8': 'Вакцинация и чипирование',
  'cat-9': 'Терапия и манипуляции',
  'cat-10': 'Кардиология',
  'cat-11': 'ОРИТ и стационар'
};

function ChevronIcon({ open }: { open: boolean }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className={`h-5 w-5 transition-transform ${open ? 'rotate-180' : ''}`}
    >
      <path
        d="M6 9l6 6 6-6"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function splitPrice(price: string) {
  const match = price.match(/^(.*?MDL)(.*)$/i);

  if (!match) {
    return { main: price, detail: '' };
  }

  return {
    main: match[1].trim(),
    detail: match[2].trim()
  };
}

function PricingPage() {
  const [openId, setOpenId] = useState<string>('');

  return (
    <SiteLayout
      activePath="/tarify"
      kicker="Тарифы"
      title="Прайс-лист клиники"
      subtitle="Категории, названия услуг и цены сверены по HTML-версии сайта ZooMama (секция прайса). Уточняйте актуальность перед записью."
    >
      <section className="py-12 sm:py-16">
        <div className="container-shell">
          <div className="mx-auto max-w-5xl">
            <div className="mb-8 rounded-2xl border border-brass/20 bg-white/80 p-5 text-base leading-7 text-ink/70 shadow-sm backdrop-blur-sm sm:mb-10 sm:p-6">
              <p>
                Цены могут изменяться в зависимости от клинической ситуации, веса пациента, расходных
                материалов и необходимости анестезии/стационара. Для сложных случаев стоимость
                рассчитывается индивидуально.
              </p>
            </div>

            <div className="flex flex-col gap-5 sm:gap-6">
              {pricingCategories.map((category) => {
                const isOpen = openId === category.id;
                const compactTitle = pricingCategoryLabels[category.id] ?? category.titleLines[0];
                const fullTitle = category.titleLines.join(' / ');

                return (
                  <section
                    key={category.id}
                    className={[
                      'overflow-hidden rounded-2xl border bg-white transition-all duration-200',
                      isOpen
                        ? 'border-pine/25 shadow-md ring-1 ring-brass/15'
                        : 'border-pine/10 shadow-sm hover:shadow-md hover:border-pine/15'
                    ].join(' ')}
                  >
                    <h2>
                      <button
                        type="button"
                        aria-expanded={isOpen}
                        className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left transition hover:bg-parchment/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-pine/30 sm:px-7 sm:py-6"
                        onClick={() => setOpenId(isOpen ? '' : category.id)}
                      >
                        <span className="min-w-0 pr-2">
                          <span className="block font-serifDisplay text-xl leading-tight text-ink sm:text-2xl">
                            {compactTitle}
                          </span>
                          {fullTitle !== compactTitle ? (
                            <span className="mt-1.5 block text-base leading-6 text-ink/50">
                              {fullTitle}
                            </span>
                          ) : null}
                        </span>

                        <span className="flex shrink-0 items-center gap-3">
                          <span className="hidden rounded-full border border-pine/10 bg-parchment/60 px-3 py-1 text-sm font-semibold tabular-nums uppercase tracking-[0.15em] text-pine/65 sm:inline-flex">
                            {category.rows.length}
                          </span>
                          <span
                            className={[
                              'grid h-9 w-9 place-items-center rounded-full border transition-colors duration-200',
                              isOpen
                                ? 'border-pine/20 bg-pine text-white'
                                : 'border-pine/10 bg-parchment/50 text-ink/60'
                            ].join(' ')}
                          >
                            <ChevronIcon open={isOpen} />
                          </span>
                        </span>
                      </button>
                    </h2>

                    {isOpen ? (
                      <div className="px-5 pb-4 sm:px-7 sm:pb-5">
                        <div className="h-px bg-gradient-to-r from-transparent via-pine/10 to-transparent" />
                        <ul className="divide-y divide-pine/[0.07]">
                          {category.rows.map((row, index) => {
                            const priceParts = splitPrice(row.price);

                            return (
                              <li
                                key={`${category.id}-${index}-${row.text}`}
                                className="grid grid-cols-1 gap-1 py-4 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-center sm:gap-8 sm:py-[1.15rem]"
                              >
                                <span className="min-w-0 text-base leading-7 text-ink/85 sm:text-lg">
                                  {row.text}
                                </span>

                                <span className="shrink-0 text-left sm:text-right">
                                  <span className="block text-lg font-semibold leading-7 text-pine sm:text-xl">
                                    {priceParts.main}
                                  </span>
                                  {priceParts.detail ? (
                                    <span className="mt-0.5 block max-w-[20rem] text-sm leading-5 text-ink/50 sm:ml-auto">
                                      {priceParts.detail}
                                    </span>
                                  ) : null}
                                </span>
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    ) : null}
                  </section>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}

export default PricingPage;
