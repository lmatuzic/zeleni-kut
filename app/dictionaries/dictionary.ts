import type { Locale } from '@/i18.config';
import 'server-only';

const dictionaries = {
	hr: () => import('@/app/dictionaries/hr.json').then((module) => module.default),
	en: () => import('@/app/dictionaries/en.json').then((module) => module.default),
};

export const getDictionary = async (locale: Locale) => {
	return locale == 'hr' ? dictionaries.hr() : dictionaries.en();
};
