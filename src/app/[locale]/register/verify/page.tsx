import { Link } from "@/i18n/routing";
import { Header } from "@/components/Header";
import { useTranslations } from "next-intl";

export default function OTPVerification() {
    const t = useTranslations("RegisterVerify");
    return (
        <div className="bg-background-light dark:bg-background-dark text-text-main-light dark:text-text-main-dark transition-colors duration-200 min-h-screen flex flex-col">
            <Header />

            <main className="flex-grow flex flex-col lg:flex-row h-full min-h-[calc(100vh-73px)]">
                <div className="hidden lg:block lg:w-1/2 relative overflow-hidden bg-surface-dark">
                    <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuC0lv2U2IoQS3irKyUXmXpanoM0h2fVOsJcH3va40lbgJKvFm5T3g7ZwLhrfRnd-USmMmwEL5ONnaQTEhlCZ-1zL0znthkNeTJgFfjY9NHW8fd4Q1bTeWFSfzldUKsgRCbPi69i5BU5R6feEkvsNMO4Ml-cVy7-G2LoE50diIfVjNfWeXFwulODveacqLEBVGmfVReDDhXjnzSVM6WetvY21_Zk5GqVIx8zX3dml87j0kJe3iAPEARedgjqpYloJtK-a_TFkHMRnRY")' }}>
                        <div className="absolute inset-0 bg-blue-900/60 mix-blend-multiply"></div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                    </div>
                    <div className="absolute bottom-12 left-12 right-12 text-white">
                        <div className="mb-6 flex items-center gap-2 text-primary-light">
                            <span className="material-symbols-outlined text-3xl text-blue-400">verified_user</span>
                            <span className="text-xl font-bold tracking-tight">OsonPolis</span>
                        </div>
                        <blockquote className="text-2xl font-bold mb-4 leading-relaxed">{t("testimonial.quote")}</blockquote>
                        <div className="flex items-center gap-3">
                            <div className="h-10 w-10 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm border border-white/10">
                                <span className="material-symbols-outlined text-white text-xl">format_quote</span>
                            </div>
                            <div>
                                <p className="font-bold text-sm">{t("testimonial.name")}</p>
                                <p className="text-white/80 text-xs">{t("testimonial.role")}</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="w-full lg:w-1/2 flex items-center justify-center p-6 md:p-12 lg:p-20 bg-background-light dark:bg-background-dark overflow-y-auto">
                    <div className="w-full max-w-md flex flex-col gap-8">
                        <div className="flex flex-col gap-3">
                            <Link href="/register" className="flex items-center gap-2 text-primary hover:text-primary-hover text-sm font-bold mb-4 w-fit transition-all group">
                                <span className="material-symbols-outlined text-sm group-hover:-translate-x-1 transition-transform">arrow_back</span>
                                {t("form.back")}
                            </Link>
                            <h1 className="text-text-main-light dark:text-text-main-dark text-3xl md:text-4xl font-black leading-tight tracking-tight">
                                {t("form.title")}
                            </h1>
                            <p className="text-text-sub-light dark:text-text-sub-dark text-base font-normal leading-relaxed">
                                {t("form.subtitle1")}<span className="font-bold text-text-main-light dark:text-text-main-dark">+998 90 *** ** 00</span>
                            </p>
                        </div>
                        <form className="flex flex-col gap-8">
                            <div className="grid grid-cols-6 gap-2 md:gap-3">
                                <input autoComplete="one-time-code" className="otp-input w-full bg-surface-light dark:bg-surface-dark border border-border-light dark:border-border-dark text-text-main-light dark:text-text-main-dark text-xl md:text-2xl font-bold rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all aspect-square text-center" maxLength={1} type="text" defaultValue="" />
                                <input className="otp-input w-full bg-surface-light dark:bg-surface-dark border border-border-light dark:border-border-dark text-text-main-light dark:text-text-main-dark text-xl md:text-2xl font-bold rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all aspect-square text-center" maxLength={1} type="text" defaultValue="" />
                                <input className="otp-input w-full bg-surface-light dark:bg-surface-dark border border-border-light dark:border-border-dark text-text-main-light dark:text-text-main-dark text-xl md:text-2xl font-bold rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all aspect-square text-center" maxLength={1} type="text" />
                                <input className="otp-input w-full bg-surface-light dark:bg-surface-dark border border-border-light dark:border-border-dark text-text-main-light dark:text-text-main-dark text-xl md:text-2xl font-bold rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all aspect-square text-center" maxLength={1} type="text" />
                                <input className="otp-input w-full bg-surface-light dark:bg-surface-dark border border-border-light dark:border-border-dark text-text-main-light dark:text-text-main-dark text-xl md:text-2xl font-bold rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all aspect-square text-center" maxLength={1} type="text" />
                                <input className="otp-input w-full bg-surface-light dark:bg-surface-dark border border-border-light dark:border-border-dark text-text-main-light dark:text-text-main-dark text-xl md:text-2xl font-bold rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all aspect-square text-center" maxLength={1} type="text" />
                            </div>
                            <div className="flex flex-col gap-6">
                                <Link href="/dashboard" className="w-full flex items-center justify-center rounded-xl bg-primary hover:bg-primary-hover transition-all duration-200 text-white text-base font-bold h-14 px-6 shadow-md hover:shadow-lg active:scale-[0.98]">
                                    {t("form.verifyBtn")}
                                </Link>
                                <div className="flex flex-col items-center gap-1.5">
                                    <p className="text-sm text-text-sub-light dark:text-text-sub-dark">{t("form.didNotReceive")}</p>
                                    <div className="flex items-center gap-2">
                                        <button type="button" className="text-primary hover:text-primary-hover font-bold text-sm pointer-events-none opacity-50 transition-colors">{t("form.resend")}</button>
                                        <span className="bg-primary/10 text-primary dark:text-primary-hover px-2 py-0.5 rounded text-xs font-bold font-mono">00:59</span>
                                    </div>
                                </div>
                            </div>
                        </form>
                        <div className="mt-8 pt-8 border-t border-border-light dark:border-border-dark">
                            <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-text-sub-light dark:text-text-sub-dark mb-4">
                                <Link className="hover:text-primary transition-colors" href="/privacy">{t("footer.privacy")}</Link>
                                <Link className="hover:text-primary transition-colors" href="/terms">{t("footer.terms")}</Link>
                                <Link className="hover:text-primary transition-colors" href="/support">{t("footer.support")}</Link>
                            </div>
                            <p className="text-center text-xs text-text-sub-light/60 dark:text-text-sub-dark/60">
                                {t("footer.copyright")}
                            </p>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
