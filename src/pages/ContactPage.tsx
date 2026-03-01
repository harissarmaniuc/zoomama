import { useState } from 'react';

import SiteLayout from '../layouts/SiteLayout';
import { locationInfo, phoneContacts, socialLinks } from './siteData';

function ContactPage() {
  const [honeypot, setHoneypot] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [lastSubmit, setLastSubmit] = useState(0);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    // Honeypot check — bots fill hidden fields
    if (honeypot) return;

    // Rate limiting — 10 second cooldown
    const now = Date.now();
    if (now - lastSubmit < 10_000) return;

    const form = event.currentTarget;
    const formData = new FormData(form);
    const name = (formData.get('name') as string)?.trim() ?? '';
    const phone = (formData.get('phone') as string)?.trim() ?? '';
    const message = (formData.get('message') as string)?.trim() ?? '';

    // Basic validation
    if (!name || name.length < 2 || !phone || !message || message.length < 5) return;

    // Phone format check
    if (!/^\+?[\d\s\-()]{6,20}$/.test(phone)) return;

    setLastSubmit(now);
    setSubmitted(true);
    form.reset();
  }
  return (
    <SiteLayout
      activePath="/kontakty"
      kicker="Контакты"
      title="Контакты, адрес и каналы связи"
      subtitle="Свяжитесь с клиникой по телефону, через мессенджеры или оставьте заявку через форму."
    >
      <section className="section-tinted py-10 sm:py-14">
        <div className="container-shell grid gap-5 xl:grid-cols-[1fr_1fr]">
          <div className="grid gap-5">
            <div className="panel p-6 sm:p-8">
              <p className="text-sm uppercase tracking-[0.2em] text-pine/70">Адрес и режим работы</p>
              <div className="mt-4 grid gap-3">
                {locationInfo.map((line) => (
                  <div key={line} className="rounded-xl border border-pine/10 bg-white/90 p-4">
                    <p className="text-base leading-7 text-ink/95">{line}</p>
                  </div>
                ))}
              </div>
              <div className="mt-5 rounded-xl border border-brass/20 bg-linen/50 p-4">
                <p className="text-base leading-7 text-ink/95">
                  Также указан второй корпус по адресу <strong>Paris 34/2</strong> с
                  отдельным номером рецепции: <strong>069 03 66 47</strong>.
                </p>
              </div>
            </div>

            <div className="panel p-6 sm:p-8">
              <p className="text-sm uppercase tracking-[0.2em] text-pine/70">Телефоны</p>
              <div className="mt-4 grid gap-3">
                {phoneContacts.map((contact) => (
                  <a
                    key={`${contact.label}-${contact.phone}`}
                    href={`tel:+373${contact.phone.replace(/\s/g, '')}`}
                    className="flex items-center justify-between gap-3 rounded-xl border border-pine/10 bg-white/90 p-4 transition hover:bg-sage/30"
                  >
                    <div>
                      <p className="text-sm uppercase tracking-[0.16em] text-pine/70">{contact.label}</p>
                      <p className="mt-1 text-lg font-semibold text-pine">{contact.phone}</p>
                      <p className="mt-1 text-sm text-ink/75">{contact.note}</p>
                    </div>
                    <span className="text-sm font-semibold uppercase tracking-[0.16em] text-pine/60">
                      Звонок
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="panel overflow-hidden">
            <div className="border-b border-pine/10 bg-sage/30 p-6">
              <p className="text-sm uppercase tracking-[0.2em] text-pine/70">Онлайн и форма</p>
              <h2 className="mt-2 text-3xl">Мессенджеры и заявка на связь</h2>
              <p className="mt-3 text-base leading-7 text-ink/90">
                Официальные каналы связи клиники и форма для отправки обращения.
              </p>
            </div>

            <div className="grid gap-4 p-6 sm:p-7">
              <div className="rounded-2xl border border-pine/10 bg-parchment/60 p-5">
                <p className="text-sm uppercase tracking-[0.2em] text-pine/70">Соцсети / мессенджеры</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {socialLinks.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-full border border-pine/15 bg-white px-3.5 py-2 text-sm font-semibold uppercase tracking-[0.14em] text-pine transition hover:bg-linen"
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
              </div>

              <form className="grid gap-4" onSubmit={handleSubmit} noValidate>
                {/* Honeypot — hidden from real users, bots fill it */}
                <div aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
                  <label>
                    <span>Leave empty</span>
                    <input
                      type="text"
                      name="website"
                      tabIndex={-1}
                      autoComplete="off"
                      value={honeypot}
                      onChange={(e) => setHoneypot(e.target.value)}
                    />
                  </label>
                </div>

                <label className="grid gap-2">
                  <span className="text-sm font-semibold uppercase tracking-[0.18em] text-pine/80">
                    Имя
                  </span>
                  <input
                    type="text"
                    name="name"
                    required
                    minLength={2}
                    maxLength={100}
                    placeholder="Например, Анна Попеску"
                    className="rounded-xl border border-pine/15 bg-white px-4 py-3 text-base outline-none placeholder:text-ink/35 focus:border-pine/35"
                  />
                </label>

                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="grid gap-2">
                    <span className="text-sm font-semibold uppercase tracking-[0.18em] text-pine/80">
                      Телефон
                    </span>
                    <input
                      type="tel"
                      name="phone"
                      required
                      maxLength={20}
                      pattern="^\+?[\d\s\-()]{6,20}$"
                      placeholder="+373..."
                      className="rounded-xl border border-pine/15 bg-white px-4 py-3 text-base outline-none placeholder:text-ink/35 focus:border-pine/35"
                    />
                  </label>
                  <label className="grid gap-2">
                    <span className="text-sm font-semibold uppercase tracking-[0.18em] text-pine/80">
                      Запрос
                    </span>
                    <input
                      type="text"
                      name="request"
                      maxLength={200}
                      placeholder="Консультация / срочно / анализы"
                      className="rounded-xl border border-pine/15 bg-white px-4 py-3 text-base outline-none placeholder:text-ink/35 focus:border-pine/35"
                    />
                  </label>
                </div>

                <label className="grid gap-2">
                  <span className="text-sm font-semibold uppercase tracking-[0.18em] text-pine/80">
                    Сообщение
                  </span>
                  <textarea
                    rows={5}
                    name="message"
                    required
                    minLength={5}
                    maxLength={2000}
                    placeholder="Кратко опишите ситуацию..."
                    className="resize-none rounded-xl border border-pine/15 bg-white px-4 py-3 text-base outline-none placeholder:text-ink/35 focus:border-pine/35"
                  />
                </label>

                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  {submitted ? (
                    <p className="text-sm font-semibold leading-6 text-pine">
                      <i className="fas fa-check-circle mr-1" /> Запрос отправлен. Мы свяжемся с вами в ближайшее время.
                    </p>
                  ) : (
                    <p className="text-sm leading-6 text-ink/70">
                      Форма для быстрой связи и первичного описания ситуации.
                    </p>
                  )}
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


