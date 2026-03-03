"use client";

import { useTransition } from "react";
import Image from "next/image";
import { Link, usePathname, useRouter } from "@/i18n/routing";
import { useTranslations, useLocale } from "next-intl";
import { ThemeSwitcher } from "@/components/ThemeSwitcher";

export function Header() {
    const pathname = usePathname();
    const router = useRouter();
    const locale = useLocale();
    const t = useTranslations("Header");
    const [isPending, startTransition] = useTransition();

    const handleLanguageChange = (newLocale: string) => {
        startTransition(() => {
            router.replace(pathname, { locale: newLocale });
        });
    };

    const navLinks = [
        { href: "/osago", label: t("nav.osago") },
        { href: "/kasko", label: t("nav.kasko") },
        { href: "/travel", label: t("nav.travel") },
        { href: "/about", label: t("nav.about") },
        { href: "/contacts", label: t("nav.contacts") },
    ];

    return (
        <header className="flex items-center justify-between whitespace-nowrap border-b border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900 px-6 md:px-10 py-4 sticky top-0 z-50 shadow-sm transition-colors duration-200">
            <Link href="/" className="flex items-center gap-3">
                <Image src="/logo-blue.png" alt="OsonPolis" width={180} height={40} className="dark:hidden block h-9 w-auto" priority />
                <Image src="/logo-white.png" alt="OsonPolis" width={180} height={40} className="hidden dark:block h-9 w-auto" priority />
            </Link>
            <div className="flex flex-1 justify-end gap-4 md:gap-8 items-center">
                <nav className="hidden lg:flex items-center gap-9">
                    {navLinks.map((link) => {
                        const isActive = pathname === link.href;
                        return (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={
                                    isActive
                                        ? "text-primary text-sm font-bold border-b-2 border-primary pb-1 -mb-1"
                                        : "text-slate-700 dark:text-slate-200 text-sm font-semibold hover:text-primary transition-colors"
                                }
                            >
                                {link.label}
                            </Link>
                        );
                    })}
                </nav>
                <div className="flex gap-2 md:gap-3 items-center">
                    <div className={`relative flex items-center gap-1.5 h-10 px-2.5 md:ml-1 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer group ${isPending ? 'opacity-50 pointer-events-none' : ''}`}>
                        <span className="material-symbols-outlined text-[20px] text-slate-500 dark:text-slate-400 group-hover:text-primary dark:group-hover:text-primary transition-colors">language</span>
                        <span className="text-sm font-bold text-slate-700 dark:text-slate-200 uppercase">{locale}</span>
                        <span className="material-symbols-outlined text-[16px] text-slate-400 group-hover:text-slate-600 dark:group-hover:text-slate-300 transition-colors">expand_more</span>

                        <select
                            value={locale}
                            onChange={(e) => handleLanguageChange(e.target.value)}
                            disabled={isPending}
                            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer disabled:cursor-wait"
                        >
                            <option value="ru">RU</option>
                            <option value="uz">UZ</option>
                            <option value="en">EN</option>
                        </select>
                    </div>
                    <ThemeSwitcher />
                    <Link href="/register" className="hidden sm:flex cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-5 text-primary border border-primary/20 bg-primary/5 hover:bg-primary/10 text-sm font-bold transition-colors">
                        <span className="truncate">{t("login")}</span>
                    </Link>
                    <Link href="/register" className="flex cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 md:px-5 bg-primary text-white text-sm font-bold hover:bg-blue-600 shadow-md shadow-primary/20 transition-all">
                        <span className="truncate">{t("register")}</span>
                    </Link>
                </div>
            </div>
        </header>
    );
}
