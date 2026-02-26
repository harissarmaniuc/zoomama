import { teamProfiles } from '../pages/teamProfilesData';

const cyrillicMap: Record<string, string> = {
  а: 'a',
  б: 'b',
  в: 'v',
  г: 'g',
  д: 'd',
  е: 'e',
  ё: 'e',
  ж: 'zh',
  з: 'z',
  и: 'i',
  й: 'y',
  к: 'k',
  л: 'l',
  м: 'm',
  н: 'n',
  о: 'o',
  п: 'p',
  р: 'r',
  с: 's',
  т: 't',
  у: 'u',
  ф: 'f',
  х: 'h',
  ц: 'ts',
  ч: 'ch',
  ш: 'sh',
  щ: 'sch',
  ъ: '',
  ы: 'y',
  ь: '',
  э: 'e',
  ю: 'yu',
  я: 'ya'
};

function transliterate(value: string) {
  return value
    .toLowerCase()
    .split('')
    .map((char) => cyrillicMap[char] ?? char)
    .join('');
}

function slugify(value: string) {
  return transliterate(value)
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .replace(/-{2,}/g, '-');
}

export type TeamProfileRecord = (typeof teamProfiles)[number] & {
  slug: string;
  category: 'Врачи и специалисты' | 'Лаборатория' | 'Ассистенты и ординаторы' | 'Администрация';
};

function classifyProfile(profile: (typeof teamProfiles)[number]): TeamProfileRecord['category'] {
  const value = `${profile.role} ${profile.text}`.toLowerCase();

  if (value.includes('администратор') || value.includes('управляющий')) {
    return 'Администрация';
  }

  if (value.includes('лаборант') || value.includes('цитолог') || value.includes('патолог')) {
    return 'Лаборатория';
  }

  if (value.includes('ассистент') || value.includes('интерн') || value.includes('ординатор')) {
    return 'Ассистенты и ординаторы';
  }

  return 'Врачи и специалисты';
}

const slugCounts = new Map<string, number>();

export const teamProfilesIndexed: TeamProfileRecord[] = teamProfiles.map((profile) => {
  const base = slugify(profile.name) || 'member';
  const count = (slugCounts.get(base) ?? 0) + 1;
  slugCounts.set(base, count);

  return {
    ...profile,
    slug: count === 1 ? base : `${base}-${count}`,
    category: classifyProfile(profile)
  };
});

export const teamCategoryLabels: Array<TeamProfileRecord['category']> = [
  'Врачи и специалисты',
  'Лаборатория',
  'Ассистенты и ординаторы',
  'Администрация'
];

export function getTeamProfileBySlug(slug: string) {
  return teamProfilesIndexed.find((profile) => profile.slug === slug) ?? null;
}

export function getTeamProfileUrl(slug: string) {
  return `/komanda/${slug}`;
}
