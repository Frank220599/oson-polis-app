import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";

export default function SuccessPage() {
    const t = useTranslations("Success");
    return (
        <div className="bg-background-light dark:bg-background-dark min-h-screen flex flex-col text-slate-900 dark:text-slate-100 transition-colors duration-200">
            <div className="relative flex flex-col w-full grow overflow-x-hidden">
                <Header />
                <main className="flex-1 flex justify-center py-10 px-4 md:px-6 lg:px-8">
                    <div className="flex flex-col max-w-[800px] w-full items-center">
                        <div className="flex flex-col items-center gap-6 text-center mb-10 w-full animate-in fade-in slide-in-from-bottom-4 duration-700">
                            <div className="size-24 rounded-full bg-green-50 dark:bg-green-900/20 flex items-center justify-center mb-2 shadow-sm border border-green-100 dark:border-green-800">
                                <span className="material-symbols-outlined text-green-500 text-6xl">check_circle</span>
                            </div>
                            <div className="space-y-3 max-w-[600px]">
                                <h1 className="text-slate-900 dark:text-white text-3xl md:text-4xl font-black leading-tight tracking-tight">
                                    {t("main.title")}
                                </h1>
                                <p className="text-slate-500 dark:text-slate-400 text-base md:text-lg">
                                    {t("main.subtitle")}
                                </p>
                            </div>
                        </div>
                        {/* Policy Details Card */}
                        <div className="w-full bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm overflow-hidden mb-8">
                            <div className="bg-slate-50 dark:bg-slate-800/50 p-6 border-b border-slate-200 dark:border-slate-700 flex items-center gap-3">
                                <div className="size-10 bg-white dark:bg-slate-700 rounded-lg flex items-center justify-center shadow-sm text-primary">
                                    <span className="material-symbols-outlined">verified_user</span>
                                </div>
                                <div>
                                    <h3 className="text-base font-bold text-slate-900 dark:text-white">{t("policyDetails.title")}</h3>
                                    <p className="text-xs text-slate-500 dark:text-slate-400">{t("policyDetails.subtitle")}</p>
                                </div>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-slate-100 dark:bg-slate-700">
                                <div className="bg-white dark:bg-slate-800 p-6 flex flex-col gap-1 hover:bg-slate-50 dark:hover:bg-slate-750 transition-colors">
                                    <span className="text-slate-500 dark:text-slate-400 text-sm font-medium">{t("policyDetails.policyNumber")}</span>
                                    <span className="text-slate-900 dark:text-white text-lg font-bold font-mono tracking-wide">01H737UB</span>
                                </div>
                                <div className="bg-white dark:bg-slate-800 p-6 flex flex-col gap-1 hover:bg-slate-50 dark:hover:bg-slate-750 transition-colors">
                                    <span className="text-slate-500 dark:text-slate-400 text-sm font-medium">{t("policyDetails.validUntil")}</span>
                                    <span className="text-slate-900 dark:text-white text-lg font-bold">до 12.05.2025</span>
                                </div>
                                <div className="bg-white dark:bg-slate-800 p-6 flex flex-col gap-1 hover:bg-slate-50 dark:hover:bg-slate-750 transition-colors">
                                    <span className="text-slate-500 dark:text-slate-400 text-sm font-medium">{t("policyDetails.insuranceCompany")}</span>
                                    <div className="flex items-center gap-2">
                                        <span className="material-symbols-outlined text-primary text-xl">security</span>
                                        <span className="text-slate-900 dark:text-white text-lg font-bold">Apex Insurance</span>
                                    </div>
                                </div>
                                <div className="bg-white dark:bg-slate-800 p-6 flex flex-col gap-1 hover:bg-slate-50 dark:hover:bg-slate-750 transition-colors">
                                    <span className="text-slate-500 dark:text-slate-400 text-sm font-medium">{t("policyDetails.status")}</span>
                                    <span className="inline-flex items-center gap-1.5 text-green-600 dark:text-green-400 text-lg font-bold">
                                        <span className="size-2 rounded-full bg-green-500 animate-pulse"></span>
                                        {t("policyDetails.statusActive")}
                                    </span>
                                </div>
                                <div className="bg-white dark:bg-slate-800 p-6 flex flex-col gap-1 hover:bg-slate-50 dark:hover:bg-slate-750 transition-colors">
                                    <span className="text-slate-500 dark:text-slate-400 text-sm font-medium">{t("policyDetails.issueDate")}</span>
                                    <span className="text-slate-900 dark:text-white text-lg font-bold">12.05.2024</span>
                                </div>
                                <div className="bg-white dark:bg-slate-800 p-6 flex flex-col gap-1 hover:bg-slate-50 dark:hover:bg-slate-750 transition-colors">
                                    <span className="text-slate-500 dark:text-slate-400 text-sm font-medium">{t("policyDetails.policyType")}</span>
                                    <span className="text-slate-900 dark:text-white text-lg font-bold">ОСАГО</span>
                                </div>
                            </div>
                        </div>
                        {/* Actions */}
                        <div className="flex flex-col gap-4 w-full max-w-[480px]">
                            <button className="group flex items-center justify-center w-full rounded-xl h-14 px-6 bg-primary hover:bg-blue-600 active:bg-blue-700 text-white gap-3 shadow-lg shadow-blue-200 dark:shadow-blue-900/20 transition-all transform active:scale-[0.98]">
                                <span className="material-symbols-outlined group-hover:animate-bounce">download</span>
                                <span className="text-base font-bold tracking-wide">{t("actions.download")}</span>
                            </button>
                            <Link href="/dashboard" className="group flex items-center justify-center w-full rounded-xl h-12 px-6 bg-transparent hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300 border border-transparent hover:border-slate-200 dark:hover:border-slate-700 transition-all gap-2">
                                <span className="text-sm font-bold">{t("actions.dashboard")}</span>
                                <span className="material-symbols-outlined text-lg group-hover:translate-x-1 transition-transform">arrow_forward</span>
                            </Link>
                        </div>
                    </div>
                </main>
                <Footer />
            </div>
        </div>
    );
}
