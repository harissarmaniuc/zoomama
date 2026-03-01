import SiteLayout from '../layouts/SiteLayout';

type TrainingItem = {
  title: string;
  details?: string[];
};

type TrainingSection = {
  heading: string;
  items: TrainingItem[];
};

type ExperienceYear = {
  year: string;
  subtitle: string;
  sections: TrainingSection[];
};

const experienceYears: ExperienceYear[] = [
  {
    year: '2024',
    subtitle: 'Повышение квалификации и профессиональная деятельность',
    sections: [
      {
        heading: 'Международные конференции',
        items: [
          { title: 'Организатор: Международной конференции SpringVet, 2–3 марта 2024' },
          {
            title:
              'Организатор и лектор: “Surgical Day 2024”, секция «Онкология» (под руководством Лавровой К.А.), май 2024'
          }
        ]
      },
      {
        heading: 'Специализированные образовательные проекты',
        items: [
          {
            title:
              'Организатор: I, II, III циклов повышения квалификации ветеринарных врачей, курс «Визуальная диагностика» (под руководством профессора Codreanu, Румыния), апрель – декабрь 2024'
          },
          {
            title:
              'Организатор: Неврологического семинара “Neurocare” (под руководством Албул А.В.), май 2024'
          }
        ]
      },
      {
        heading: 'Специализированные образовательные проекты',
        items: [
          {
            title:
              'Лектор курса по профориентации подростков, центр психологии Psychologyprof. Тема: "Профессия - ветеринарный врач", апрель 2024'
          }
        ]
      }
    ]
  },
  {
    year: '2023',
    subtitle: 'Повышение квалификации и профессиональная деятельность',
    sections: [
      {
        heading: 'Международные конференции',
        items: [
          { title: 'Участник: Международной ветеринарной конференции по дерматологии, февраль 2023' },
          {
            title:
              'Лектор и организатор: Ветеринарной конференции Morfovet, секция «Онкология», Кишинев, Молдова'
          },
          {
            title:
              'Лектор и организатор: Ветеринарной конференции об анестезии и анальгезии PROPOFOL PARTY, Кишинев, Молдова'
          }
        ]
      },
      {
        heading: 'Дополнительное обучение',
        items: [
          {
            title: 'Курс: «Основы ветеринарной рентгенологии»',
            details: ['Учебный центр: УралБиоВет']
          },
          {
            title: 'Курс: «Основы трансфузиологии в ветеринарии»',
            details: ['Учебный центр: УралБиоВет']
          }
        ]
      },
      {
        heading: 'Авторские мастер-классы',
        items: [
          {
            title:
              'Лектор: Авторского мастер-класса по цитологии и лабораторной диагностике, декабрь 2023',
            details: ['Площадка: Политехнический институт']
          }
        ]
      },
      {
        heading: 'Специализированные образовательные проекты',
        items: [
          {
            title:
              'Лектор курса FCI для грумеров и кинологов "Доврачебная медицинская помощь ", май 2023'
          }
        ]
      }
    ]
  },
  {
    year: '2021',
    subtitle: 'Повышение квалификации и дополнительное обучение',
    sections: [
      {
        heading: 'Патоморфологические исследования',
        items: [
          {
            title: 'Курс: «Патоморфологические исследования в ветеринарной медицине»',
            details: [
              'Формат: Онлайн',
              'Описание: Методы гистологической диагностики, морфологические изменения тканей и органов, патологическая анатомия в ветеринарии.'
            ]
          }
        ]
      },
      {
        heading: 'Цитология и интраоперационные исследования',
        items: [
          {
            title: 'Курс: «Цитологические исследования, интраоперационные исследования»',
            details: [
              'Формат: Онлайн',
              'Описание: Основы цитологической диагностики, интерпретация клеточных изменений, экспресс-анализ во время хирургических вмешательств.'
            ]
          }
        ]
      }
    ]
  },
  {
    year: '2020',
    subtitle: 'Повышение квалификации и дополнительное обучение',
    sections: [
      {
        heading: 'Академический курс',
        items: [
          {
            title: 'Занимательная химиотерапия и онкология',
            details: ['Биоконтроль, Москва']
          }
        ]
      }
    ]
  },
  {
    year: '2019',
    subtitle: 'Повышение квалификации и дополнительное обучение',
    sections: [
      {
        heading: 'Цитология и гематология',
        items: [
          {
            title: 'Курс: «Онкологическая цитология»',
            details: ['Учебный центр: «Созвездие», Москва']
          }
        ]
      },
      {
        heading: 'Клиническая лабораторная диагностика',
        items: [
          {
            title:
              'Темы: Лабораторная диагностика, биохимический и гематологический анализы крови, работа с анализаторами крови и газов крови',
            details: ['Учебный центр: ВЦ «Белый Клык», Москва']
          }
        ]
      },
      {
        heading: 'Основы гемотрансфузии',
        items: [
          {
            title: 'Темы: Переливание крови и компонентов крови',
            details: ['Учебный центр: «МедВет», Москва']
          }
        ]
      },
      {
        heading: 'Дерматология мелких домашних животных',
        items: [{ title: 'Учебный центр: «Эксвет», Одесса' }]
      },
      {
        heading: 'Реанимация и интенсивная терапия',
        items: [
          {
            title: 'Темы: Реанимация абдоминальной и торакальной травмы',
            details: ['Учебный центр: «Эксвет», Одесса']
          }
        ]
      },
      {
        heading: 'Репродуктология мелких домашних животных',
        items: [{ title: 'Учебный центр: «Эксвет», Украина' }]
      },
      {
        heading: 'Онкология',
        items: [
          {
            title: 'Курс: «Основы химиотерапии» (Авторский курс онколога Игнатенко Н.А.)',
            details: ['Учебный центр: Optemeal, Онкология']
          }
        ]
      },
      {
        heading: 'Ветеринарная цитология',
        items: [
          {
            title: 'Курс: «Школа ветеринарной цитологии»',
            details: ['Учебный центр: «БИОКОНТРОЛЬ», Москва']
          }
        ]
      },
      {
        heading: 'Лекторская деятельность',
        items: [
          {
            title:
              'Лектор конференции MOLDVETFEST2019 (Zoofarmagro), темы: Онкоцитология, онкология в практике врача общей практики'
          }
        ]
      },
      {
        heading: 'Стажировки',
        items: [
          { title: 'Отделение реанимации и интенсивной терапии – ВЦ «Белый Клык», Москва' },
          { title: 'Отделение онкологии – ВЦ «Белый Клык», Москва' }
        ]
      }
    ]
  },
  {
    year: '2018',
    subtitle: 'Повышение квалификации и дополнительное обучение',
    sections: [
      {
        heading: 'Цитология и гематология',
        items: [
          {
            title: 'Курс: «Онкологическая цитология»',
            details: ['Учебный центр: «Созвездие», Москва']
          }
        ]
      },
      {
        heading: 'Клиническая лабораторная диагностика',
        items: [
          {
            title:
              'Темы: Лабораторная диагностика, биохимический и гематологический анализы крови, работа с анализаторами крови и газов крови',
            details: ['Учебный центр: ВЦ «Белый Клык», Москва']
          }
        ]
      },
      {
        heading: 'Основы гемотрансфузии',
        items: [
          {
            title: 'Темы: Переливание крови и компонентов крови',
            details: ['Учебный центр: «МедВет», Москва']
          }
        ]
      },
      {
        heading: 'Дерматология мелких домашних животных',
        items: [{ title: 'Учебный центр: «Эксвет», Одесса' }]
      },
      {
        heading: 'Стажировки',
        items: [
          { title: 'Отделение реанимации и интенсивной терапии – ВЦ «Белый Клык», Москва' },
          { title: 'Отделение онкологии – ВЦ «Белый Клык», Москва' }
        ]
      }
    ]
  },
  {
    year: '2017',
    subtitle: 'Повышение квалификации и дополнительное обучение',
    sections: [
      {
        heading: 'Цитология и гематология',
        items: [
          {
            title: 'Курс: «Онкологическая цитология»',
            details: ['Учебный центр: «Созвездие», Москва']
          }
        ]
      },
      {
        heading: 'Дерматология мелких домашних животных',
        items: [{ title: 'Учебный центр: «Эксвет», Одесса' }]
      },
      {
        heading: 'Стажировки',
        items: [
          { title: 'Отделение реанимации и интенсивной терапии – ВЦ «Белый Клык», Москва' },
          { title: 'Отделение онкологии – ВЦ «Белый Клык», Москва' }
        ]
      }
    ]
  }
];

