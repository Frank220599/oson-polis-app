"use client";

import { useTranslations } from "next-intl";

interface CalculatorProps {
    plate: string;
    setPlate: (val: string) => void;
    licenseSeries: string;
    setLicenseSeries: (val: string) => void;
    licenseNumber: string;
    setLicenseNumber: (val: string) => void;
    drivers: string;
    setDrivers: (val: string) => void;
    handleSubmit: (e: React.FormEvent) => void;
    errors: { plate?: string; techPassport?: string; drivers?: string };
    plateInputRef: React.RefObject<HTMLInputElement | null>;
    setShowOffers: (val: boolean) => void;
    setErrors: React.Dispatch<React.SetStateAction<{ plate?: string; techPassport?: string; drivers?: string }>>;
}

export function Calculator({
    plate,
    setPlate,
    licenseSeries,
    setLicenseSeries,
    licenseNumber,
    setLicenseNumber,
    drivers,
    setDrivers,
    handleSubmit,
    errors,
    plateInputRef,
    setShowOffers,
    setErrors
}: CalculatorProps) {
    const t = useTranslations("Home");

    return (
        <div className="w-full">
            <div className="flex items-center gap-4 mb-8 pb-6 border-b border-slate-100 dark:border-slate-800">
                <div className="bg-blue-50 dark:bg-blue-900/20 p-3 rounded-xl text-primary">
                    <span className="material-symbols-outlined text-3xl">calculate</span>
                </div>
                <div>
                    <h2 className="text-slate-900 dark:text-white text-2xl font-bold leading-tight">{t("calcForm.title")}</h2>
                    <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">{t("calcForm.subtitle")}</p>
                </div>
            </div>

            <form className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-8" onSubmit={handleSubmit}>
                <label className="flex flex-col gap-2 group">
                    <span className="text-sm font-semibold text-slate-600 dark:text-slate-400 flex items-center gap-2 group-focus-within:text-primary transition-colors">
                        <span className="material-symbols-outlined text-lg text-slate-400 group-focus-within:text-primary">directions_car</span>
                        {t("calcForm.plateLabel")}
                    </span>
                    <div className="relative">
                        <input
                            ref={plateInputRef}
                            className={`w-full bg-slate-50 dark:bg-slate-800 border-2 rounded-xl h-14 px-4 pr-10 transition-all text-slate-900 dark:text-white placeholder:text-slate-400 font-bold uppercase tracking-widest ${errors.plate ? 'border-red-400 dark:border-red-500' : 'border-slate-200 dark:border-slate-700/50 focus:border-primary'}`}
                            placeholder={t("calcForm.platePlaceholder")}
                            type="text"
                            value={plate}
                            onChange={(e) => { setPlate(e.target.value.toUpperCase()); setShowOffers(false); setErrors(prev => ({ ...prev, plate: undefined })); }}
                        />
                        {plate && (
                            <button
                                type="button"
                                tabIndex={-1}
                                aria-label="Clear field"
                                onClick={() => { setPlate(""); setErrors(prev => ({ ...prev, plate: undefined })); }}
                                className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors"
                            >
                                <span className="material-symbols-outlined text-xl">close</span>
                            </button>
                        )}
                    </div>
                    {errors.plate && <span className="text-red-500 text-xs font-medium inline-block mt-1">{errors.plate}</span>}
                </label>

                <div className="flex flex-col gap-2 group">
                    <span className="text-sm font-semibold text-slate-600 dark:text-slate-400 flex items-center gap-2 group-focus-within:text-primary transition-colors">
                        <span className="material-symbols-outlined text-lg text-slate-400 group-focus-within:text-primary">badge</span>
                        {t("calcForm.licenseLabel")}
                    </span>
                    <div className="relative">
                        <input
                            className={`w-full bg-slate-50 dark:bg-slate-800 border-2 rounded-xl h-14 px-4 pr-10 transition-all text-slate-900 dark:text-white placeholder:text-slate-400 font-bold tracking-[0.1em] ${errors.techPassport ? 'border-red-400 dark:border-red-500' : 'border-slate-200 dark:border-slate-700/50 focus:border-primary'}`}
                            placeholder={t("calcForm.licensePlaceholder")}
                            type="text"
                            value={`${licenseSeries}${licenseNumber ? ' ' + licenseNumber : ''}`}
                            onChange={(e) => {
                                const val = e.target.value.toUpperCase().replace(/\s/g, '');
                                const series = val.slice(0, 3).replace(/[^A-Z]/g, '');
                                const number = val.slice(3, 10).replace(/\D/g, '');

                                setLicenseSeries(series);
                                setLicenseNumber(number);
                                setShowOffers(false);
                                setErrors(prev => ({ ...prev, techPassport: undefined }));
                            }}
                        />
                        {(licenseSeries || licenseNumber) && (
                            <button
                                type="button"
                                tabIndex={-1}
                                aria-label="Clear field"
                                onClick={() => { setLicenseSeries(""); setLicenseNumber(""); setErrors(prev => ({ ...prev, techPassport: undefined })); }}
                                className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors"
                            >
                                <span className="material-symbols-outlined text-xl">close</span>
                            </button>
                        )}
                    </div>
                    {errors.techPassport && <span className="text-red-500 text-xs font-medium inline-block mt-1">{errors.techPassport}</span>}
                </div>

                <label className="flex flex-col gap-2 group">
                    <span className="text-sm font-semibold text-slate-600 dark:text-slate-400 flex items-center gap-2 group-focus-within:text-primary transition-colors">
                        <span className="material-symbols-outlined text-lg text-slate-400 group-focus-within:text-primary">group</span>
                        {t("calcForm.driversLabel")}
                    </span>
                    <select
                        className={`w-full bg-slate-50 dark:bg-slate-800 border-2 rounded-xl h-14 px-4 transition-all text-slate-900 dark:text-white cursor-pointer font-medium ${errors.drivers ? 'border-red-400 dark:border-red-500' : 'border-slate-200 dark:border-slate-700/50 focus:border-primary'}`}
                        value={drivers}
                        onChange={(e) => { setDrivers(e.target.value); setShowOffers(false); setErrors(prev => ({ ...prev, drivers: undefined })); }}
                    >
                        <option disabled value="">{t("calcForm.driversPlaceholder")}</option>
                        <option value="limited">{t("calcForm.driversLimited")}</option>
                        <option value="unlimited">{t("calcForm.driversUnlimited")}</option>
                    </select>
                    {errors.drivers && <span className="text-red-500 text-xs font-medium inline-block mt-1">{errors.drivers}</span>}
                </label>

                <div className="col-span-1 md:col-span-2 lg:col-span-3 flex justify-end pt-2">
                    <button className="w-full md:w-auto flex items-center justify-center gap-3 rounded-lg h-14 px-10 bg-primary text-white text-lg font-bold hover:bg-primary-hover transition-all shadow-xl shadow-primary/25 transform hover:-translate-y-0.5 active:translate-y-0" type="submit">
                        {t("calcForm.submitBtn")}
                        <span className="material-symbols-outlined">arrow_forward</span>
                    </button>
                </div>
            </form>
        </div>
    );
}
