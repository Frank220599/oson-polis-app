import { Link } from "@/i18n/routing";
import Image from "next/image";
import { Header } from "@/components/Header";
import { useTranslations } from "next-intl";

export default function DemoPagePlaceholder({ title }: { title: string }) {
    const t = useTranslations("DemoPagePlaceholder");
    const tFooter = useTranslations("Footer");

    return (
        <div className="relative flex h-auto min-h-screen w-full flex-col font-display text-slate-900 dark:text-slate-100 transition-colors duration-200">
            {/* Header */}
            <Header />

            {/* Main Content */}
            <main className="flex-1 flex flex-col items-center justify-center bg-background-light dark:bg-background-dark py-20 px-6">
                <div className="max-w-2xl text-center flex flex-col items-center">
                    <div className="bg-primary/10 text-primary w-24 h-24 rounded-full flex items-center justify-center mb-8">
                        <span className="material-symbols-outlined text-5xl">construction</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-6">
                        {title}
                    </h1>
                    <p className="text-lg text-slate-600 dark:text-slate-400 mb-10">
                        {t("description")}
                    </p>
                    <Link href="/" className="inline-flex items-center justify-center h-12 px-8 rounded-lg bg-primary text-white font-bold hover:bg-primary-hover transition-colors shadow-lg shadow-primary/25">
                        <span className="material-symbols-outlined mr-2">arrow_back</span>
                        {t("backToHome")}
                    </Link>
                </div>
            </main>

            {/* Footer */}
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
                            <li><Link className="hover:text-primary transition-colors" href="/contacts">{tFooter("support.contacts")}</Link></li>
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
