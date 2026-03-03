"use client";

import { useState, useEffect } from "react";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import { useClientSearchParams } from "@/hooks/useClientSearchParams";

export default function OsagoStep2Page() {
    const t = useTranslations("OsagoStep2");
    const router = useRouter();
    const searchParams = useClientSearchParams();

    const [plate, setPlate] = useState("");
    const [techPassportSeries, setTechPassportSeries] = useState("");
    const [techPassportNumber, setTechPassportNumber] = useState("");
    const [techPassport, setTechPassport] = useState("");
    const [drivers, setDrivers] = useState("");

    // Step 2 specific state
    const [pinfl, setPinfl] = useState("");
    const [passportSeries, setPassportSeries] = useState("");
    const [passportNumber, setPassportNumber] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("+998 ");
    const [errors, setErrors] = useState<{ pinfl?: string; passportSeries?: string; passportNumber?: string; phone?: string }>({});

    // Read URL params on client mount (keeps page statically renderable)
    useEffect(() => {
        if (!searchParams) return;
        setPlate(searchParams.get("plate") || "");
        setTechPassportSeries(searchParams.get("techPassportSeries") || searchParams.get("licenseSeries") || "");
        setTechPassportNumber(searchParams.get("techPassportNumber") || searchParams.get("licenseNumber") || "");
        setTechPassport(searchParams.get("techPassport") || searchParams.get("license") || "");
        setDrivers(searchParams.get("drivers") || "");

        setPinfl(searchParams.get("pinfl") || "");
        const passport = searchParams.get("passport") || "";
        if (passport.length >= 2) {
            setPassportSeries(passport.slice(0, 2));
            setPassportNumber(passport.slice(2));
        }
        const phone = searchParams.get("phone");
        if (phone) {
            setPhoneNumber(decodeURIComponent(phone));
        }

        router.prefetch("/osago/step-3");
    }, [searchParams, router]);

    const validateAndProceed = () => {
        const newErrors: typeof errors = {};
        if (pinfl.replace(/\s/g, '').length !== 14) newErrors.pinfl = t("form.errors.pinfl");
        if (passportSeries.length !== 2) newErrors.passportSeries = t("form.errors.passportSeries");
        if (passportNumber.length !== 7) newErrors.passportNumber = t("form.errors.passportNumber");
        if (phoneNumber.length < 19) newErrors.phone = t("form.errors.phone");

        setErrors(newErrors);

        if (Object.keys(newErrors).length === 0) {
            router.push(`/osago/step-3?plate=${plate}&techPassportSeries=${techPassportSeries}&techPassportNumber=${techPassportNumber}&techPassport=${techPassport}&pinfl=${pinfl}&passport=${passportSeries}${passportNumber}&phone=${encodeURIComponent(phoneNumber)}&drivers=${drivers}`);
        }
    };

    return (
        <>
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
                                        <span className="text-[10px] md:text-xs font-medium text-primary uppercase tracking-wider">{t("progress.auto")}</span>
                                        <div className="h-1.5 w-full bg-primary rounded-full"></div>
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <span className="text-[10px] md:text-xs font-medium text-primary uppercase tracking-wider">{t("progress.personal")}</span>
                                        <div className="h-1.5 w-full bg-primary rounded-full"></div>
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <span className="text-[10px] md:text-xs font-medium text-slate-400 dark:text-slate-500 uppercase tracking-wider">{t("progress.policy")}</span>
                                        <div className="h-1.5 w-full bg-slate-200 dark:bg-slate-800 rounded-full"></div>
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <span className="text-[10px] md:text-xs font-medium text-slate-400 dark:text-slate-500 uppercase tracking-wider">{t("progress.payment")}</span>
                                        <div className="h-1.5 w-full bg-slate-200 dark:bg-slate-800 rounded-full"></div>
                                    </div>
                                </nav>
                            </div>

                            <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800 p-6 md:p-8">
                                <form className="space-y-6">
                                    <div className="flex items-center gap-3 mb-6">
                                        <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary font-bold text-sm">2</span>
                                        <h2 className="text-xl font-bold text-slate-900 dark:text-white">{t("form.stepTitle")}</h2>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-semibold text-slate-600 dark:text-slate-400 mb-2">{t("form.pinfl")}</label>
                                        <div className="relative">
                                            <input
                                                value={pinfl}
                                                onChange={(e) => {
                                                    const raw = e.target.value.replace(/\D/g, '').slice(0, 14);
                                                    setPinfl(raw);
                                                    setErrors(prev => ({ ...prev, pinfl: undefined }));
                                                }}
                                                className={`w-full bg-slate-50 dark:bg-slate-800 border-2 rounded-xl px-4 pr-10 transition-all text-slate-900 dark:text-white h-14 font-medium placeholder:text-slate-400 focus:ring-0 ${errors.pinfl ? 'border-red-400 dark:border-red-500' : 'border-slate-200 dark:border-slate-700 focus:border-primary'}`}
                                                placeholder="12345678901234"
                                                type="text"
                                            />
                                            {pinfl && (
                                                <button
                                                    type="button"
                                                    tabIndex={-1}
                                                    aria-label="Clear field"
                                                    onClick={() => { setPinfl(""); setErrors(prev => ({ ...prev, pinfl: undefined })); }}
                                                    className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors"
                                                >
                                                    <span className="material-symbols-outlined text-xl">close</span>
                                                </button>
                                            )}
                                        </div>
                                        {errors.pinfl && <span className="text-red-500 text-xs font-medium mt-1 inline-block">{errors.pinfl}</span>}
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <label className="block text-sm font-semibold text-slate-600 dark:text-slate-400 mb-2">{t("form.passport")}</label>
                                            <div className="flex gap-2">
                                                <div className="flex flex-col">
                                                    <input
                                                        value={passportSeries}
                                                        onChange={(e) => { setPassportSeries(e.target.value.toUpperCase().replace(/[^A-Z]/g, '').slice(0, 2)); setErrors(prev => ({ ...prev, passportSeries: undefined })); }}
                                                        className={`w-20 bg-slate-50 dark:bg-slate-800 border-2 rounded-xl h-14 text-center font-bold uppercase transition-all text-slate-900 dark:text-white placeholder:text-slate-400 focus:ring-0 ${errors.passportSeries ? 'border-red-400 dark:border-red-500' : 'border-slate-200 dark:border-slate-700 focus:border-primary'}`}
                                                        maxLength={2}
                                                        placeholder="AA"
                                                        type="text"
                                                    />
                                                </div>
                                                <div className="flex-1 flex flex-col relative">
                                                    <input
                                                        value={passportNumber}
                                                        onChange={(e) => { setPassportNumber(e.target.value.replace(/\D/g, '').slice(0, 7)); setErrors(prev => ({ ...prev, passportNumber: undefined })); }}
                                                        className={`w-full bg-slate-50 dark:bg-slate-800 border-2 rounded-xl px-4 pr-10 transition-all text-slate-900 dark:text-white h-14 font-medium placeholder:text-slate-400 focus:ring-0 ${errors.passportNumber ? 'border-red-400 dark:border-red-500' : 'border-slate-200 dark:border-slate-700 focus:border-primary'}`}
                                                        maxLength={7}
                                                        placeholder="0000000"
                                                        type="text"
                                                    />
                                                    {passportNumber && (
                                                        <button
                                                            type="button"
                                                            tabIndex={-1}
                                                            aria-label="Clear field"
                                                            onClick={() => { setPassportNumber(""); setErrors(prev => ({ ...prev, passportNumber: undefined })); }}
                                                            className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors"
                                                        >
                                                            <span className="material-symbols-outlined text-xl">close</span>
                                                        </button>
                                                    )}
                                                </div>
                                            </div>
                                            {(errors.passportSeries || errors.passportNumber) && (
                                                <span className="text-red-500 text-xs font-medium mt-1 inline-block">
                                                    {errors.passportSeries || errors.passportNumber}
                                                </span>
                                            )}
                                        </div>
                                        <div>
                                            <label className="block text-sm font-semibold text-slate-600 dark:text-slate-400 mb-2">{t("form.phone")}</label>
                                            <div className="relative">
                                                <input
                                                    value={phoneNumber}
                                                    onChange={(e) => {
                                                        let val = e.target.value.replace(/\D/g, "");

                                                        // Always keep +998
                                                        if (!val.startsWith("998")) {
                                                            val = "998" + val;
                                                        }

                                                        // Limit to 12 digits (998 + 9 digits)
                                                        val = val.slice(0, 12);

                                                        // Format: +998 (XX) XXX XX XX
                                                        let formatted = "+998";
                                                        if (val.length > 3) {
                                                            formatted += " (" + val.slice(3, 5);
                                                        }
                                                        if (val.length > 5) {
                                                            formatted += ") " + val.slice(5, 8);
                                                        }
                                                        if (val.length > 8) {
                                                            formatted += " " + val.slice(8, 10);
                                                        }
                                                        if (val.length > 10) {
                                                            formatted += " " + val.slice(10, 12);
                                                        }

                                                        setPhoneNumber(formatted);
                                                        setErrors(prev => ({ ...prev, phone: undefined }));
                                                    }}
                                                    className={`w-full bg-slate-50 dark:bg-slate-800 border-2 rounded-xl px-4 pl-12 pr-10 transition-all text-slate-900 dark:text-white h-14 font-medium placeholder:text-slate-400 focus:ring-0 ${errors.phone ? 'border-red-400 dark:border-red-500' : 'border-slate-200 dark:border-slate-700 focus:border-primary'}`}
                                                    type="tel"
                                                    placeholder="+998 (90) 123 45 67"
                                                />
                                                <span className={`material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-[20px] pointer-events-none transition-colors ${errors.phone ? 'text-red-400' : 'text-slate-400'}`}>phone</span>
                                                {phoneNumber.length > 5 && (
                                                    <button
                                                        type="button"
                                                        tabIndex={-1}
                                                        aria-label="Clear field"
                                                        onClick={() => { setPhoneNumber("+998 "); setErrors(prev => ({ ...prev, phone: undefined })); }}
                                                        className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors"
                                                    >
                                                        <span className="material-symbols-outlined text-xl">close</span>
                                                    </button>
                                                )}
                                            </div>
                                            {errors.phone && <span className="text-red-500 text-xs font-medium mt-1 inline-block">{errors.phone}</span>}
                                        </div>
                                    </div>
                                </form>
                            </div>

                            <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-4">
                                <Link href={`/osago/step-1?plate=${plate}&techPassportSeries=${techPassportSeries}&techPassportNumber=${techPassportNumber}&techPassport=${techPassport}&drivers=${drivers}`} className="flex items-center justify-center rounded-xl h-14 px-8 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-base font-bold hover:bg-slate-200 dark:hover:bg-slate-700 transition-all w-full md:w-auto">
                                    <span className="material-symbols-outlined mr-2">arrow_back</span>
                                    {t("buttons.back")}
                                </Link>
                                <button
                                    onClick={validateAndProceed}
                                    className="w-full md:w-auto px-12 py-4 bg-primary hover:bg-blue-600 text-white rounded-xl font-bold flex items-center justify-center gap-2 transition-all shadow-lg shadow-blue-200 dark:shadow-none order-1 md:order-2"
                                >
                                    {t("buttons.continue")}
                                    <span className="material-symbols-outlined text-[20px] ml-1">arrow_forward</span>
                                </button>
                            </div>
                        </div>

                        <div className="lg:col-span-5 xl:col-span-4 flex flex-col gap-6 sticky top-28">
                            <div className="bg-blue-50 dark:bg-slate-800/50 rounded-2xl p-6 border border-blue-100 dark:border-slate-700">
                                <div className="flex items-start gap-4">
                                    <div className="bg-white dark:bg-slate-700 p-2.5 rounded-xl shadow-sm text-primary flex-shrink-0 mt-1">
                                        <span className="material-symbols-outlined">info</span>
                                    </div>
                                    <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
                                        {t("sidebar.info")}
                                    </p>
                                </div>
                            </div>

                            <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 shadow-sm">
                                <h3 className="text-xl font-bold mb-6 flex justify-between items-center border-b border-slate-100 dark:border-slate-800 pb-4 text-slate-900 dark:text-white">
                                    {t("sidebar.title")}
                                    <span className="text-slate-400 font-normal text-sm">{t("sidebar.step")}</span>
                                </h3>
                                <div className="space-y-4 mb-8">
                                    <div className="flex justify-between text-sm">
                                        <span className="text-slate-500 dark:text-slate-400">{t("sidebar.coverage")}</span>
                                        <span className="font-medium text-right font-bold text-slate-900 dark:text-white">{t("sidebar.coverageAmount")}</span>
                                    </div>
                                    <div className="bg-slate-50 dark:bg-slate-800 p-4 rounded-xl border border-dashed border-slate-200 dark:border-slate-700">
                                        <p className="text-[11px] text-slate-500 dark:text-slate-400 text-center uppercase tracking-wider font-semibold">
                                            {t("sidebar.description")}
                                        </p>
                                    </div>
                                </div>
                                <button className="w-full py-4 bg-slate-50 dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-300 font-bold rounded-xl transition-colors flex items-center justify-center gap-2 border border-slate-200 dark:border-slate-700">
                                    <span className="material-symbols-outlined text-lg">description</span>
                                    {t("sidebar.rules")}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}
