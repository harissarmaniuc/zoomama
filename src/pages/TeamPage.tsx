import SiteLayout from '../layouts/SiteLayout';
import { teamProfiles } from './teamProfilesData';

type TeamProfile = (typeof teamProfiles)[number];

function splitLines(text: string) {
  return text
    .split('\n')
    .map((line) => line.trim())
    .filter(Boolean);
}

function initials(name: string) {
  return name
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join('');
}

function classify(profile: TeamProfile) {
  const role = `${profile.role} ${profile.text}`.toLowerCase();
  if (role.includes('администратор') || role.includes('управляющий')) return 'Администрация';
  if (role.includes('ассистент') || role.includes('интерн') || role.includes('ординатор')) {
    return 'Ассистенты и ординаторы';
  }
  if (role.includes('лаборант') || role.includes('цитолог') || role.includes('патолог')) {
    return 'Лаборатория';
  }
  return 'Врачи и специалисты';
}

function sectionCount(title: string) {
  return teamProfiles.filter((item) => classify(item) === title).length;
}

function ProfileImage({ profile }: { profile: TeamProfile }) {
  if (!profile.image) {
    return (
      <div className="grid h-28 w-28 place-items-center rounded-full border border-pine/15 bg-white text-xl font-semibold text-pine">
        {initials(profile.name)}
      </div>
    );
  }

  return (
    <img
      src={profile.image}
      alt={profile.name}
      loading="lazy"
      className="h-28 w-28 rounded-full border border-white object-cover shadow-panel"
      referrerPolicy="no-referrer"
    />
  );
}

function FeaturedCard({ profile }: { profile: TeamProfile }) {
  const lines = splitLines(profile.text);
  const preview = lines.slice(0, 4);

  return (
    <article className="overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-[0_10px_30px_rgba(0,0,0,0.05)]">
      <div className="h-44 bg-gradient-to-br from-linen/70 via-white to-sage/30" />
      <div className="-mt-16 px-5 pb-5">
        <div className="mx-auto flex w-fit justify-center">
          <ProfileImage profile={profile} />
        </div>
        <div className="mt-4 text-center">
          <h2 className="text-2xl leading-tight">{profile.name}</h2>
          <p className="mt-2 text-sm font-semibold text-pine">{profile.role}</p>
        </div>
        {preview.length > 0 ? (
          <div className="mt-4 border-t border-zinc-200 pt-4 text-sm leading-6 text-ink/75">
            {preview.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </div>
        ) : null}
      </div>
    </article>
  );
}

function DetailedProfileCard({ profile }: { profile: TeamProfile }) {
  const lines = splitLines(profile.text);
  const isWide = profile.col === 't-col_6';
  const hasLongContent = lines.length > 10;

  return (
    <article
      className={[
        'rounded-2xl border border-zinc-200 bg-white px-5 py-6 shadow-[0_8px_24px_rgba(0,0,0,0.04)]',
        isWide ? 'xl:col-span-2' : 'xl:col-span-1'
      ].join(' ')}
    >
      <div className="flex flex-col items-center text-center">
        <ProfileImage profile={profile} />
        <h3 className="mt-4 text-2xl leading-tight">{profile.name}</h3>
        <p className="mt-2 whitespace-pre-line text-sm font-semibold leading-6 text-pine/90">
          {profile.role}
        </p>
      </div>

      {lines.length > 0 ? (
        <div className="mt-5 border-t border-zinc-200 pt-4">
          {hasLongContent ? (
            <details className="group">
              <summary className="cursor-pointer list-none text-sm font-semibold text-pine">
                Подробнее о специализации
                <span className="ml-2 text-xs font-normal text-ink/60 group-open:hidden">
                  (показать)
                </span>
                <span className="ml-2 hidden text-xs font-normal text-ink/60 group-open:inline">
                  (скрыть)
                </span>
              </summary>
              <div className="mt-4 space-y-2 text-sm leading-6 text-ink/80">
                {lines.map((line) => (
                  <p key={`${profile.name}-${line}`}>{line}</p>
                ))}
              </div>
            </details>
          ) : (
            <div className="space-y-2 text-sm leading-6 text-ink/80">
              {lines.map((line) => (
                <p key={`${profile.name}-${line}`}>{line}</p>
              ))}
            </div>
          )}
        </div>
      ) : null}
    </article>
  );
}

function DirectoryCard({ profile }: { profile: TeamProfile }) {
  return (
    <article className="rounded-2xl border border-zinc-200 bg-white px-4 py-5 text-center shadow-[0_6px_18px_rgba(0,0,0,0.03)]">
      <h3 className="text-xl leading-tight">{profile.name}</h3>
      <p className="mt-2 whitespace-pre-line text-sm leading-6 text-ink/75">{profile.role}</p>
      {profile.text ? (
        <p className="mt-3 whitespace-pre-line text-sm leading-6 text-ink/70">{profile.text}</p>
      ) : null}
    </article>
  );
}

function TeamPage() {
  const featured = teamProfiles.filter((item) => item.col === 't-col_3').slice(0, 8);
  const detailed = teamProfiles.filter(
    (item) => item.text.length > 0 && !featured.some((entry) => entry.name === item.name),
  );
  const directory = teamProfiles.filter((item) => item.text.length === 0);

  return (
    <SiteLayout
      activePath="/komanda"
      kicker="Команда"
      title="Команда ZooMama"
      subtitle="Профили врачей, специалистов, ассистентов и административной команды на основе информации, опубликованной на сайте Zoomama."
    >
      <section className="bg-[#efefef] py-10 sm:py-14">
        <div className="container-shell">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-pine/75">
              Наши специалисты
            </p>
            <h2 className="mt-3 text-4xl sm:text-5xl">Знакомьтесь с командой</h2>
            <p className="mt-4 text-base leading-7 text-ink/75">
              Страница оформлена по структуре реального раздела команды: специалисты с
              развернутыми описаниями, врачи отделений, ассистенты и административный персонал.
            </p>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {[
              ['Всего профилей', String(teamProfiles.length)],
              ['Врачи и специалисты', String(sectionCount('Врачи и специалисты'))],
              ['Ассистенты / ординаторы', String(sectionCount('Ассистенты и ординаторы'))],
              ['Администрация', String(sectionCount('Администрация'))]
            ].map(([label, value]) => (
              <div key={label} className="rounded-2xl border border-zinc-200 bg-white p-4 text-center">
                <p className="text-3xl font-serifDisplay text-pine">{value}</p>
                <p className="mt-1 text-xs font-semibold uppercase tracking-[0.18em] text-ink/65">
                  {label}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {featured.map((profile) => (
              <FeaturedCard key={profile.name} profile={profile} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#efefef] pb-8">
        <div className="container-shell">
          <div className="mb-5 flex items-end justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-pine/75">
                Подробные профили
              </p>
              <h2 className="mt-2 text-3xl sm:text-4xl">Специалисты и направления</h2>
            </div>
            <p className="max-w-xl text-sm leading-6 text-ink/70">
              Использованы имена, должности и описания из опубликованного раздела команды Zoomama.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {detailed.map((profile) => (
              <DetailedProfileCard key={profile.name} profile={profile} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#efefef] pb-12 sm:pb-16">
        <div className="container-shell">
          <div className="mb-5">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-pine/75">
              Команда поддержки
            </p>
            <h2 className="mt-2 text-3xl sm:text-4xl">Ассистенты и административный персонал</h2>
          </div>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {directory.map((profile) => (
              <DirectoryCard key={profile.name} profile={profile} />
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}

export default TeamPage;
