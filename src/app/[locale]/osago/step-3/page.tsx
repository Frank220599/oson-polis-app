"use client";

import { useState, Suspense } from "react";
import { Link } from "@/i18n/routing";
import Image from "next/image";
import { Header } from "@/components/Header";
import { useTranslations } from "next-intl";
import { useSearchParams, useRouter } from "next/navigation";

function OsagoStep3Content() {
    const t = useTranslations("OsagoStep3");
    const searchParams = useSearchParams();
    const router = useRouter();

    // Pass through previous step data
    const plate = searchParams?.get("plate") || "";
    const techPassportSeries = searchParams?.get("techPassportSeries") || "";
    const techPassportNumber = searchParams?.get("techPassportNumber") || "";
    const techPassport = searchParams?.get("techPassport") || ""; // fallback
    const pinfl = searchParams?.get("pinfl") || "";
    const passport = searchParams?.get("passport") || "";
    const phone = searchParams?.get("phone") || "";
    const [duration, setDuration] = useState<'year' | 'six_months'>('year');
    const [driversCount, setDriversCount] = useState<'limited' | 'unlimited'>((searchParams?.get("driversCount") || searchParams?.get("drivers") || 'limited') as 'limited' | 'unlimited');

    const [extraDrivers, setExtraDrivers] = useState<number[]>([]);
    const [driversData, setDriversData] = useState<Record<number, { passportSeries: string; passportNumber: string; birthDate: string; relation: string }>>({});
    const [errors, setErrors] = useState<Record<number, { passportSeries?: string; passportNumber?: string; birthDate?: string }>>({});

    const addDriver = () => {
        if (extraDrivers.length < 3) {
            const id = Date.now();
            setExtraDrivers([...extraDrivers, id]);
            setDriversData(prev => ({ ...prev, [id]: { passportSeries: '', passportNumber: '', birthDate: '', relation: t("driversInfo.relations.none") } }));
        }
    };

    const removeDriver = (idToRemove: number) => {
        setExtraDrivers(extraDrivers.filter(id => id !== idToRemove));
        const newDriversData = { ...driversData };
        delete newDriversData[idToRemove];
        setDriversData(newDriversData);
        const newErrors = { ...errors };
        delete newErrors[idToRemove];
        setErrors(newErrors);
    };

    const updateDriverData = (id: number, field: string, value: string) => {
        setDriversData(prev => ({
            ...prev,
            [id]: { ...prev[id], [field]: value }
        }));
        setErrors(prev => ({
            ...prev,
            [id]: { ...prev[id], [field]: undefined }
        }));
    };

    const validateAndProceed = () => {
        let hasErrors = false;
        const newErrors: Record<number, { passportSeries?: string; passportNumber?: string; birthDate?: string }> = {};

        if (driversCount === 'limited') {
            extraDrivers.forEach(id => {
                const data = driversData[id];
                const driverErrors: { passportSeries?: string; passportNumber?: string; birthDate?: string } = {};

                if (!data.passportSeries || data.passportSeries.length !== 2) {
                    driverErrors.passportSeries = t("driversInfo.errors.passportSeries");
                }
                if (!data.passportNumber || data.passportNumber.length !== 7) {
                    driverErrors.passportNumber = t("driversInfo.errors.passportNumber");
                }
                if (!data.birthDate) {
                    driverErrors.birthDate = t("driversInfo.errors.birthDate");
                }

                if (Object.keys(driverErrors).length > 0) {
                    newErrors[id] = driverErrors;
                    hasErrors = true;
                }
            });
        }

        setErrors(newErrors);

        if (!hasErrors) {
            router.push(`/osago/step-4?plate=${plate}&techPassportSeries=${techPassportSeries}&techPassportNumber=${techPassportNumber}&techPassport=${techPassport}&pinfl=${pinfl}&passport=${passport}&phone=${encodeURIComponent(phone)}&duration=${duration}&driversCount=${driversCount}`);
        }
    };

    return (
        <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 font-display min-h-screen flex flex-col transition-colors duration-200">
            <Header />

            <main className="flex-grow flex flex-col items-center w-full px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
                <div className="w-full max-w-7xl">
                    <div className="text-left mb-8">
                        <h1 className="text-2xl md:text-3xl font-extrabold text-slate-900 dark:text-white">{t("main.title")}</h1>
                        <p className="mt-2 text-slate-600 dark:text-slate-400">{t("main.subtitle")}</p>
                    </div>

                    <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-start">
                        <div className="lg:col-span-7 xl:col-span-8 flex flex-col gap-8">
                            <div className="w-full">
                                <nav className="grid grid-cols-4 gap-4 w-full">
                                    <div className="flex flex-col gap-2">
                                        <span className="text-[10px] md:text-xs font-bold text-primary uppercase tracking-wider">{t("progress.auto")}</span>
                                        <div className="h-1.5 w-full bg-primary rounded-full"></div>
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <span className="text-[10px] md:text-xs font-bold text-primary uppercase tracking-wider">{t("progress.personal")}</span>
                                        <div className="h-1.5 w-full bg-primary rounded-full"></div>
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <span className="text-[10px] md:text-xs font-bold text-primary uppercase tracking-wider">{t("progress.policy")}</span>
                                        <div className="h-1.5 w-full bg-primary rounded-full"></div>
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <span className="text-[10px] md:text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider">{t("progress.payment")}</span>
                                        <div className="h-1.5 w-full bg-slate-200 dark:bg-slate-800 rounded-full"></div>
                                    </div>
                                </nav>
                            </div>

                            <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 md:p-8 shadow-sm border border-slate-100 dark:border-slate-800 transition-all duration-200">
                                <div className="flex items-center gap-3 mb-6">
                                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary font-bold text-sm">3</span>
                                    <h2 className="text-xl font-bold text-slate-900 dark:text-white">{t("duration.title")}</h2>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div
                                        onClick={() => setDuration('year')}
                                        className={`cursor-pointer border-2 transition-all p-4 flex items-center gap-4 rounded-xl relative ${duration === 'year' ? 'border-primary bg-primary/5 ring-1 ring-primary/20' : 'border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-slate-200 dark:hover:border-slate-700'}`}
                                    >
                                        <div className={`p-2 rounded-lg shrink-0 ${duration === 'year' ? 'bg-primary/10 text-primary' : 'bg-slate-100 dark:bg-slate-800 text-slate-500'}`}>
                                            <span className="material-symbols-outlined">calendar_today</span>
                                        </div>
                                        <div className="flex-grow">
                                            <h4 className="font-bold text-slate-900 dark:text-white text-base leading-tight">{t("duration.year.title")}</h4>
                                            <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">{t("duration.year.desc")}</p>
                                        </div>
                                        <div className={`shrink-0 w-5 h-5 rounded-full border-2 flex items-center justify-center ${duration === 'year' ? 'border-primary' : 'border-slate-300 dark:border-slate-600'}`}>
                                            {duration === 'year' && <div className="w-2.5 h-2.5 bg-primary rounded-full"></div>}
                                        </div>
                                    </div>
                                    <div
                                        onClick={() => setDuration('six_months')}
                                        className={`cursor-pointer border-2 transition-all p-4 flex items-center gap-4 rounded-xl relative ${duration === 'six_months' ? 'border-primary bg-primary/5 ring-1 ring-primary/20' : 'border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-slate-200 dark:hover:border-slate-700'}`}
                                    >
                                        <div className={`p-2 rounded-lg shrink-0 ${duration === 'six_months' ? 'bg-primary/10 text-primary' : 'bg-slate-100 dark:bg-slate-800 text-slate-500'}`}>
                                            <span className="material-symbols-outlined">event_note</span>
                                        </div>
                                        <div className="flex-grow">
                                            <h4 className="font-bold text-slate-900 dark:text-white text-base leading-tight">{t("duration.six_months.title")}</h4>
                                            <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">{t("duration.six_months.desc")}</p>
                                        </div>
                                        <div className={`shrink-0 w-5 h-5 rounded-full border-2 flex items-center justify-center ${duration === 'six_months' ? 'border-primary' : 'border-slate-300 dark:border-slate-600'}`}>
                                            {duration === 'six_months' && <div className="w-2.5 h-2.5 bg-primary rounded-full"></div>}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 md:p-8 shadow-sm border border-slate-100 dark:border-slate-800 transition-all duration-200">
                                <div className="flex items-center gap-3 mb-6">
                                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary font-bold text-sm">4</span>
                                    <h2 className="text-xl font-bold text-slate-900 dark:text-white">{t("driversCount.title")}</h2>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div
                                        onClick={() => setDriversCount('limited')}
                                        className={`cursor-pointer border-2 transition-all p-4 flex items-center gap-4 rounded-xl relative ${driversCount === 'limited' ? 'border-primary bg-primary/5 ring-1 ring-primary/20' : 'border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-slate-200 dark:hover:border-slate-700'}`}
                                    >
                                        <div className={`p-2 rounded-lg shrink-0 ${driversCount === 'limited' ? 'bg-primary/10 text-primary' : 'bg-slate-100 dark:bg-slate-800 text-slate-500'}`}>
                                            <span className="material-symbols-outlined">group</span>
                                        </div>
                                        <div className="flex-grow">
                                            <h4 className="font-bold text-slate-900 dark:text-white text-base leading-tight">{t("driversCount.limited.title")}</h4>
                                            <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">{t("driversCount.limited.desc")}</p>
                                        </div>
                                        <div className={`shrink-0 w-5 h-5 rounded-full border-2 flex items-center justify-center ${driversCount === 'limited' ? 'border-primary' : 'border-slate-300 dark:border-slate-600'}`}>
                                            {driversCount === 'limited' && <div className="w-2.5 h-2.5 bg-primary rounded-full"></div>}
                                        </div>
                                    </div>
                                    <div
                                        onClick={() => setDriversCount('unlimited')}
                                        className={`cursor-pointer border-2 transition-all p-4 flex items-center gap-4 rounded-xl relative ${driversCount === 'unlimited' ? 'border-primary bg-primary/5 ring-1 ring-primary/20' : 'border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-slate-200 dark:hover:border-slate-700'}`}
                                    >
                                        <div className={`p-2 rounded-lg shrink-0 ${driversCount === 'unlimited' ? 'bg-primary/10 text-primary' : 'bg-slate-100 dark:bg-slate-800 text-slate-500'}`}>
                                            <span className="material-symbols-outlined">all_inclusive</span>
                                        </div>
                                        <div className="flex-grow">
                                            <h4 className="font-bold text-slate-900 dark:text-white text-base leading-tight">{t("driversCount.unlimited.title")}</h4>
                                            <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">{t("driversCount.unlimited.desc")}</p>
                                        </div>
                                        <div className={`shrink-0 w-5 h-5 rounded-full border-2 flex items-center justify-center ${driversCount === 'unlimited' ? 'border-primary' : 'border-slate-300 dark:border-slate-600'}`}>
                                            {driversCount === 'unlimited' && <div className="w-2.5 h-2.5 bg-primary rounded-full"></div>}
                                        </div>
                                    </div>
                                </div>

                                {/* Feature comparison panel */}
                                <div className="mt-4 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 shadow-sm">
                                    {driversCount === 'limited' ? (
                                        <div className="divide-y divide-slate-100 dark:divide-slate-800">
                                            {[
                                                { ok: true, text: t("driversCount.features.damage80m") },
                                                { ok: false, text: t("driversCount.features.passportRequired") },
                                                { ok: false, text: t("driversCount.features.peregonWithDoc") },
                                                { ok: false, text: t("driversCount.features.cashback") },
                                            ].map((f, i) => (
                                                <div key={i} className={`flex items-center gap-3 px-5 py-3 text-sm ${f.ok ? '' : 'opacity-50'}`}>
                                                    <span className={`material-symbols-outlined text-[18px] shrink-0 ${f.ok ? 'text-primary' : 'text-slate-400'}`}>
                                                        {f.ok ? 'check_circle' : 'cancel'}
                                                    </span>
                                                    <span className={f.ok ? 'text-slate-800 dark:text-slate-200 font-medium' : 'text-slate-500 dark:text-slate-400 line-through'}>{f.text}</span>
                                                </div>
                                            ))}
                                        </div>
                                    ) : (
                                        <div className="divide-y divide-slate-100 dark:divide-slate-800">
                                            {[
                                                { text: t("driversCount.features.damage80m") },
                                                { text: t("driversCount.features.allDrivers") },
                                                { text: t("driversCount.features.noPassport") },
                                                { text: t("driversCount.features.peregon") },
                                                { text: t("driversCount.features.cashback") },
                                            ].map((f, i) => (
                                                <div key={i} className="flex items-center gap-3 px-5 py-3 text-sm">
                                                    <span className="material-symbols-outlined text-[18px] shrink-0 text-primary">check_circle</span>
                                                    <span className="text-slate-800 dark:text-slate-200 font-medium">{f.text}</span>
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            </div>

                            <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 md:p-8 shadow-sm border border-slate-100 dark:border-slate-800 transition-all duration-200">
                                <div className="flex items-center gap-3 mb-8">
                                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary font-bold text-sm">5</span>
                                    <h2 className="text-xl font-bold text-slate-900 dark:text-white">{t("driversInfo.title")}</h2>
                                </div>
                                <div className="space-y-8">
                                    <div className="space-y-3">
                                        <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider">{t("driversInfo.driver1")}</h3>
                                        <div className="relative">
                                            <input className="w-full h-14 px-6 bg-slate-50 dark:bg-slate-800/50 border-none rounded-xl text-slate-900 dark:text-white font-bold focus:ring-0 cursor-default" readOnly type="text" value="BEHZOD ANVAROV ALISHER O'G'LI" />
                                            <div className="absolute right-6 top-1/2 -translate-y-1/2 text-emerald-500 flex items-center gap-1">
                                                <span className="material-symbols-outlined text-xl font-bold">check_circle</span>
                                            </div>
                                        </div>
                                    </div>

                                    {extraDrivers.map((id, index) => (
                                        <div key={id} className="pt-8 border-t border-slate-100 dark:border-slate-800 space-y-6">
                                            <div className="flex items-center justify-between">
                                                <h3 className="text-lg font-bold text-slate-900 dark:text-white">{t("driversInfo.driver2").replace(/\d+/, (index + 2).toString())}</h3>
                                                <button type="button" onClick={() => removeDriver(id)} className="flex items-center gap-1.5 text-rose-500 hover:text-rose-600 transition-colors">
                                                    <span className="material-symbols-outlined text-[18px]">delete</span>
                                                    <span className="text-xs font-bold uppercase tracking-wider">{t("driversInfo.delete")}</span>
                                                </button>
                                            </div>
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                                <div className="md:col-span-2">
                                                    <label className="block text-sm font-semibold text-slate-600 dark:text-slate-400 mb-2">{t("driversInfo.relation")}</label>
                                                    <div className="relative">
                                                        <select
                                                            value={driversData[id]?.relation}
                                                            onChange={(e) => updateDriverData(id, 'relation', e.target.value)}
                                                            className="w-full h-14 px-4 bg-slate-50 dark:bg-slate-800 border-2 border-slate-200 dark:border-slate-700 focus:border-primary rounded-xl text-slate-900 dark:text-white appearance-none cursor-pointer pr-10 font-medium transition-all"
                                                        >
                                                            <option>{t("driversInfo.relations.none")}</option>
                                                            <option>{t("driversInfo.relations.parents")}</option>
                                                            <option>{t("driversInfo.relations.spouse")}</option>
                                                            <option>{t("driversInfo.relations.siblings")}</option>
                                                            <option>{t("driversInfo.relations.children")}</option>
                                                        </select>
                                                        <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400 transition-colors">
                                                            <span className="material-symbols-outlined">expand_more</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div>
                                                    <label className="block text-sm font-semibold text-slate-600 dark:text-slate-400 mb-2">{t("driversInfo.passport")}</label>
                                                    <div className="flex gap-3">
                                                        <div className="w-24 flex flex-col relative">
                                                            <input
                                                                value={driversData[id]?.passportSeries}
                                                                onChange={(e) => updateDriverData(id, 'passportSeries', e.target.value.toUpperCase().replace(/[^A-Z]/g, '').slice(0, 2))}
                                                                className={`w-full h-14 px-4 pr-10 bg-slate-50 dark:bg-slate-800 border-2 rounded-xl text-slate-900 dark:text-white text-center uppercase font-bold focus:ring-0 transition-all placeholder:text-slate-400 ${errors[id]?.passportSeries ? 'border-red-400 dark:border-red-500' : 'border-slate-200 dark:border-slate-700 focus:border-primary'}`}
                                                                placeholder="AA" type="text"
                                                            />
                                                            {driversData[id]?.passportSeries && (
                                                                <button
                                                                    type="button"
                                                                    onClick={() => updateDriverData(id, 'passportSeries', "")}
                                                                    className="absolute right-1 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors"
                                                                >
                                                                    <span className="material-symbols-outlined text-lg">close</span>
                                                                </button>
                                                            )}
                                                        </div>
                                                        <div className="flex-grow flex flex-col relative">
                                                            <input
                                                                value={driversData[id]?.passportNumber}
                                                                onChange={(e) => updateDriverData(id, 'passportNumber', e.target.value.replace(/\D/g, '').slice(0, 7))}
                                                                className={`w-full h-14 px-4 pr-10 bg-slate-50 dark:bg-slate-800 border-2 rounded-xl text-slate-900 dark:text-white font-bold tracking-widest focus:ring-0 transition-all placeholder:text-slate-400 ${errors[id]?.passportNumber ? 'border-red-400 dark:border-red-500' : 'border-slate-200 dark:border-slate-700 focus:border-primary'}`}
                                                                placeholder="1234567" type="text"
                                                            />
                                                            {driversData[id]?.passportNumber && (
                                                                <button
                                                                    type="button"
                                                                    onClick={() => updateDriverData(id, 'passportNumber', "")}
                                                                    className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors"
                                                                >
                                                                    <span className="material-symbols-outlined text-xl">close</span>
                                                                </button>
                                                            )}
                                                        </div>
                                                    </div>
                                                    {(errors[id]?.passportSeries || errors[id]?.passportNumber) && (
                                                        <span className="text-red-500 text-xs font-medium mt-1 inline-block">{errors[id]?.passportSeries || errors[id]?.passportNumber}</span>
                                                    )}
                                                </div>
                                                <div>
                                                    <label className="block text-sm font-semibold text-slate-600 dark:text-slate-400 mb-2">{t("driversInfo.birthDate")}</label>
                                                    <div className="relative">
                                                        <input
                                                            value={driversData[id]?.birthDate}
                                                            onChange={(e) => updateDriverData(id, 'birthDate', e.target.value)}
                                                            className={`w-full h-14 pl-12 pr-10 bg-slate-50 dark:bg-slate-800 border-2 rounded-xl text-slate-900 dark:text-white font-medium focus:ring-0 transition-all [&::-webkit-calendar-picker-indicator]:opacity-0 [&::-webkit-calendar-picker-indicator]:absolute [&::-webkit-calendar-picker-indicator]:left-0 [&::-webkit-calendar-picker-indicator]:w-12 [&::-webkit-calendar-picker-indicator]:h-full [&::-webkit-calendar-picker-indicator]:cursor-pointer [&::-webkit-calendar-picker-indicator]:m-0 ${errors[id]?.birthDate ? 'border-red-400 dark:border-red-500' : 'border-slate-200 dark:border-slate-700 focus:border-primary'}`}
                                                            type="date"
                                                        />
                                                        <div className={`absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none transition-colors ${errors[id]?.birthDate ? 'text-red-400' : 'text-slate-400'}`}>
                                                            <span className="material-symbols-outlined">calendar_month</span>
                                                        </div>
                                                        {driversData[id]?.birthDate && (
                                                            <button
                                                                type="button"
                                                                onClick={() => updateDriverData(id, 'birthDate', "")}
                                                                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors"
                                                            >
                                                                <span className="material-symbols-outlined text-xl">close</span>
                                                            </button>
                                                        )}
                                                    </div>
                                                    {errors[id]?.birthDate && <span className="text-red-500 text-xs font-medium mt-1 inline-block">{errors[id]?.birthDate}</span>}
                                                </div>
                                            </div>
                                        </div>
                                    ))}

                                    {extraDrivers.length < 3 && (
                                        <div className="pt-6 border-t border-slate-100 dark:border-slate-800">
                                            <button type="button" onClick={addDriver} className="flex items-center gap-2 text-primary font-bold hover:opacity-80 transition-all">
                                                <span className="material-symbols-outlined font-bold text-xl">add_circle</span>
                                                <span>{t("driversInfo.addDriver")}</span>
                                            </button>
                                        </div>
                                    )}
                                </div>
                            </div>

                            <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-4">
                                <Link href={`/osago/step-2?plate=${plate}&techPassportSeries=${techPassportSeries}&techPassportNumber=${techPassportNumber}&drivers=${driversCount}`} className="flex items-center justify-center rounded-xl h-14 px-8 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-base font-bold hover:bg-slate-200 dark:hover:bg-slate-700 transition-all w-full md:w-auto">
                                    <span className="material-symbols-outlined mr-2">arrow_back</span>
                                    {t("buttons.back")}
                                </Link>
                                <button
                                    onClick={validateAndProceed}
                                    className="flex items-center justify-center rounded-xl h-14 px-12 bg-primary text-white text-base font-bold hover:opacity-90 transition-all shadow-lg shadow-blue-200 dark:shadow-none w-full md:w-auto"
                                >
                                    {t("buttons.continue")}
                                    <span className="material-symbols-outlined ml-2">arrow_forward</span>
                                </button>
                            </div>
                        </div>

                        <div className="lg:col-span-5 xl:col-span-4 flex flex-col gap-6 sticky top-28">
                            <div className="bg-blue-50 dark:bg-slate-800/50 rounded-2xl p-6 border border-blue-100 dark:border-slate-700">
                                <div className="flex items-start gap-4">
                                    <div className="bg-white dark:bg-slate-700 p-2.5 rounded-xl shadow-sm text-primary flex-shrink-0">
                                        <span className="material-symbols-outlined">help_outline</span>
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-slate-900 dark:text-white text-lg">{t("sidebar.helpTitle")}</h3>
                                        <p className="text-sm text-slate-600 dark:text-slate-400 mt-2 leading-relaxed">
                                            {t("sidebar.helpText")}
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 shadow-sm">
                                <h4 className="text-xs font-extrabold text-slate-400 dark:text-slate-500 mb-6 uppercase tracking-[0.15em]">{t("sidebar.calcTitle")}</h4>
                                <div className="space-y-4">
                                    <div className="flex justify-between items-start">
                                        <span className="text-sm text-slate-500 dark:text-slate-400">{t("sidebar.auto")}</span>
                                        <span className="text-sm font-bold text-slate-900 dark:text-white text-right">Toyota Camry<br /><span className="text-slate-400 dark:text-slate-500 font-medium whitespace-nowrap bg-slate-100 dark:bg-slate-800 px-1 py-0.5 rounded">{plate || '01 A 123 AA'}</span></span>
                                    </div>
                                    <div className="flex justify-between items-center text-sm">
                                        <span className="text-slate-500 dark:text-slate-400">{t("sidebar.region")}</span>
                                        <span className="font-bold text-slate-900 dark:text-white">{t("sidebar.regionValue")}</span>
                                    </div>
                                    <div className="flex justify-between items-center text-sm">
                                        <span className="text-slate-500 dark:text-slate-400">{t("sidebar.mainDriver")}</span>
                                        <span className="font-bold text-slate-900 dark:text-white">{t("sidebar.mainDriverValue")}</span>
                                    </div>
                                    <div className="pt-6 border-t border-slate-100 dark:border-slate-800 flex justify-between items-center">
                                        <span className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider">{t("sidebar.total")}</span>
                                        <div className="flex flex-col items-end">
                                            <span className="text-2xl font-black text-primary">56 000 UZS</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <footer className="mt-auto py-8 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="flex items-center gap-3">
                        <Link href="/" className="flex items-center gap-2">
                            <Image src="/logo-blue.png" alt="OsonPolis" width={120} height={26} className="dark:hidden block h-6 w-auto" />
                            <Image src="/logo-white.png" alt="OsonPolis" width={120} height={26} className="hidden dark:block h-6 w-auto" />
                        </Link>
                        <p className="text-xs text-slate-500 dark:text-slate-400 ml-4">{t("footer.copyright")}</p>
                    </div>
                    <div className="flex gap-6">
                        <Link className="text-xs font-semibold text-slate-500 dark:text-slate-400 hover:text-primary transition-colors uppercase tracking-wider" href="/privacy">{t("footer.privacy")}</Link>
                        <Link className="text-xs font-semibold text-slate-500 dark:text-slate-400 hover:text-primary transition-colors uppercase tracking-wider" href="/terms">{t("footer.terms")}</Link>
                        <Link className="text-xs font-semibold text-slate-500 dark:text-slate-400 hover:text-primary transition-colors uppercase tracking-wider" href="/contacts">{t("footer.contacts")}</Link>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default function OsagoStep3Page() {
    return (
        <Suspense fallback={<div className="min-h-screen flex items-center justify-center"><div className="w-8 h-8 rounded-full border-4 border-primary border-t-transparent animate-spin"></div></div>}>
            <OsagoStep3Content />
        </Suspense>
    );
}
