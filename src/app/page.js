'use client';

import Hero from '@/components/Hero';
import BusinessSection from '@/components/BusinessSection';
import CasesSection from '@/components/CasesSection';
import AboutSection from '@/components/AboutSection';
import InsightsSection from '@/components/InsightsSection';
import ContactSection from '@/components/ContactSection';

export const runtime = 'edge';   // 适配 Cloudflare 边缘运行时

export default function Home() {
  return (
    <>
      <Hero />
      <BusinessSection />
      <CasesSection />
      <AboutSection />
      <InsightsSection />
      <ContactSection />
    </>
  );
}