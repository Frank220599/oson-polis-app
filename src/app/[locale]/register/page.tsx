import { Link } from "@/i18n/routing";
import { Header } from "@/components/Header";
import { useTranslations } from "next-intl";

export default function Register() {
    const t = useTranslations("Register");
    return (
        <div className="relative flex h-auto min-h-screen w-full flex-col">
            <Header />

            <main className="flex-grow flex flex-col lg:flex-row h-full">
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

                <div className="w-full lg:w-1/2 flex items-center justify-center p-6 md:p-12 lg:p-20 bg-background-light dark:bg-background-dark min-h-[calc(100vh-73px)]">
                    <div className="w-full max-w-md flex flex-col gap-8">
                        <div className="flex flex-col gap-2">
                            <h1 className="text-text-main-light dark:text-text-main-dark text-3xl md:text-4xl font-black leading-tight tracking-tight">
                                {t("form.title")}
                            </h1>
                            <p className="text-text-sub-light dark:text-text-sub-dark text-base font-normal leading-relaxed">
                                {t("form.subtitle")}
                            </p>
                        </div>
                        <form className="flex flex-col gap-5">
                            <div className="flex flex-col gap-1.5">
                                <label className="text-sm font-semibold text-text-main-light dark:text-text-main-dark ml-1">{t("form.phoneLabel")}</label>
                                <div className="relative flex w-full items-stretch rounded-lg shadow-sm group focus-within:ring-2 focus-within:ring-primary focus-within:ring-offset-1 dark:focus-within:ring-offset-background-dark">
                                    <div className="flex items-center justify-center pl-4 pr-2 bg-surface-light dark:bg-surface-dark border border-r-0 border-slate-200 dark:border-slate-700 rounded-l-lg text-text-sub-light dark:text-text-sub-dark group-focus-within:border-primary group-focus-within:text-primary transition-colors">
                                        <span className="material-symbols-outlined text-[20px]">call</span>
                                    </div>
                                    <input className="flex-1 bg-surface-light dark:bg-surface-dark border border-l-0 border-slate-200 dark:border-slate-700 text-text-main-light dark:text-text-main-dark placeholder:text-text-sub-light/70 dark:placeholder:text-text-sub-dark/70 text-base rounded-r-lg focus:outline-none focus:border-primary block w-full p-3 pl-2 transition-colors" placeholder={t("form.phonePlaceholder")} required type="tel" />
                                </div>
                                <p className="text-xs text-text-sub-light dark:text-text-sub-dark ml-1 flex items-center gap-1">
                                    <span className="material-symbols-outlined text-[14px]">lock</span>
                                    {t("form.disclaimer")}
                                </p>
                            </div>
                            <Link href="/register/verify" className="mt-2 w-full cursor-pointer flex items-center justify-center rounded-lg bg-primary hover:bg-primary-hover transition-all duration-200 text-white text-base font-bold h-12 px-6 shadow-md hover:shadow-lg active:scale-[0.99] focus:ring-4 focus:ring-primary/20">
                                {t("form.submitBtn")}
                            </Link>
                            <div className="relative flex py-2 items-center">
                                <div className="flex-grow border-t border-border-light dark:border-border-dark"></div>
                                <span className="flex-shrink-0 mx-4 text-text-sub-light dark:text-text-sub-dark text-xs font-medium uppercase tracking-wider">{t("form.or")}</span>
                                <div className="flex-grow border-t border-border-light dark:border-border-dark"></div>
                            </div>
                            <div className="text-center">
                                <p className="text-text-main-light dark:text-text-main-dark text-base font-normal">
                                    {t("form.alreadyHave")}
                                    <Link className="text-primary hover:text-primary-hover font-bold hover:underline ml-1" href="/register">{t("form.loginLink")}</Link>
                                </p>
                            </div>
                        </form>
                        <div className="mt-8 pt-6 border-t border-border-light dark:border-border-dark flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-text-sub-light dark:text-text-sub-dark">
                            <Link className="hover:text-primary transition-colors" href="/privacy">{t("footer.privacy")}</Link>
                            <Link className="hover:text-primary transition-colors" href="/terms">{t("footer.terms")}</Link>
                            <Link className="hover:text-primary transition-colors" href="/support">{t("footer.support")}</Link>
                        </div>
                        <p className="text-center text-xs text-text-sub-light dark:text-text-sub-dark mt-2">
                            {t("footer.copyright")}
                        </p>
                    </div>
                </div>
            </main>
        </div>
    );
}
