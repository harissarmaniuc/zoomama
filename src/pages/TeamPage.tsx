import SiteLayout from '../layouts/SiteLayout';
import { teamMembers } from './siteData';

function TeamPage() {
  const roleGroups = teamMembers.reduce<Record<string, number>>((acc, member) => {
    acc[member.role] = (acc[member.role] ?? 0) + 1;
    return acc;
  }, {});

  return (
    <SiteLayout
      activePath="/komanda"
      kicker="Команда"
      title="Медицинская и административная команда (выборка)"
      subtitle="Врачи, ассистенты и административный персонал, представленные в структуре клиники."
    >
      <section className="py-10 sm:py-14">
        <div className="container-shell grid gap-5 xl:grid-cols-[0.95fr_1.05fr]">
          <div className="panel p-6 sm:p-8">
            <p className="text-xs uppercase tracking-[0.2em] text-pine/70">Распределение по ролям</p>
            <div className="mt-4 grid gap-3">
              {Object.entries(roleGroups).map(([role, count]) => (
                <div key={role} className="flex items-center justify-between rounded-xl border border-pine/10 bg-white p-4">
                  <span className="text-sm text-ink/85">{role}</span>
                  <span className="font-semibold text-pine">{count}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
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
                      <p className="text-xs uppercase tracking-[0.16em] text-pine/70">{member.role}</p>
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
    </SiteLayout>
  );
}

export default TeamPage;
