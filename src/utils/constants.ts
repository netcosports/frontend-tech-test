export const DEFAULT_LANGUAGE = 'fr';
export const DEFAULT_LOCALE = 'fr-FR';

export const ACCOUNT_KEY = {
  development: 'r1x-ei_zq',
  staging: 'r1x-ei_zq',
  production: 'r1x-ei_zq',
}[process.env.APP_ENV];

export const KENTICO_HARDCODED_PAGES = {
  HOME: 'tech_test',
};

export const IMG_PLACEHOLDER = `https://via.placeholder.com/1920x1080/f16305/ffffff.webp?text=no+image`;
export const REVALIDATE_DURATION = 60 * 15; // 15 minutes
