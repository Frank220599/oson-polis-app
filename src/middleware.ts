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
    // Only match actual page routes, not API, _next, or static files
    matcher: ['/((?!api|_next|_vercel|.*\\..*).*)']
};
