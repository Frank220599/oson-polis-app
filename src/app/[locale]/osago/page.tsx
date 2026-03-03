import { redirect } from "next/navigation";

export default async function OsagoRedirect({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params;
    redirect(`/${locale === 'ru' ? '' : locale + '/'}osago/step-1`);
}
