import { Locale } from '@/i18.config';

export type Route = {
	path: string;
	name: string;
};

export const HOME_PAGE = '/';
export const EVENTS_PAGE = '/events';
export const ABOUT_PAGE = '/about';
export const CONTACT_PAGE = '/contact';
export const RESERVATIONS_PAGE = '/contact/reservations';
export const SERVICES_PAGE = '/services';
export const ACCOMMODATION_PAGE = '/services/accommodation';
export const MENU_PAGE = '/services/menu';
export const RECREATION_PAGE = '/services/recreation';

export const routes: Route[] = [
	{
		path: EVENTS_PAGE,
		name: 'Događanja',
	},
	{
		path: ABOUT_PAGE,
		name: 'O nama',
	},
	{
		path: SERVICES_PAGE,
		name: 'Ponuda',
	},
	{
		path: CONTACT_PAGE,
		name: 'Kontakt',
	},
];
