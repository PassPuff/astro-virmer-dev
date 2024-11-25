export const languages = {
  en: 'English',
  fr: 'Français',
  it: 'Italiano'
} as const;

export const defaultLang = 'en';

export const showDefaultLang = false;

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split('/');
  if (lang in languages) return lang as keyof typeof languages;
  return defaultLang;
}

export function useTranslatedPath(lang: keyof typeof languages) {
  return function translatePath(path: string, l: string = lang) {
    // Remove leading slash and potential language prefix
    path = path.replace(/^\/([a-z]{2}\/)?/, '');
    
    // Don't add prefix for default language unless showDefaultLang is true
    return !showDefaultLang && l === defaultLang 
      ? `/${path}` 
      : `/${l}/${path}`;
  };
}