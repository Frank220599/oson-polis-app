"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";

export function TrustBadges() {
    const t = useTranslations("Home");

    return (
        <div className="py-12 flex flex-col items-center gap-10 border-t border-slate-100 dark:border-slate-800">
            <p className="text-slate-400 dark:text-slate-500 font-bold text-center uppercase tracking-widest text-xs">{t("trustBadge")}</p>
            <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
                <div className="h-10 flex items-center gap-3">
                    <Image src="/gross-logo.svg" alt="Gross Insurance" width={120} height={40} className="h-full w-auto" style={{ width: 'auto', height: 'auto' }} />
                </div>
            </div>
        </div>
    );
}
