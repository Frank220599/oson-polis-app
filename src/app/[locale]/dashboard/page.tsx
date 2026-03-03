import { Link } from "@/i18n/routing";
import Image from "next/image";
import { ThemeSwitcher } from "@/components/ThemeSwitcher";
import { useTranslations } from "next-intl";

export default function Dashboard() {
    const t = useTranslations("Dashboard");
    return (
        <div className="relative flex min-h-screen w-full flex-row overflow-x-hidden">
            <aside className="hidden w-64 flex-col border-r border-slate-200 bg-white dark:bg-slate-900 dark:border-slate-800 lg:flex">
                <div className="flex h-16 items-center border-b border-slate-200 px-6 dark:border-slate-800">
                    <Link href="/" className="flex items-center gap-2">
                        <Image src="/logo-blue.png" alt="OsonPolis" width={180} height={40} className="dark:hidden block h-8 w-auto" priority />
                        <Image src="/logo-white.png" alt="OsonPolis" width={180} height={40} className="hidden dark:block h-8 w-auto" priority />
                    </Link>
                </div>
                <div className="flex flex-1 flex-col justify-between p-4">
                    <div className="flex flex-col gap-1">
                        <div className="mb-6 flex items-center gap-3 rounded-xl bg-slate-50 p-3 dark:bg-slate-800/50">
                            <div className="h-10 w-10 overflow-hidden rounded-full ring-2 ring-white dark:ring-slate-700 relative">
                                <Image fill alt="User Avatar" className="object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBO9XIWYWs1is31cq5P1HQIBJlzwf5G7U1aqqpeW0Y8bX6jOpc1pblhtGgJYfx-xC-tAIphJnfNFBxB8IeAXSA0J9GPIaNr9CyhZ7lZQb7cHFG9-rtkuKi5-MFPodin8nC7LzwwPhp1iXG5KkBzDewCm5QtLPBBy4MAXEhE23qtdLcR0bQzDuUwkN0Hlw_nzzRoNpPR2UUZd-xUFqwTXuqbQdDHcrSvxQzbBOnJDBXWvth0DyGJ9UNzSLQWofVUNHOThqW8hpbE79E" />
                            </div>
                            <div className="flex flex-col overflow-hidden">
                                <h3 className="truncate text-sm font-bold text-slate-900 dark:text-white">Farkhod Alimov</h3>
                                <p className="truncate text-[10px] font-bold uppercase tracking-wider text-primary">{t("sidebar.role")}</p>
                            </div>
                        </div>
                        <nav className="flex flex-col gap-1">
                            <Link className="flex items-center gap-3 rounded-lg px-3 py-2 text-slate-600 hover:bg-slate-50 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-white transition-colors" href="/dashboard">
                                <span className="material-symbols-outlined">dashboard</span>
                                <span className="text-sm font-semibold">{t("sidebar.dashboard")}</span>
                            </Link>
                            <Link className="flex items-center gap-3 rounded-lg bg-primary/10 px-3 py-2 text-primary transition-colors" href="/dashboard">
                                <span className="material-symbols-outlined">description</span>
                                <span className="text-sm font-semibold">{t("sidebar.myPolicies")}</span>
                            </Link>
                            <Link className="flex items-center gap-3 rounded-lg px-3 py-2 text-slate-600 hover:bg-slate-50 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-white transition-colors" href="/dashboard/documents">
                                <span className="material-symbols-outlined">history</span>
                                <span className="text-sm font-semibold">{t("sidebar.history")}</span>
                            </Link>
                            <Link className="flex items-center gap-3 rounded-lg px-3 py-2 text-slate-600 hover:bg-slate-50 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-white transition-colors" href="/dashboard/profile">
                                <span className="material-symbols-outlined">person</span>
                                <span className="text-sm font-semibold">{t("sidebar.profile")}</span>
                            </Link>
                        </nav>
                    </div>
                    <div className="mt-auto border-t border-slate-200 pt-4 dark:border-slate-800">
                        <button className="flex w-full items-center gap-3 rounded-lg px-3 py-2 text-slate-600 hover:bg-red-50 hover:text-red-600 dark:text-slate-400 dark:hover:bg-red-900/20 dark:hover:text-red-400 transition-colors">
                            <span className="material-symbols-outlined">logout</span>
                            <span className="text-sm font-semibold">{t("sidebar.logout")}</span>
                        </button>
                    </div>
                </div>
            </aside>

            <main className="flex min-h-screen flex-1 flex-col overflow-hidden">
                <header className="flex h-16 shrink-0 items-center justify-between border-b border-slate-200 bg-white px-8 dark:bg-slate-900 dark:border-slate-800">
                    <h1 className="text-lg font-bold text-slate-900 dark:text-white">{t("header.title")}</h1>
                    <div className="flex items-center gap-6">
                        <ThemeSwitcher />
                        <div className="flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-4 py-1.5 dark:border-slate-700 dark:bg-slate-800">
                            <span className="material-symbols-outlined text-lg text-primary">support_agent</span>
                            <span className="text-sm font-bold text-slate-700 dark:text-slate-300">+998 (71) 123-45-67</span>
                        </div>
                        <button className="relative flex h-10 w-10 items-center justify-center rounded-full text-slate-500 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-800">
                            <span className="material-symbols-outlined">notifications</span>
                            <span className="absolute right-2.5 top-2.5 h-2 w-2 rounded-full bg-red-500 ring-2 ring-white dark:ring-slate-900"></span>
                        </button>
                    </div>
                </header>

                <div className="flex-1 overflow-y-auto p-6 md:p-8">
                    <div className="mx-auto max-w-6xl space-y-8">
                        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                            <div>
                                <h2 className="text-2xl font-extrabold tracking-tight text-slate-900 dark:text-white">{t("main.title")}</h2>
                                <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">{t("main.subtitle")}</p>
                            </div>
                            <button className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-bold text-white shadow-lg shadow-primary/25 hover:bg-blue-600 transition-all active:scale-95">
                                <span className="material-symbols-outlined">add</span>
                                {t("main.buyNew")}
                            </button>
                        </div>

                        <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900">
                            <div className="overflow-x-auto">
                                <table className="w-full text-left text-sm border-separate border-spacing-0">
                                    <thead>
                                        <tr>
                                            <th className="bg-slate-50/80 px-6 py-4 font-bold text-xs uppercase tracking-wider text-slate-500 dark:bg-slate-800/50 dark:text-slate-400 border-b border-slate-200 dark:border-slate-800">{t("table.headers.id")}</th>
                                            <th className="bg-slate-50/80 px-6 py-4 font-bold text-xs uppercase tracking-wider text-slate-500 dark:bg-slate-800/50 dark:text-slate-400 border-b border-slate-200 dark:border-slate-800">{t("table.headers.product")}</th>
                                            <th className="bg-slate-50/80 px-6 py-4 font-bold text-xs uppercase tracking-wider text-slate-500 dark:bg-slate-800/50 dark:text-slate-400 border-b border-slate-200 dark:border-slate-800">{t("table.headers.date")}</th>
                                            <th className="bg-slate-50/80 px-6 py-4 font-bold text-xs uppercase tracking-wider text-slate-500 dark:bg-slate-800/50 dark:text-slate-400 border-b border-slate-200 dark:border-slate-800">{t("table.headers.status")}</th>
                                            <th className="bg-slate-50/80 px-6 py-4 font-bold text-xs uppercase tracking-wider text-slate-500 dark:bg-slate-800/50 dark:text-slate-400 border-b border-slate-200 dark:border-slate-800">{t("table.headers.amount")}</th>
                                            <th className="bg-slate-50/80 px-6 py-4 font-bold text-xs uppercase tracking-wider text-slate-500 dark:bg-slate-800/50 dark:text-slate-400 border-b border-slate-200 dark:border-slate-800 text-right">{t("table.headers.actions")}</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-800/40 transition-colors">
                                            <td className="px-6 py-4 border-b border-slate-100 dark:border-slate-800/50 align-middle">
                                                <span className="font-bold text-slate-900 dark:text-white">#987654321</span>
                                            </td>
                                            <td className="px-6 py-4 border-b border-slate-100 dark:border-slate-800/50 align-middle">
                                                <div className="flex items-center gap-3">
                                                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-primary dark:bg-blue-900/30">
                                                        <span className="material-symbols-outlined">directions_car</span>
                                                    </div>
                                                    <div className="min-w-0">
                                                        <div className="font-bold text-slate-900 dark:text-white">E-OSAGO</div>
                                                        <div className="truncate text-xs text-slate-500">Toyota Camry (01 A 123 AA)</div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 border-b border-slate-100 dark:border-slate-800/50 align-middle">
                                                <div className="flex flex-col">
                                                    <span className="font-semibold text-slate-700 dark:text-slate-300">01.01.2024 — 31.12.2024</span>
                                                    <span className="text-[10px] font-bold uppercase text-slate-400">{t("table.validity")}</span>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 border-b border-slate-100 dark:border-slate-800/50 align-middle">
                                                <span className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-bold bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400">
                                                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
                                                    {t("table.status.active")}
                                                </span>
                                            </td>
                                            <td className="px-6 py-4 border-b border-slate-100 dark:border-slate-800/50 align-middle">
                                                <div className="font-bold text-slate-900 dark:text-white">168 000 UZS</div>
                                            </td>
                                            <td className="px-6 py-4 border-b border-slate-100 dark:border-slate-800/50 align-middle [&:last-child]:border-b-0">
                                                <div className="flex justify-end gap-2">
                                                    <button className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 text-slate-500 hover:border-primary hover:text-primary hover:bg-primary/5 transition-all dark:border-slate-700 dark:text-slate-400" title={t("table.actionsTooltip.view")}>
                                                        <span className="material-symbols-outlined text-[20px]">visibility</span>
                                                    </button>
                                                    <button className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 text-slate-500 hover:border-primary hover:text-primary hover:bg-primary/5 transition-all dark:border-slate-700 dark:text-slate-400" title={t("table.actionsTooltip.download")}>
                                                        <span className="material-symbols-outlined text-[20px]">download</span>
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>

                                        <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-800/40 transition-colors">
                                            <td className="px-6 py-4 border-b border-slate-100 dark:border-slate-800/50 align-middle">
                                                <span className="font-bold text-slate-900 dark:text-white">#987654325</span>
                                            </td>
                                            <td className="px-6 py-4 border-b border-slate-100 dark:border-slate-800/50 align-middle">
                                                <div className="flex items-center gap-3">
                                                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-primary dark:bg-blue-900/30">
                                                        <span className="material-symbols-outlined">home</span>
                                                    </div>
                                                    <div className="min-w-0">
                                                        <div className="font-bold text-slate-900 dark:text-white">E-HOME</div>
                                                        <div className="truncate text-xs text-slate-500">Toshkent sh., Yunusobod 4</div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 border-b border-slate-100 dark:border-slate-800/50 align-middle">
                                                <div className="flex flex-col">
                                                    <span className="font-semibold text-slate-700 dark:text-slate-300">05.02.2024 — 04.02.2025</span>
                                                    <span className="text-[10px] font-bold uppercase text-slate-400">{t("table.validity")}</span>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 border-b border-slate-100 dark:border-slate-800/50 align-middle">
                                                <span className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-bold bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400">
                                                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
                                                    {t("table.status.active")}
                                                </span>
                                            </td>
                                            <td className="px-6 py-4 border-b border-slate-100 dark:border-slate-800/50 align-middle">
                                                <div className="font-bold text-slate-900 dark:text-white">250 000 UZS</div>
                                            </td>
                                            <td className="px-6 py-4 border-b border-slate-100 dark:border-slate-800/50 align-middle [&:last-child]:border-b-0">
                                                <div className="flex justify-end gap-2">
                                                    <button className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 text-slate-500 hover:border-primary hover:text-primary hover:bg-primary/5 transition-all dark:border-slate-700 dark:text-slate-400" title={t("table.actionsTooltip.view")}>
                                                        <span className="material-symbols-outlined text-[20px]">visibility</span>
                                                    </button>
                                                    <button className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 text-slate-500 hover:border-primary hover:text-primary hover:bg-primary/5 transition-all dark:border-slate-700 dark:text-slate-400" title={t("table.actionsTooltip.download")}>
                                                        <span className="material-symbols-outlined text-[20px]">download</span>
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>

                                        <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-800/40 transition-colors opacity-75">
                                            <td className="px-6 py-4 border-b border-transparent align-middle">
                                                <span className="font-bold text-slate-900 dark:text-white">#987654002</span>
                                            </td>
                                            <td className="px-6 py-4 border-b border-transparent align-middle">
                                                <div className="flex items-center gap-3">
                                                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-slate-100 text-slate-500 dark:bg-slate-800">
                                                        <span className="material-symbols-outlined">health_and_safety</span>
                                                    </div>
                                                    <div className="min-w-0">
                                                        <div className="font-bold text-slate-900 dark:text-white">E-TRAVEL</div>
                                                        <div className="truncate text-xs text-slate-500">World-wide coverage</div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 border-b border-transparent align-middle">
                                                <div className="flex flex-col text-slate-500">
                                                    <span className="font-semibold">15.10.2023 — 15.11.2023</span>
                                                    <span className="text-[10px] font-bold uppercase text-slate-400">{t("table.expiredLabel")}</span>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 border-b border-transparent align-middle">
                                                <span className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-bold bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-400">
                                                    {t("table.status.expired")}
                                                </span>
                                            </td>
                                            <td className="px-6 py-4 border-b border-transparent align-middle">
                                                <div className="font-bold text-slate-500">45 000 UZS</div>
                                            </td>
                                            <td className="px-6 py-4 border-b border-transparent align-middle">
                                                <div className="flex justify-end gap-2">
                                                    <button className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 text-slate-500 hover:border-primary hover:text-primary hover:bg-primary/5 transition-all dark:border-slate-700 dark:text-slate-400" title={t("table.actionsTooltip.view")}>
                                                        <span className="material-symbols-outlined text-[20px]">visibility</span>
                                                    </button>
                                                    <button className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 text-slate-500 hover:border-primary hover:text-primary hover:bg-primary/5 transition-all dark:border-slate-700 dark:text-slate-400" title={t("table.actionsTooltip.download")}>
                                                        <span className="material-symbols-outlined text-[20px]">download</span>
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>

                                    </tbody>
                                </table>
                            </div>

                            <div className="flex flex-col items-center justify-between gap-4 border-t border-slate-200 bg-slate-50/80 px-6 py-4 dark:border-slate-800 dark:bg-slate-800/40 sm:flex-row">
                                <div className="text-xs font-bold text-slate-500 dark:text-slate-400">
                                    {t("pagination.showing", { count: 3 })}
                                </div>
                                <div className="flex gap-1.5">
                                    <button className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-400 dark:border-slate-700 dark:bg-slate-900" disabled>
                                        <span className="material-symbols-outlined text-xl">chevron_left</span>
                                    </button>
                                    <button className="flex h-9 w-9 items-center justify-center rounded-lg border border-primary bg-primary text-xs font-bold text-white shadow-sm shadow-primary/20">1</button>
                                    <button className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-600 hover:border-primary hover:text-primary dark:border-slate-700 dark:bg-slate-900 transition-colors">
                                        <span className="material-symbols-outlined text-xl">chevron_right</span>
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="rounded-2xl border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900 overflow-hidden">
                            <div className="flex items-center justify-between border-b border-slate-100 px-6 py-4 dark:border-slate-800">
                                <h3 className="text-xs font-bold text-slate-500 uppercase tracking-widest">{t("notifications.title")}</h3>
                                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-50 text-primary dark:bg-blue-900/30">
                                    <span className="material-symbols-outlined text-sm">info</span>
                                </span>
                            </div>
                            <div className="divide-y divide-slate-100 dark:divide-slate-800">
                                <div className="flex items-center justify-between p-5 px-6 hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors">
                                    <div className="flex items-center gap-4">
                                        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-amber-50 text-amber-600 dark:bg-amber-900/20">
                                            <span className="material-symbols-outlined">notifications_active</span>
                                        </div>
                                        <div>
                                            <p className="text-sm font-bold text-slate-900 dark:text-white">{t("notifications.items.expiring.title")}</p>
                                            <p className="text-xs text-slate-500 dark:text-slate-400">{t("notifications.items.expiring.desc", { id: "#987654321" })}</p>
                                        </div>
                                    </div>
                                    <span className="shrink-0 text-[10px] font-bold uppercase tracking-wider text-slate-400">{t("notifications.items.expiring.time")}</span>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </main>
        </div>
    );
}
