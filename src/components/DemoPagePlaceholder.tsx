import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";

export default function DemoPagePlaceholder({ title }: { title: string }) {
    const t = useTranslations("DemoPagePlaceholder");

    return (
        <div className="relative flex h-auto min-h-screen w-full flex-col font-display text-slate-900 dark:text-slate-100 transition-colors duration-200">

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
        </div>
    );
}
