import React, { useState, useRef, useEffect } from 'react';
import { 
  GraduationCap, 
  BookOpen, 
  MapPin, 
  FileCheck2, 
  ArrowRight, 
  Shield, 
  CheckCircle2, 
  Layers 
} from 'lucide-react';
import { SCHOOL_INFO, CORE_FACTS } from '../data/schoolInfo';
import { NavSection } from '../types';

interface HeroIdentity3DProps {
  onNavigate: (section: NavSection) => void;
}

export const HeroIdentity3D: React.FC<HeroIdentity3DProps> = ({ onNavigate }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);
    const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (prefersReducedMotion || !cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    // Limit rotation to [-10, 10] degrees for refined, restrained 3D physics
    const rotX = -((y - centerY) / centerY) * 9;
    const rotY = ((x - centerX) / centerX) * 9;
    setRotateX(rotX);
    setRotateY(rotY);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <section className="relative overflow-hidden pt-8 pb-16 lg:py-20 border-b border-zinc-200 dark:border-zinc-800 bg-gradient-to-b from-zinc-50 via-white to-zinc-100/50 dark:from-zinc-950 dark:via-zinc-900/50 dark:to-zinc-950">
      {/* Background Architectural Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.07] pointer-events-none bg-[radial-gradient(#10b981_1px,transparent_1px)] [background-size:24px_24px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Authoritative School Identity Statement */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-100 dark:bg-emerald-950/80 border border-emerald-300 dark:border-emerald-800 text-emerald-900 dark:text-emerald-300 text-xs font-semibold uppercase tracking-wider">
              <Shield className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
              <span>Official Institutional Public Portal</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-zinc-900 dark:text-white leading-[1.15]">
              {SCHOOL_INFO.name}
            </h1>

            <p className="text-lg sm:text-xl text-zinc-700 dark:text-zinc-300 font-medium leading-relaxed">
              <strong className="text-emerald-700 dark:text-emerald-400">{SCHOOL_INFO.designation}</strong> operating under the{' '}
              <strong className="text-zinc-900 dark:text-white">{SCHOOL_INFO.curriculumSystem}</strong>, beginning from{' '}
              <span className="underline decoration-emerald-500 decoration-2 underline-offset-4 font-semibold">
                {SCHOOL_INFO.levelSpan}
              </span>.
            </p>

            <div className="flex items-start gap-2.5 text-sm text-zinc-600 dark:text-zinc-400">
              <MapPin className="w-4 h-4 text-emerald-600 dark:text-emerald-400 flex-shrink-0 mt-0.5" />
              <span>{SCHOOL_INFO.location.address}, {SCHOOL_INFO.location.province}, Pakistan</span>
            </div>

            {/* Quick Action Navigation Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <button
                id="hero-cta-services"
                onClick={() => onNavigate('services')}
                className="inline-flex items-center gap-2.5 px-5 py-3 rounded-xl font-semibold text-sm bg-emerald-700 hover:bg-emerald-800 text-white shadow-md shadow-emerald-900/20 transition-all hover:translate-y-[-1px] focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
              >
                <FileCheck2 className="w-4 h-4" />
                <span>Online Public Services</span>
                <ArrowRight className="w-4 h-4 ml-0.5" />
              </button>

              <button
                id="hero-cta-academic"
                onClick={() => onNavigate('academics')}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl font-semibold text-sm bg-white dark:bg-zinc-800 text-zinc-900 dark:text-white border border-zinc-300 dark:border-zinc-700 hover:bg-zinc-50 dark:hover:bg-zinc-700/80 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
              >
                <BookOpen className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                <span>Cambridge System Context</span>
              </button>
            </div>

            {/* Core Confirmed Facts Strip */}
            <div className="pt-4 grid grid-cols-2 sm:grid-cols-4 gap-3 border-t border-zinc-200 dark:border-zinc-800">
              {CORE_FACTS.map((fact, index) => (
                <div key={index} className="space-y-1">
                  <div className="text-[11px] font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                    {fact.label}
                  </div>
                  <div className="text-xs font-bold text-zinc-900 dark:text-zinc-100">
                    {fact.value}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Interactive 3D Perspective Institutional Shield & Layer Card */}
          <div className="lg:col-span-5 flex justify-center perspective-[1200px]">
            <div
              ref={cardRef}
              onMouseEnter={() => setIsHovered(true)}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              style={{
                transform: prefersReducedMotion
                  ? 'none'
                  : `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(${isHovered ? 1.02 : 1}, ${isHovered ? 1.02 : 1}, 1)`,
                transition: isHovered ? 'transform 0.1s ease-out' : 'transform 0.5s ease-out',
                transformStyle: 'preserve-3d',
              }}
              className="w-full max-w-md bg-white dark:bg-zinc-900 rounded-2xl border-2 border-emerald-600/30 dark:border-emerald-500/30 p-6 sm:p-8 shadow-2xl shadow-emerald-950/10 dark:shadow-emerald-950/40 relative select-none"
            >
              {/* Top Card Badge */}
              <div 
                style={{ transform: prefersReducedMotion ? 'none' : 'translateZ(30px)' }}
                className="flex items-center justify-between border-b border-zinc-200 dark:border-zinc-800 pb-4 mb-6"
              >
                <div className="flex items-center gap-2 text-xs font-bold tracking-wider text-emerald-700 dark:text-emerald-400 uppercase">
                  <Layers className="w-4 h-4" />
                  <span>Institutional Seal</span>
                </div>
                <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300">
                  Sanghar, Sindh
                </span>
              </div>

              {/* 3D Center Shield Emblem */}
              <div 
                style={{ transform: prefersReducedMotion ? 'none' : 'translateZ(45px)' }}
                className="flex flex-col items-center text-center space-y-4 py-4"
              >
                <div className="w-24 h-24 rounded-2xl bg-gradient-to-tr from-emerald-800 via-emerald-700 to-emerald-600 p-1 flex items-center justify-center shadow-lg shadow-emerald-900/30 border-2 border-emerald-400/40">
                  <div className="w-full h-full rounded-xl bg-zinc-950 flex flex-col items-center justify-center p-2 text-white">
                    <GraduationCap className="w-10 h-10 text-emerald-400" />
                    <span className="text-[9px] font-bold tracking-widest text-emerald-300 uppercase mt-0.5">
                      PSP EMS
                    </span>
                  </div>
                </div>

                <div>
                  <h2 className="text-xl font-bold text-zinc-900 dark:text-white">
                    PSP School (EMS)
                  </h2>
                  <p className="text-xs text-zinc-600 dark:text-zinc-400 font-medium">
                    Cambridge System • Government Institution
                  </p>
                </div>
              </div>

              {/* 3D Depth Key Fact Cards */}
              <div 
                style={{ transform: prefersReducedMotion ? 'none' : 'translateZ(25px)' }}
                className="mt-6 space-y-2.5 pt-4 border-t border-zinc-200 dark:border-zinc-800"
              >
                <div className="flex items-center justify-between p-2.5 rounded-lg bg-zinc-50 dark:bg-zinc-800/60 border border-zinc-200 dark:border-zinc-700/60 text-xs">
                  <span className="text-zinc-600 dark:text-zinc-400 flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                    Curriculum
                  </span>
                  <span className="font-semibold text-zinc-900 dark:text-white">
                    Cambridge English Medium
                  </span>
                </div>

                <div className="flex items-center justify-between p-2.5 rounded-lg bg-zinc-50 dark:bg-zinc-800/60 border border-zinc-200 dark:border-zinc-700/60 text-xs">
                  <span className="text-zinc-600 dark:text-zinc-400 flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                    Entry Level
                  </span>
                  <span className="font-semibold text-zinc-900 dark:text-white">
                    Nursery Onward
                  </span>
                </div>
              </div>

              <div 
                style={{ transform: prefersReducedMotion ? 'none' : 'translateZ(15px)' }}
                className="mt-4 text-center"
              >
                <span className="text-[10px] text-zinc-500 dark:text-zinc-400 italic">
                  Interactive 3D Crest Layer • Desktop & Mobile Optimized
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
