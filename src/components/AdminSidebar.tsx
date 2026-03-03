"use client";

import { Link } from "@/i18n/routing";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";

export function AdminSidebar() {
    const t = useTranslations("Admin");
    const pathname = usePathname();

    const isActive = (href: string) => {
        // Strip locale prefix for comparison
        const stripped = pathname.replace(/^\/(en|ru|uz)/, "");
        if (href === "/admin") return stripped === "/admin";
        return stripped.startsWith(href.replace(/^\/admin/, "").length > 0 ? href : "__never__") || stripped === href;
    };

    const linkClass = (href: string) =>
        `flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors group text-sm font-semibold ${isActive(href)
            ? "bg-primary/10 text-primary"
            : "text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800"
        }`;

    return (
        <aside className="fixed inset-y-0 left-0 w-64 bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800 flex flex-col z-50">
            {/* Logo */}
            <div className="p-6 flex items-center gap-3 border-b border-slate-100 dark:border-slate-800">
                <Link href="/" className="flex items-center gap-2">
                    <Image src="/logo-blue.png" alt="OsonPolis" width={140} height={30} className="dark:hidden block h-6 w-auto" />
                    <Image src="/logo-white.png" alt="OsonPolis" width={140} height={30} className="hidden dark:block h-6 w-auto" />
                </Link>
            </div>

            {/* Nav */}
            <nav className="flex-1 px-4 py-4 space-y-1 overflow-y-auto">
                <p className="px-3 mb-2 text-[10px] font-bold uppercase tracking-wider text-slate-400">{t("sidebar.menuTitle")}</p>
                <Link href="/admin" className={linkClass("/admin/policies")}>
                    <span className="material-symbols-outlined">description</span>
                    <span>{t("sidebar.policies")}</span>
                </Link>
                <Link href="/admin" className={linkClass("/admin")}>
                    <span className="material-symbols-outlined">dashboard</span>
                    <span>{t("sidebar.dashboard")}</span>
                </Link>
                <Link href="/admin/sms" className={linkClass("/admin/sms")}>
                    <span className="material-symbols-outlined">forum</span>
                    <span>{t("sidebar.communications")}</span>
                </Link>

                <div className="pt-4 mt-2 border-t border-slate-100 dark:border-slate-800">
                    <button className="flex w-full items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-rose-50 hover:text-rose-600 dark:hover:bg-rose-900/20 dark:hover:text-rose-400 text-slate-600 dark:text-slate-400 transition-colors text-sm font-semibold">
                        <span className="material-symbols-outlined">logout</span>
                        <span>{t("sidebar.logout")}</span>
                    </button>
                </div>
            </nav>

            {/* User footer */}
            <div className="p-4 border-t border-slate-200 dark:border-slate-800">
                <div className="flex items-center gap-3 p-2 bg-slate-50 dark:bg-slate-800/50 rounded-2xl">
                    <div className="bg-primary/20 rounded-full p-0.5 border border-primary/20 shrink-0">
                        <div className="w-8 h-8 rounded-full bg-cover bg-center" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDzleCIuo2p2M1ZfqWu5TLbsxygdCNC7O_T7mp7DNj__mfy-xGr6WEVAYn4kfk4bKr-oynq0UO0BvZs2rj_BVnkHBISx5QDwB_J0yh_JAWSb1sz9VjUT77eabGkf9Bw6H0XbKm3NInmdoMnVor9SykB6b4-O4kf3pJeQnCQJtkuL15oVVTJa_pdDzCbjmcwqNei7WFe1YorQ-_ZrGOBjHdNfHlu_r5WOkaK-MgQlL0b51NWHG7h0-X0QDsdhxj_5gE5lQSDKd22DLU")' }} />
                    </div>
                    <div className="flex-1 min-w-0">
                        <p className="text-sm font-bold text-slate-900 dark:text-white truncate">{t("header.roleAdmin")}</p>
                        <p className="text-[11px] font-medium text-slate-500 uppercase">{t("header.roleLabel")}</p>
                    </div>
                </div>
            </div>
        </aside>
    );
}
