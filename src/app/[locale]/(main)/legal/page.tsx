import { getTranslations } from "next-intl/server";
import { setRequestLocale } from "next-intl/server";
import DemoPagePlaceholder from "@/components/DemoPagePlaceholder";

export function generateStaticParams() {
    return [{ locale: 'ru' }, { locale: 'uz' }, { locale: 'en' }];
}

export default async function LegalPage({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params;
    setRequestLocale(locale);

    const t = await getTranslations("DemoTitles");
    return <DemoPagePlaceholder title={t("legal")} />;
}
