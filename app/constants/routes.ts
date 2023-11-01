export type Route = {
	path: string;
	name: string;
};

export const HOME_PAGE = '/';
export const EVENTS_PAGE = '/events';
export const MENU_PAGE = '/menu';
export const ABOUT_PAGE = '/about';
export const CONTACT_PAGE = '/contact';
export const RESERVATIONS_PAGE = '/reservations';
export const SERVICES_PAGE = '/services';
export const ACCOMMODATION_PAGE = '/accommodation';

export const routes: Route[] = [
	{
		path: EVENTS_PAGE,
		name: 'Events',
	},
	{
		path: MENU_PAGE,
		name: 'Menu',
	},
	{
		path: ABOUT_PAGE,
		name: 'About us',
	},
	{
		path: SERVICES_PAGE,
		name: 'Services',
	},
	{
		path: ACCOMMODATION_PAGE,
		name: 'Accommodation',
	},
	{
		path: RESERVATIONS_PAGE,
		name: 'Reservations',
	},
	{
		path: CONTACT_PAGE,
		name: 'Contact',
	},
];
