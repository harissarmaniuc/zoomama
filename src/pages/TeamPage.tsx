import { useDeferredValue, useState, type ReactNode } from 'react';
import SiteLayout from '../layouts/SiteLayout';
import {
  getTeamProfileUrl,
  teamCategoryLabels,
  teamProfilesIndexed,
  type TeamProfileRecord,
} from '../utils/teamProfiles';

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

function ProfileImage({ profile }: { profile: TeamProfileRecord }) {
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

function ProfileLink({ profile, children }: { profile: TeamProfileRecord; children: ReactNode }) {
  return (
    <a href={getTeamProfileUrl(profile.slug)} className="block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pine focus-visible:ring-offset-2">
      {children}
    </a>
  );
}

function FeaturedCard({ profile }: { profile: TeamProfileRecord }) {
  const lines = splitLines(profile.text);
  const preview = lines.slice(0, 4);

  return (
    <ProfileLink profile={profile}>
      <article className="overflow-hidden rounded-2xl border border-pine/10 bg-white shadow-panel transition hover:-translate-y-0.5 hover:shadow-lg">
        <div className="h-44 bg-gradient-to-br from-linen/70 via-white to-sage/30" />
        <div className="-mt-16 px-5 pb-5">
          <div className="mx-auto flex w-fit justify-center">
            <ProfileImage profile={profile} />
          </div>
          <div className="mt-4 text-center">
            <h2 className="text-2xl leading-tight">{profile.name}</h2>
            <p className="mt-2 text-base font-semibold text-pine">{profile.role}</p>
          </div>
          {preview.length > 0 ? (
            <div className="mt-4 border-t border-pine/10 pt-4 text-base leading-7 text-ink/75">
              {preview.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </div>
          ) : null}
        </div>
      </article>
    </ProfileLink>
  );
}

function DetailedProfileCard({ profile }: { profile: TeamProfileRecord }) {
  const lines = splitLines(profile.text);
  const isWide = profile.col === 't-col_6';
  const hasLongContent = lines.length > 10;

  return (
    <article
      className={[
        'rounded-2xl border border-pine/10 bg-white px-5 py-6 shadow-panel',
        isWide ? 'xl:col-span-2' : 'xl:col-span-1'
      ].join(' ')}
    >
      <ProfileLink profile={profile}>
        <div className="flex flex-col items-center text-center transition hover:opacity-95">
          <ProfileImage profile={profile} />
          <h3 className="mt-4 text-2xl leading-tight">{profile.name}</h3>
          <p className="mt-2 whitespace-pre-line text-base font-semibold leading-7 text-pine/90">
            {profile.role}
          </p>
        </div>
      </ProfileLink>

      {lines.length > 0 ? (
        <div className="mt-5 border-t border-pine/10 pt-4">
          {hasLongContent ? (
            <details className="group">
              <summary className="cursor-pointer list-none text-base font-semibold text-pine">
                Подробнее о специализации
                <span className="ml-2 text-sm font-normal text-ink/60 group-open:hidden">
                  (показать)
                </span>
                <span className="ml-2 hidden text-sm font-normal text-ink/60 group-open:inline">
                  (скрыть)
                </span>
              </summary>
              <div className="mt-4 space-y-2 text-base leading-7 text-ink/80">
                {lines.map((line) => (
                  <p key={`${profile.name}-${line}`}>{line}</p>
                ))}
              </div>
            </details>
          ) : (
            <div className="space-y-2 text-base leading-7 text-ink/80">
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

function DirectoryCard({ profile }: { profile: TeamProfileRecord }) {
  return (
    <ProfileLink profile={profile}>
      <article className="rounded-2xl border border-pine/10 bg-white px-4 py-5 text-center shadow-panel transition hover:-translate-y-0.5 hover:shadow-lg">
        <h3 className="text-xl leading-tight">{profile.name}</h3>
        <p className="mt-2 whitespace-pre-line text-base leading-7 text-ink/75">{profile.role}</p>
        {profile.text ? (
          <p className="mt-3 whitespace-pre-line text-base leading-7 text-ink/70">{profile.text}</p>
        ) : null}
      </article>
    </ProfileLink>
  );
}

function TeamPage() {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState<'Все' | TeamProfileRecord['category']>('Все');
  const deferredSearch = useDeferredValue(search.trim().toLowerCase());

  const filtered = teamProfilesIndexed.filter((profile) => {
    if (category !== 'Все' && profile.category !== category) return false;
    if (!deferredSearch) return true;

    const haystack = `${profile.name} ${profile.role} ${profile.text}`.toLowerCase();
    return haystack.includes(deferredSearch);
  });

  const featured = filtered.filter((item) => item.col === 't-col_3').slice(0, 8);
  const featuredNames = new Set(featured.map((item) => item.name));
  const detailed = filtered.filter((item) => item.text.length > 0 && !featuredNames.has(item.name));
  const directory = filtered.filter((item) => item.text.length === 0);

  return (
    <SiteLayout
      activePath="/komanda"
      kicker="Команда"
      title="Команда ZooMama"
      subtitle="Профили врачей, специалистов, ассистентов и административной команды на основе информации, опубликованной на сайте Zoomama."
    >
      <section className="bg-linen py-10 sm:py-14">
        <div className="container-shell">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-pine/75">
              Наши специалисты
            </p>
            <h2 className="mt-3 text-4xl sm:text-5xl">Знакомьтесь с командой</h2>
            <p className="mt-4 text-lg leading-8 text-ink/75">
              Профили построены на реальных публикациях раздела команды: ведущие специалисты,
              врачи отделений, ассистенты, ординаторы и административный персонал.
            </p>
          </div>

          <div className="mt-8 grid gap-4 lg:grid-cols-[1.3fr_1fr]">
            <label className="rounded-2xl border border-pine/10 bg-white p-4">
              <span className="mb-2 block text-sm font-semibold uppercase tracking-[0.18em] text-pine/70">
                Поиск по команде
              </span>
              <input
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                type="search"
                placeholder="Имя, должность, специализация..."
                className="w-full rounded-xl border border-pine/15 bg-white px-4 py-3 text-base outline-none placeholder:text-ink/35 focus:border-pine/35"
              />
            </label>

            <div className="rounded-2xl border border-pine/10 bg-white p-4">
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-pine/70">
                Фильтр по категории
              </p>
              <div className="flex flex-wrap gap-2">
                {(['Все', ...teamCategoryLabels] as const).map((label) => (
                  <button
                    key={label}
                    type="button"
                    onClick={() => setCategory(label)}
                    className={[
                      'rounded-full border px-3.5 py-2 text-sm font-semibold uppercase tracking-[0.14em] transition',
                      category === label
                        ? 'border-pine bg-pine text-white'
                        : 'border-pine/15 bg-white text-pine hover:bg-parchment'
                    ].join(' ')}
                  >
                    {label}
                  </button>
                ))}
              </div>
              <p className="mt-3 text-base text-ink/65">Найдено профилей: {filtered.length}</p>
            </div>
          </div>

          {featured.length > 0 ? (
            <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {featured.map((profile) => (
                <FeaturedCard key={profile.slug} profile={profile} />
              ))}
            </div>
          ) : null}
        </div>
      </section>

      <section className="bg-linen pb-8">
        <div className="container-shell">
          <div className="mb-5 flex items-end justify-between gap-4">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-pine/75">
                Подробные профили
              </p>
              <h2 className="mt-2 text-3xl sm:text-4xl">Специалисты и направления</h2>
            </div>
            <p className="max-w-xl text-base leading-7 text-ink/70">
              Нажмите на карточку, чтобы открыть отдельную страницу специалиста.
            </p>
          </div>

          {detailed.length > 0 ? (
            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {detailed.map((profile) => (
                <DetailedProfileCard key={profile.slug} profile={profile} />
              ))}
            </div>
          ) : (
            <div className="rounded-2xl border border-pine/10 bg-white p-6 text-base text-ink/70">
              По текущим параметрам фильтра ничего не найдено.
            </div>
          )}
        </div>
      </section>

      <section className="bg-linen pb-12 sm:pb-16">
        <div className="container-shell">
          <div className="mb-5">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-pine/75">
              Команда поддержки
            </p>
            <h2 className="mt-2 text-3xl sm:text-4xl">Ассистенты и административный персонал</h2>
          </div>

          {directory.length > 0 ? (
            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {directory.map((profile) => (
                <DirectoryCard key={profile.slug} profile={profile} />
              ))}
            </div>
          ) : (
            <div className="rounded-2xl border border-pine/10 bg-white p-6 text-base text-ink/70">
              В этой категории нет карточек по текущему поиску.
            </div>
          )}
        </div>
      </section>
    </SiteLayout>
  );
}

export default TeamPage;
