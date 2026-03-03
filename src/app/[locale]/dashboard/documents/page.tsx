import { Link } from "@/i18n/routing";
import Image from "next/image";
import { ThemeSwitcher } from "@/components/ThemeSwitcher";
import { useTranslations } from "next-intl";

export default function DocumentsPage() {
    const t = useTranslations("DashboardDocuments");
    const tSide = useTranslations("Dashboard");
    return (
        <div className="relative flex min-h-screen w-full flex-row overflow-x-hidden bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 font-display transition-colors duration-200">
            {/* Sidebar */}
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
                                <p className="truncate text-[10px] font-bold uppercase tracking-wider text-primary">Premium User</p>
                            </div>
                        </div>
                        <nav className="flex flex-col gap-1">
                            <Link className="flex items-center gap-3 rounded-lg px-3 py-2 text-slate-600 hover:bg-slate-50 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-white transition-colors" href="/dashboard">
                                <span className="material-symbols-outlined">dashboard</span>
                                <span className="text-sm font-semibold">{tSide("sidebar.dashboard")}</span>
                            </Link>
                            <Link className="flex items-center gap-3 rounded-lg px-3 py-2 text-slate-600 hover:bg-slate-50 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-white transition-colors" href="/dashboard">
                                <span className="material-symbols-outlined">description</span>
                                <span className="text-sm font-semibold">{tSide("sidebar.policies")}</span>
                            </Link>
                            <Link className="flex items-center gap-3 rounded-lg bg-primary/10 px-3 py-2 text-primary transition-colors" href="/dashboard/documents">
                                <span className="material-symbols-outlined">history</span>
                                <span className="text-sm font-semibold">{tSide("sidebar.documents")}</span>
                            </Link>
                            <Link className="flex items-center gap-3 rounded-lg px-3 py-2 text-slate-600 hover:bg-slate-50 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-white transition-colors" href="/dashboard/profile">
                                <span className="material-symbols-outlined">person</span>
                                <span className="text-sm font-semibold">{tSide("sidebar.profile")}</span>
                            </Link>
                        </nav>
                    </div>
                    <div className="mt-auto border-t border-slate-200 pt-4 dark:border-slate-800">
                        <button className="flex w-full items-center gap-3 rounded-lg px-3 py-2 text-slate-600 hover:bg-red-50 hover:text-red-600 dark:text-slate-400 dark:hover:bg-red-900/20 dark:hover:text-red-400 transition-colors">
                            <span className="material-symbols-outlined">logout</span>
                            <span className="text-sm font-semibold">{tSide("sidebar.logout")}</span>
                        </button>
                    </div>
                </div>
            </aside>

            {/* Main Content Area */}
            <main className="flex min-h-screen flex-1 flex-col overflow-hidden">
                <header className="flex h-16 shrink-0 items-center justify-between border-b border-slate-200 bg-white px-8 dark:bg-slate-900 dark:border-slate-800">
                    <h1 className="text-lg font-bold text-slate-900 dark:text-white">{t("header.title")}</h1>
                    <div className="flex items-center gap-6">
                        <ThemeSwitcher />
                        <div className="flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-4 py-1.5 dark:border-slate-700 dark:bg-slate-800 hidden md:flex">
                            <span className="material-symbols-outlined text-lg text-primary">support_agent</span>
                            <span className="text-sm font-bold text-slate-700 dark:text-slate-300">+998 (71) 123-45-67</span>
                        </div>
                        <button className="relative flex h-10 w-10 items-center justify-center rounded-full text-slate-500 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-800 transition-colors">
                            <span className="material-symbols-outlined">notifications</span>
                            <span className="absolute right-2.5 top-2.5 h-2 w-2 rounded-full bg-red-500 ring-2 ring-white dark:ring-slate-900"></span>
                        </button>
                    </div>
                </header>

                <div className="flex-1 overflow-y-auto p-4 md:p-8 bg-background-light dark:bg-background-dark">
                    <div className="mx-auto max-w-5xl space-y-6">
                        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                            <div>
                                <h2 className="text-3xl font-bold text-slate-900 dark:text-white">{t("main.title")}</h2>
                                <p className="mt-1 text-slate-500 dark:text-slate-400">{t("main.subtitle")}</p>
                            </div>
                        </div>

                        <div className="mt-6 rounded-2xl bg-white shadow-sm dark:bg-[#1a2632] border border-slate-200 dark:border-slate-800">
                            <div className="border-b border-slate-100 px-6 py-4 dark:border-slate-800 flex justify-between items-center">
                                <h3 className="text-lg font-bold text-slate-900 dark:text-white">{t("content.downloadedDocs")}</h3>
                                <button className="text-primary hover:text-blue-700 dark:hover:text-blue-400 text-sm font-bold flex items-center gap-1">
                                    <span className="material-symbols-outlined text-[18px]">filter_list</span> {t("content.filter")}
                                </button>
                            </div>
                            <div className="divide-y divide-slate-100 dark:divide-slate-800">
                                <div className="flex items-center justify-between p-4 px-6 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                                    <div className="flex items-center gap-4">
                                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-slate-100 text-slate-500 dark:bg-slate-800 dark:text-slate-400">
                                            <span className="material-symbols-outlined text-[24px]">description</span>
                                        </div>
                                        <div>
                                            <p className="font-bold text-slate-900 dark:text-white">OSAGO_Policy_987654321.pdf</p>
                                            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">{t("docs.policy.dateSize")}</p>
                                        </div>
                                    </div>
                                    <button className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-white transition-colors">
                                        <span className="material-symbols-outlined text-xl">download</span>
                                    </button>
                                </div>
                                <div className="flex items-center justify-between p-4 px-6 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                                    <div className="flex items-center gap-4">
                                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-50 text-green-600 dark:bg-green-900/20 dark:text-green-400">
                                            <span className="material-symbols-outlined text-[24px]">receipt_long</span>
                                        </div>
                                        <div>
                                            <p className="font-bold text-slate-900 dark:text-white">{t("docs.receipt.title")}</p>
                                            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">{t("docs.receipt.dateSize")}</p>
                                        </div>
                                    </div>
                                    <button className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-white transition-colors">
                                        <span className="material-symbols-outlined text-xl">download</span>
                                    </button>
                                </div>
                                <div className="flex items-center justify-between p-4 px-6 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                                    <div className="flex items-center gap-4">
                                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-orange-50 text-orange-600 dark:bg-orange-900/20 dark:text-orange-400">
                                            <span className="material-symbols-outlined text-[24px]">policy</span>
                                        </div>
                                        <div>
                                            <p className="font-bold text-slate-900 dark:text-white">{t("docs.contract.title")}</p>
                                            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">{t("docs.contract.dateSize")}</p>
                                        </div>
                                    </div>
                                    <button className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-white transition-colors">
                                        <span className="material-symbols-outlined text-xl">download</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
