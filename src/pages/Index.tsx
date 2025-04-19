
import React from 'react';
import HeroSection from '@/components/index/HeroSection';
import ServicesSection from '@/components/index/ServicesSection';
import AboutSection from '@/components/index/AboutSection';
import ClientsSection from '@/components/index/ClientsSection';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20">
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <ClientsSection />
    </div>
  );
};

export default Index;
