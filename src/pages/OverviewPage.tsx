import SiteLayout from '../layouts/SiteLayout';
import {
  chiefDoctorTimeline,
  clinicFacts,
  diagnosticHighlights,
  importantNotes,
  phoneContacts
} from './HomePage';

function OverviewPage() {
  return (
    <SiteLayout
      activePath="/overview"
      kicker="Overview"
      title="Imagine de ansamblu a clinicii si a informatiilor publice Zoomama"
      subtitle="Pagina separata pentru prezentarea rapida a clinicii: contacte 24/7, directii medicale, pozitionare si note importante extrase din homepage."
    >
      <section className="py-10 sm:py-14">
        <div className="container-shell grid gap-5 lg:grid-cols-[1fr_1fr]">
          <div className="panel p-6 sm:p-8">
            <p className="text-xs uppercase tracking-[0.2em] text-pine/70">Contacte principale</p>
            <div className="mt-4 grid gap-3">
              {phoneContacts.map((contact) => (
                <a
                  key={contact.phone}
                  href={`tel:+373${contact.phone.replace(/\s/g, '')}`}
                  className="rounded-xl border border-pine/10 bg-white p-4 transition hover:bg-parchment/70"
                >
                  <p className="text-xs uppercase tracking-[0.16em] text-pine/70">{contact.label}</p>
                  <p className="mt-1 font-serifDisplay text-2xl leading-none text-pine">
                    {contact.phone}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-ink/75">{contact.note}</p>
                </a>
              ))}
            </div>
          </div>

          <div className="panel p-6 sm:p-8">
            <p className="text-xs uppercase tracking-[0.2em] text-pine/70">
              Diagnostic si specialitati mentionate
            </p>
            <div className="mt-4 grid gap-3">
              {diagnosticHighlights.map((item) => (
                <div key={item} className="flex gap-3 rounded-xl border border-pine/10 bg-white p-4">
                  <div className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-brass" />
                  <p className="text-sm leading-6 text-ink/80">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="pb-10 sm:pb-14">
        <div className="container-shell grid gap-5 xl:grid-cols-[1.05fr_0.95fr]">
          <div className="panel overflow-hidden">
            <div className="bg-gradient-to-br from-pine to-moss p-6 text-white sm:p-8">
              <p className="text-xs uppercase tracking-[0.2em] text-white/70">Despre clinica</p>
              <h2 className="mt-2 text-3xl text-white sm:text-4xl">
                Mesaj institutional sintetizat din homepage
              </h2>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-white/85 sm:text-base">
                Site-ul pozitioneaza clinica drept centru de ciclu complet pentru animale mici, cu
                accent pe diagnostic, medicina interna, chirurgie si gestionarea urgentelor.
              </p>
            </div>
            <div className="grid gap-4 p-6 sm:grid-cols-2 sm:p-8">
              {clinicFacts.map((fact) => (
                <div key={fact.title} className="rounded-xl border border-pine/10 bg-white p-4">
                  <p className="font-semibold text-pine">{fact.title}</p>
                  <p className="mt-2 text-sm leading-6 text-ink/75">{fact.text}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-5">
            <div className="panel p-6 sm:p-8">
              <p className="text-xs uppercase tracking-[0.2em] text-pine/70">Bloc IMPORTANT</p>
              <div className="mt-4 grid gap-3">
                {importantNotes.map((note) => (
                  <div key={note} className="rounded-xl border border-pine/10 bg-white p-4">
                    <p className="text-sm leading-6 text-ink/80">{note}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="panel p-6 sm:p-8">
              <p className="text-xs uppercase tracking-[0.2em] text-pine/70">
                Profil coordonator (rezumat)
              </p>
              <div className="mt-4 grid gap-3">
                {chiefDoctorTimeline.map((item) => (
                  <div key={`${item.year}-${item.title}`} className="rounded-xl border border-pine/10 bg-white p-4">
                    <p className="text-xs uppercase tracking-[0.16em] text-pine/70">{item.year}</p>
                    <p className="mt-1 font-semibold text-pine">{item.title}</p>
                    <p className="mt-1 text-sm leading-6 text-ink/75">{item.detail}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}

export default OverviewPage;
