import { useTranslations } from "next-intl";
import DemoPagePlaceholder from "@/components/DemoPagePlaceholder";

export default function LegalPage() {
    const t = useTranslations("DemoTitles");
    return <DemoPagePlaceholder title={t("legal")} />;
}
