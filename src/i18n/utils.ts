import { ui, defaultLang, type Lang } from './ui';

export function getLangFromUrl(url: URL): Lang {
  const [, lang] = url.pathname.split('/');
  if (lang in ui) return lang as Lang;
  return defaultLang;
}

export function useTranslations(lang: Lang) {
  return function t(key: keyof (typeof ui)[typeof defaultLang]): string {
    return ui[lang][key] || ui[defaultLang][key];
  };
}

export function getLocalePath(path: string, lang: Lang): string {
  if (lang === defaultLang) return path;
  return `/${lang}${path}`;
}

export function getAlternateLang(lang: Lang): Lang {
  return lang === 'es' ? 'en' : 'es';
}

export function getAlternateUrl(url: URL, lang: Lang): string {
  const alternate = getAlternateLang(lang);
  const path = url.pathname;

  if (lang === defaultLang) {
    return `/${alternate}${path}`;
  }
  const withoutLang = path.replace(/^\/en/, '') || '/';
  if (alternate === defaultLang) {
    return withoutLang;
  }
  return `/${alternate}${withoutLang}`;
}
