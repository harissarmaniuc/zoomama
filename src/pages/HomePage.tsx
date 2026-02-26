type PhoneContact = {
  label: string;
  phone: string;
  note: string;
  accent?: 'brass' | 'clay';
};

type ServiceDomain = {
  name: string;
  summary: string;
  examples: string[];
};

type PriceRow = {
  service: string;
  price: string;
  category: string;
};

type TeamMember = {
  name: string;
  role: string;
  focus: string;
};

type TimelineItem = {
  year: string;
  title: string;
  detail: string;
};

export const phoneContacts: PhoneContact[] = [
  {
    label: 'Receptie / programari',
    phone: '068 17 84 19',
    note: 'Programari pentru consultatii si informatii generale.',
    accent: 'brass'
  },
  {
    label: 'Reanimare & ATI 24/7',
    phone: '068 28 51 28',
    note: 'Linie separata pentru urgente si pacienti critici.',
    accent: 'clay'
  },
  {
    label: 'Corpul 2 - Paris 34/2',
    phone: '069 03 66 47',
    note: 'Receptie pentru al doilea corp (mentionat pe site).'
  }
];

export const diagnosticHighlights = [
  'Radiografie digitala pentru oase, articulatii si organe interne',
  'Ecografie de nivel avansat (abdomen, ECHO cord in functie de caz)',
  'Laborator propriu pentru analize clinice si biochimice de sange',
  'Specialisti pe profiluri: terapie, chirurgie, cardiologie, endocrinologie, traumatologie'
] as const;

export const serviceDomains: ServiceDomain[] = [
  {
    name: 'Terapie',
    summary: 'Consultatii, investigatii initiale si plan terapeutic pentru afectiuni acute si cronice.',
    examples: ['consultatie terapeut', 'reevaluare', 'tratament simptomatic si monitorizare']
  },
  {
    name: 'Reanimare si terapie intensiva',
    summary: 'Managementul pacientilor critici, monitorizare continua si internare in functie de gravitate.',
    examples: ['stabilizare', 'oxigenoterapie', 'spitalizare ATI']
  },
  {
    name: 'Diagnostic',
    summary: 'Imagistica si investigatii functionale pentru decizii clinice rapide.',
    examples: ['radiografie digitala', 'ecografie', 'ECG']
  },
  {
    name: 'Chirurgie',
    summary: 'Interventii chirurgicale si management post-operator, inclusiv stomatologie.',
    examples: ['chirurgie generala', 'stomatologie', 'traumatologie']
  },
  {
    name: 'Cardiologie si endocrinologie',
    summary: 'Consult de specialitate pentru afectiuni hormonale si cardiace.',
    examples: ['ECHO cord', 'ECG', 'plan de monitorizare']
  },
  {
    name: 'Alte profile',
    summary: 'Site-ul mentioneaza si urologie, oncologie, dermatologie si alte servicii complementare.',
    examples: ['urologie', 'oncologie', 'dermatologie']
  }
];

export const representativePrices: PriceRow[] = [
  { category: 'Consultatii', service: 'Consultatie terapeut', price: '350 MDL' },
  { category: 'Internare', service: 'Stationar / internare', price: '650-1500 MDL / zi' },
  { category: 'ATI', service: 'Reanimare / terapie intensiva', price: '1500-5000 MDL / zi' },
  { category: 'Imagistica', service: 'Radiografie digitala', price: 'de la 280 MDL' },
  { category: 'Imagistica', service: 'Ecografie abdominala', price: 'de la 400 MDL' },
  { category: 'Cardiologie', service: 'ECHO cord', price: '650 MDL' },
  { category: 'Laborator', service: 'Hemoleucograma (CBC)', price: '250 MDL' },
  { category: 'Laborator', service: 'Biochimie sange', price: '250 MDL' },
  { category: 'Laborator', service: 'Gazometrie', price: '450 MDL' },
  { category: 'Laborator', service: 'Coagulograma', price: '450 MDL' },
  { category: 'Cardiologie', service: 'ECG', price: '400 MDL' }
];

