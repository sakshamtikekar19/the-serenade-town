'use client';

import { useState } from 'react';
import Hero from '@/components/Hero';
import OccasionsGrid from '@/components/OccasionsGrid';
import PricingTables from '@/components/PricingTables';
import FeaturesList from '@/components/FeaturesList';
import AddOns from '@/components/AddOns';
import Calculator from '@/components/Calculator';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import WhyChooseUs from '@/components/WhyChooseUs';
import AboutPrivateTheater from '@/components/AboutPrivateTheater';

export default function Home() {
  const [selectedBranch, setSelectedBranch] = useState<'andheri' | 'ghatkopar'>('andheri');

  return (
    <main className="min-h-screen overflow-x-hidden w-full max-w-[100vw]">
      <Header selectedBranch={selectedBranch} onBranchChange={setSelectedBranch} />
      <Hero />
      <OccasionsGrid />
      <WhyChooseUs />
      <AboutPrivateTheater />
      <div id="packages">
        <PricingTables />
      </div>
      <FeaturesList />
      <AddOns />
      <Calculator selectedBranch={selectedBranch} />
      <Footer />
    </main>
  );
}
