import { useTranslations } from "next-intl";
import DemoPagePlaceholder from "@/components/DemoPagePlaceholder";

export default function TravelPage() {
    const t = useTranslations("DemoTitles");
    return <DemoPagePlaceholder title={t("travel")} />;
}