export const clinicFacts = [
  {
    title: 'Clinica de ciclu complet',
    text: 'Pe site este prezentata ca o clinica veterinara de ciclu complet, cu diagnostic, terapie, chirurgie si suport pentru urgente.'
  },
  {
    title: 'Accent pe diagnostic rapid',
    text: 'Sunt evidentiate radiografia digitala, ecografia si laboratorul propriu pentru a accelera stabilirea diagnosticului.'
  },
  {
    title: 'Program non-stop',
    text: 'Blocurile de contact si sectiunea de harta indica functionare 24/7 si linie dedicata pentru reanimare / ATI.'
  },
  {
    title: 'Abordare orientata pe specialisti',
    text: 'Homepage-ul pune accent pe medici de profil si pe prezentarea individuala a echipei.'
  }
] as const;

export const chiefDoctorTimeline: TimelineItem[] = [
  {
    year: '2009',
    title: 'Absolvire Medicina Veterinara',
    detail:
      'Pe site este mentionata absolvirea Universitatii de Medicina Veterinara din Cluj-Napoca (Romania).'
  },
  {
    year: '2009-2017',
    title: 'Practica si stagii',
    detail:
      'Sunt enumerate stagii si cursuri in clinici si centre de pregatire pentru animale mici, inclusiv cursuri de cardiologie / imagistica.'
  },
  {
    year: '2014+',
    title: 'Dezvoltarea clinicii Zoomama',
    detail:
      'Profilul public descrie implicarea in medicina interna, terapie intensiva, ecografie si endocrinologie.'
  },
  {
    year: 'Curent',
    title: 'Coordonare clinica',
    detail:
      'Homepage-ul prezinta medicul coordonator ca figura centrala in organizarea actului medical si a echipei.'
  }
];

export const teamMembers: TeamMember[] = [
  { name: 'Zlata Vysotskaya', role: 'Medic ATI', focus: 'reanimare, terapie intensiva' },
  {
    name: 'Vladimir Zborovsky',
    role: 'Medic imagistica',
    focus: 'diagnostic imagistic, ecografie'
  },
  { name: 'Anna Tsarkova', role: 'Medic terapeut', focus: 'medicina interna' },
  { name: 'Alisa Bugaenko', role: 'Medic veterinar', focus: 'consultatii generale' },
  { name: 'Nikita Len', role: 'Medic terapeut', focus: 'cazuri curente, monitorizare' },
  { name: 'Natalia Rushai', role: 'Medic terapeut', focus: 'medicina interna' },
  { name: 'Igor Konoplitskiy', role: 'Medic chirurg / stomatolog', focus: 'chirurgie, dentitie' },
  { name: 'Evgenia Korol', role: 'Medic terapeut', focus: 'consultatii si tratament' },
  {
    name: 'Veronika Khimich',
    role: 'Medic endocrinolog',
    focus: 'endocrinologie veterinara'
  },
  { name: 'Yulia Marko', role: 'Medic cardiolog', focus: 'cardiologie, ECG, ECHO' },
  { name: 'Yulia Melnik', role: 'Medic chirurg', focus: 'chirurgie generala' },
  {
    name: 'Fedor Polyanskiy',
    role: 'Medic chirurg / traumatolog',
    focus: 'traumatologie, chirurgie ortopedica'
  },
  { name: 'Ivan Ursu', role: 'Asistent veterinar', focus: 'suport consultatii si proceduri' },
  {
    name: 'Darya Ponyaeva',
    role: 'Asistent veterinar',
    focus: 'ingrijire pacient si suport medical'
  },
  { name: 'Alina Diakova', role: 'Asistent veterinar', focus: 'proceduri si internare' },
  { name: 'Natalya Papenko', role: 'Administrator', focus: 'receptie si organizare flux' }
];

export const importantNotes = [
  'Pe homepage exista un bloc IMPORTANT care mentioneaza ca nu sunt acceptate animale exotice, pasari si rozatoare.',
  'Acelasi bloc mentioneaza ca nu se efectueaza vizite la domiciliu.',
  'Informatiile despre tarife sunt prezentate ca orientative prin exemple si categorii de servicii.'
] as const;

export const locationInfo = [
  'Chisinau, Buiucani, 2051',
  'str. A. Marinescu 11/3 (colt cu str. I.L. Caragiale)',
  'Program afisat pe site: non-stop / 24/7'
] as const;

