import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import Navbar from './components/Navbar';
import { NAV_ITEMS, fetchCountries } from './data/siteData';
import HeroSection from './components/HeroSection';
import TrustedBy from './components/TrustedBy.jsx';
import FeaturesSection from './components/FeaturesSection';
import ProductsTabs from './components/ProductsTabs/index.jsx';
import TABS_DATA from "./data/tabsData.js"
import IndustrySection from './components/IndustrySection';
import InnovationSection from './components/Innovation Data';
import DeveolperSection from './components/Developer Section';
import NoCodeSection from './components/NoCodeSection';
import FounderData from './components/FounderData';
import CtaSection from './components/CtaData';
import Footer from './components/Footer';
import ChatWidget from './components/ChatWidget.jsx';
export default function App() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    let mounted = true;
    fetchCountries().then((list) => { if (!mounted) return; setCountries(list); });
    return () => (mounted = false);
  }, []);

  return (
    <div className="min-h-screen bg-slate-50">
      <Header initialCountries={countries} onCountryChange={(c) => console.log('country', c)} />
      <Navbar navItems={NAV_ITEMS} primaryCta={{ title: 'Get Started', href: '/signup' }} />

      {/* <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24">
        <h1 className="text-5xl font-extrabold text-slate-900">Payments, reimagined for builders</h1>
        <p className="mt-4 text-lg text-slate-600 max-w-2xl">PayFlow gives you instant integration, powerful dashboards and global settlement options.</p>
      </main> */}
      <HeroSection autoplay={6000} />
      <TrustedBy
        title="Loved by businesses across India"
        subtitle="Companies of all sizes — from startups to enterprises — trust us to run payments & financials."
        cta={{ label: "Explore products", href: "/products" }}
      />
      <FeaturesSection />
      <ProductsTabs tabs={TABS_DATA} defaultTabId="accept" />
      <IndustrySection/>
      <InnovationSection />
      <DeveolperSection />
      <NoCodeSection />
      <FounderData />
      <CtaSection />
      <Footer />
      <ChatWidget />
    </div>
  );
}
