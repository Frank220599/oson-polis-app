"use client";

import { Suspense, useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import Image from "next/image";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import { useSearchParams, useRouter } from "next/navigation";

function OsagoStep4Content() {
    const t = useTranslations("OsagoStep4");
    const searchParams = useSearchParams();
    const router = useRouter();
    const [paymentMethod, setPaymentMethod] = useState<'payme' | 'click' | 'uzum'>('payme');
    const [isProcessing, setIsProcessing] = useState(false);

    // Pass through previous step data to success and for display
    const plate = searchParams?.get("plate") || "";
    const techPassport = searchParams?.get("techPassport") || searchParams?.get("license") || "";
    const pinfl = searchParams?.get("pinfl") || "";
    const passport = searchParams?.get("passport") || "";
    const phone = searchParams?.get("phone") || "";
    const duration = searchParams?.get("duration") || "year";
    const driversCount = searchParams?.get("driversCount") || "limited";

    return (
        <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 font-display min-h-screen flex flex-col transition-colors duration-200">
            <Header />

            <main className="flex-grow flex flex-col items-center w-full px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
                <div className="w-full max-w-7xl">
                    <div className="mb-8 lg:mb-12">
                        <h1 className="text-2xl md:text-3xl font-extrabold text-slate-900 dark:text-white text-left">{t("main.title")}</h1>
                        <p className="mt-2 text-slate-600 dark:text-slate-400">{t("main.subtitle")}</p>
                    </div>

                    <div className="grid lg:grid-cols-12 gap-8 items-start">
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
                                        <span className="text-[10px] md:text-xs font-bold text-primary uppercase tracking-wider">{t("progress.payment")}</span>
                                        <div className="h-1.5 w-full bg-primary rounded-full"></div>
                                    </div>
                                </nav>
                            </div>

                            <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 md:p-8 shadow-sm border border-slate-100 dark:border-slate-800 transition-all duration-200">
                                <div className="flex items-center gap-3 mb-8">
                                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary font-bold text-sm">4</span>
                                    <h2 className="text-xl font-bold text-slate-900 dark:text-white">{t("paymentMethod.title")}</h2>
                                </div>
                                <div className="grid grid-cols-1 gap-4">
                                    {/* Payme */}
                                    <div onClick={() => setPaymentMethod('payme')} className={`cursor-pointer border-2 transition-all p-5 flex items-center gap-4 rounded-xl relative ${paymentMethod === 'payme' ? 'border-primary bg-primary/5 ring-1 ring-primary/20' : 'border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-slate-200 dark:hover:border-slate-700'}`}>
                                        <div className="w-14 h-14 rounded-xl overflow-hidden flex items-center justify-center">
                                            <Image src="/payme.svg" alt="Payme" width={56} height={56} className="object-cover" />
                                        </div>
                                        <div className="flex-grow">
                                            <h4 className="font-bold text-slate-900 dark:text-white text-lg">{t("paymentMethod.payme.title")}</h4>
                                            <p className="text-sm text-slate-500 dark:text-slate-400">{t("paymentMethod.payme.desc")}</p>
                                        </div>
                                        <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${paymentMethod === 'payme' ? 'border-primary' : 'border-slate-300 dark:border-slate-600'}`}>
                                            {paymentMethod === 'payme' && <div className="w-3 h-3 bg-primary rounded-full" />}
                                        </div>
                                    </div>

                                    {/* Click */}
                                    <div onClick={() => setPaymentMethod('click')} className={`cursor-pointer border-2 transition-all p-5 flex items-center gap-4 rounded-xl relative ${paymentMethod === 'click' ? 'border-primary bg-primary/5 ring-1 ring-primary/20' : 'border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-slate-200 dark:hover:border-slate-700'}`}>
                                        <div className="w-14 h-14 rounded-xl overflow-hidden flex items-center justify-center p-1" style={{ background: '#00309C' }}>
                                            <Image src="/click.svg" alt="Click" width={56} height={56} className="object-contain" />
                                        </div>
                                        <div className="flex-grow">
                                            <h4 className="font-bold text-slate-900 dark:text-white text-lg">{t("paymentMethod.click.title")}</h4>
                                            <p className="text-sm text-slate-500 dark:text-slate-400">{t("paymentMethod.click.desc")}</p>
                                        </div>
                                        <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${paymentMethod === 'click' ? 'border-primary' : 'border-slate-300 dark:border-slate-600'}`}>
                                            {paymentMethod === 'click' && <div className="w-3 h-3 bg-primary rounded-full" />}
                                        </div>
                                    </div>

                                    {/* Uzum */}
                                    <div onClick={() => setPaymentMethod('uzum')} className={`cursor-pointer border-2 transition-all p-5 flex items-center gap-4 rounded-xl relative ${paymentMethod === 'uzum' ? 'border-primary bg-primary/5 ring-1 ring-primary/20' : 'border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-slate-200 dark:hover:border-slate-700'}`}>
                                        <div className="w-14 h-14 rounded-xl overflow-hidden flex items-center justify-center">
                                            <Image src="/uzum.svg" alt="Uzum" width={56} height={56} className="object-contain" />
                                        </div>
                                        <div className="flex-grow">
                                            <h4 className="font-bold text-slate-900 dark:text-white text-lg">{t("paymentMethod.uzum.title")}</h4>
                                            <p className="text-sm text-slate-500 dark:text-slate-400">{t("paymentMethod.uzum.desc")}</p>
                                        </div>
                                        <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${paymentMethod === 'uzum' ? 'border-primary' : 'border-slate-300 dark:border-slate-600'}`}>
                                            {paymentMethod === 'uzum' && <div className="w-3 h-3 bg-primary rounded-full" />}
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-8 flex items-center gap-2 text-xs text-slate-500">
                                    <span className="material-symbols-outlined text-sm text-green-500">lock</span>
                                    {t("paymentMethod.secureInfo")}
                                </div>
                            </div>

                            <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-4">
                                <Link href={`/osago/step-3?plate=${plate}&techPassport=${techPassport}&pinfl=${pinfl}&passport=${passport}&phone=${encodeURIComponent(phone)}&duration=${duration}&driversCount=${driversCount}`} className="flex items-center justify-center rounded-xl h-14 px-8 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-base font-bold hover:bg-slate-200 dark:hover:bg-slate-700 transition-all w-full md:w-auto">
                                    <span className="material-symbols-outlined mr-2">arrow_back</span>
                                    {t("buttons.back")}
                                </Link>
                                <button
                                    onClick={() => {
                                        setIsProcessing(true);
                                        setTimeout(() => {
                                            router.push('/success');
                                        }, 1500);
                                    }}
                                    disabled={isProcessing}
                                    className={`flex items-center justify-center rounded-xl h-14 px-12 bg-primary text-white text-base font-bold hover:bg-blue-600 transition-all shadow-lg shadow-blue-200 dark:shadow-none w-full md:w-auto ${isProcessing ? 'opacity-70 cursor-not-allowed' : ''}`}
                                >
                                    {isProcessing ? (
                                        <div className="flex items-center gap-2">
                                            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                            <span>{t("buttons.processing") || "Processing..."}</span>
                                        </div>
                                    ) : (
                                        <>
                                            {t("buttons.pay", { amount: "56 000 UZS" })}
                                            <span className="material-symbols-outlined ml-2">payments</span>
                                        </>
                                    )}
                                </button>
                            </div>
                        </div>

                        <div className="lg:col-span-5 xl:col-span-4 flex flex-col gap-6">
                            <div className="bg-blue-50 dark:bg-slate-800/50 rounded-2xl p-6 border border-blue-100 dark:border-slate-700">
                                <div className="flex items-start gap-4">
                                    <div className="bg-white dark:bg-slate-700 p-2.5 rounded-xl shadow-sm text-primary flex-shrink-0">
                                        <span className="material-symbols-outlined">security</span>
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-slate-900 dark:text-white text-lg">{t("sidebar.secureTitle")}</h3>
                                        <p className="text-sm text-slate-600 dark:text-slate-400 mt-2 leading-relaxed">
                                            {t("sidebar.secureText")}
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 shadow-sm">
                                <h4 className="text-xs font-extrabold text-slate-400 dark:text-slate-500 mb-6 uppercase tracking-[0.15em]">{t("sidebar.title")}</h4>
                                <div className="space-y-4">
                                    <div className="flex justify-between items-start">
                                        <span className="text-sm text-slate-500 dark:text-slate-400">{t("sidebar.auto")}</span>
                                        <span className="text-sm font-bold text-slate-900 dark:text-white text-right">Toyota Camry<br /><span className="text-slate-400 dark:text-slate-500 font-medium whitespace-nowrap bg-slate-100 dark:bg-slate-800 px-1 py-0.5 rounded">{plate || '01 A 123 AA'}</span></span>
                                    </div>
                                    <div className="flex justify-between items-center text-sm">
                                        <span className="text-slate-500 dark:text-slate-400">{t("sidebar.period")}</span>
                                        <span className="font-bold text-slate-900 dark:text-white">{t("sidebar.periodValue")}</span>
                                    </div>
                                    <div className="flex justify-between items-center text-sm">
                                        <span className="text-slate-500 dark:text-slate-400">{t("sidebar.drivers")}</span>
                                        <span className="font-bold text-slate-900 dark:text-white">{t("sidebar.driversValue")}</span>
                                    </div>
                                    <div className="pt-6 border-t border-slate-100 dark:border-slate-800 flex justify-between items-center">
                                        <span className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider">{t("sidebar.totalLabel")}</span>
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

            <Footer />
        </div>
    );
}

export default function OsagoStep4Page() {
    return (
        <Suspense fallback={<div className="bg-[#f8fafc] dark:bg-[#0f172a] min-h-screen flex items-center justify-center"><div className="w-8 h-8 rounded-full border-4 border-blue-500 border-t-transparent animate-spin"></div></div>}>
            <OsagoStep4Content />
        </Suspense>
    );
}