export const socialLinks = [
  { label: 'Instagram', href: 'https://instagram.com/zoomama_md?igshid=MmJiY2I4NDBkZg==' },
  { label: 'Facebook', href: 'https://www.facebook.com/vetzoomama/' },
  { label: 'Telegram', href: 'https://t.me/zoomama_chisinau' },
  { label: 'WhatsApp', href: 'https://wa.me/37368178419' },
  { label: 'Email', href: 'mailto:doctor_tsvent@mail.ru' }
] as const;

export const animalGroups = [
  { title: 'Pisici', desc: 'Consultatii, imagistica, laborator, chirurgie si monitorizare.' },
  { title: 'Caini', desc: 'Profil complet: terapie, ATI, diagnostic, chirurgie, cardiologie.' },
  {
    title: 'Cazuri speciale',
    desc: 'Site-ul are informatii ample pe categorii; politica de acceptare se verifica in blocul IMPORTANT.'
  }
] as const;

function App() {
  return (
    <div className="min-h-screen">
      <div className="border-b border-pine/10 bg-white/60 backdrop-blur">
        <div className="container-shell flex flex-col gap-2 py-3 text-sm text-pine sm:flex-row sm:items-center sm:justify-between">
          <p className="tracking-wide">Demo bazat pe analiza homepage-ului Zoomama (continut sintetizat)</p>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs uppercase tracking-[0.18em]">
            <span>Chisinau • 24/7</span>
            <span className="hidden sm:inline text-brass">•</span>
            <a className="hover:text-ink" href="tel:+37368178419">
              +373 68 17 84 19
            </a>
          </div>
        </div>
      </div>

      <header className="sticky top-0 z-30 border-b border-pine/10 bg-parchment/90 backdrop-blur">
        <div className="container-shell flex items-center justify-between py-4">
          <a href="#top" className="group inline-flex items-center gap-3">
            <span className="grid h-11 w-11 place-items-center rounded-full border border-brass/40 bg-white shadow-inset">
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden="true"
                className="text-pine"
              >
                <path
                  d="M12 14c1.9 0 3.4 1.1 4.3 2.7.5.9-.2 2.1-1.3 2.1H8.9c-1.1 0-1.8-1.2-1.3-2.1C8.6 15.1 10.1 14 12 14Z"
                  stroke="currentColor"
                  strokeWidth="1.3"
                />
                <path
                  d="M8.2 10.3a1.4 1.4 0 1 0 0-2.8 1.4 1.4 0 0 0 0 2.8Zm7.6 0a1.4 1.4 0 1 0 0-2.8 1.4 1.4 0 0 0 0 2.8Zm-3.8-4a1.7 1.7 0 1 0 0-3.4 1.7 1.7 0 0 0 0 3.4Zm-5 6.5a1.1 1.1 0 1 0 0-2.2 1.1 1.1 0 0 0 0 2.2Zm10 0a1.1 1.1 0 1 0 0-2.2 1.1 1.1 0 0 0 0 2.2Z"
                  stroke="currentColor"
                  strokeWidth="1.3"
                />
              </svg>
            </span>
            <span>
              <span className="block font-serifDisplay text-2xl leading-none tracking-wide text-pine">
                ZooMama
              </span>
              <span className="block text-[10px] uppercase tracking-[0.35em] text-pine/70">
                Demo React / Tailwind
              </span>
            </span>
          </a>

          <nav aria-label="Navigatie principala" className="hidden items-center gap-6 md:flex">
            {[
              ['Overview', '/overview'],
              ['Servicii', '/servicii'],
              ['Tarife', '/tarife'],
              ['Echipa', '/echipa'],
              ['Опыт', '/opyt-i-obrazovanie'],
              ['Contact', '/contact']
            ].map(([label, href]) => (
              <a
                key={label}
                href={href}
                className="text-sm font-semibold uppercase tracking-[0.18em] text-pine/85 transition hover:text-ink"
              >
                {label}
              </a>
            ))}
          </nav>

          <a href="/opyt-i-obrazovanie" className="btn-primary hidden sm:inline-flex">
            Profil medic
          </a>
        </div>
      </header>

      <main id="top">
        <section id="overview" className="relative overflow-hidden py-12 sm:py-16 lg:py-20">
          <div className="container-shell grid items-start gap-8 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="animate-rise">
              <span className="section-kicker">Analiza site real • zoomama.md</span>
              <h1 className="max-w-2xl text-4xl leading-tight sm:text-5xl lg:text-6xl">
                Demo formal, clasic, construit din informatiile reale ale homepage-ului ZooMama.
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-7 text-ink/80 sm:text-lg">
                Am integrat o parte mare din continutul public: telefoane pentru programari si ATI, servicii si profile medicale, exemple de tarife, prezentare clinica, echipa, reguli importante si date de contact / locatie.
              </p>

              <div className="mt-7 grid gap-3 sm:grid-cols-3">
                {phoneContacts.map((contact, index) => (
                  <div
                    key={contact.phone}
                    className="panel rounded-xl p-4 animate-rise"
                    style={{ animationDelay: `${90 * index}ms` }}
                  >
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-pine/70">
                      {contact.label}
                    </p>
                    <a
                      href={`tel:+373${contact.phone.replace(/\s/g, '')}`}
                      className="mt-2 block font-serifDisplay text-2xl leading-none text-pine"
                    >
                      {contact.phone}
                    </a>
                    <p className="mt-2 text-sm leading-6 text-ink/70">{contact.note}</p>
                    <span
                      className={[
                        'mt-3 inline-flex rounded-full px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.16em]',
                        contact.accent === 'clay'
                          ? 'bg-clay/10 text-clay'
                          : contact.accent === 'brass'
                            ? 'bg-brass/10 text-pine'
                            : 'bg-pine/5 text-pine/80'
                      ].join(' ')}
                    >
                      {contact.label.includes('ATI') ? 'Urgente' : 'Contact'}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-8 panel p-5 sm:p-6">
                <p className="text-xs uppercase tracking-[0.2em] text-pine/70">
                  Diagnostica si specialitati mentionate pe homepage
                </p>
                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  {diagnosticHighlights.map((item) => (
                    <div key={item} className="flex gap-3 rounded-xl border border-pine/10 bg-white p-4">
                      <div className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-brass" />
                      <p className="text-sm leading-6 text-ink/80">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="relative animate-rise" style={{ animationDelay: '120ms' }}>
              <div className="panel relative overflow-hidden p-4 sm:p-5">
                <div className="relative rounded-2xl border border-white/40 bg-gradient-to-br from-pine via-moss to-ink p-6 text-white shadow-inset">
                  <div className="absolute inset-0 opacity-25">
                    <div className="absolute -left-10 top-8 h-40 w-40 rounded-full border border-white/20" />
                    <div className="absolute right-2 top-20 h-28 w-28 rounded-full bg-white/10 blur-xl" />
                    <div className="absolute bottom-10 left-12 h-56 w-56 rounded-full border border-white/10" />
                  </div>
                  <div className="relative flex min-h-[360px] flex-col justify-between">
                    <div className="flex flex-wrap items-center justify-between gap-2 text-xs uppercase tracking-[0.25em] text-white/80">
                      <span>Veterinary clinic 24/7</span>
                      <span className="rounded-full border border-white/25 px-2 py-1">Chisinau</span>
                    </div>

                    <div>
                      <p className="max-w-[18ch] font-serifDisplay text-3xl leading-tight sm:text-4xl">
                        Clinica de ciclu complet, cu focus pe diagnostic si urgente.
                      </p>
                      <p className="mt-3 max-w-[36ch] text-sm leading-6 text-white/80">
                        Reinterpretare demo a mesajului central de pe site: servicii complete, specialisti de profil, laborator, imagistica si suport ATI.
                      </p>
                    </div>

                    <div className="grid gap-3 sm:grid-cols-3">
                      {[
                        ['24/7', 'program afisat'],
                        ['2', 'numere receptie'],
                        ['ATI', 'linie separata']
                      ].map(([value, label]) => (
                        <div key={label} className="rounded-xl border border-white/15 bg-white/5 p-3">
                          <p className="font-serifDisplay text-2xl leading-none">{value}</p>
                          <p className="mt-1 text-xs uppercase tracking-[0.18em] text-white/70">
                            {label}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-4 grid gap-3 sm:grid-cols-3">
                  {animalGroups.map((group) => (
                    <div key={group.title} className="rounded-xl border border-pine/10 bg-white p-4">
                      <p className="font-semibold text-pine">{group.title}</p>
                      <p className="mt-2 text-sm leading-6 text-ink/75">{group.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 sm:py-16">
          <div className="container-shell">
            <div className="panel overflow-hidden">
              <div className="grid lg:grid-cols-[1.05fr_0.95fr]">
                <div className="bg-gradient-to-br from-pine to-moss p-6 text-white sm:p-8 lg:p-10">
                  <span className="section-kicker border-white/20 bg-white/10 text-white">
                    Despre clinica
                  </span>
                  <h2 className="text-3xl text-white sm:text-4xl">
                    Scurta sinteza a mesajului institutional de pe homepage
                  </h2>
                  <p className="mt-4 max-w-xl text-sm leading-7 text-white/85 sm:text-base">
                    Site-ul descrie Zoomama ca un proiect de familie de medici veterinari, cu experienta inceputa in 2009, orientat spre diagnostic corect, tratament bazat pe dovezi si acces rapid la analize in cadrul clinicii.
                  </p>

                  <div className="mt-8 grid gap-4 sm:grid-cols-2">
                    {clinicFacts.map((fact) => (
                      <div key={fact.title} className="rounded-xl border border-white/15 bg-white/5 p-4">
                        <p className="font-semibold text-white">{fact.title}</p>
                        <p className="mt-2 text-sm leading-6 text-white/85">{fact.text}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-white/80 p-6 sm:p-8 lg:p-10">
                  <div className="rounded-2xl border border-pine/10 bg-parchment/70 p-5">
                    <p className="text-xs uppercase tracking-[0.2em] text-pine/70">Bloc IMPORTANT</p>
                    <p className="mt-3 font-serifDisplay text-2xl leading-tight text-pine">
                      Reguli si limitari afisate direct pe homepage
                    </p>
                    <div className="mt-4 grid gap-3">
                      {importantNotes.map((note) => (
                        <div key={note} className="flex gap-3 rounded-lg border border-pine/10 bg-white p-3">
                          <div className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-clay" />
                          <p className="text-sm leading-6 text-ink/80">{note}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6 rounded-2xl border border-brass/20 bg-linen/60 p-5">
                    <p className="text-xs uppercase tracking-[0.2em] text-clay">Observatie UX</p>
                    <p className="mt-3 text-sm leading-7 text-ink/80">
                      Pentru demo am pastrat tonul formal si am reorganizat informatiile in blocuri mai clare pe mobil, dar am mentinut esentialul: 24/7, urgente, specialitati, tarife orientative si echipa.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="servicii" className="py-12 sm:py-16">
          <div className="container-shell">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <span className="section-kicker">Servicii si profile</span>
                <h2 className="text-3xl sm:text-4xl">
                  Categorii medicale mentionate pe homepage-ul original
                </h2>
                <p className="mt-3 max-w-3xl text-base leading-7 text-ink/75">
                  Site-ul listeaza o gama larga de domenii: terapie, ATI, diagnostic, chirurgie, urologie, ortopedie/traumatologie, cardiologie, endocrinologie, stomatologie, oncologie, dermatologie, laborator si alte servicii.
                </p>
              </div>
              <div className="hidden w-48 sm:block">
                <div className="ornament-line" />
              </div>
            </div>

            <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {serviceDomains.map((service, index) => (
                <article
                  key={service.name}
                  className="panel group relative overflow-hidden p-5 animate-rise"
                  style={{ animationDelay: `${70 * index}ms` }}
                >
                  <div className="absolute right-0 top-0 h-24 w-24 translate-x-8 -translate-y-8 rounded-full border border-brass/20 transition group-hover:scale-110" />
                  <div className="relative">
                    <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full border border-pine/15 bg-white text-sm font-semibold text-pine">
                      {String(index + 1).padStart(2, '0')}
                    </div>
                    <h3 className="text-2xl leading-tight">{service.name}</h3>
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

        <section id="tarife" className="py-12 sm:py-16">
          <div className="container-shell grid gap-5 xl:grid-cols-[1.02fr_0.98fr]">
            <div className="panel p-6 sm:p-8">
              <span className="section-kicker">Tarife orientative</span>
              <h2 className="text-3xl sm:text-4xl">
                Exemple de preturi afisate in sectiunea de servicii
              </h2>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-ink/75">
                Tabelul de mai jos reia o selectie reprezentativa din preturile mentionate pe homepage. In site-ul original exista mai multe categorii si detalii suplimentare.
              </p>

              <div className="mt-6 overflow-hidden rounded-2xl border border-pine/10">
                <div className="grid grid-cols-[1.1fr_1fr_auto] bg-pine px-4 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-white">
                  <span>Categorie</span>
                  <span>Serviciu</span>
                  <span>Pret</span>
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
            </div>

            <div className="panel overflow-hidden">
              <div className="border-b border-pine/10 bg-white/75 p-6">
                <span className="section-kicker">Coordonare medicala</span>
                <h2 className="text-3xl">Medic coordonator (sinteza profil public)</h2>
                <p className="mt-3 text-sm leading-7 text-ink/75">
                  Homepage-ul include o prezentare detaliata a medicului coordonator Alina Pipchuk, cu educatie, stagii si arii de interes medical.
                </p>
              </div>

              <div className="p-6 sm:p-7">
                <div className="mb-5 flex items-center gap-4">
                  <div className="grid h-16 w-16 place-items-center rounded-full border border-brass/25 bg-linen text-2xl font-serifDisplay text-pine">
                    AP
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-[0.18em] text-pine/70">
                      Glavnii vrach / coordonator
                    </p>
                    <p className="font-serifDisplay text-3xl leading-none text-pine">Alina Pipchuk</p>
                    <p className="mt-1 text-sm text-ink/70">
                      medicina interna, ATI, ecografie, endocrinologie (conform descrierii publice)
                    </p>
                  </div>
                </div>

                <div className="grid gap-4">
                  {chiefDoctorTimeline.map((item) => (
                    <div key={`${item.year}-${item.title}`} className="rounded-xl border border-pine/10 bg-white p-4">
                      <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-pine/70">
                          {item.year}
                        </p>
                        <div className="sm:w-[82%]">
                          <p className="font-semibold text-pine">{item.title}</p>
                          <p className="mt-1 text-sm leading-6 text-ink/75">{item.detail}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="echipa" className="py-12 sm:py-16">
          <div className="container-shell">
            <span className="section-kicker">Echipa</span>
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <h2 className="max-w-4xl text-3xl sm:text-4xl">
                Selectie larga din membrii echipei prezenti pe homepage (nu lista completa)
              </h2>
              <p className="max-w-xl text-sm leading-7 text-ink/75">
                Site-ul original include o galerie extinsa de medici, asistenti si administratie. Mai jos este integrata o selectie consistenta pentru a acoperi peste jumatate din tipurile de roluri prezentate.
              </p>
            </div>

            <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              {teamMembers.map((member, index) => (
                <article
                  key={member.name}
                  className="panel overflow-hidden animate-rise"
                  style={{ animationDelay: `${40 * index}ms` }}
                >
                  <div className="border-b border-pine/10 bg-gradient-to-br from-linen/80 to-white p-4">
                    <div className="flex items-center gap-3">
                      <div className="grid h-11 w-11 place-items-center rounded-full border border-pine/10 bg-white text-sm font-semibold text-pine">
                        {member.name
                          .split(' ')
                          .slice(0, 2)
                          .map((part) => part[0])
                          .join('')}
                      </div>
                      <div>
                        <p className="font-semibold leading-tight text-pine">{member.name}</p>
                        <p className="text-xs uppercase tracking-[0.16em] text-pine/70">
                          {member.role}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="p-4">
                    <p className="text-sm leading-6 text-ink/75">{member.focus}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
        <section id="contact" className="py-12 sm:py-16">
          <div className="container-shell">
            <div className="grid gap-5 xl:grid-cols-[1fr_1fr]">
              <div className="panel p-6 sm:p-8">
                <span className="section-kicker">Locatie si program</span>
                <h2 className="text-3xl sm:text-4xl">Date de contact extrase din homepage</h2>
                <div className="mt-5 grid gap-3">
                  {locationInfo.map((line) => (
                    <div key={line} className="rounded-xl border border-pine/10 bg-white p-4">
                      <p className="text-sm leading-6 text-ink/80">{line}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-6 rounded-2xl border border-brass/20 bg-linen/50 p-5">
                  <p className="text-xs uppercase tracking-[0.2em] text-clay">Corpul 2</p>
                  <p className="mt-3 text-sm leading-7 text-ink/80">
                    Homepage-ul mentioneaza si al doilea corp la <strong>Paris 34/2</strong>, cu numar separat de receptie: <strong>069 03 66 47</strong>.
                  </p>
                </div>
              </div>

              <div className="panel overflow-hidden">
                <div className="border-b border-pine/10 bg-white/75 p-6">
                  <span className="section-kicker">Canale de contact</span>
                  <h2 className="text-3xl">Telefon, mesagerie si social</h2>
                  <p className="mt-3 text-sm leading-7 text-ink/75">
                    Linkuri publice identificate in homepage-ul Zoomama.
                  </p>
                </div>

                <div className="grid gap-4 p-6 sm:p-7">
                  <div className="grid gap-3">
                    {phoneContacts.map((contact) => (
                      <a
                        key={`${contact.label}-${contact.phone}`}
                        href={`tel:+373${contact.phone.replace(/\s/g, '')}`}
                        className="flex items-center justify-between gap-3 rounded-xl border border-pine/10 bg-white p-4 transition hover:bg-parchment/70"
                      >
                        <div>
                          <p className="text-xs uppercase tracking-[0.16em] text-pine/70">
                            {contact.label}
                          </p>
                          <p className="mt-1 font-semibold text-pine">{contact.phone}</p>
                        </div>
                        <span className="text-xs font-semibold uppercase tracking-[0.16em] text-pine/60">
                          Apel
                        </span>
                      </a>
                    ))}
                  </div>

                  <div className="rounded-2xl border border-pine/10 bg-parchment/60 p-5">
                    <p className="text-xs uppercase tracking-[0.2em] text-pine/70">Online</p>
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
                    <p className="mt-4 text-xs leading-5 text-ink/60">
                      Demo UI. Verifica linkurile si politicile de contact inainte de productie.
                    </p>
                  </div>

                  <form className="grid gap-4" onSubmit={(event) => event.preventDefault()}>
                    <label className="grid gap-2">
                      <span className="text-xs font-semibold uppercase tracking-[0.18em] text-pine/80">
                        Nume
                      </span>
                      <input
                        type="text"
                        placeholder="Ex. Ana Popescu"
                        className="rounded-xl border border-pine/15 bg-white px-4 py-3 text-sm outline-none placeholder:text-ink/35 focus:border-pine/35"
                      />
                    </label>

                    <div className="grid gap-4 sm:grid-cols-2">
                      <label className="grid gap-2">
                        <span className="text-xs font-semibold uppercase tracking-[0.18em] text-pine/80">
                          Telefon
                        </span>
                        <input
                          type="tel"
                          placeholder="+373..."
                          className="rounded-xl border border-pine/15 bg-white px-4 py-3 text-sm outline-none placeholder:text-ink/35 focus:border-pine/35"
                        />
                      </label>
                      <label className="grid gap-2">
                        <span className="text-xs font-semibold uppercase tracking-[0.18em] text-pine/80">
                          Solicitare
                        </span>
                        <input
                          type="text"
                          placeholder="Consult / urgenta / analiza"
                          className="rounded-xl border border-pine/15 bg-white px-4 py-3 text-sm outline-none placeholder:text-ink/35 focus:border-pine/35"
                        />
                      </label>
                    </div>

                    <label className="grid gap-2">
                      <span className="text-xs font-semibold uppercase tracking-[0.18em] text-pine/80">
                        Mesaj
                      </span>
                      <textarea
                        rows={4}
                        placeholder="Descrieti pe scurt cazul..."
                        className="resize-none rounded-xl border border-pine/15 bg-white px-4 py-3 text-sm outline-none placeholder:text-ink/35 focus:border-pine/35"
                      />
                    </label>

                    <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                      <p className="text-xs leading-5 text-ink/60">
                        Formular demo inspirat de nevoia de contact rapid si triaj.
                      </p>
                      <button type="submit" className="btn-primary">
                        Trimite solicitarea
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="mt-8 border-t border-pine/10 bg-white/50 py-8">
        <div className="container-shell flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="font-serifDisplay text-2xl text-pine">ZooMama Demo</p>
            <p className="text-xs uppercase tracking-[0.2em] text-pine/70">
              React + TypeScript + Tailwind • continut sintetizat din homepage
            </p>
          </div>
          <div className="text-sm text-ink/70">
            Analiza efectuata pe homepage zoomama.md (sitemap lastmod: 2026-02-08)
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
