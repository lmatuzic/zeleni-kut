type Route = {
	path: string;
	name: string;
};

export const HOME_PAGE = '/';
export const EVENTS_PAGE = '/events';
export const MENU_PAGE = '/menu';
export const ABOUT_PAGE = '/about';
export const CONTACT_PAGE = '/contact';

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
		path: CONTACT_PAGE,
		name: 'Contact',
	},
];
