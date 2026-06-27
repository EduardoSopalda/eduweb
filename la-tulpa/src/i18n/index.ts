import es from './es.json';
import en from './en.json';

const translations: Record<string, typeof es> = { es, en };

export type Locale = 'es' | 'en';

export function t(locale: Locale, key: string): string {
  const keys = key.split('.');
  let result: unknown = translations[locale];
  for (const k of keys) {
    if (result && typeof result === 'object' && k in result) {
      result = (result as Record<string, unknown>)[k];
    } else {
      return key;
    }
  }
  return typeof result === 'string' ? result : key;
}

export function getLocaleFromUrl(url: URL): Locale {
  const [, lang] = url.pathname.split('/');
  if (lang === 'en') return 'en';
  return 'es';
}

export function localePath(locale: Locale, path: string): string {
  const clean = path.startsWith('/') ? path : `/${path}`;
  if (locale === 'es') return clean;
  return `/en${clean}`;
}

const routeMap: Record<string, string> = {
  '/compania': '/en/company',
  '/manuel-monro': '/en/manuel-monro',
  '/obras': '/en/works',
  '/en-gira': '/en/on-tour',
  '/media': '/en/media',
  '/prensa': '/en/press',
  '/contacto': '/en/contact',
  '/en/company': '/compania',
  '/en/manuel-monro': '/manuel-monro',
  '/en/works': '/obras',
  '/en/on-tour': '/en-gira',
  '/en/media': '/media',
  '/en/press': '/prensa',
  '/en/contact': '/contacto',
  '/en': '/',
  '/': '/en',
};

export function getAlternateUrl(pathname: string): string {
  const clean = pathname.replace(/\/$/, '') || '/';

  if (routeMap[clean]) return routeMap[clean];

  if (clean.startsWith('/obras/')) {
    return clean.replace('/obras/', '/en/works/');
  }
  if (clean.startsWith('/en/works/')) {
    return clean.replace('/en/works/', '/obras/');
  }

  if (clean.startsWith('/en/')) {
    return clean.replace('/en/', '/');
  }
  return `/en${clean}`;
}
