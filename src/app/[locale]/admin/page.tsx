import { Link } from "@/i18n/routing";
import Image from "next/image";
import { ThemeSwitcher } from "@/components/ThemeSwitcher";
import { useTranslations } from "next-intl";
import { AdminSidebar } from "@/components/AdminSidebar";

export default function AdminDashboard() {
    const t = useTranslations("Admin");
    return (
        <div className="bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-slate-100 transition-colors duration-200 min-h-screen flex">
            <AdminSidebar />

            {/* Main Content */}
            <main className="flex-1 ml-64 min-h-screen flex flex-col overflow-hidden">
                {/* Header */}
                <header className="h-16 flex items-center justify-between px-8 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 sticky top-0 z-40">
                    <h1 className="text-lg font-bold text-slate-900 dark:text-white">{t("main.title")}</h1>
                    <div className="flex items-center gap-4">
                        <ThemeSwitcher />
                        <button className="flex items-center justify-center rounded-lg h-10 w-10 text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
                            <span className="material-symbols-outlined">notifications</span>
                        </button>
                    </div>
                </header>

                <div className="flex-1 overflow-y-auto bg-slate-50 dark:bg-[#0a0f16] p-6 lg:p-8">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
                        <div>
                            <h1 className="text-2xl lg:text-3xl font-black text-slate-900 dark:text-white tracking-tight">{t("main.title")}</h1>
                            <p className="text-slate-500 dark:text-slate-400 mt-1">{t("main.subtitle")}</p>
                        </div>
                        <div className="flex flex-wrap gap-3">
                            <button className="flex items-center gap-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:bg-slate-50 text-slate-700 dark:text-slate-300 px-5 py-2.5 rounded-lg text-sm font-bold transition-all shadow-sm">
                                <span className="material-symbols-outlined text-lg">download</span>
                                <span>{t("main.exportBtn")}</span>
                            </button>
                            <button className="flex items-center gap-2 bg-primary hover:bg-primary/90 text-white px-5 py-2.5 rounded-lg text-sm font-bold shadow-lg shadow-primary/20 transition-all">
                                <span className="material-symbols-outlined text-lg">sms</span>
                                <span>{t("main.smsBtn")}</span>
                            </button>
                        </div>
                    </div>

                    <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-5 mb-6 shadow-sm">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                            <div className="flex flex-col gap-1.5">
                                <label className="text-[11px] font-bold text-slate-400 uppercase tracking-wider px-1">{t("filters.search")}</label>
                                <div className="relative">
                                    <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-xl">search</span>
                                    <input className="w-full pl-10 pr-4 py-2 bg-slate-100 dark:bg-slate-800 border-none rounded-lg text-sm text-slate-900 dark:text-white placeholder:text-slate-500 focus:ring-2 focus:ring-primary/20" placeholder={t("filters.searchPlaceholder")} type="text" />
                                </div>
                            </div>
                            <div className="flex flex-col gap-1.5">
                                <label className="text-[11px] font-bold text-slate-400 uppercase tracking-wider px-1">{t("filters.period.label")}</label>
                                <select className="w-full px-4 py-2 bg-slate-100 dark:bg-slate-800 border-none rounded-lg text-sm text-slate-700 dark:text-slate-300 focus:ring-2 focus:ring-primary/20 cursor-pointer appearance-none bg-[url('data:image/svg+xml;utf8,<svg%20xmlns=\'http://www.w3.org/2000/svg\'%20fill=\'none\'%20viewBox=\'0%200%2020%2020\'><path%20stroke=\'%236b7280\'%20stroke-linecap=\'round\'%20stroke-linejoin=\'round\'%20stroke-width=\'1.5\'%20d=\'M6%208l4%204%204-4\'/></svg>')] bg-no-repeat bg-[position:right_0.5rem_center] bg-[size:1.5em_1.5em] pr-10" defaultValue="all">
                                    <option value="all">{t("filters.period.all")}</option>
                                    <option value="today">{t("filters.period.today")}</option>
                                    <option value="7d">{t("filters.period.last7")}</option>
                                    <option value="30d">{t("filters.period.last30")}</option>
                                </select>
                            </div>
                            <div className="flex flex-col gap-1.5">
                                <label className="text-[11px] font-bold text-slate-400 uppercase tracking-wider px-1">{t("filters.payment.label")}</label>
                                <select className="w-full px-4 py-2 bg-slate-100 dark:bg-slate-800 border-none rounded-lg text-sm text-slate-700 dark:text-slate-300 focus:ring-2 focus:ring-primary/20 cursor-pointer appearance-none bg-[url('data:image/svg+xml;utf8,<svg%20xmlns=\'http://www.w3.org/2000/svg\'%20fill=\'none\'%20viewBox=\'0%200%2020%2020\'><path%20stroke=\'%236b7280\'%20stroke-linecap=\'round\'%20stroke-linejoin=\'round\'%20stroke-width=\'1.5\'%20d=\'M6%208l4%204%204-4\'/></svg>')] bg-no-repeat bg-[position:right_0.5rem_center] bg-[size:1.5em_1.5em] pr-10" defaultValue="all">
                                    <option value="all">{t("filters.payment.all")}</option>
                                    <option value="payme">{t("filters.payment.payme")}</option>
                                    <option value="click">{t("filters.payment.click")}</option>
                                    <option value="uzum">{t("filters.payment.uzum")}</option>
                                </select>
                            </div>
                            <div className="flex flex-col gap-1.5">
                                <label className="text-[11px] font-bold text-slate-400 uppercase tracking-wider px-1">{t("filters.status.label")}</label>
                                <select className="w-full px-4 py-2 bg-slate-100 dark:bg-slate-800 border-none rounded-lg text-sm text-slate-700 dark:text-slate-300 focus:ring-2 focus:ring-primary/20 cursor-pointer appearance-none bg-[url('data:image/svg+xml;utf8,<svg%20xmlns=\'http://www.w3.org/2000/svg\'%20fill=\'none\'%20viewBox=\'0%200%2020%2020\'><path%20stroke=\'%236b7280\'%20stroke-linecap=\'round\'%20stroke-linejoin=\'round\'%20stroke-width=\'1.5\'%20d=\'M6%208l4%204%204-4\'/></svg>')] bg-no-repeat bg-[position:right_0.5rem_center] bg-[size:1.5em_1.5em] pr-10" defaultValue="all">
                                    <option value="all">{t("filters.status.all")}</option>
                                    <option value="paid">{t("filters.status.paid")}</option>
                                    <option value="pending">{t("filters.status.pending")}</option>
                                    <option value="cancelled">{t("filters.status.cancelled")}</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
                        <div className="overflow-x-auto">
                            <table className="w-full text-left border-collapse min-w-[1200px]">
                                <thead>
                                    <tr className="bg-slate-50 dark:bg-slate-800/50 border-b border-slate-200 dark:border-slate-800">
                                        <th className="px-4 py-4 text-[11px] font-bold text-slate-500 uppercase tracking-wider">{t("table.headers.id")}</th>
                                        <th className="px-4 py-4 text-[11px] font-bold text-slate-500 uppercase tracking-wider">{t("table.headers.date")}</th>
                                        <th className="px-4 py-4 text-[11px] font-bold text-slate-500 uppercase tracking-wider">{t("table.headers.client")}</th>
                                        <th className="px-4 py-4 text-[11px] font-bold text-slate-500 uppercase tracking-wider">{t("table.headers.product")}</th>
                                        <th className="px-4 py-4 text-[11px] font-bold text-slate-500 uppercase tracking-wider">{t("table.headers.status")}</th>
                                        <th className="px-4 py-4 text-[11px] font-bold text-slate-500 uppercase tracking-wider">{t("table.headers.amount")}</th>
                                        <th className="px-4 py-4 text-[11px] font-bold text-slate-500 uppercase tracking-wider">{t("table.headers.payment")}</th>
                                        <th className="px-4 py-4 text-[11px] font-bold text-slate-500 uppercase tracking-wider">{t("table.headers.plateNumber")}</th>
                                        <th className="px-4 py-4 text-[11px] font-bold text-slate-500 uppercase tracking-wider">{t("table.headers.contractNo")}</th>
                                        <th className="px-4 py-4 text-[11px] font-bold text-slate-500 uppercase tracking-wider text-right">{t("table.headers.actions")}</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                                    <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors">
                                        <td className="px-4 py-4 text-sm text-slate-600 dark:text-slate-400">3648188</td>
                                        <td className="px-4 py-4 text-xs text-slate-600 dark:text-slate-400">01.03.2024 16:35:13</td>
                                        <td className="px-4 py-4 text-sm font-bold text-slate-900 dark:text-white">НУРЛАН УУЛУ АМАНТУР</td>
                                        <td className="px-4 py-4 text-xs text-slate-600 dark:text-slate-400">TVEFJMS onlayn polis (E-OSAGO)</td>
                                        <td className="px-4 py-4">
                                            <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-100 text-emerald-700 dark:bg-emerald-500/20 dark:text-emerald-400">
                                                {t("table.status.paid")}
                                            </span>
                                        </td>
                                        <td className="px-4 py-4 text-sm font-bold text-slate-700 dark:text-slate-300">112,000 UZS</td>
                                        <td className="px-4 py-4">
                                            <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-blue-100 text-blue-700 dark:bg-blue-500/20 dark:text-blue-400">Payme</span>
                                        </td>
                                        <td className="px-4 py-4 text-sm font-mono font-bold text-slate-700 dark:text-slate-300">06KG351ATN</td>
                                        <td className="px-4 py-4 text-sm text-slate-600 dark:text-slate-400">01-08/008114186110</td>
                                        <td className="px-4 py-4 text-right">
                                            <div className="flex justify-end gap-2">
                                                <button className="text-slate-400 hover:text-primary transition-colors"><span className="material-symbols-outlined text-lg">print</span></button>
                                                <button className="text-slate-400 hover:text-primary transition-colors"><span className="material-symbols-outlined text-lg">visibility</span></button>
                                                <button className="text-slate-400 hover:text-rose-500 transition-colors"><span className="material-symbols-outlined text-lg">delete</span></button>
                                            </div>
                                        </td>
                                    </tr>

                                    <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors">
                                        <td className="px-4 py-4 text-sm text-slate-600 dark:text-slate-400">3648187</td>
                                        <td className="px-4 py-4 text-xs text-slate-600 dark:text-slate-400">01.03.2024 16:34:08</td>
                                        <td className="px-4 py-4 text-sm font-bold text-slate-900 dark:text-white">ONARKULOV YUNUSALI</td>
                                        <td className="px-4 py-4 text-xs text-slate-600 dark:text-slate-400">TVEFJMS onlayn polis (E-OSAGO)</td>
                                        <td className="px-4 py-4">
                                            <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-100 text-emerald-700 dark:bg-emerald-500/20 dark:text-emerald-400">
                                                {t("table.status.paid")}
                                            </span>
                                        </td>
                                        <td className="px-4 py-4 text-sm font-bold text-slate-700 dark:text-slate-300">160,000 UZS</td>
                                        <td className="px-4 py-4">
                                            <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-green-100 text-green-700 dark:bg-green-500/20 dark:text-green-400">Click</span>
                                        </td>
                                        <td className="px-4 py-4 text-sm font-mono font-bold text-slate-700 dark:text-slate-300">40P930OB</td>
                                        <td className="px-4 py-4 text-sm text-slate-600 dark:text-slate-400">13-20/008114186109</td>
                                        <td className="px-4 py-4 text-right">
                                            <div className="flex justify-end gap-2">
                                                <button className="text-slate-400 hover:text-primary transition-colors"><span className="material-symbols-outlined text-lg">print</span></button>
                                                <button className="text-slate-400 hover:text-primary transition-colors"><span className="material-symbols-outlined text-lg">visibility</span></button>
                                                <button className="text-slate-400 hover:text-rose-500 transition-colors"><span className="material-symbols-outlined text-lg">delete</span></button>
                                            </div>
                                        </td>
                                    </tr>

                                    <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors">
                                        <td className="px-4 py-4 text-sm text-slate-600 dark:text-slate-400">3648182</td>
                                        <td className="px-4 py-4 text-xs text-slate-600 dark:text-slate-400">01.03.2024 16:31:20</td>
                                        <td className="px-4 py-4 text-sm font-bold text-slate-900 dark:text-white">BAKIAXUNOVA MUXTARAMXON</td>
                                        <td className="px-4 py-4 text-xs text-slate-600 dark:text-slate-400">TVEFJMS onlayn polis (E-OSAGO)</td>
                                        <td className="px-4 py-4">
                                            <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-amber-100 text-amber-700 dark:bg-amber-500/20 dark:text-amber-400">
                                                {t("table.status.pending")}
                                            </span>
                                        </td>
                                        <td className="px-4 py-4 text-sm font-bold text-slate-700 dark:text-slate-300">112,000 UZS</td>
                                        <td className="px-4 py-4 text-sm text-slate-400">—</td>
                                        <td className="px-4 py-4 text-sm font-mono font-bold text-slate-700 dark:text-slate-300">60Y473LB</td>
                                        <td className="px-4 py-4 text-sm text-slate-600 dark:text-slate-400">—</td>
                                        <td className="px-4 py-4 text-right">
                                            <div className="flex justify-end gap-2">
                                                <button className="text-slate-400 hover:text-primary transition-colors"><span className="material-symbols-outlined text-lg">print</span></button>
                                                <button className="text-slate-400 hover:text-primary transition-colors"><span className="material-symbols-outlined text-lg">visibility</span></button>
                                                <button className="text-slate-400 hover:text-rose-500 transition-colors"><span className="material-symbols-outlined text-lg">delete</span></button>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="px-6 py-4 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between">
                            <p className="text-xs text-slate-500">{t("pagination.showing", { count: "1-10", total: "1,248" })}</p>
                            <div className="flex gap-1">
                                <button className="p-2 rounded-lg border border-slate-200 dark:border-slate-800 text-slate-500 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all">
                                    <span className="material-symbols-outlined text-sm">chevron_left</span>
                                </button>
                                <button className="px-3 py-1 rounded-lg bg-primary text-white text-xs font-bold">1</button>
                                <button className="px-3 py-1 rounded-lg border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 text-xs font-bold hover:bg-slate-50">2</button>
                                <button className="px-3 py-1 rounded-lg border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 text-xs font-bold hover:bg-slate-50">3</button>
                                <span className="px-2 text-slate-400">...</span>
                                <button className="px-3 py-1 rounded-lg border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 text-xs font-bold hover:bg-slate-50">125</button>
                                <button className="p-2 rounded-lg border border-slate-200 dark:border-slate-800 text-slate-500 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all">
                                    <span className="material-symbols-outlined text-sm">chevron_right</span>
                                </button>
                            </div>
                        </div>
                    </div>

                </div>
            </main>
        </div>
    );
}

