import { Link } from "@/i18n/routing";
import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { setRequestLocale } from "next-intl/server";

export function generateStaticParams() {
    return [{ locale: 'ru' }, { locale: 'uz' }, { locale: 'en' }];
}
export const dynamic = 'force-static';

export default async function About({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params;
    setRequestLocale(locale);

    const t = await getTranslations("About");
    return (
        <div className="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden font-display text-slate-900 dark:text-slate-100 transition-colors duration-200">
            <div className="layout-container flex h-full grow flex-col">
                <main className="flex flex-col flex-1">
                    <section className="@container">
                        <div className="p-0 @[480px]:p-8">
                            <div className="flex min-h-[520px] flex-col gap-6 bg-cover bg-center bg-no-repeat @[480px]:rounded-xl items-center justify-center p-8 relative overflow-hidden" style={{ backgroundImage: 'linear-gradient(rgba(19, 127, 236, 0.7), rgba(16, 25, 34, 0.85)), url("https://lh3.googleusercontent.com/aida-public/AB6AXuBYDGa0X_1YaI9Kx9_fp9vlsd7mSTFjXUNSLqx6W88niN1zkTuRcYJd9Oi6EoXDW1YaGMkMPv-iqfjkTfavQEgD-SV8eJH_4roGv4rrg-lcS1qa4IjPYzdVh30jV3YFhLOLcZPOypbzJYMf46KA5sA8ciHmbKxKxCdlScmDPwXhga-SPLcsUS4j9GV-KlqfRJSLOB1jE0R6f9v4zBQrv3kOAYlJ3kN00kcZ0vcAL9HyN2y6y_-0H1Q15mlrMZU2sD2vfPidk6k9Xl0")' }}>
                                <div className="flex flex-col gap-4 text-center max-w-3xl z-10">
                                    <h1 className="text-white text-4xl font-black leading-tight tracking-tight @[480px]:text-6xl">
                                        {t("hero.title")}
                                    </h1>
                                    <p className="text-white/90 text-lg font-medium @[480px]:text-xl max-w-2xl mx-auto">
                                        {t("hero.subtitle")}
                                    </p>
                                    <div className="mt-4">
                                        <button className="bg-white text-primary hover:bg-slate-100 font-bold py-3 px-8 rounded-lg transition-all shadow-xl">
                                            {t("hero.btn")}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="max-w-[1200px] mx-auto w-full px-6 py-16">
                        <div className="flex flex-col md:flex-row gap-12 items-center">
                            <div className="flex-1">
                                <h2 className="text-primary text-sm font-bold uppercase tracking-widest mb-2">{t("mission.label")}</h2>
                                <h3 className="text-3xl font-bold mb-6 text-primary dark:text-primary">{t("mission.title")}</h3>
                                <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                                    {t("mission.desc")}
                                </p>
                                <div className="grid grid-cols-2 gap-6">
                                    <div className="border-l-4 border-primary pl-4">
                                        <div className="text-2xl font-bold text-primary dark:text-primary">{t("mission.stats.policies")}</div>
                                        <div className="text-sm text-slate-500">{t("mission.stats.policiesLabel")}</div>
                                    </div>
                                    <div className="border-l-4 border-primary pl-4">
                                        <div className="text-2xl font-bold text-primary dark:text-primary">{t("mission.stats.uptime")}</div>
                                        <div className="text-sm text-slate-500">{t("mission.stats.uptimeLabel")}</div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex-1 w-full">
                                <div className="rounded-xl overflow-hidden shadow-2xl bg-primary/10 p-2 relative h-[400px]">
                                    <Image fill alt="Team collaboration in a modern workspace" className="rounded-lg object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC1kQned_s0ctDr6wrL5bK461Zky0RRQJEjl3rY9cdMywX1aoI3bDcaN_LpL34YyEo_697mLG1jXtrf93Tk9rpjtVDX_ldiCMNiZ2eGXdBseerXQ-T_0e10II7o9x4xQsRbIMCVA29KBO_3meYeU2zDbZEtqgGb3Jaw-eWPhTPV7q4LX6NU-T_cM5IkMted5rPY2QMg2Elvw2hvxS4xFtDYFlgBKG5rVXPSM1iPCwxHR-jL1ToKb_sztOffFUYeeY9S1-D-4SefZxU" />
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="bg-white dark:bg-slate-900 py-20">
                        <div className="max-w-[1200px] mx-auto px-6">
                            <div className="text-center mb-16">
                                <h2 className="text-primary text-sm font-bold uppercase tracking-widest mb-2">{t("team.label")}</h2>
                                <h3 className="text-4xl font-extrabold text-primary dark:text-primary">{t("team.title")}</h3>
                                <p className="text-slate-500 mt-4 max-w-xl mx-auto">{t("team.subtitle")}</p>
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                                <div className="group">
                                    <div className="relative mb-4 overflow-hidden rounded-xl aspect-[4/5] bg-slate-100 dark:bg-slate-800">
                                        <Image fill alt="CEO portrait" className="object-cover transition-transform duration-500 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA21DB-ur3hHUhoFMhgkQTKiq-5weahigkgckndUNjgoXYnZq7R4gP8CilCefiTrwTmY_LrAl3EIavVPh_T3mZ8ZDFEo4nE-tbwJbKfGrazyvn5pSpnug22iMoax7sBqxV0L2yIJq94_-SqfT4dAs_C5mWVVMq_pCRWg_F4oHC3eWCFHki47TMTI_hWH6YXYMtSuwtXk5FYRYUd3wzAhMkW0zJCqvol2_UweUwOYLl6nypp3lm9Z5Qvt64GbTuW23Dz6jbKLc8HvRI" />
                                        <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                                            <div className="flex gap-3">
                                                <span className="material-symbols-outlined text-white cursor-pointer">share</span>
                                            </div>
                                        </div>
                                    </div>
                                    <h4 className="text-xl font-bold text-primary dark:text-primary">{t("team.members.ceo.name")}</h4>
                                    <p className="text-primary font-semibold">{t("team.members.ceo.role")}</p>
                                </div>
                                <div className="group">
                                    <div className="relative mb-4 overflow-hidden rounded-xl aspect-[4/5] bg-slate-100 dark:bg-slate-800">
                                        <Image fill alt="Operations Head portrait" className="object-cover transition-transform duration-500 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC2DNoXecCs7a2oDxeH1qWE_sQqTPlE3JylRc53HyyYqcXl1k153Xh5WlxdYy6Qx1frDPXb1-J08OP7J_nPKcgBLLWlk4ZqZKQI2tgQUhgxI5XLmhQRZQ_SpD2o5qnxKIVMuKK1Lnn0BB4ptMs6bHVHKYuZQTzxcl6ANU28RwzGssYpOQehFigOaqgp8ZEwavCecM_8PnAbHZFVfcTrMFGeODhLta7t_uf-Wf3RciYSR8ZWUQrGYedUUnb24TdINxGtoHweWQWvfsU" />
                                        <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                                            <div className="flex gap-3">
                                                <span className="material-symbols-outlined text-white cursor-pointer">share</span>
                                            </div>
                                        </div>
                                    </div>
                                    <h4 className="text-xl font-bold text-primary dark:text-primary">{t("team.members.coo.name")}</h4>
                                    <p className="text-primary font-semibold">{t("team.members.coo.role")}</p>
                                </div>
                                <div className="group">
                                    <div className="relative mb-4 overflow-hidden rounded-xl aspect-[4/5] bg-slate-100 dark:bg-slate-800">
                                        <Image fill alt="CTO portrait" className="object-cover transition-transform duration-500 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDrGBF8WXjRMq1YwN2HDV5NDIFvmEvgmFF4HFE3V_yOfLUCexBJg9xfy8Gm6uIL24T2k1dPLa9lUdaKYfcQ_I2rtm9vOP60zORBoSB0qi97h6_J67qza71cFiZf5gd-YSgiL-PUY4NEUzzxTYhGBwpEzhWFvfcRDfFXOLudvF01xt951rk3krhh6KI7rUWTRbdLWt8xndr1WD8Igh6zSGO_d4n-tJEN5NQlf1OxtLzwOb_zdeoagGLDj_1isOBqSKONHpxa5_wn9Zg" />
                                        <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                                            <div className="flex gap-3">
                                                <span className="material-symbols-outlined text-white cursor-pointer">share</span>
                                            </div>
                                        </div>
                                    </div>
                                    <h4 className="text-xl font-bold text-primary dark:text-primary">{t("team.members.cto.name")}</h4>
                                    <p className="text-primary font-semibold">{t("team.members.cto.role")}</p>
                                </div>
                                <div className="group">
                                    <div className="relative mb-4 overflow-hidden rounded-xl aspect-[4/5] bg-slate-100 dark:bg-slate-800">
                                        <Image fill alt="Customer Relations portrait" className="object-cover transition-transform duration-500 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCoQCW_93Ftenwn2w5yiri1v-mKSgadAxAfvn3i96eZ9ueHIHLQffHYWcAdq5VqwJ4c2WSOiNndX0wQ4JzLnhcQcH9dyY7HmA1eNCMYGUmr-93g9PUCvoxy-GmXCWUKLDpSWHN57LW6ecYQGGDNBVvfYal4Vc9g-WJdcMbreW-9rjTIt2YLnoVAXKVeM9zkPPjAsQCl-GdjgPT0U2RIc8F3Nnn_XFNzQM69vQKmuNConHncS2PSL0LoNKnJY9tyufkA3RFKer-FKYw" />
                                        <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                                            <div className="flex gap-3">
                                                <span className="material-symbols-outlined text-white cursor-pointer">share</span>
                                            </div>
                                        </div>
                                    </div>
                                    <h4 className="text-xl font-bold text-primary dark:text-primary">{t("team.members.cs.name")}</h4>
                                    <p className="text-primary font-semibold">{t("team.members.cs.role")}</p>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="py-20 bg-background-light dark:bg-background-dark">
                        <div className="max-w-[1200px] mx-auto px-6">
                            <div className="text-center mb-16">
                                <h2 className="text-4xl font-extrabold text-primary dark:text-primary mb-4">{t("features.title")}</h2>
                                <div className="h-1.5 w-24 bg-primary mx-auto rounded-full"></div>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                <div className="bg-white dark:bg-slate-900 p-8 rounded-xl shadow-sm border border-slate-100 dark:border-slate-800 flex flex-col items-center text-center">
                                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6 text-primary">
                                        <span className="material-symbols-outlined text-3xl">gavel</span>
                                    </div>
                                    <h4 className="text-xl font-bold text-primary dark:text-primary mb-4">{t("features.f1.title")}</h4>
                                    <p className="text-slate-500 text-sm leading-relaxed">
                                        {t("features.f1.desc")}
                                    </p>
                                </div>
                                <div className="bg-white dark:bg-slate-900 p-8 rounded-xl shadow-sm border border-slate-100 dark:border-slate-800 flex flex-col items-center text-center">
                                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6 text-primary">
                                        <span className="material-symbols-outlined text-3xl">handshake</span>
                                    </div>
                                    <h4 className="text-xl font-bold text-primary dark:text-primary mb-4">{t("features.f2.title")}</h4>
                                    <p className="text-slate-500 text-sm leading-relaxed">
                                        {t("features.f2.desc")}
                                    </p>
                                </div>
                                <div className="bg-white dark:bg-slate-900 p-8 rounded-xl shadow-sm border border-slate-100 dark:border-slate-800 flex flex-col items-center text-center">
                                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6 text-primary">
                                        <span className="material-symbols-outlined text-3xl">visibility</span>
                                    </div>
                                    <h4 className="text-xl font-bold text-primary dark:text-primary mb-4">{t("features.f3.title")}</h4>
                                    <p className="text-slate-500 text-sm leading-relaxed">
                                        {t("features.f3.desc")}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="py-12 bg-primary">
                        <div className="max-w-[1200px] mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8 text-white">
                            <div>
                                <h3 className="text-2xl font-bold mb-2">{t("cta.title")}</h3>
                                <p className="text-white/80">{t("cta.subtitle")}</p>
                            </div>
                            <button className="bg-white text-primary font-extrabold px-10 py-4 rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1">
                                {t("cta.btn")}
                            </button>
                        </div>
                    </section>
                </main>
            </div>
        </div>
    );
}
