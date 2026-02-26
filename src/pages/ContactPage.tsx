import SiteLayout from '../layouts/SiteLayout';
import { locationInfo, phoneContacts, socialLinks } from './siteData';

function ContactPage() {
  return (
    <SiteLayout
      activePath="/kontakty"
      kicker="Контакты"
      title="Контакты, адрес и каналы связи"
      subtitle="Свяжитесь с клиникой по телефону, через мессенджеры или оставьте заявку через форму."
    >
      <section className="py-10 sm:py-14">
        <div className="container-shell grid gap-5 xl:grid-cols-[1fr_1fr]">
          <div className="grid gap-5">
            <div className="panel p-6 sm:p-8">
              <p className="text-xs uppercase tracking-[0.2em] text-pine/70">Адрес и режим работы</p>
              <div className="mt-4 grid gap-3">
                {locationInfo.map((line) => (
                  <div key={line} className="rounded-xl border border-pine/10 bg-white p-4">
                    <p className="text-sm leading-6 text-ink/80">{line}</p>
                  </div>
                ))}
              </div>
              <div className="mt-5 rounded-xl border border-brass/20 bg-linen/50 p-4">
                <p className="text-sm leading-6 text-ink/80">
                  Также указан второй корпус по адресу <strong>Paris 34/2</strong> с
                  отдельным номером рецепции: <strong>069 03 66 47</strong>.
                </p>
              </div>
            </div>

            <div className="panel p-6 sm:p-8">
              <p className="text-xs uppercase tracking-[0.2em] text-pine/70">Телефоны</p>
              <div className="mt-4 grid gap-3">
                {phoneContacts.map((contact) => (
                  <a
                    key={`${contact.label}-${contact.phone}`}
                    href={`tel:+373${contact.phone.replace(/\s/g, '')}`}
                    className="flex items-center justify-between gap-3 rounded-xl border border-pine/10 bg-white p-4 transition hover:bg-parchment/70"
                  >
                    <div>
                      <p className="text-xs uppercase tracking-[0.16em] text-pine/70">{contact.label}</p>
                      <p className="mt-1 font-semibold text-pine">{contact.phone}</p>
                      <p className="mt-1 text-xs text-ink/65">{contact.note}</p>
                    </div>
                    <span className="text-xs font-semibold uppercase tracking-[0.16em] text-pine/60">
                      Звонок
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="panel overflow-hidden">
            <div className="border-b border-pine/10 bg-white/75 p-6">
              <p className="text-xs uppercase tracking-[0.2em] text-pine/70">Онлайн и форма</p>
              <h2 className="mt-2 text-3xl">Мессенджеры и заявка на связь</h2>
              <p className="mt-3 text-sm leading-7 text-ink/75">
                Официальные каналы связи клиники и форма для отправки обращения.
              </p>
            </div>

            <div className="grid gap-4 p-6 sm:p-7">
              <div className="rounded-2xl border border-pine/10 bg-parchment/60 p-5">
                <p className="text-xs uppercase tracking-[0.2em] text-pine/70">Соцсети / мессенджеры</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {socialLinks.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-full border border-pine/15 bg-white px-3 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-pine transition hover:bg-linen"
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
              </div>

              <form className="grid gap-4" onSubmit={(event) => event.preventDefault()}>
                <label className="grid gap-2">
                  <span className="text-xs font-semibold uppercase tracking-[0.18em] text-pine/80">
                    Имя
                  </span>
                  <input
                    type="text"
                      placeholder="Например, Анна Попеску"
                    className="rounded-xl border border-pine/15 bg-white px-4 py-3 text-sm outline-none placeholder:text-ink/35 focus:border-pine/35"
                  />
                </label>

                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="grid gap-2">
                    <span className="text-xs font-semibold uppercase tracking-[0.18em] text-pine/80">
                          Телефон
                    </span>
                    <input
                      type="tel"
                      placeholder="+373..."
                      className="rounded-xl border border-pine/15 bg-white px-4 py-3 text-sm outline-none placeholder:text-ink/35 focus:border-pine/35"
                    />
                  </label>
                  <label className="grid gap-2">
                    <span className="text-xs font-semibold uppercase tracking-[0.18em] text-pine/80">
                          Запрос
                    </span>
                    <input
                      type="text"
                      placeholder="Консультация / срочно / анализы"
                      className="rounded-xl border border-pine/15 bg-white px-4 py-3 text-sm outline-none placeholder:text-ink/35 focus:border-pine/35"
                    />
                  </label>
                </div>

                <label className="grid gap-2">
                  <span className="text-xs font-semibold uppercase tracking-[0.18em] text-pine/80">
                    Сообщение
                  </span>
                  <textarea
                    rows={5}
                    placeholder="Кратко опишите ситуацию..."
                    className="resize-none rounded-xl border border-pine/15 bg-white px-4 py-3 text-sm outline-none placeholder:text-ink/35 focus:border-pine/35"
                  />
                </label>

                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <p className="text-xs leading-5 text-ink/60">
                    Форма для быстрой связи и первичного описания ситуации.
                  </p>
                  <button type="submit" className="btn-primary">
                    Отправить запрос
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}

export default ContactPage;
