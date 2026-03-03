"use client";

import { useState, useRef } from "react";
import { Link } from "@/i18n/routing";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import Image from "next/image";
import { useTranslations } from "next-intl";


export default function Home() {
  const t = useTranslations("Home");

  const [plate, setPlate] = useState("");
  const [licenseSeries, setLicenseSeries] = useState("");
  const [licenseNumber, setLicenseNumber] = useState("");
  const [drivers, setDrivers] = useState("");
  const [showOffers, setShowOffers] = useState(false);
  const [errors, setErrors] = useState<{ plate?: string; techPassport?: string; drivers?: string }>({});
  const plateInputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: { plate?: string; techPassport?: string; drivers?: string } = {};
    if (!plate.trim()) newErrors.plate = t("calcForm.errors.plate");
    if (!licenseSeries.trim() || !licenseNumber.trim()) newErrors.techPassport = t("calcForm.errors.license");
    if (!drivers) newErrors.drivers = t("calcForm.errors.drivers");
    setErrors(newErrors);
    if (Object.keys(newErrors).length === 0) {
      setShowOffers(true);
    }
  };

  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col">
      <Header />

      <main className="flex-1">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col gap-8">
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
                <button onClick={() => { document.getElementById('calculator-section')?.scrollIntoView({ behavior: 'smooth' }); setTimeout(() => plateInputRef.current?.focus(), 600); }} className="flex items-center justify-center gap-2 rounded-lg h-14 px-8 bg-primary text-white text-base font-bold hover:bg-primary-hover transition-colors shadow-lg shadow-primary/30">
                  {t("calcBtn")}
                  <span className="material-symbols-outlined text-sm">arrow_downward</span>
                </button>
                <button onClick={() => document.getElementById('how-it-works-section')?.scrollIntoView({ behavior: 'smooth' })} className="flex items-center justify-center rounded-lg h-14 px-8 bg-white/10 backdrop-blur-md border border-white/30 text-white text-base font-bold hover:bg-white/20 transition-colors">
                  {t("howItWorksBtn")}
                </button>
              </div>
            </div>
          </div>

          <div id="calculator-section" className="bg-white dark:bg-slate-900 rounded-2xl shadow-xl border border-slate-100 dark:border-slate-800 p-6 sm:p-10 -mt-16 relative z-20 mx-2 sm:mx-8 lg:mx-16 scroll-mt-24">
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
                <div className="flex gap-2">
                  <div className="relative w-24">
                    <input
                      className={`w-full bg-slate-50 dark:bg-slate-800 border-2 rounded-xl h-14 px-3 transition-all text-slate-900 dark:text-white placeholder:text-slate-400 font-bold uppercase tracking-widest text-center ${errors.techPassport ? 'border-red-400 dark:border-red-500' : 'border-slate-200 dark:border-slate-700/50 focus:border-primary'}`}
                      placeholder="AAF"
                      type="text"
                      value={licenseSeries}
                      onChange={(e) => { setLicenseSeries(e.target.value.toUpperCase().slice(0, 3)); setShowOffers(false); setErrors(prev => ({ ...prev, techPassport: undefined })); }}
                    />

                  </div>
                  <div className="relative flex-grow">
                    <input
                      className={`w-full bg-slate-50 dark:bg-slate-800 border-2 rounded-xl h-14 px-4 pr-10 transition-all text-slate-900 dark:text-white placeholder:text-slate-400 font-bold tracking-widest ${errors.techPassport ? 'border-red-400 dark:border-red-500' : 'border-slate-200 dark:border-slate-700/50 focus:border-primary'}`}
                      placeholder="1234567"
                      type="text"
                      value={licenseNumber}
                      onChange={(e) => { setLicenseNumber(e.target.value.replace(/\D/g, '').slice(0, 7)); setShowOffers(false); setErrors(prev => ({ ...prev, techPassport: undefined })); }}
                    />
                    {licenseNumber && (
                      <button
                        type="button"
                        onClick={() => { setLicenseNumber(""); setErrors(prev => ({ ...prev, techPassport: undefined })); }}
                        className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors"
                      >
                        <span className="material-symbols-outlined text-xl">close</span>
                      </button>
                    )}
                  </div>
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

            {showOffers && (
              <div className="mt-12 pt-10 border-t border-slate-100 dark:border-slate-800">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6">{t("offers.title")}</h3>
                <div className="space-y-4">

                  <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-5 rounded-xl border border-slate-100 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/50 hover:border-primary/30 transition-colors">
                    <div className="flex items-center gap-4 w-full sm:w-auto">
                      <div className="size-12 bg-white rounded-lg shadow-sm flex items-center justify-center text-red-600 font-bold border border-slate-100">
                        <span className="material-symbols-outlined text-3xl">token</span>
                      </div>
                      <div>
                        <h4 className="font-bold text-lg text-slate-900 dark:text-white">Alfa Invest</h4>
                        <div className="flex items-center gap-1 text-yellow-500 text-sm">
                          <span className="material-symbols-outlined text-sm fill-current">star</span>
                          <span className="font-medium text-slate-600 dark:text-slate-400">4.9</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between w-full sm:w-auto gap-6">
                      <div className="text-right sm:text-left">
                        <span className="block text-xs text-slate-500">{t("offers.priceLabel")}</span>
                        <span className="block font-bold text-lg text-slate-900 dark:text-white">42 000 {t("offers.currency")}</span>
                      </div>
                      <Link href={`/osago/step-1?plate=${plate}&licenseSeries=${licenseSeries}&licenseNumber=${licenseNumber}&drivers=${drivers}`} className="px-6 py-2.5 bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-lg text-sm font-bold hover:bg-slate-50 dark:hover:bg-slate-600 hover:text-primary transition-colors text-center">
                        {t("offers.selectBtn")}
                      </Link>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-5 rounded-xl border border-slate-100 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/50 hover:border-primary/30 transition-colors">
                    <div className="flex items-center gap-4 w-full sm:w-auto">
                      <div className="size-12 bg-white rounded-lg shadow-sm flex items-center justify-center text-blue-600 font-bold border border-slate-100">
                        <span className="material-symbols-outlined text-3xl">diamond</span>
                      </div>
                      <div>
                        <h4 className="font-bold text-lg text-slate-900 dark:text-white">Apex Insurance</h4>
                        <div className="flex items-center gap-1 text-yellow-500 text-sm">
                          <span className="material-symbols-outlined text-sm fill-current">star</span>
                          <span className="font-medium text-slate-600 dark:text-slate-400">4.8</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between w-full sm:w-auto gap-6">
                      <div className="text-right sm:text-left">
                        <span className="block text-xs text-slate-500">{t("offers.priceLabel")}</span>
                        <span className="block font-bold text-lg text-slate-900 dark:text-white">40 500 {t("offers.currency")}</span>
                      </div>
                      <Link href={`/osago/step-1?plate=${plate}&licenseSeries=${licenseSeries}&licenseNumber=${licenseNumber}&drivers=${drivers}`} className="px-6 py-2.5 bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-lg text-sm font-bold hover:bg-slate-50 dark:hover:bg-slate-600 hover:text-primary transition-colors text-center">
                        {t("offers.selectBtn")}
                      </Link>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-5 rounded-xl border border-slate-100 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/50 hover:border-primary/30 transition-colors">
                    <div className="flex items-center gap-4 w-full sm:w-auto">
                      <div className="size-12 bg-white rounded-lg shadow-sm flex items-center justify-center text-green-600 font-bold border border-slate-100">
                        <span className="material-symbols-outlined text-3xl">hexagon</span>
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
                      <Link href={`/osago/step-1?plate=${plate}&licenseSeries=${licenseSeries}&licenseNumber=${licenseNumber}&drivers=${drivers}`} className="px-6 py-2.5 bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-lg text-sm font-bold hover:bg-slate-50 dark:hover:bg-slate-600 hover:text-primary transition-colors text-center">
                        {t("offers.selectBtn")}
                      </Link>
                    </div>
                  </div>

                </div>
              </div>
            )}
          </div>

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
                  <button className="w-full py-3 rounded-lg border-2 border-primary text-primary font-bold text-sm group-hover:bg-primary group-hover:text-white group-hover:shadow-lg group-hover:shadow-primary/20 transition-all duration-300 relative z-10 w-full text-center block">
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

          <div className="py-12 flex flex-col items-center gap-10 border-t border-slate-100 dark:border-slate-800">
            <p className="text-slate-400 dark:text-slate-500 font-bold text-center uppercase tracking-widest text-xs">{t("trustBadge")}</p>
            <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
              <div className="h-10 flex items-center gap-3 font-bold text-2xl text-slate-800 dark:text-slate-200">
                <span className="material-symbols-outlined text-4xl">token</span> ALFA
              </div>
              <div className="h-10 flex items-center gap-3 font-bold text-2xl text-slate-800 dark:text-slate-200">
                <span className="material-symbols-outlined text-4xl">diamond</span> APEX
              </div>
              <div className="h-10 flex items-center gap-3 font-bold text-2xl text-slate-800 dark:text-slate-200">
                <span className="material-symbols-outlined text-4xl">hexagon</span> GROSS
              </div>
              <div className="h-10 flex items-center gap-3 font-bold text-2xl text-slate-800 dark:text-slate-200">
                <span className="material-symbols-outlined text-4xl">stars</span> STAR
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
