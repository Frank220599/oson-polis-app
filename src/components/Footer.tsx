import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import Image from "next/image";

export function Footer() {
    const t = useTranslations("Footer");

    return (
        <footer className="bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 py-12 px-4 mt-auto">
            <div className="max-w-[1280px] mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
                <div className="flex items-center gap-3 text-slate-900 dark:text-white">
                    <Link href="/" className="flex items-center gap-2">
                        <Image src="/logo-blue.png" alt="OsonPolis" width={120} height={26} className="dark:hidden block h-6 w-auto" />
                        <Image src="/logo-white.png" alt="OsonPolis" width={120} height={26} className="hidden dark:block h-6 w-auto" />
                    </Link>
                    <p className="text-xs text-slate-500 dark:text-slate-400 ml-4">{t("copyrightText")}</p>
                </div>
                <div className="text-slate-500 dark:text-slate-400 text-sm text-center md:text-right font-medium">
                    <div className="flex gap-6">
                        <Link className="hover:text-primary transition-colors text-xs font-semibold uppercase tracking-wider" href="/privacy">{t("privacy")}</Link>
                        <Link className="hover:text-primary transition-colors text-xs font-semibold uppercase tracking-wider" href="/terms">{t("terms")}</Link>
                        <Link className="hover:text-primary transition-colors text-xs font-semibold uppercase tracking-wider" href="/contacts">{t("contacts")}</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
