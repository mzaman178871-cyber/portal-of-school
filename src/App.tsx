import React, { useState, useEffect } from 'react';
import { NavSection, ServiceType, ThemeMode } from './types';
import { Header } from './components/Header';
import { QuickActionToolbar } from './components/QuickActionToolbar';
import { HeroIdentity3D } from './components/HeroIdentity3D';
import { AcademicContext } from './components/AcademicContext';
import { OriginContext } from './components/OriginContext';
import { PublicServices } from './components/PublicServices';
import { LocationContact } from './components/LocationContact';
import { PortalAccessModal } from './components/PortalAccessModal';
import { Footer } from './components/Footer';

export default function App() {
  const [activeSection, setActiveSection] = useState<NavSection>('overview');
  const [selectedService, setSelectedService] = useState<ServiceType>('certificate');
  const [isPortalModalOpen, setIsPortalModalOpen] = useState(false);
  const [theme, setTheme] = useState<ThemeMode>('light');

  // Initialize theme from preference
  useEffect(() => {
    const savedTheme = localStorage.getItem('psp_theme') as ThemeMode | null;
    if (savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      setTheme('dark');
      document.documentElement.classList.add('dark');
    } else {
      setTheme('light');
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const handleToggleTheme = () => {
    const nextTheme: ThemeMode = theme === 'dark' ? 'light' : 'dark';
    setTheme(nextTheme);
    localStorage.setItem('psp_theme', nextTheme);
    if (nextTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  const handleNavigate = (section: NavSection) => {
    setActiveSection(section);
    // Smoothly scroll to the corresponding section if available
    if (section === 'overview') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (section === 'academics') {
      const el = document.getElementById('academic-context-section');
      el?.scrollIntoView({ behavior: 'smooth' });
    } else if (section === 'origin') {
      const el = document.getElementById('origin-context-section');
      el?.scrollIntoView({ behavior: 'smooth' });
    } else if (section === 'services') {
      const el = document.getElementById('public-services-section');
      el?.scrollIntoView({ behavior: 'smooth' });
    } else if (section === 'location') {
      const el = document.getElementById('location-contact-section');
      el?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectService = (service: ServiceType) => {
    setSelectedService(service);
    const el = document.getElementById('public-services-section');
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 font-sans flex flex-col selection:bg-emerald-500 selection:text-white transition-colors duration-200">
      
      {/* Primary Accessible Public Header */}
      <Header
        activeSection={activeSection}
        onNavigate={handleNavigate}
        theme={theme}
        onToggleTheme={handleToggleTheme}
        onOpenPortalModal={() => setIsPortalModalOpen(true)}
      />

      {/* Task-Oriented Direct Utility Bar */}
      <QuickActionToolbar
        onNavigate={handleNavigate}
        onSelectService={handleSelectService}
      />

      {/* Main Content Areas */}
      <main className="flex-1">
        
        {/* Section 1: Hero Identity with Interactive 3D Perspective Crest */}
        <HeroIdentity3D onNavigate={handleNavigate} />

        {/* Section 2: Verified Academic Context (Cambridge System) */}
        <AcademicContext />

        {/* Section 3: Origin & Campus Context in Sanghar */}
        <OriginContext />

        {/* Section 4: Public Online Services (Certificate, Leave, Feedback) */}
        <PublicServices initialService={selectedService} />

        {/* Section 5: Campus Location & Access */}
        <LocationContact />

      </main>

      {/* Public Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenPortalModal={() => setIsPortalModalOpen(true)}
      />

      {/* Portal Login Boundary Gateway Modal */}
      <PortalAccessModal
        isOpen={isPortalModalOpen}
        onClose={() => setIsPortalModalOpen(false)}
      />

    </div>
  );
}