const yearLabels = experienceYears.map((item) => item.year);

function ExperienceEducationPage() {
  return (
    <SiteLayout
      activePath="/opyt-i-obrazovanie"
      kicker="Профиль врача"
      title="Опыт и образование"
      subtitle="Структурированная страница для подробного резюме врача: повышение квалификации, конференции, курсы, мастер-классы и стажировки по годам."
    >
      <section className="bg-linen py-10 sm:py-14">
        <div className="container-shell grid gap-6 xl:grid-cols-[1fr_320px]">
          <div className="grid gap-6">
            {experienceYears.map((yearBlock) => (
              <section
                key={yearBlock.year}
                id={`year-${yearBlock.year}`}
                className="panel scroll-mt-28"
              >
                <div className="grid lg:grid-cols-[180px_1fr]">
                  <div className="border-b border-pine/10 bg-gradient-to-br from-pine to-moss text-white lg:rounded-l-2xl lg:border-b-0 lg:border-r lg:border-pine/10">
                    <div className="p-6 lg:sticky lg:top-28">
                      <p className="text-sm uppercase tracking-[0.22em] text-white/70">Год</p>
                      <p className="mt-2 font-serifDisplay text-5xl leading-none">{yearBlock.year}</p>
                      <p className="mt-4 text-base leading-7 text-white/85">{yearBlock.subtitle}</p>
                    </div>
                  </div>

                  <div className="p-5 sm:p-6 lg:p-7">
                    <div className="grid gap-4">
                      {yearBlock.sections.map((section) => (
                        <div
                          key={`${yearBlock.year}-${section.heading}-${section.items[0]?.title}`}
                          className="rounded-2xl border border-pine/10 bg-white p-4 sm:p-5"
                        >
                          <div className="flex items-center gap-2">
                            <span className="h-2.5 w-2.5 rounded-full bg-brass" />
                            <h2 className="text-2xl leading-none">{section.heading}</h2>
                          </div>

                          <div className="mt-4 grid gap-3">
                            {section.items.map((item) => (
                              <div key={item.title} className="rounded-xl border border-pine/10 bg-parchment/45 p-4">
                                <p className="text-base font-semibold leading-7 text-pine">{item.title}</p>
                                {item.details && item.details.length > 0 ? (
                                  <div className="mt-2 grid gap-2">
                                    {item.details.map((detail) => (
                                      <p key={detail} className="text-base leading-7 text-ink/95">
                                        {detail}
                                      </p>
                                    ))}
                                  </div>
                                ) : null}
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </section>
            ))}
          </div>

          <aside className="space-y-5 xl:sticky xl:top-28 xl:self-start">
            <div className="panel p-5 sm:p-6">
              <p className="text-sm uppercase tracking-[0.2em] text-pine/70">Выбор года</p>
              <div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-3 xl:grid-cols-2">
                {yearLabels.map((year) => (
                  <a
                    key={year}
                    href={`#year-${year}`}
                    className="rounded-full border border-pine/15 bg-white px-3.5 py-2 text-center text-sm font-semibold uppercase tracking-[0.16em] text-pine transition hover:bg-linen"
                  >
                    {year}
                  </a>
                ))}
              </div>
              <div className="mt-5 rounded-xl border border-brass/20 bg-linen/40 p-4">
                <p className="text-base leading-7 text-ink/95">
                  Правый блок закреплен при прокрутке, чтобы можно было быстро перейти к нужному году.
                </p>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </SiteLayout>
  );
}

export default ExperienceEducationPage;

