"use client";

import { Link } from "@/i18n/routing";
import Image from "next/image";
import { ThemeSwitcher } from "@/components/ThemeSwitcher";
import { useTranslations } from "next-intl";
import { AdminSidebar } from "@/components/AdminSidebar";

export default function AdminAnalyticsPage() {
    const t = useTranslations("AdminAnalytics");
    return (
        <div className="bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-slate-100 transition-colors duration-200 min-h-screen flex">
            <AdminSidebar />

            {/* Main Content */}
            <main className="flex-1 ml-64 min-h-screen">
                <header className="h-16 flex items-center justify-between px-8 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 sticky top-0 z-40">
                    <div className="flex items-center gap-4 flex-1">
                        <label className="flex items-center w-full max-w-md h-10 bg-slate-100 dark:bg-slate-800 rounded-lg px-3">
                            <span className="material-symbols-outlined text-slate-400 text-xl">search</span>
                            <input className="w-full border-none bg-transparent focus:ring-0 text-sm placeholder:text-slate-500" placeholder="Поиск по отчетам и компаниям..." type="text" />
                        </label>
                    </div>
                    <div className="flex items-center gap-4">
                        <ThemeSwitcher />
                        <button className="flex items-center justify-center rounded-lg h-10 w-10 text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
                            <span className="material-symbols-outlined">notifications</span>
                        </button>
                        <div className="h-6 w-px bg-slate-200 dark:bg-slate-800"></div>
                        <button className="flex items-center gap-2 px-3 py-1.5 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
                            <span className="text-sm font-medium">RU</span>
                            <span className="material-symbols-outlined text-sm">expand_more</span>
                        </button>
                    </div>
                </header>

                <div className="p-8 max-w-7xl mx-auto">
                    <div className="flex flex-col gap-8">
                        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                            <div>
                                <h1 className="text-slate-900 dark:text-slate-100 text-3xl font-extrabold tracking-tight">{t("main.title")}</h1>
                                <p className="text-slate-500 dark:text-slate-400 mt-1">{t("main.subtitle")}</p>
                            </div>
                            <button className="bg-primary text-white px-5 py-2.5 rounded-lg font-bold text-sm shadow-lg shadow-primary/25 hover:bg-primary/90 transition-all flex items-center gap-2">
                                <span className="material-symbols-outlined text-lg">download</span>
                                {t("main.exportBtn")}
                            </button>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                                        <span className="material-symbols-outlined text-2xl">verified</span>
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold">Apex Insurance</h3>
                                        <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400">{t("cards.premium")}</span>
                                    </div>
                                </div>
                                <div className="space-y-3 mt-6">
                                    <div className="flex justify-between items-center">
                                        <span className="text-slate-500 text-sm">{t("cards.sold")}</span>
                                        <span className="font-bold">1,240</span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span className="text-slate-500 text-sm">{t("cards.conversion")}</span>
                                        <span className="font-bold text-primary">12.4%</span>
                                    </div>
                                    <div className="flex justify-between items-center border-t border-slate-100 dark:border-slate-800 pt-3">
                                        <span className="text-slate-500 text-sm">{t("cards.payouts")}</span>
                                        <span className="font-bold">$45,000</span>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="w-12 h-12 rounded-lg bg-orange-100 text-orange-600 dark:bg-orange-900/30 dark:text-orange-400 flex items-center justify-center">
                                        <span className="material-symbols-outlined text-2xl">health_and_safety</span>
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold">Alfa Life</h3>
                                        <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-400">{t("cards.active")}</span>
                                    </div>
                                </div>
                                <div className="space-y-3 mt-6">
                                    <div className="flex justify-between items-center">
                                        <span className="text-slate-500 text-sm">{t("cards.sold")}</span>
                                        <span className="font-bold">980</span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span className="text-slate-500 text-sm">{t("cards.conversion")}</span>
                                        <span className="font-bold text-primary">10.1%</span>
                                    </div>
                                    <div className="flex justify-between items-center border-t border-slate-100 dark:border-slate-800 pt-3">
                                        <span className="text-slate-500 text-sm">{t("cards.payouts")}</span>
                                        <span className="font-bold">$32,000</span>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="w-12 h-12 rounded-lg bg-purple-100 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400 flex items-center justify-center">
                                        <span className="material-symbols-outlined text-2xl">security</span>
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold">Gross Insurance</h3>
                                        <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400">{t("cards.leader")}</span>
                                    </div>
                                </div>
                                <div className="space-y-3 mt-6">
                                    <div className="flex justify-between items-center">
                                        <span className="text-slate-500 text-sm">{t("cards.sold")}</span>
                                        <span className="font-bold">1,560</span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span className="text-slate-500 text-sm">{t("cards.conversion")}</span>
                                        <span className="font-bold text-primary">14.8%</span>
                                    </div>
                                    <div className="flex justify-between items-center border-t border-slate-100 dark:border-slate-800 pt-3">
                                        <span className="text-slate-500 text-sm">{t("cards.payouts")}</span>
                                        <span className="font-bold">$58,000</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800">
                            <div className="flex items-center justify-between mb-8">
                                <div>
                                    <h2 className="text-xl font-bold">{t("chart.title")}</h2>
                                    <p className="text-sm text-slate-500">{t("chart.subtitle")}</p>
                                </div>
                                <div className="flex gap-2">
                                    <span className="flex items-center gap-1 text-xs font-medium text-slate-600 dark:text-slate-400">
                                        <span className="w-3 h-3 bg-primary rounded-sm"></span> {t("chart.revenue")}
                                    </span>
                                </div>
                            </div>
                            <div className="relative h-64 w-full flex items-end justify-around gap-4 pt-10 px-4">
                                <div className="absolute left-0 top-0 bottom-0 flex flex-col justify-between text-[10px] text-slate-400 w-8 border-r border-slate-100 dark:border-slate-800 pr-2">
                                    <span>$100k</span>
                                    <span>$75k</span>
                                    <span>$50k</span>
                                    <span>$25k</span>
                                    <span>0</span>
                                </div>
                                <div className="flex-1 group flex flex-col items-center gap-2">
                                    <div className="w-full bg-primary/20 rounded-t-lg relative flex items-end justify-center transition-all hover:bg-primary/40 h-[65%]">
                                        <div className="w-2/3 bg-primary rounded-t-lg h-[90%]"></div>
                                        <div className="absolute -top-8 bg-slate-800 text-white text-[10px] py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity">$64.5k</div>
                                    </div>
                                    <span className="text-xs font-medium text-slate-600 dark:text-slate-400">Apex</span>
                                </div>
                                <div className="flex-1 group flex flex-col items-center gap-2">
                                    <div className="w-full bg-primary/20 rounded-t-lg relative flex items-end justify-center transition-all hover:bg-primary/40 h-[45%]">
                                        <div className="w-2/3 bg-primary rounded-t-lg h-[80%]"></div>
                                        <div className="absolute -top-8 bg-slate-800 text-white text-[10px] py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity">$42.1k</div>
                                    </div>
                                    <span className="text-xs font-medium text-slate-600 dark:text-slate-400">Alfa</span>
                                </div>
                                <div className="flex-1 group flex flex-col items-center gap-2">
                                    <div className="w-full bg-primary/20 rounded-t-lg relative flex items-end justify-center transition-all hover:bg-primary/40 h-[85%]">
                                        <div className="w-2/3 bg-primary rounded-t-lg h-[95%]"></div>
                                        <div className="absolute -top-8 bg-slate-800 text-white text-[10px] py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity">$89.3k</div>
                                    </div>
                                    <span className="text-xs font-medium text-slate-600 dark:text-slate-400">Gross</span>
                                </div>
                                <div className="flex-1 group flex flex-col items-center gap-2">
                                    <div className="w-full bg-primary/20 rounded-t-lg relative flex items-end justify-center transition-all hover:bg-primary/40 h-[55%]">
                                        <div className="w-2/3 bg-primary rounded-t-lg h-[85%]"></div>
                                        <div className="absolute -top-8 bg-slate-800 text-white text-[10px] py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity">$52.8k</div>
                                    </div>
                                    <span className="text-xs font-medium text-slate-600 dark:text-slate-400">EuroIns</span>
                                </div>
                                <div className="flex-1 group flex flex-col items-center gap-2">
                                    <div className="w-full bg-primary/20 rounded-t-lg relative flex items-end justify-center transition-all hover:bg-primary/40 h-[70%]">
                                        <div className="w-2/3 bg-primary rounded-t-lg h-[90%]"></div>
                                        <div className="absolute -top-8 bg-slate-800 text-white text-[10px] py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity">$68.4k</div>
                                    </div>
                                    <span className="text-xs font-medium text-slate-600 dark:text-slate-400">Kapital</span>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 overflow-hidden mb-8">
                            <div className="p-6 border-b border-slate-100 dark:border-slate-800 flex flex-col md:flex-row md:items-center justify-between gap-4">
                                <h2 className="text-xl font-bold">{t("list.title")}</h2>
                                <div className="flex items-center gap-3">
                                    <span className="text-sm text-slate-500 whitespace-nowrap">{t("list.sortBy")}</span>
                                    <select className="bg-slate-100 dark:bg-slate-800 border-none rounded-lg text-sm font-medium focus:ring-primary py-1.5 pl-3 pr-8">
                                        <option>{t("list.sort1")}</option>
                                        <option>{t("list.sort2")}</option>
                                        <option>{t("list.sort3")}</option>
                                    </select>
                                </div>
                            </div>
                            <div className="overflow-x-auto">
                                <table className="w-full text-left">
                                    <thead className="bg-slate-50 dark:bg-slate-800/50 text-slate-500 text-xs font-bold uppercase tracking-wider">
                                        <tr>
                                            <th className="px-6 py-4">{t("table.partner")}</th>
                                            <th className="px-6 py-4">{t("table.type")}</th>
                                            <th className="px-6 py-4">{t("table.retention")}</th>
                                            <th className="px-6 py-4">{t("table.complaints")}</th>
                                            <th className="px-6 py-4">{t("table.status")}</th>
                                            <th className="px-6 py-4 text-right">{t("table.action")}</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                                        <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors">
                                            <td className="px-6 py-4 font-bold text-slate-800 dark:text-slate-200">Gross Insurance</td>
                                            <td className="px-6 py-4 text-sm">Авто, Имущество</td>
                                            <td className="px-6 py-4">
                                                <div className="flex items-center gap-2">
                                                    <div className="flex-1 h-2 bg-slate-100 dark:bg-slate-800 rounded-full max-w-[80px]">
                                                        <div className="h-full bg-primary rounded-full" style={{ width: '92%' }}></div>
                                                    </div>
                                                    <span className="text-xs font-bold">92%</span>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4">
                                                <div className="flex text-yellow-400">
                                                    <span className="material-symbols-outlined text-sm">star</span>
                                                    <span className="material-symbols-outlined text-sm">star</span>
                                                    <span className="material-symbols-outlined text-sm">star</span>
                                                    <span className="material-symbols-outlined text-sm">star</span>
                                                    <span className="material-symbols-outlined text-sm">star_half</span>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4">
                                                <span className="flex items-center gap-1 text-green-600 dark:text-green-400 text-xs font-bold">
                                                    <span className="w-1.5 h-1.5 rounded-full bg-green-600 dark:bg-green-400"></span> {t("table.normal")}
                                                </span>
                                            </td>
                                            <td className="px-6 py-4 text-right">
                                                <button className="text-primary hover:underline text-sm font-bold">{t("table.details")}</button>
                                            </td>
                                        </tr>
                                        <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors">
                                            <td className="px-6 py-4 font-bold text-slate-800 dark:text-slate-200">Apex Insurance</td>
                                            <td className="px-6 py-4 text-sm">Жизнь, Здоровье</td>
                                            <td className="px-6 py-4">
                                                <div className="flex items-center gap-2">
                                                    <div className="flex-1 h-2 bg-slate-100 dark:bg-slate-800 rounded-full max-w-[80px]">
                                                        <div className="h-full bg-primary rounded-full" style={{ width: '85%' }}></div>
                                                    </div>
                                                    <span className="text-xs font-bold">85%</span>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4">
                                                <div className="flex text-yellow-400">
                                                    <span className="material-symbols-outlined text-sm">star</span>
                                                    <span className="material-symbols-outlined text-sm">star</span>
                                                    <span className="material-symbols-outlined text-sm">star</span>
                                                    <span className="material-symbols-outlined text-sm">star</span>
                                                    <span className="material-symbols-outlined text-sm">star</span>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4">
                                                <span className="flex items-center gap-1 text-green-600 dark:text-green-400 text-xs font-bold">
                                                    <span className="w-1.5 h-1.5 rounded-full bg-green-600 dark:bg-green-400"></span> {t("table.normal")}
                                                </span>
                                            </td>
                                            <td className="px-6 py-4 text-right">
                                                <button className="text-primary hover:underline text-sm font-bold">{t("table.details")}</button>
                                            </td>
                                        </tr>
                                        <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors">
                                            <td className="px-6 py-4 font-bold text-slate-800 dark:text-slate-200">Alfa Life</td>
                                            <td className="px-6 py-4 text-sm">Жизнь</td>
                                            <td className="px-6 py-4">
                                                <div className="flex items-center gap-2">
                                                    <div className="flex-1 h-2 bg-slate-100 dark:bg-slate-800 rounded-full max-w-[80px]">
                                                        <div className="h-full bg-orange-500 rounded-full" style={{ width: '64%' }}></div>
                                                    </div>
                                                    <span className="text-xs font-bold">64%</span>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4">
                                                <div className="flex text-yellow-400">
                                                    <span className="material-symbols-outlined text-sm">star</span>
                                                    <span className="material-symbols-outlined text-sm">star</span>
                                                    <span className="material-symbols-outlined text-sm">star</span>
                                                    <span className="material-symbols-outlined text-sm">star_outline</span>
                                                    <span className="material-symbols-outlined text-sm">star_outline</span>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4">
                                                <span className="flex items-center gap-1 text-orange-600 dark:text-orange-400 text-xs font-bold">
                                                    <span className="w-1.5 h-1.5 rounded-full bg-orange-600 dark:bg-orange-400"></span> {t("table.attention")}
                                                </span>
                                            </td>
                                            <td className="px-6 py-4 text-right">
                                                <button className="text-primary hover:underline text-sm font-bold">{t("table.details")}</button>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className="p-4 bg-slate-50 dark:bg-slate-800/50 flex items-center justify-center border-t border-slate-100 dark:border-slate-800">
                                <button className="text-slate-600 dark:text-slate-400 text-sm font-medium hover:text-primary transition-colors">{t("list.showAll")}</button>
                            </div>
                        </div>

                    </div>
                </div>
            </main>
        </div>
    );
}
