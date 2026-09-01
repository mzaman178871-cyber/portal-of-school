import React from 'react';
import { 
  Building2, 
  GraduationCap, 
  FileText, 
  MapPin, 
  Sun, 
  Moon, 
  Lock, 
  Compass, 
  Menu, 
  X 
} from 'lucide-react';
import { NavSection, ThemeMode } from '../types';
import { SCHOOL_INFO } from '../data/schoolInfo';

interface HeaderProps {
  activeSection: NavSection;
  onNavigate: (section: NavSection) => void;
  theme: ThemeMode;
  onToggleTheme: () => void;
  onOpenPortalModal: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeSection,
  onNavigate,
  theme,
  onToggleTheme,
  onOpenPortalModal,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  const navItems: { id: NavSection; label: string; icon: React.ReactNode }[] = [
    { id: 'overview', label: 'Overview', icon: <Compass className="w-4 h-4" /> },
    { id: 'academics', label: 'Cambridge System', icon: <GraduationCap className="w-4 h-4" /> },
    { id: 'origin', label: 'Origin & Context', icon: <Building2 className="w-4 h-4" /> },
    { id: 'services', label: 'Public Services', icon: <FileText className="w-4 h-4" /> },
    { id: 'location', label: 'Location & Campus', icon: <MapPin className="w-4 h-4" /> },
  ];

  const handleNavClick = (section: NavSection) => {
    onNavigate(section);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 w-full border-b backdrop-blur-md transition-colors duration-200 bg-white/90 dark:bg-zinc-950/90 border-zinc-200 dark:border-zinc-800 text-zinc-900 dark:text-zinc-100">
      {/* Top Institutional Identity Bar */}
      <div className="bg-emerald-800 dark:bg-emerald-950 text-emerald-50 px-4 py-1 text-xs font-medium tracking-wide flex justify-between items-center border-b border-emerald-700/50 dark:border-emerald-900">
        <div className="flex items-center gap-2 max-w-7xl mx-auto w-full">
          <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
          <span className="font-semibold">{SCHOOL_INFO.designation}</span>
          <span className="text-emerald-300/80 hidden sm:inline">•</span>
          <span className="text-emerald-200/90 hidden sm:inline">{SCHOOL_INFO.curriculumSystem} (Nursery Onward)</span>
          <span className="text-emerald-300/80 hidden md:inline">•</span>
          <span className="text-emerald-200/80 hidden md:inline">Sanghar, Sindh, Pakistan</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo & School Title */}
          <button
            id="brand-header-link"
            onClick={() => handleNavClick('overview')}
            className="flex items-center gap-3 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600 rounded-lg p-1 transition-transform active:scale-95"
            aria-label="PSP School EMS Sanghar Home"
          >
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-emerald-600 to-emerald-800 flex items-center justify-center text-white shadow-md shadow-emerald-900/20 border border-emerald-500/30">
              <GraduationCap className="w-6 h-6 text-white" />
            </div>
            <div>
              <div className="font-bold text-base sm:text-lg tracking-tight text-zinc-900 dark:text-white leading-tight">
                {SCHOOL_INFO.shortName}
              </div>
              <div className="text-xs text-zinc-500 dark:text-zinc-400 font-medium">
                Nawabshah Road, Sanghar
              </div>
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1" aria-label="Main Navigation">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  id={`nav-link-${item.id}`}
                  onClick={() => handleNavClick(item.id)}
                  className={`flex items-center gap-2 px-3.5 py-2 rounded-lg text-sm font-medium transition-all ${
                    isActive
                      ? 'bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800/80'
                      : 'text-zinc-600 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800/60'
                  } focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500`}
                >
                  {item.icon}
                  <span>{item.label}</span>
                </button>
              );
            })}
          </nav>

          {/* Utility Actions */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Theme Toggle */}
            <button
              id="theme-toggle-btn"
              onClick={onToggleTheme}
              className="p-2 rounded-lg text-zinc-600 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800 border border-zinc-200 dark:border-zinc-800 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
              aria-label={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
            >
              {theme === 'dark' ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-zinc-700" />}
            </button>

            {/* Management Portal Access Button */}
            <button
              id="portal-login-trigger"
              onClick={onOpenPortalModal}
              className="flex items-center gap-2 px-3.5 py-2 rounded-lg text-sm font-semibold bg-zinc-900 hover:bg-zinc-800 dark:bg-white dark:hover:bg-zinc-100 text-white dark:text-zinc-950 shadow-sm transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
              aria-haspopup="dialog"
            >
              <Lock className="w-4 h-4 text-emerald-400 dark:text-emerald-600" />
              <span className="hidden sm:inline">Staff Portal</span>
              <span className="sm:hidden">Login</span>
            </button>

            {/* Mobile Menu Toggle Button */}
            <button
              id="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-zinc-600 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800 border border-zinc-200 dark:border-zinc-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 px-4 pt-2 pb-4 space-y-1 shadow-xl">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                id={`mobile-nav-${item.id}`}
                onClick={() => handleNavClick(item.id)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium text-left transition-colors ${
                  isActive
                    ? 'bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 font-semibold'
                    : 'text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800'
                }`}
              >
                {item.icon}
                <span>{item.label}</span>
              </button>
            );
          })}
        </div>
      )}
    </header>
  );
};
