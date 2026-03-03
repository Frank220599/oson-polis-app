import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { setRequestLocale } from "next-intl/server";

export default async function MainLayout({ children, params }: { children: React.ReactNode, params: Promise<{ locale: string }> }) {
    const { locale } = await params;
    setRequestLocale(locale);

    return (
        <>
            <Header />
            <div className="flex flex-col flex-1">
                {children}
            </div>
            <Footer />
        </>
    );
}
