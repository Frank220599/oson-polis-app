"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";

export function Products() {
    const t = useTranslations("Home");

    return (
        <section className="py-12 md:py-16">
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white mb-4">{t("products.title")}</h2>
                <p className="text-slate-500 dark:text-slate-400 text-lg max-w-2xl mx-auto">{t("products.subtitle")}</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-white dark:bg-slate-900 p-8 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 hover:shadow-xl hover:border-primary/20 transition-all duration-300 group flex flex-col h-full relative overflow-hidden">
                    <div className="absolute right-0 top-0 size-32 bg-blue-100/50 dark:bg-blue-900/30 rounded-bl-[100px] transition-all group-hover:bg-blue-100 dark:group-hover:bg-blue-900/50"></div>
                    <div className="size-20 rounded-2xl bg-blue-100/50 dark:bg-slate-800 text-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-inner">
                        <span className="material-symbols-outlined text-5xl">directions_car</span>
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3 relative z-10">{t("products.osago.title")}</h3>
                    <p className="text-slate-500 dark:text-slate-400 text-base leading-relaxed mb-6 flex-grow relative z-10">
                        {t("products.osago.desc")}
                    </p>
                    <Link href="/osago" className="w-full">
                        <button className="w-full py-3 rounded-lg border-2 border-primary text-primary font-bold text-sm group-hover:bg-primary group-hover:text-white group-hover:shadow-lg group-hover:shadow-primary/20 transition-all duration-300 relative z-10 w-full text-center block">
                            {t("products.moreBtn")}
                        </button>
                    </Link>
                </div>

                <div className="bg-white dark:bg-slate-900 p-8 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 hover:shadow-xl hover:border-primary/20 transition-all duration-300 group flex flex-col h-full relative overflow-hidden">
                    <div className="absolute right-0 top-0 size-32 bg-blue-100/50 dark:bg-blue-900/30 rounded-bl-[100px] transition-all group-hover:bg-blue-100 dark:group-hover:bg-blue-900/50"></div>
                    <div className="size-20 rounded-2xl bg-blue-100/50 dark:bg-slate-800 text-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-inner">
                        <span className="material-symbols-outlined text-5xl">security</span>
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3 relative z-10">{t("products.kasko.title")}</h3>
                    <p className="text-slate-500 dark:text-slate-400 text-base leading-relaxed mb-6 flex-grow relative z-10">
                        {t("products.kasko.desc")}
                    </p>
                    <Link href="/kasko" className="w-full">
                        <button className="w-full py-3 rounded-lg border-2 border-primary text-primary font-bold text-sm group-hover:bg-primary group-hover:text-white group-hover:shadow-lg group-hover:shadow-primary/20 transition-all duration-300 relative z-10 w-full text-center block" >
                            {t("products.moreBtn")}
                        </button>
                    </Link>
                </div>

                <div className="bg-white dark:bg-slate-900 p-8 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 hover:shadow-xl hover:border-primary/20 transition-all duration-300 group flex flex-col h-full relative overflow-hidden">
                    <div className="absolute right-0 top-0 size-32 bg-blue-100/50 dark:bg-blue-900/30 rounded-bl-[100px] transition-all group-hover:bg-blue-100 dark:group-hover:bg-blue-900/50"></div>
                    <div className="size-20 rounded-2xl bg-blue-100/50 dark:bg-slate-800 text-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-inner">
                        <span className="material-symbols-outlined text-5xl">public</span>
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3 relative z-10">{t("products.travel.title")}</h3>
                    <p className="text-slate-500 dark:text-slate-400 text-base leading-relaxed mb-6 flex-grow relative z-10">
                        {t("products.travel.desc")}
                    </p>
                    <Link href="/travel" className="w-full">
                        <button className="w-full py-3 rounded-lg border-2 border-primary text-primary font-bold text-sm group-hover:bg-primary group-hover:text-white group-hover:shadow-lg group-hover:shadow-primary/20 transition-all duration-300 relative z-10 w-full text-center block">
                            {t("products.moreBtn")}
                        </button>
                    </Link>
                </div>
            </div>
        </section>
    );
}
