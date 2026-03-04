"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";

interface OffersProps {
    plate: string;
    licenseSeries: string;
    licenseNumber: string;
    drivers: string;
}

export function Offers({ plate, licenseSeries, licenseNumber, drivers }: OffersProps) {
    const t = useTranslations("Home");

    return (
        <div className="mt-12 pt-10 border-t border-slate-100 dark:border-slate-800">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6">{t("offers.title")}</h3>
            <div className="space-y-4">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-5 rounded-xl border border-slate-100 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/50 hover:border-primary/30 transition-colors">
                    <div className="flex items-center gap-4 w-full sm:w-auto">
                        <div className="size-12 bg-white rounded-lg shadow-sm flex items-center justify-center border border-slate-100 p-1">
                            <Image src="/gross-logo.svg" alt="Gross Insurance" width={40} height={40} className="object-contain" style={{ width: 'auto', height: 'auto' }} />
                        </div>
                        <div>
                            <h4 className="font-bold text-lg text-slate-900 dark:text-white">Gross Insurance</h4>
                            <div className="flex items-center gap-1 text-yellow-500 text-sm">
                                <span className="material-symbols-outlined text-sm fill-current">star</span>
                                <span className="font-medium text-slate-600 dark:text-slate-400">4.7</span>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center justify-between w-full sm:w-auto gap-6">
                        <div className="text-right sm:text-left">
                            <span className="block text-xs text-slate-500">{t("offers.priceLabel")}</span>
                            <span className="block font-bold text-lg text-slate-900 dark:text-white">44 000 {t("offers.currency")}</span>
                        </div>
                        <Link
                            href={`/osago/step-1?plate=${plate}&licenseSeries=${licenseSeries}&licenseNumber=${licenseNumber}&drivers=${drivers}`}
                            className="px-6 py-2.5 bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-lg text-sm font-bold hover:bg-slate-50 dark:hover:bg-slate-600 hover:text-primary transition-colors text-center"
                        >
                            {t("offers.selectBtn")}
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
