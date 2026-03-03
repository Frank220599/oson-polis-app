import { defineRouting } from 'next-intl/routing';
import { createNavigation } from 'next-intl/navigation';

export const routing = defineRouting({
    // A list of all locales that are supported
    locales: ['ru', 'uz', 'en'],

    // Used when no locale matches
    defaultLocale: 'ru',

    // If we shouldn't prefix the default locale in the URL
    localePrefix: 'always'
});

// Lightweight wrappers around Next.js' navigation APIs
// that will consider the routing configuration
export const { Link, redirect, usePathname, useRouter } =
    createNavigation(routing);
