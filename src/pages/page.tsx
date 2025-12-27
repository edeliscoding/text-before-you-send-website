'use client';

import React from 'react';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import SocialProof from '@/components/SocialProof';
import Benefits from '@/components/Benefits';
import Pricing from '@/components/Pricing';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';
import '@/styles/globals.css';
import '@/styles/home.css';

export default function Home() {
  const handleGetApp = () => {
    window.open('https://apps.apple.com/us/app/text-before-you-send/id6756531156', '_blank');
  };

  return (
    <>
      <Navigation />
      <Hero onGetApp={handleGetApp} />
      <SocialProof />
      <Benefits />
      <Pricing onGetApp={handleGetApp} />
      <FAQ />
      <Footer />
    </>
  );
}
