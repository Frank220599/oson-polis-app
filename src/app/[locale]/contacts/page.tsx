import { Link } from "@/i18n/routing";
import Image from "next/image";
import { Header } from "@/components/Header";
import { useTranslations } from "next-intl";

export default function Contacts() {
    const t = useTranslations("Contacts");
    const tFooter = useTranslations("Footer");
    return (
        <div className="relative flex h-auto min-h-screen w-full flex-col font-display text-slate-900 dark:text-slate-100 transition-colors duration-200">
            <Header />

            <main className="flex-1 bg-background-light dark:bg-background-dark">
                {/* Hero Section */}
                <section className="bg-primary pt-20 pb-24 px-6 relative overflow-hidden">
                    <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at center, white 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
                    <div className="max-w-[1200px] mx-auto text-center relative z-10">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 tracking-tight">
                            {t("hero.title")}
                        </h1>
                        <p className="text-white/90 text-lg md:text-xl max-w-2xl mx-auto font-medium">
                            {t("hero.subtitle")}
                        </p>
                    </div>
                </section>

                {/* Contact Info and Form Section */}
                <section className="max-w-[1200px] mx-auto px-6 -mt-12 relative z-20 pb-20">
                    <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-xl border border-slate-100 dark:border-slate-800 overflow-hidden">
                        <div className="grid grid-cols-1 lg:grid-cols-2">
                            {/* Contact Info (Left) */}
                            <div className="p-8 md:p-12 bg-slate-50 dark:bg-slate-800/50 flex flex-col justify-between">
                                <div>
                                    <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-8">{t("info.title")}</h2>

                                    <div className="space-y-8">
                                        <div className="flex items-start gap-4 group">
                                            <div className="size-12 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-colors">
                                                <span className="material-symbols-outlined">location_on</span>
                                            </div>
                                            <div>
                                                <h3 className="font-bold text-slate-900 dark:text-white mb-1">{t("info.office")}</h3>
                                                <p className="text-slate-600 dark:text-slate-400">
                                                    {t("info.address1")}<br />
                                                    {t("info.address2")}
                                                </p>
                                            </div>
                                        </div>

                                        <div className="flex items-start gap-4 group">
                                            <div className="size-12 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-colors">
                                                <span className="material-symbols-outlined">phone_in_talk</span>
                                            </div>
                                            <div>
                                                <h3 className="font-bold text-slate-900 dark:text-white mb-1">{t("info.phone")}</h3>
                                                <p className="text-slate-600 dark:text-slate-400 mb-1">+998 (71) 200-00-00</p>
                                                <p className="text-slate-600 dark:text-slate-400">+998 (71) 200-00-01</p>
                                            </div>
                                        </div>

                                        <div className="flex items-start gap-4 group">
                                            <div className="size-12 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-colors">
                                                <span className="material-symbols-outlined">mail</span>
                                            </div>
                                            <div>
                                                <h3 className="font-bold text-slate-900 dark:text-white mb-1">{t("info.email")}</h3>
                                                <p className="text-slate-600 dark:text-slate-400 mb-1">info@osonpolis.uz</p>
                                                <p className="text-slate-600 dark:text-slate-400">support@osonpolis.uz</p>
                                            </div>
                                        </div>

                                        <div className="flex items-start gap-4 group">
                                            <div className="size-12 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-colors">
                                                <span className="material-symbols-outlined">schedule</span>
                                            </div>
                                            <div>
                                                <h3 className="font-bold text-slate-900 dark:text-white mb-1">{t("info.schedule")}</h3>
                                                <p className="text-slate-600 dark:text-slate-400">{t("info.hours1")}</p>
                                                <p className="text-slate-600 dark:text-slate-400">{t("info.hours2")}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-12 pt-8 border-t border-slate-200 dark:border-slate-700">
                                    <h3 className="font-bold text-slate-900 dark:text-white mb-4">{t("social.title")}</h3>
                                    <div className="flex gap-4">
                                        <a href="#" className="w-10 h-10 rounded-full bg-white dark:bg-slate-700 shadow-sm border border-slate-200 dark:border-slate-600 flex items-center justify-center text-slate-600 dark:text-slate-300 hover:text-primary hover:border-primary transition-colors">
                                            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" /></svg>
                                        </a>
                                        <a href="#" className="w-10 h-10 rounded-full bg-white dark:bg-slate-700 shadow-sm border border-slate-200 dark:border-slate-600 flex items-center justify-center text-slate-600 dark:text-slate-300 hover:text-primary hover:border-primary transition-colors">
                                            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg>
                                        </a>
                                        <a href="#" className="w-10 h-10 rounded-full bg-white dark:bg-slate-700 shadow-sm border border-slate-200 dark:border-slate-600 flex items-center justify-center text-slate-600 dark:text-slate-300 hover:text-primary hover:border-primary transition-colors">
                                            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" /></svg>
                                        </a>
                                    </div>
                                </div>
                            </div>

                            {/* Contact Form (Right) */}
                            <div className="p-8 md:p-12">
                                <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-2">{t("form.title")}</h2>
                                <p className="text-slate-500 dark:text-slate-400 mb-8">{t("form.subtitle")}</p>

                                <form className="space-y-6">
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                        <label className="flex flex-col gap-2 group">
                                            <span className="text-slate-700 dark:text-slate-300 text-sm font-bold group-focus-within:text-primary transition-colors">{t("form.name")}</span>
                                            <input className="form-input w-full rounded-lg border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white h-12 px-4 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all placeholder:text-slate-400" placeholder={t("form.namePlaceholder")} type="text" />
                                        </label>
                                        <label className="flex flex-col gap-2 group">
                                            <span className="text-slate-700 dark:text-slate-300 text-sm font-bold group-focus-within:text-primary transition-colors">{t("form.phone")}</span>
                                            <input className="form-input w-full rounded-lg border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white h-12 px-4 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all placeholder:text-slate-400" placeholder={t("form.phonePlaceholder")} type="tel" />
                                        </label>
                                    </div>

                                    <label className="flex flex-col gap-2 group">
                                        <span className="text-slate-700 dark:text-slate-300 text-sm font-bold group-focus-within:text-primary transition-colors">{t("form.emailLabel")}</span>
                                        <input className="form-input w-full rounded-lg border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white h-12 px-4 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all placeholder:text-slate-400" placeholder={t("form.emailPlaceholder")} type="email" />
                                    </label>

                                    <label className="flex flex-col gap-2 group">
                                        <span className="text-slate-700 dark:text-slate-300 text-sm font-bold group-focus-within:text-primary transition-colors">{t("form.message")}</span>
                                        <textarea className="form-textarea w-full rounded-lg border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white p-4 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all placeholder:text-slate-400 min-h-[150px] resize-y" placeholder={t("form.messagePlaceholder")}></textarea>
                                    </label>

                                    <button className="w-full flex items-center justify-center gap-2 rounded-lg h-14 px-8 bg-primary text-white text-lg font-bold hover:bg-primary-hover transition-colors shadow-lg shadow-primary/30" type="button">
                                        {t("form.submitBtn")}
                                        <span className="material-symbols-outlined text-sm">send</span>
                                    </button>
                                    <p className="text-xs text-slate-500 dark:text-slate-400 text-center mt-4">
                                        {t("form.agreement1")}<Link href="/privacy" className="underline hover:text-primary">{t("form.agreement2")}</Link>{t("form.agreement3")}
                                    </p>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Map Section */}
                <section className="h-[400px] md:h-[500px] w-full bg-slate-200 dark:bg-slate-800 grayscale hover:grayscale-0 transition-all duration-700">
                    {/* Embedded Google Maps link using an iframe */}
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2997.433221081541!2d69.26188731542296!3d41.30335807927236!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8adeb4d538e3%3A0xc3af1177651a2d1d!2sAfrosiyob%20Kochasi%2C%20Tashkent%2C%20Uzbekistan!5e0!3m2!1sen!2s!4v1683907538965!5m2!1sen!2s"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen={true}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </section>

            </main>

            <footer className="bg-slate-900 text-slate-400 py-12 px-10">
                <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
                    <div className="col-span-1 md:col-span-1">
                        <div className="flex items-center gap-3 text-white mb-6 bg-white/10 w-fit p-2 rounded-xl">
                            <Image src="/logo-white.png" alt="OsonPolis" width={140} height={30} className="h-6 w-auto" />
                        </div>
                        <p className="text-sm">{tFooter("slogan")}</p>
                    </div>
                    <div>
                        <h4 className="text-white font-bold mb-6">{tFooter("company.title")}</h4>
                        <ul className="space-y-4 text-sm">
                            <li><Link className="hover:text-primary transition-colors" href="/about">{tFooter("company.about")}</Link></li>
                            <li><Link className="hover:text-primary transition-colors" href="/team">{tFooter("company.team")}</Link></li>
                            <li><Link className="hover:text-primary transition-colors" href="/career">{tFooter("company.career")}</Link></li>
                            <li><Link className="hover:text-primary transition-colors" href="/news">{tFooter("company.news")}</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-white font-bold mb-6">{tFooter("services.title")}</h4>
                        <ul className="space-y-4 text-sm">
                            <li><Link className="hover:text-primary transition-colors" href="/osago">{tFooter("services.osagoOnline")}</Link></li>
                            <li><Link className="hover:text-primary transition-colors" href="/kasko">{tFooter("services.kaskoProtection")}</Link></li>
                            <li><Link className="hover:text-primary transition-colors" href="/claims">{tFooter("services.claims")}</Link></li>
                            <li><Link className="hover:text-primary transition-colors" href="/partners">{tFooter("services.partners")}</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-white font-bold mb-6">{tFooter("support.title")}</h4>
                        <ul className="space-y-4 text-sm">
                            <li><Link className="hover:text-primary transition-colors" href="/support">{tFooter("support.help")}</Link></li>
                            <li><Link className="hover:text-primary text-primary font-medium transition-colors" href="/contacts">{tFooter("support.contacts")}</Link></li>
                            <li><Link className="hover:text-primary transition-colors" href="/legal">{tFooter("support.legalInfo")}</Link></li>
                            <li className="flex items-center gap-2">
                                <span className="material-symbols-outlined text-sm">phone</span>
                                +998 (71) 200-00-00
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="max-w-[1200px] mx-auto mt-12 pt-8 border-t border-slate-800 text-xs text-center font-medium opacity-80">
                    {tFooter("copyright")}
                </div>
            </footer>
        </div>
    );
}
