"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";

interface HeroProps {
    onCalcClick: () => void;
    onHowItWorksClick: () => void;
}

export function Hero({ onCalcClick, onHowItWorksClick }: HeroProps) {
    const t = useTranslations("Home");

    return (
        <div className="rounded-2xl overflow-hidden relative min-h-[520px] flex flex-col justify-end p-8 sm:p-12 md:p-16 group shadow-2xl">
            <Image
                src="/malibu-banner.png"
                alt="Chevrolet Malibu driving in Tashkent, Uzbekistan"
                fill
                priority
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 1280px) 100vw, 1280px"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 to-primary-900/20 z-0"></div>
            <div className="relative z-10 max-w-3xl flex flex-col gap-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 w-fit">
                    <span className="material-symbols-outlined text-green-400 text-sm">verified_user</span>
                    <span className="text-white font-semibold text-xs tracking-wide uppercase">{t("partnerBadge")}</span>
                </div>
                <h1 className="text-white text-4xl sm:text-5xl md:text-6xl font-black leading-tight tracking-[-0.033em]">
                    {t("heroTitle1")} <span className="text-primary-300">{t("heroTitleHighlight")}</span>
                </h1>
                <p className="text-slate-100 text-lg sm:text-xl font-medium leading-relaxed max-w-xl opacity-90">
                    {t("heroSubtitle")}
                </p>
                <div className="flex flex-wrap gap-4 mt-4">
                    <button
                        onClick={onCalcClick}
                        className="flex items-center justify-center gap-2 rounded-lg h-14 px-8 bg-primary text-white text-base font-bold hover:bg-primary-hover transition-colors shadow-lg shadow-primary/30"
                    >
                        {t("calcBtn")}
                        <span className="material-symbols-outlined text-sm">arrow_downward</span>
                    </button>
                    <button
                        onClick={onHowItWorksClick}
                        className="flex items-center justify-center rounded-lg h-14 px-8 bg-white/10 backdrop-blur-md border border-white/30 text-white text-base font-bold hover:bg-white/20 transition-colors"
                    >
                        {t("howItWorksBtn")}
                    </button>
                </div>
            </div>
        </div>
    );
}
