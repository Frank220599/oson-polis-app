"use client";

import { useState, useRef } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { useTranslations } from "next-intl";
import { Hero } from "@/components/Home/Hero";
import { Calculator } from "@/components/Home/Calculator";
import { Offers } from "@/components/Home/Offers";
import { Products } from "@/components/Home/Products";
import { HowItWorks } from "@/components/Home/HowItWorks";
import { TrustBadges } from "@/components/Home/TrustBadges";

export default function Home() {
  const t = useTranslations("Home");

  const [plate, setPlate] = useState("");
  const [licenseSeries, setLicenseSeries] = useState("");
  const [licenseNumber, setLicenseNumber] = useState("");
  const [drivers, setDrivers] = useState("");
  const [showOffers, setShowOffers] = useState(false);
  const [errors, setErrors] = useState<{ plate?: string; techPassport?: string; drivers?: string }>({});
  const plateInputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: { plate?: string; techPassport?: string; drivers?: string } = {};
    if (!plate.trim()) newErrors.plate = t("calcForm.errors.plate");
    if (!licenseSeries.trim() || !licenseNumber.trim()) newErrors.techPassport = t("calcForm.errors.license");
    if (!drivers) newErrors.drivers = t("calcForm.errors.drivers");
    setErrors(newErrors);
    if (Object.keys(newErrors).length === 0) {
      setShowOffers(true);
    }
  };

  const handleCalcClick = () => {
    document.getElementById('calculator-section')?.scrollIntoView({ behavior: 'smooth' });
    setTimeout(() => plateInputRef.current?.focus(), 600);
  };

  const handleHowItWorksClick = () => {
    document.getElementById('how-it-works-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col">
      <Header />

      <main className="flex-1">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col gap-8">
          <Hero
            onCalcClick={handleCalcClick}
            onHowItWorksClick={handleHowItWorksClick}
          />

          <div id="calculator-section" className="bg-white dark:bg-slate-900 rounded-2xl shadow-xl border border-slate-100 dark:border-slate-800 p-6 sm:p-10 -mt-16 relative z-20 mx-2 sm:mx-8 lg:mx-16 scroll-mt-24">
            <Calculator
              plate={plate}
              setPlate={setPlate}
              licenseSeries={licenseSeries}
              setLicenseSeries={setLicenseSeries}
              licenseNumber={licenseNumber}
              setLicenseNumber={setLicenseNumber}
              drivers={drivers}
              setDrivers={setDrivers}
              handleSubmit={handleSubmit}
              errors={errors}
              plateInputRef={plateInputRef}
              setShowOffers={setShowOffers}
              setErrors={setErrors}
            />

            {showOffers && (
              <Offers
                plate={plate}
                licenseSeries={licenseSeries}
                licenseNumber={licenseNumber}
                drivers={drivers}
              />
            )}
          </div>

          <Products />
          <HowItWorks />
          <TrustBadges />
        </div>
      </main>

      <Footer />
    </div>
  );
}
