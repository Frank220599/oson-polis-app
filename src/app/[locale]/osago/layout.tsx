import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export default function OsagoLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="bg-[#f8fafc] dark:bg-[#0f172a] text-slate-900 dark:text-slate-100 font-display min-h-screen flex flex-col transition-colors duration-200">
            <Header />
            <div className="flex-grow flex flex-col">
                {children}
            </div>
            <Footer />
        </div>
    );
}
