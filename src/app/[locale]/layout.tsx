/* eslint-disable @next/next/no-page-custom-font */
import type { Metadata, Viewport } from "next";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import { Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin", "cyrillic"],
});

export const metadata: Metadata = {
  title: "OsonPolis - Онлайн ОСАГО",
  description: "Официальный страховой партнер. Быстрое, безопасное и надежное оформление автостраховки без посещения офиса.",
  keywords: ["авто сугурта", "sugurta", "onlayn sugurta", "суғурта полиси", "суғурта авто", "автосуғурта онлайн", "каско авто", "каско", "полис осаго", "e-polis", "sugurta avto", "sug`urta avto", "travel", "травел", "osonpolis", "gross"],
  openGraph: {
    title: "OsonPolis - Онлайн ОСАГО за 5 минут",
    description: "Быстрое, безопасное и надежное оформление автостраховки без посещения офиса.",
    url: "https://osonpolis.uz",
    siteName: "OsonPolis",
    images: [
      {
        url: "https://osonpolis.uz/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "OsonPolis",
      },
    ],
    locale: "ru_RU",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1.0,
};

import { ThemeProvider } from "@/components/ThemeProvider";

export default async function RootLayout({
  children,
  params
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as "ru" | "uz" | "en")) {
    notFound();
  }

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html lang={locale} suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={`${manrope.variable} antialiased`} suppressHydrationWarning>
        <NextIntlClientProvider messages={messages}>
          <ThemeProvider attribute="class" defaultTheme="light">
            {children}
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
