import SiteLayout from '../layouts/SiteLayout';
import { getTeamProfileBySlug, getTeamProfileUrl } from '../utils/teamProfiles';

type TeamMemberPageProps = {
  slug: string;
};

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

function renderLine(line: string, index: number) {
  const isBullet =
    line.startsWith('•') || line.startsWith('✔') || line.startsWith('🔹') || line.startsWith('📍') || line.startsWith('⚕') || line.startsWith('🏥') || line.startsWith('🔬') || line.startsWith('🛠');
  const isHeading = !isBullet && (line.endsWith(':') || line.length < 50) && !line.includes(' - ');

  if (isHeading) {
    return (
      <h3 key={`${index}-${line}`} className="pt-2 text-xl leading-tight text-pine">
        {line}
      </h3>
    );
  }

  if (isBullet) {
    return (
      <div key={`${index}-${line}`} className="flex gap-3 rounded-xl border border-pine/10 bg-white p-4">
        <div className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-brass" />
        <p className="whitespace-pre-line text-base leading-7 text-ink/85">{line}</p>
      </div>
    );
  }

  return (
    <p key={`${index}-${line}`} className="whitespace-pre-line text-base leading-8 text-ink/80">
      {line}
    </p>
  );
}

function TeamMemberPage({ slug }: TeamMemberPageProps) {
  const profile = getTeamProfileBySlug(slug);

  if (!profile) {
    return (
      <SiteLayout
        activePath="/komanda"
        kicker="Команда"
        title="Профиль не найден"
        subtitle="Запрошенный профиль сотрудника не найден. Вернитесь к списку команды."
      >
        <section className="bg-linen py-12 sm:py-16">
          <div className="container-shell">
            <div className="rounded-2xl border border-pine/10 bg-white p-6">
              <p className="text-base leading-7 text-ink/80">
                Проверьте ссылку или откройте общий раздел команды.
              </p>
              <div className="mt-4">
                <a href="/komanda" className="btn-primary">
                  Перейти в раздел команды
                </a>
              </div>
            </div>
          </div>
        </section>
      </SiteLayout>
    );
  }

  const lines = splitLines(profile.text);
  const related = profile.category
    ? [profile.category]
    : [];

  return (
    <SiteLayout
      activePath="/komanda"
      kicker="Профиль специалиста"
      title={profile.name}
      subtitle={profile.role}
    >
      <section className="bg-linen py-10 sm:py-14">
        <div className="container-shell grid gap-5 xl:grid-cols-[360px_1fr]">
          <aside className="space-y-5 xl:sticky xl:top-28 xl:self-start">
            <div className="rounded-2xl border border-pine/10 bg-white p-6 text-center shadow-panel">
              {profile.image ? (
                <img
                  src={profile.image}
                  alt={profile.name}
                  className="mx-auto h-40 w-40 rounded-full border border-pine/10 object-cover shadow-panel"
                  referrerPolicy="no-referrer"
                />
              ) : (
                <div className="mx-auto grid h-40 w-40 place-items-center rounded-full border border-pine/15 bg-parchment text-4xl font-semibold text-pine">
                  {initials(profile.name)}
                </div>
              )}

              <h2 className="mt-5 text-3xl leading-tight">{profile.name}</h2>
              <p className="mt-3 whitespace-pre-line text-base font-semibold leading-7 text-pine">
                {profile.role}
              </p>

              <div className="mt-5 flex flex-wrap justify-center gap-2">
                <span className="rounded-full border border-pine/15 bg-parchment px-3.5 py-1.5 text-sm font-semibold uppercase tracking-[0.14em] text-pine">
                  {profile.category}
                </span>
                <span className="rounded-full border border-pine/10 bg-white px-3.5 py-1.5 text-sm font-semibold uppercase tracking-[0.14em] text-ink/70">
                  {profile.col === 't-col_3' ? 'Экспертный профиль' : 'Профиль команды'}
                </span>
              </div>

              <div className="mt-6 grid gap-2">
                <a href="/komanda" className="btn-primary">
                  Назад к команде
                </a>
                <a href="/kontakty" className="btn-secondary">
                  Контакты клиники
                </a>
              </div>
            </div>

            <div className="rounded-2xl border border-pine/10 bg-white p-5">
              <p className="text-sm uppercase tracking-[0.2em] text-pine/70">Навигация</p>
              <div className="mt-3 flex flex-wrap gap-2">
                <a href="/komanda" className="rounded-full border border-pine/15 bg-white px-3.5 py-2 text-sm font-semibold uppercase tracking-[0.14em] text-pine">
                  Команда
                </a>
                <a href="/o-klinike" className="rounded-full border border-pine/15 bg-white px-3.5 py-2 text-sm font-semibold uppercase tracking-[0.14em] text-pine">
                  О клинике
                </a>
                <a href={getTeamProfileUrl(profile.slug)} className="rounded-full border border-brass/20 bg-linen px-3.5 py-2 text-sm font-semibold uppercase tracking-[0.14em] text-pine">
                  Текущий профиль
                </a>
              </div>
              {related.length > 0 ? (
                <div className="mt-4">
                  <p className="text-sm uppercase tracking-[0.18em] text-pine/70">Категория</p>
                  <p className="mt-2 text-base leading-7 text-ink/75">{related.join(', ')}</p>
                </div>
              ) : null}
            </div>
          </aside>

          <div className="space-y-5">
            <div className="rounded-2xl border border-pine/10 bg-white p-6 sm:p-8 shadow-panel">
              <p className="text-sm uppercase tracking-[0.2em] text-pine/70">Описание и компетенции</p>
              {lines.length > 0 ? (
                <div className="mt-4 space-y-3">{lines.map((line, index) => renderLine(line, index))}</div>
              ) : (
                <p className="mt-4 text-base leading-8 text-ink/75">
                  Для этого профиля на странице команды опубликованы имя и должность без расширенного описания.
                </p>
              )}
            </div>

            <div className="rounded-2xl border border-pine/10 bg-white p-6 sm:p-8">
              <p className="text-sm uppercase tracking-[0.2em] text-pine/70">Примечание</p>
              <p className="mt-4 text-base leading-8 text-ink/75">
                Информация на странице сформирована на основе опубликованного раздела команды
                Zoomama и предназначена для структурированного отображения профилей на сайте.
              </p>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}

export default TeamMemberPage;
