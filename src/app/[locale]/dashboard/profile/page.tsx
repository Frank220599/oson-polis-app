import { Link } from "@/i18n/routing";
import Image from "next/image";
import { ThemeSwitcher } from "@/components/ThemeSwitcher";
import { useTranslations } from "next-intl";

export default function ProfilePage() {
    const t = useTranslations("DashboardProfile");
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
                            <Link className="flex items-center gap-3 rounded-lg px-3 py-2 text-slate-600 hover:bg-slate-50 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-white transition-colors" href="/dashboard/documents">
                                <span className="material-symbols-outlined">history</span>
                                <span className="text-sm font-semibold">{tSide("sidebar.documents")}</span>
                            </Link>
                            <Link className="flex items-center gap-3 rounded-lg bg-primary/10 px-3 py-2 text-primary transition-colors" href="/dashboard/profile">
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
                    <div className="mx-auto max-w-4xl">
                        <div className="mb-8 flex flex-col gap-2">
                            <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white md:text-4xl">{t("main.title")}</h1>
                            <p className="text-slate-500 dark:text-slate-400 text-lg">{t("main.subtitle")}</p>
                        </div>
                        <form action="#" method="POST">
                            <div className="mb-6 rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:bg-[#1a2632] dark:border-slate-800">
                                <div className="mb-6 flex items-center justify-between border-b border-slate-200 pb-4 dark:border-slate-800">
                                    <div className="flex items-center gap-3">
                                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-50 text-primary dark:bg-blue-900/30">
                                            <span className="material-symbols-outlined">badge</span>
                                        </div>
                                        <div>
                                            <h2 className="text-lg font-bold text-slate-900 dark:text-white">{t("personal.title")}</h2>
                                            <p className="text-sm text-slate-500 dark:text-slate-400">{t("personal.desc")}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="grid gap-6 md:grid-cols-2">
                                    <div className="md:col-span-2">
                                        <label className="mb-2 block text-sm font-medium text-slate-900 dark:text-slate-200">{t("personal.fullName")}</label>
                                        <div className="relative">
                                            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 dark:text-slate-500">person</span>
                                            <input className="w-full rounded-lg border-slate-300 bg-white py-3 pl-10 pr-4 text-slate-900 focus:border-primary focus:ring-primary dark:bg-slate-800 dark:border-slate-700 dark:text-white transition-all placeholder:text-slate-400" placeholder="Full name" type="text" defaultValue="Farkhod Alimov" />
                                        </div>
                                    </div>
                                    <div>
                                        <label className="mb-2 block text-sm font-medium text-slate-900 dark:text-slate-200">{t("personal.phone")} <span className="text-xs text-slate-500 font-normal">{t("personal.readOnly")}</span></label>
                                        <div className="relative">
                                            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 opacity-70">phone</span>
                                            <input className="w-full cursor-not-allowed rounded-lg border-slate-200 bg-slate-50 py-3 pl-10 pr-4 text-slate-500 focus:border-slate-200 focus:ring-0 dark:bg-slate-800/50 dark:border-slate-700 dark:text-slate-400" readOnly type="tel" defaultValue="+998 90 123 45 67" />
                                        </div>
                                    </div>
                                    <div>
                                        <label className="mb-2 block text-sm font-medium text-slate-900 dark:text-slate-200">{t("personal.email")}</label>
                                        <div className="relative">
                                            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 dark:text-slate-500">mail</span>
                                            <input className="w-full rounded-lg border-slate-300 bg-white py-3 pl-10 pr-4 text-slate-900 focus:border-primary focus:ring-primary dark:bg-slate-800 dark:border-slate-700 dark:text-white transition-all placeholder:text-slate-400" placeholder="jasur.aliev@example.com" type="email" defaultValue="f.alimov@example.com" />
                                        </div>
                                    </div>
                                    <div>
                                        <label className="mb-2 block text-sm font-medium text-slate-900 dark:text-slate-200">{t("personal.birthDate")}</label>
                                        <div className="relative">
                                            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 dark:text-slate-500">calendar_month</span>
                                            <input className="w-full rounded-lg border-slate-300 bg-white py-3 pl-10 pr-4 text-slate-900 focus:border-primary focus:ring-primary dark:bg-slate-800 dark:border-slate-700 dark:text-white transition-all" type="date" defaultValue="1990-05-15" />
                                        </div>
                                    </div>
                                    <div>
                                        <label className="mb-2 block text-sm font-medium text-slate-900 dark:text-slate-200">{t("personal.gender")}</label>
                                        <div className="relative">
                                            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 dark:text-slate-500">wc</span>
                                            <select className="w-full appearance-none rounded-lg border border-slate-200 bg-white py-3 pl-10 pr-10 text-slate-900 focus:border-primary focus:ring-primary dark:bg-slate-800 dark:border-slate-700 dark:text-white transition-all cursor-pointer" defaultValue="male">
                                                <option value="male">{t("personal.genderMale")}</option>
                                                <option value="female">{t("personal.genderFemale")}</option>
                                            </select>
                                            <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 dark:text-slate-500 pointer-events-none">expand_more</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="mb-6 rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:bg-[#1a2632] dark:border-slate-800">
                                <div className="mb-6 flex items-center justify-between border-b border-slate-200 pb-4 dark:border-slate-800">
                                    <div className="flex items-center gap-3">
                                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-50 text-green-600 dark:bg-green-900/30 dark:text-green-400">
                                            <span className="material-symbols-outlined">folder_shared</span>
                                        </div>
                                        <div>
                                            <h2 className="text-lg font-bold text-slate-900 dark:text-white">{t("passport.title")}</h2>
                                            <p className="text-sm text-slate-500 dark:text-slate-400">{t("passport.desc")}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="grid gap-6 md:grid-cols-2">
                                    <div>
                                        <label className="mb-2 block text-sm font-medium text-slate-900 dark:text-slate-200">{t("passport.series")}</label>
                                        <div className="relative">
                                            <input className="w-full rounded-lg border border-slate-200 bg-white py-3 px-4 text-slate-900 uppercase focus:border-primary focus:ring-primary dark:bg-slate-800 dark:border-slate-700 dark:text-white transition-all" maxLength={2} placeholder="AA" type="text" defaultValue="AA" />
                                        </div>
                                    </div>
                                    <div>
                                        <label className="mb-2 block text-sm font-medium text-slate-900 dark:text-slate-200">{t("passport.number")}</label>
                                        <div className="relative">
                                            <input className="w-full rounded-lg border border-slate-200 bg-white py-3 px-4 text-slate-900 focus:border-primary focus:ring-primary dark:bg-slate-800 dark:border-slate-700 dark:text-white transition-all" maxLength={7} placeholder="1234567" type="text" defaultValue="1234567" />
                                        </div>
                                    </div>
                                    <div className="md:col-span-2">
                                        <label className="mb-2 block text-sm font-medium text-slate-900 dark:text-slate-200">{t("passport.pinfl")}</label>
                                        <div className="relative">
                                            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 dark:text-slate-500">fingerprint</span>
                                            <input className="w-full rounded-lg border-slate-300 bg-white py-3 pl-10 pr-4 text-slate-900 focus:border-primary focus:ring-primary dark:bg-slate-800 dark:border-slate-700 dark:text-white transition-all placeholder:text-slate-400" maxLength={14} placeholder="14 raqam" type="text" defaultValue="31505901234567" />
                                        </div>
                                        <p className="mt-2 text-xs text-slate-500 dark:text-slate-400 flex items-center gap-1">
                                            <span className="material-symbols-outlined text-[14px]">info</span>
                                            {t("passport.pinflHint")}
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center justify-end gap-4 pb-12 pt-2">
                                <Link href="/dashboard" className="rounded-lg px-6 py-3 text-base font-bold text-slate-500 transition-colors hover:bg-slate-100 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-white">
                                    {t("actions.cancel")}
                                </Link>
                                <button className="flex items-center gap-2 rounded-lg bg-primary px-8 py-3 text-base font-bold text-white shadow-lg shadow-blue-500/30 transition-all hover:bg-blue-600 hover:shadow-blue-500/40 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 dark:focus:ring-offset-slate-900 active:scale-95" type="submit">
                                    <span className="material-symbols-outlined text-[20px]">save</span>
                                    {t("actions.save")}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </main>
        </div>
    );
}
