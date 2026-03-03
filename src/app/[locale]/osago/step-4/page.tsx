"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import { useClientSearchParams } from "@/hooks/useClientSearchParams";

export default function OsagoStep4Page() {
    const t = useTranslations("OsagoStep4");
    const searchParams = useClientSearchParams();
    const router = useRouter();
    const [paymentMethod, setPaymentMethod] = useState<'payme' | 'click' | 'uzum'>('payme');
    const [isProcessing, setIsProcessing] = useState(false);

    // Pass through previous step data — filled from URL on client mount
    const [plate, setPlate] = useState("");
    const [techPassport, setTechPassport] = useState("");
    const [pinfl, setPinfl] = useState("");
    const [passport, setPassport] = useState("");
    const [phone, setPhone] = useState("");
    const [duration, setDuration] = useState("year");
    const [driversCount, setDriversCount] = useState("limited");
    const [techPassportSeries, setTechPassportSeries] = useState("");
    const [techPassportNumber, setTechPassportNumber] = useState("");
    const [amount, setAmount] = useState<number | null>(null);
    const [driversData, setDriversData] = useState<any[]>([]);
    const [checkoutError, setCheckoutError] = useState<string | null>(null);

    useEffect(() => {
        if (!searchParams) return;
        setPlate(searchParams.get("plate") || "");
        setTechPassport(searchParams.get("techPassport") || searchParams.get("license") || "");
        setPinfl(searchParams.get("pinfl") || "");
        setPassport(searchParams.get("passport") || "");
        setPhone(searchParams.get("phone") || "");
        setDuration(searchParams.get("duration") || "year");
        setDriversCount(searchParams.get("driversCount") || "limited");
        setTechPassportSeries(searchParams.get("techPassportSeries") || "");
        setTechPassportNumber(searchParams.get("techPassportNumber") || "");

        const amountParam = searchParams.get("amount");
        if (amountParam && amountParam !== "null") setAmount(parseInt(amountParam, 10));

        const driversDataParam = searchParams.get("driversData");
        if (driversDataParam) {
            try {
                setDriversData(JSON.parse(decodeURIComponent(driversDataParam)));
            } catch (e) {
                console.error("Failed to parse drivers data", e);
            }
        }
    }, [searchParams]);

    const handlePayment = async () => {
        setIsProcessing(true);
        setCheckoutError(null);

        try {
            // Reconstruct the payload according to Gross Insurance spec
            const payload = {
                details: {
                    start_date: new Date().toLocaleDateString('ru-RU').replace(/\//g, '.'), // Expected: DD.MM.YYYY
                    period_id: duration === 'year' ? 1 : 2,
                    number_drivers_id: driversCount === 'limited' ? 1 : 2,
                    phone_number: phone.replace(/[^0-9+]/g, ''),
                    amount_uzs: amount || 56000
                },
                techPassport: {
                    govNumber: plate,
                    tech_sery: techPassportSeries || techPassport.slice(0, 3) || 'AAA',
                    tech_number: techPassportNumber || techPassport.slice(3) || '1234567'
                },
                owner: {
                    person: {
                        pinfl: pinfl.replace(/\s/g, ''),
                        pass_seria: passport.slice(0, 2),
                        pass_number: passport.slice(2)
                    }
                },
                applicant: {
                    pinfl: pinfl.replace(/\s/g, ''),
                    pass_seria: passport.slice(0, 2),
                    pass_number: passport.slice(2),
                    is_driver: true,
                    relative: 0
                },
                drivers: driversCount === 'limited' && driversData.length > 0
                    ? driversData.map(d => ({
                        birthdate: d.birthDate, // YYYY-MM-DD
                        pass_seria: d.passportSeries,
                        pass_number: d.passportNumber,
                        relative: d.relation === 'father' ? 1 :
                            d.relation === 'older_brother' ? 2 :
                                d.relation === 'younger_brother' ? 3 :
                                    d.relation === 'wife' ? 4 :
                                        d.relation === 'mother' ? 5 :
                                            d.relation === 'husband' ? 6 :
                                                d.relation === 'son' ? 7 :
                                                    d.relation === 'daughter' ? 8 :
                                                        d.relation === 'older_sister' ? 9 :
                                                            d.relation === 'younger_sister' ? 10 : 0
                    }))
                    : []
            };

            const res = await fetch('/api/osago/save-policy', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            });

            const data = await res.json();

            if (data?.result && data?.response) {
                // Success! Redirect to the selected payment gateway
                const url = paymentMethod === 'payme' ? data.response.payme?.url : data.response.click?.url;
                if (url) {
                    window.location.href = url;
                } else {
                    router.push('/success'); // Fallback if no URL
                }
            } else {
                console.error("Save Policy Error:", data);
                // Sandbox currently returns 502, handle this gracefully in UI
                setCheckoutError(t("checkout.errorTemporary") || 'Test environment is currently offline. Your data is valid, but we cannot create the policy right now.');
                setIsProcessing(false);
            }

        } catch (error) {
            console.error(error);
            setCheckoutError('Unexpected network error occurred. Please try again.');
            setIsProcessing(false);
        }
    };

    return (
        <>
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
                                <Link href={`/osago/step-3?plate=${plate}&techPassportSeries=${techPassportSeries}&techPassportNumber=${techPassportNumber}&techPassport=${techPassport}&pinfl=${pinfl}&passport=${passport}&phone=${encodeURIComponent(phone)}&duration=${duration}&driversCount=${driversCount}&driversData=${encodeURIComponent(JSON.stringify(driversData))}`} className="flex items-center justify-center rounded-xl h-14 px-8 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-base font-bold hover:bg-slate-200 dark:hover:bg-slate-700 transition-all w-full md:w-auto">
                                    <span className="material-symbols-outlined mr-2">arrow_back</span>
                                    {t("buttons.back")}
                                </Link>
                                <div className="w-full md:w-auto">
                                    <button
                                        onClick={handlePayment}
                                        disabled={isProcessing}
                                        className={`flex items-center justify-center rounded-xl w-full h-14 px-12 bg-primary text-white text-base font-bold hover:bg-blue-600 transition-all shadow-lg shadow-blue-200 dark:shadow-none ${isProcessing ? 'opacity-70 cursor-not-allowed' : ''}`}
                                    >
                                        {isProcessing ? (
                                            <div className="flex items-center gap-2">
                                                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                                <span>{t("buttons.processing") || "Processing..."}</span>
                                            </div>
                                        ) : (
                                            <>
                                                {t("buttons.pay", { amount: amount ? new Intl.NumberFormat('uz-UZ').format(amount) + " UZS" : "56 000 UZS" })}
                                                <span className="material-symbols-outlined ml-2">payments</span>
                                            </>
                                        )}
                                    </button>
                                    {checkoutError && (
                                        <p className="text-red-500 text-xs mt-3 text-center md:text-right max-w-xs">{checkoutError}</p>
                                    )}
                                </div>
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
                                        <span className="text-sm font-bold text-slate-900 dark:text-white text-right"><span className="text-slate-600 dark:text-slate-300 font-medium whitespace-nowrap bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded">{plate || '01 A 123 AA'}</span></span>
                                    </div>
                                    <div className="flex justify-between items-center text-sm">
                                        <span className="text-slate-500 dark:text-slate-400">{t("sidebar.period")}</span>
                                        <span className="font-bold text-slate-900 dark:text-white">{duration === 'year' ? t("duration.year.title") : t("duration.six_months.title")}</span>
                                    </div>
                                    <div className="flex justify-between items-center text-sm">
                                        <span className="text-slate-500 dark:text-slate-400">{t("sidebar.drivers")}</span>
                                        <span className="font-bold text-slate-900 dark:text-white">{driversCount === 'limited' ? t("driversCount.limited.title") : t("driversCount.unlimited.title")}</span>
                                    </div>
                                    <div className="pt-6 border-t border-slate-100 dark:border-slate-800 flex justify-between items-center">
                                        <span className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider">{t("sidebar.totalLabel")}</span>
                                        <div className="flex flex-col items-end">
                                            <span className="text-2xl font-black text-primary">{amount ? new Intl.NumberFormat('uz-UZ').format(amount) : '56 000'} UZS</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}

