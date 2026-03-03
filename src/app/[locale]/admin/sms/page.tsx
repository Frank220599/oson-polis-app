"use client";

import { Link } from "@/i18n/routing";
import Image from "next/image";
import { ThemeSwitcher } from "@/components/ThemeSwitcher";
import { useTranslations } from "next-intl";
import { AdminSidebar } from "@/components/AdminSidebar";

export default function AdminSMSPage() {
    const t = useTranslations("AdminSMS");
    return (
        <div className="bg-[#F8FAFC] dark:bg-background-dark font-display text-slate-900 dark:text-slate-100 transition-colors duration-200 min-h-screen flex">
            <AdminSidebar />

            {/* Main Content */}
            <main className="flex-1 ml-64 min-h-screen pt-4 px-10">
                <header className="mb-10 flex justify-between items-start mt-4">
                    <div>
                        <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white">{t("main.title")}</h1>
                        <p className="text-slate-500 mt-1 text-lg">{t("main.subtitle")}</p>
                    </div>
                    <div className="flex gap-3 items-center">
                        <ThemeSwitcher />
                        <button className="flex items-center gap-2 px-5 py-2.5 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-sm font-bold text-slate-700 dark:text-slate-200 shadow-sm hover:bg-slate-50 dark:hover:bg-slate-700">
                            <span className="material-symbols-outlined text-xl">file_download</span>
                            {t("main.exportBtn")}
                        </button>
                    </div>
                </header>

                <div className="flex border-b border-slate-200 dark:border-slate-800 mb-8 overflow-x-auto gap-8">
                    <button className="pb-4 border-b-2 border-primary text-primary font-bold text-sm whitespace-nowrap">{t("tabs.create")}</button>
                    <button className="pb-4 border-b-2 border-transparent text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 font-bold text-sm whitespace-nowrap">{t("tabs.history")}</button>
                    <button className="pb-4 border-b-2 border-transparent text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 font-bold text-sm whitespace-nowrap">{t("tabs.templates")}</button>
                    <button className="pb-4 border-b-2 border-transparent text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 font-bold text-sm whitespace-nowrap flex items-center gap-2">
                        {t("tabs.automation")}
                        <span className="bg-primary/10 text-primary text-[10px] px-1.5 py-0.5 rounded-full uppercase tracking-tighter">{t("tabs.pro")}</span>
                    </button>
                </div>

                <div className="space-y-8">
                    <section className="bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800 p-8">
                        <h2 className="text-xl font-bold mb-8 text-slate-900 dark:text-white flex items-center gap-3">
                            <span className="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
                                <span className="material-symbols-outlined text-xl">edit_note</span>
                            </span>
                            {t("editor.title")}
                        </h2>
                        <div className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">{t("editor.templateLabel")}</label>
                                    <select className="w-full bg-slate-50 dark:bg-slate-800 border-slate-100 dark:border-slate-700 rounded-xl py-3 px-4 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none text-slate-900 dark:text-white font-medium cursor-pointer">
                                        <option>{t("editor.template1")}</option>
                                        <option>{t("editor.template2")}</option>
                                        <option>{t("editor.template3")}</option>
                                        <option>{t("editor.template4")}</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">{t("editor.recipientLabel")}</label>
                                    <select className="w-full bg-slate-50 dark:bg-slate-800 border-slate-100 dark:border-slate-700 rounded-xl py-3 px-4 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none text-slate-900 dark:text-white font-medium cursor-pointer">
                                        <option>{t("editor.recipient1")}</option>
                                        <option>{t("editor.recipient2")}</option>
                                        <option>{t("editor.recipient3")}</option>
                                        <option>{t("editor.recipient4")}</option>
                                    </select>
                                </div>
                            </div>
                            <div>
                                <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">{t("editor.textLabel")}</label>
                                <textarea className="w-full bg-slate-50 dark:bg-slate-800 border-slate-100 dark:border-slate-700 rounded-xl p-5 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none text-slate-900 dark:text-white text-sm leading-relaxed" placeholder={t("editor.textPlaceholder")} rows={4} defaultValue="Уважаемый(ая) {name}, срок действия вашего полиса {policy_number} истекает через 7 дней. Успейте продлить онлайн на osonpolis.uz со скидкой 5%!"></textarea>
                                <div className="flex justify-between items-center mt-3">
                                    <span className="text-[11px] text-slate-400 font-medium">{t("editor.variables")}<span className="text-primary">{`{name}`}</span>, <span className="text-primary">{`{policy_number}`}</span>, <span className="text-primary">{`{date}`}</span></span>
                                    <span className="text-[11px] font-bold px-2 py-1 bg-slate-100 dark:bg-slate-800 rounded text-slate-500 uppercase">138 / 160 (1 SMS)</span>
                                </div>
                            </div>
                            <div className="bg-slate-50 dark:bg-slate-800/50 rounded-2xl p-6 border border-slate-100 dark:border-slate-800 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                                <div className="flex flex-wrap gap-10">
                                    <div>
                                        <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mb-1">{t("editor.coverage")}</p>
                                        <p className="text-lg font-bold text-slate-900 dark:text-white">42 чел.</p>
                                    </div>
                                    <div>
                                        <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mb-1">{t("editor.smsCount")}</p>
                                        <p className="text-lg font-bold text-slate-900 dark:text-white">42 ед.</p>
                                    </div>
                                    <div>
                                        <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mb-1">{t("editor.totalCost")}</p>
                                        <p className="text-lg font-black text-primary">12 600 UZS</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4">
                                    <button className="bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 px-6 py-3.5 rounded-xl font-bold transition-all">
                                        {t("editor.btnSchedule")}
                                    </button>
                                    <button className="bg-primary hover:bg-primary/90 text-white px-8 py-3.5 rounded-xl font-bold flex items-center gap-2 transition-all shadow-lg shadow-primary/20 whitespace-nowrap">
                                        <span className="material-symbols-outlined text-lg">send</span>
                                        {t("editor.btnSend")}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800 overflow-hidden mb-10">
                        <div className="p-8 border-b border-slate-100 dark:border-slate-800 flex justify-between items-center">
                            <h2 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-3">
                                <span className="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
                                    <span className="material-symbols-outlined text-xl">history</span>
                                </span>
                                {t("history.title")}
                            </h2>
                            <Link href="#" className="text-primary text-sm font-bold hover:underline">{t("history.viewAll")}</Link>
                        </div>
                        <div className="overflow-x-auto">
                            <table className="w-full text-left max-w-full">
                                <thead className="bg-slate-50/50 dark:bg-slate-800/50">
                                    <tr>
                                        <th className="px-8 py-4 text-[11px] font-bold text-slate-400 uppercase tracking-widest">{t("history.recipient")}</th>
                                        <th className="px-8 py-4 text-[11px] font-bold text-slate-400 uppercase tracking-widest">{t("history.date")}</th>
                                        <th className="px-8 py-4 text-[11px] font-bold text-slate-400 uppercase tracking-widest">{t("history.status")}</th>
                                        <th className="px-8 py-4 text-[11px] font-bold text-slate-400 uppercase tracking-widest text-right">{t("history.type")}</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-50 dark:divide-slate-800">
                                    <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-colors">
                                        <td className="px-8 py-5 font-bold text-slate-700 dark:text-slate-300 whitespace-nowrap">+998 90 123 45 67</td>
                                        <td className="px-8 py-5 text-sm text-slate-500 w-[140px] whitespace-nowrap">Сегодня, 14:20</td>
                                        <td className="px-8 py-5">
                                            <span className="inline-flex items-center gap-1.5 py-1 px-3 rounded-full text-[11px] font-bold bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400 uppercase">
                                                <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span> {t("history.delivered")}
                                            </span>
                                        </td>
                                        <td className="px-8 py-5 text-sm text-slate-400 text-right">{t("history.reminder")}</td>
                                    </tr>
                                    <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-colors">
                                        <td className="px-8 py-5 font-bold text-slate-700 dark:text-slate-300 whitespace-nowrap">+998 93 987 65 43</td>
                                        <td className="px-8 py-5 text-sm text-slate-500 w-[140px] whitespace-nowrap">Сегодня, 12:05</td>
                                        <td className="px-8 py-5">
                                            <span className="inline-flex items-center gap-1.5 py-1 px-3 rounded-full text-[11px] font-bold bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400 uppercase">
                                                <span className="w-1.5 h-1.5 rounded-full bg-red-500"></span> {t("history.error")}
                                            </span>
                                        </td>
                                        <td className="px-8 py-5 text-sm text-slate-400 text-right">{t("history.broadcast")}</td>
                                    </tr>
                                    <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-colors">
                                        <td className="px-8 py-5 font-bold text-slate-700 dark:text-slate-300 whitespace-nowrap">+998 91 555 12 34</td>
                                        <td className="px-8 py-5 text-sm text-slate-500 w-[140px] whitespace-nowrap">Вчера, 18:45</td>
                                        <td className="px-8 py-5">
                                            <span className="inline-flex items-center gap-1.5 py-1 px-3 rounded-full text-[11px] font-bold bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400 uppercase">
                                                <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span> {t("history.delivered")}
                                            </span>
                                        </td>
                                        <td className="px-8 py-5 text-sm text-slate-400 text-right">{t("history.system")}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </section>


                </div>
            </main>
        </div>
    );
}
