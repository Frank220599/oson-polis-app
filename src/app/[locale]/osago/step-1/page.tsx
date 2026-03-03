"use client";

import { useState, Suspense } from "react";
import { Link } from "@/i18n/routing";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { useTranslations } from "next-intl";
import { useSearchParams, useRouter } from "next/navigation";

function OsagoStep1Content() {
    const t = useTranslations("OsagoStep1");
    const searchParams = useSearchParams();
    const router = useRouter();

    const [plate, setPlate] = useState(searchParams?.get("plate") || "");

    // Handle combined techPassport or license params, or legacy separated ones
    const paramTechPassport = searchParams?.get("techPassport") || searchParams?.get("license") || "";
    const paramSeries = searchParams?.get("techPassportSeries") || searchParams?.get("licenseSeries") || "";
    const paramNumber = searchParams?.get("techPassportNumber") || searchParams?.get("licenseNumber") || "";

    const [techPassportSeries, setTechPassportSeries] = useState(paramSeries || paramTechPassport.slice(0, 3) || "");
    const [techPassportNumber, setTechPassportNumber] = useState(paramNumber || paramTechPassport.slice(3) || "");

    const [errors, setErrors] = useState<{ plate?: string; techPassport?: string }>({});
    const drivers = searchParams?.get("drivers") || "";

    const validateAndProceed = () => {
        const newErrors: { plate?: string; techPassport?: string } = {};
        if (!plate.trim()) newErrors.plate = t("form.errors.plate");
        if (!techPassportSeries.trim() || !techPassportNumber.trim()) newErrors.techPassport = t("form.errors.techPassport");

        setErrors(newErrors);

        if (Object.keys(newErrors).length === 0) {
            router.push(`/osago/step-2?plate=${plate}&techPassportSeries=${techPassportSeries}&techPassportNumber=${techPassportNumber}&drivers=${drivers}`);
        }
    };

    return (
        <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 font-display min-h-screen flex flex-col transition-colors duration-200">
            <Header />

            {/* Main Content */}
            <main className="flex-grow flex flex-col items-center w-full px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
                <div className="w-full max-w-7xl">
                    <div className="mb-10">
                        <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white">{t("main.title")}</h1>
                        <p className="mt-3 text-lg text-slate-600 dark:text-slate-400">{t("main.subtitle")}</p>
                    </div>

                    <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-start">
                        <div className="lg:col-span-7 xl:col-span-8 flex flex-col gap-8">

                            {/* Progress indicators */}
                            <div className="w-full">
                                <nav className="grid grid-cols-4 gap-4 w-full">
                                    <div className="flex flex-col gap-2">
                                        <span className="text-[10px] md:text-xs font-bold text-primary uppercase tracking-wider">{t("progress.auto")}</span>
                                        <div className="h-1.5 w-full bg-primary rounded-full"></div>
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <span className="text-[10px] md:text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider">{t("progress.personal")}</span>
                                        <div className="h-1.5 w-full bg-slate-200 dark:bg-slate-800 rounded-full"></div>
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <span className="text-[10px] md:text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider">{t("progress.policy")}</span>
                                        <div className="h-1.5 w-full bg-slate-200 dark:bg-slate-800 rounded-full"></div>
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <span className="text-[10px] md:text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider">{t("progress.payment")}</span>
                                        <div className="h-1.5 w-full bg-slate-200 dark:bg-slate-800 rounded-full"></div>
                                    </div>
                                </nav>
                            </div>

                            {/* Form step 1 */}
                            <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 md:p-8 shadow-sm border border-slate-100 dark:border-slate-800 transition-all duration-200">
                                <div className="flex items-center gap-3 mb-8">
                                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary font-bold text-sm">1</span>
                                    <h2 className="text-xl font-bold text-slate-900 dark:text-white">{t("form.step1Title")}</h2>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-semibold text-slate-600 dark:text-slate-400 mb-2">{t("form.govNumber")}</label>
                                        <div className="relative">
                                            <input
                                                value={plate}
                                                onChange={(e) => { setPlate(e.target.value.toUpperCase().replace(/\s/g, '')); setErrors(prev => ({ ...prev, plate: undefined })); }}
                                                className={`w-full bg-slate-50 dark:bg-slate-800 border-2 rounded-xl px-4 pr-10 transition-all text-slate-900 dark:text-white h-14 font-bold uppercase tracking-widest placeholder:text-slate-400 focus:ring-0 ${errors.plate ? 'border-red-400 dark:border-red-500' : 'border-slate-200 dark:border-slate-700 focus:border-primary'}`}
                                                placeholder={t("form.govNumberPlaceholder")} type="text"
                                            />
                                            {plate && (
                                                <button
                                                    type="button"
                                                    aria-label="Clear field"
                                                    onClick={() => { setPlate(""); setErrors(prev => ({ ...prev, plate: undefined })); }}
                                                    className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors"
                                                >
                                                    <span className="material-symbols-outlined text-xl">close</span>
                                                </button>
                                            )}
                                        </div>
                                        {errors.plate && <span className="text-red-500 text-xs font-medium mt-1 inline-block">{errors.plate}</span>}
                                    </div>
                                    <div>
                                        <label className="block text-sm font-semibold text-slate-600 dark:text-slate-400 mb-2">{t("form.techPassport")}</label>
                                        <div className="flex gap-2">
                                            <div className="relative w-24">
                                                <input
                                                    value={techPassportSeries}
                                                    onChange={(e) => { setTechPassportSeries(e.target.value.toUpperCase().slice(0, 3)); setErrors(prev => ({ ...prev, techPassport: undefined })); }}
                                                    className={`w-full bg-slate-50 dark:bg-slate-800 border-2 rounded-xl px-3 transition-all text-slate-900 dark:text-white h-14 font-bold uppercase tracking-widest text-center placeholder:text-slate-400 focus:ring-0 ${errors.techPassport ? 'border-red-400 dark:border-red-500' : 'border-slate-200 dark:border-slate-700 focus:border-primary'}`}
                                                    placeholder="AAF" type="text"
                                                />

                                            </div>
                                            <div className="relative flex-grow">
                                                <input
                                                    value={techPassportNumber}
                                                    onChange={(e) => { setTechPassportNumber(e.target.value.replace(/\D/g, '').slice(0, 7)); setErrors(prev => ({ ...prev, techPassport: undefined })); }}
                                                    className={`w-full bg-slate-50 dark:bg-slate-800 border-2 rounded-xl px-4 pr-10 transition-all text-slate-900 dark:text-white h-14 font-bold tracking-widest placeholder:text-slate-400 focus:ring-0 ${errors.techPassport ? 'border-red-400 dark:border-red-500' : 'border-slate-200 dark:border-slate-700 focus:border-primary'}`}
                                                    placeholder="1234567" type="text"
                                                />
                                                {techPassportNumber && (
                                                    <button
                                                        type="button"
                                                        aria-label="Clear field"
                                                        onClick={() => { setTechPassportNumber(""); setErrors(prev => ({ ...prev, techPassport: undefined })); }}
                                                        className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors"
                                                    >
                                                        <span className="material-symbols-outlined text-xl">close</span>
                                                    </button>
                                                )}
                                            </div>
                                        </div>
                                        {errors.techPassport && <span className="text-red-500 text-xs font-medium mt-1 inline-block">{errors.techPassport}</span>}
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-4">
                                <Link href="/" className="flex items-center justify-center rounded-xl h-14 px-8 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-base font-bold hover:bg-slate-200 dark:hover:bg-slate-700 transition-all w-full md:w-auto order-2 md:order-1">
                                    <span className="material-symbols-outlined mr-2 text-xl">arrow_back</span>
                                    {t("buttons.back")}
                                </Link>
                                <button
                                    onClick={validateAndProceed}
                                    className="flex items-center justify-center rounded-xl h-14 px-12 bg-primary text-white text-base font-bold hover:bg-blue-600 transition-all shadow-lg shadow-blue-200 dark:shadow-none w-full md:w-auto order-1 md:order-2"
                                >
                                    {t("buttons.continue")}
                                    <span className="material-symbols-outlined ml-2 text-xl">arrow_forward</span>
                                </button>
                            </div>
                        </div>

                        {/* Sidebar */}
                        <div className="lg:col-span-5 xl:col-span-4 flex flex-col gap-6">
                            <div className="bg-blue-50 dark:bg-slate-800/50 rounded-2xl p-6 border border-blue-100 dark:border-slate-700">
                                <div className="flex items-start gap-4">
                                    <div className="bg-white dark:bg-slate-700 p-2.5 rounded-xl shadow-sm text-primary flex-shrink-0 mt-1">
                                        <span className="material-symbols-outlined">description</span>
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-slate-900 dark:text-white text-lg">{t("info.title")}</h3>
                                        <p className="text-sm text-slate-600 dark:text-slate-400 mt-2 leading-relaxed">
                                            {t("info.text")}
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 shadow-sm">
                                <h4 className="text-xs font-extrabold text-slate-400 dark:text-slate-500 mb-6 uppercase tracking-[0.15em]">{t("sidebar.title")}</h4>
                                <div className="space-y-4">
                                    <div className="flex justify-between items-center text-sm">
                                        <span className="text-slate-500 dark:text-slate-400">{t("sidebar.baseTariff")}</span>
                                        <span className="font-bold text-slate-900 dark:text-white">{t("sidebar.pending")}</span>
                                    </div>
                                    <div className="flex justify-between items-center text-sm">
                                        <span className="text-slate-500 dark:text-slate-400">{t("sidebar.duration")}</span>
                                        <span className="font-bold text-slate-900 dark:text-white">{t("sidebar.year")}</span>
                                    </div>
                                    <div className="pt-6 border-t border-slate-100 dark:border-slate-800 flex justify-between items-center">
                                        <span className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider">{t("sidebar.total")}</span>
                                        <div className="flex flex-col items-end">
                                            <span className="text-2xl font-black text-slate-300 dark:text-slate-700">-- --- UZS</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            {/* Footer */}
            <Footer />
        </div>
    );
}

export default function OsagoStep1Page() {
    return (
        <Suspense fallback={<div className="bg-[#f8fafc] dark:bg-[#0f172a] min-h-screen flex items-center justify-center"><div className="w-8 h-8 rounded-full border-4 border-blue-500 border-t-transparent animate-spin"></div></div>}>
            <OsagoStep1Content />
        </Suspense>
    );
}
