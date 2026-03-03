import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
    // A list of all locales that are supported
    locales: ['ru', 'uz', 'en'],

    // Used when no locale matches
    defaultLocale: 'ru',

    // If we shouldn't prefix the default locale in the URL
    localePrefix: 'always'
});

export const config = {
    // Match only internationalized pathnames
    matcher: ['/', '/(ru|uz|en)/:path*', '/((?!_next|_vercel|.*\\..*).*)']
};
