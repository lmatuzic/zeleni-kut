import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

import { match as matchLocale } from '@formatjs/intl-localematcher';
import Negotiator from 'negotiator';
import { i18n } from './i18.config';

function getLocale(request: NextRequest): string | undefined {
	const negotiatorHeaders: Record<string, string> = {};
	request.headers.forEach((value, key) => (negotiatorHeaders[key] = value));

	// @ts-ignore locales are readonly
	const locales: string[] = i18n.locales;
	let languages = new Negotiator({ headers: negotiatorHeaders }).languages();

	const locale = matchLocale(languages, locales, i18n.defaultLocale);
	return locale;
}

export function middleware(request: NextRequest) {
	const { pathname } = request.nextUrl;

	// exclude specific paths from redirection, like robots.txt
	if (pathname === '/robots.txt' || pathname === '/sitemap.xml') {
		return NextResponse.next();
	}

	const pathnameHasLocale = i18n.locales.some(
		(locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
	);

	if (pathnameHasLocale) {
		return;
	}

	// redirect if there is no locale
	const locale = getLocale(request);
	request.nextUrl.pathname = `/${locale}${pathname}`;

	return NextResponse.redirect(request.nextUrl);
}

export const config = {
	// Match only internationalized pathnames
	matcher: ['/', '/(hr|en)/:path*'],
};
