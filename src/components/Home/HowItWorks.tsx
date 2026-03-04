"use client";

import { useTranslations } from "next-intl";

export function HowItWorks() {
    const t = useTranslations("Home");

    return (
        <section id="how-it-works-section" className="py-16 rounded-3xl mb-12 scroll-mt-24">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white mb-4">{t("steps.title")}</h2>
                <p className="text-slate-500 dark:text-slate-400 text-lg max-w-2xl mx-auto">{t("steps.subtitle")}</p>
            </div>

            <div className="relative px-4 md:px-12 max-w-6xl mx-auto">
                <div className="hidden md:block absolute top-[3rem] left-[20%] right-[20%] h-[2px] bg-blue-200 dark:bg-slate-700 -z-10"></div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    <div className="flex flex-col items-center text-center group">
                        <div className="size-24 rounded-full bg-white dark:bg-slate-800 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 dark:border-slate-700 flex items-center justify-center mb-8 relative z-10 transition-transform group-hover:-translate-y-2 duration-300">
                            <span className="material-symbols-outlined text-4xl text-primary transform -rotate-6">edit</span>
                            <div className="absolute -top-1 -right-1 size-7 bg-primary text-white rounded-full flex items-center justify-center font-bold text-xs border-2 border-white dark:border-slate-800 shadow-sm">1</div>
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{t("steps.step1.title")}</h3>
                        <p className="text-slate-500 dark:text-slate-400 leading-relaxed max-w-[280px]">{t("steps.step1.desc")}</p>
                    </div>

                    <div className="flex flex-col items-center text-center group">
                        <div className="size-24 rounded-full bg-white dark:bg-slate-800 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 dark:border-slate-700 flex items-center justify-center mb-8 relative z-10 transition-transform group-hover:-translate-y-2 duration-300">
                            <span className="material-symbols-outlined text-4xl text-primary">request_quote</span>
                            <div className="absolute -top-1 -right-1 size-7 bg-primary text-white rounded-full flex items-center justify-center font-bold text-xs border-2 border-white dark:border-slate-800 shadow-sm">2</div>
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{t("steps.step2.title")}</h3>
                        <p className="text-slate-500 dark:text-slate-400 leading-relaxed max-w-[280px]">{t("steps.step2.desc")}</p>
                    </div>

                    <div className="flex flex-col items-center text-center group">
                        <div className="size-24 rounded-full bg-white dark:bg-slate-800 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 dark:border-slate-700 flex items-center justify-center mb-8 relative z-10 transition-transform group-hover:-translate-y-2 duration-300">
                            <span className="material-symbols-outlined text-4xl text-primary transform rotate-6">mail</span>
                            <div className="absolute -top-1 -right-1 size-7 bg-primary text-white rounded-full flex items-center justify-center font-bold text-xs border-2 border-white dark:border-slate-800 shadow-sm">3</div>
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{t("steps.step3.title")}</h3>
                        <p className="text-slate-500 dark:text-slate-400 leading-relaxed max-w-[280px]">{t("steps.step3.desc")}</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
