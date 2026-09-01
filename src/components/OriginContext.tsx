import React from 'react';
import { 
  Building2, 
  MapPin, 
  Landmark, 
  GraduationCap, 
  Camera, 
  Info,
  CheckCircle2
} from 'lucide-react';
import { SCHOOL_INFO } from '../data/schoolInfo';

export const OriginContext: React.FC = () => {
  return (
    <section id="origin-context-section" className="py-16 sm:py-20 bg-zinc-50 dark:bg-zinc-950 border-b border-zinc-200 dark:border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950/80 border border-emerald-300 dark:border-emerald-800 text-emerald-800 dark:text-emerald-300 text-xs font-semibold uppercase tracking-wider">
            <Landmark className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
            <span>Origin & Community Context</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-zinc-900 dark:text-white tracking-tight">
            Institutional Background & Sanghar Campus
          </h2>
          <p className="text-zinc-600 dark:text-zinc-300 text-base leading-relaxed">
            PSP School (EMS) was established to provide standardized English-medium education under the Cambridge System for the youth of Sanghar and surrounding communities in Sindh.
          </p>
        </div>

        {/* Narrative & Location Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Factual Historical Statement */}
          <div className="lg:col-span-7 bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-200 dark:border-zinc-800 p-6 sm:p-8 space-y-6 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center gap-2.5 text-emerald-700 dark:text-emerald-400 font-bold text-sm">
                <Building2 className="w-4 h-4" />
                <span>Government English Medium School Initiative</span>
              </div>
              <h3 className="text-xl font-bold text-zinc-900 dark:text-white">
                Serving the Educational Needs of Sanghar
              </h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">
                Located near the historic Government High School campus on Nawabshah Road in Sanghar, PSP School (EMS) represents an important public initiative to bring high-quality English medium schooling within the Cambridge curricular framework to students starting at the foundational Nursery stage.
              </p>
              <p className="text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">
                By grounding learning in standard English medium curriculum and inquiry-driven pedagogy, the school aims to cultivate analytical thinking and structured academic discipline.
              </p>
            </div>

            <div className="pt-4 border-t border-zinc-200 dark:border-zinc-800 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div className="p-3 rounded-lg bg-zinc-50 dark:bg-zinc-800/50 border border-zinc-200 dark:border-zinc-700/60">
                <div className="font-semibold text-zinc-900 dark:text-white mb-1 flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                  Campus Association
                </div>
                <div className="text-zinc-600 dark:text-zinc-400">
                  Associated with the Government High School educational precinct in Sanghar.
                </div>
              </div>
              <div className="p-3 rounded-lg bg-zinc-50 dark:bg-zinc-800/50 border border-zinc-200 dark:border-zinc-700/60">
                <div className="font-semibold text-zinc-900 dark:text-white mb-1 flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                  Instructional Framework
                </div>
                <div className="text-zinc-600 dark:text-zinc-400">
                  Cambridge curricular structure beginning from Nursery onward.
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Campus Imagery & Visual Resilience Notice */}
          <div className="lg:col-span-5 bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-200 dark:border-zinc-800 p-6 sm:p-8 space-y-6 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-zinc-500 dark:text-zinc-400 flex items-center gap-1.5">
                  <Camera className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                  Authentic Campus Photography
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300">
                  Policy: Authentic Only
                </span>
              </div>

              {/* Architectural Graphic Placeholder / Showcase */}
              <div className="w-full aspect-[4/3] rounded-xl bg-gradient-to-br from-zinc-100 to-zinc-200 dark:from-zinc-800 dark:to-zinc-900 border-2 border-dashed border-zinc-300 dark:border-zinc-700 flex flex-col items-center justify-center p-6 text-center space-y-3">
                <div className="w-14 h-14 rounded-full bg-emerald-100 dark:bg-emerald-950/80 border border-emerald-300 dark:border-emerald-700 flex items-center justify-center text-emerald-700 dark:text-emerald-400">
                  <GraduationCap className="w-7 h-7" />
                </div>
                <div className="space-y-1">
                  <div className="font-bold text-sm text-zinc-900 dark:text-white">
                    PSP School (EMS) Campus
                  </div>
                  <div className="text-xs text-zinc-500 dark:text-zinc-400">
                    Nawabshah Road, Sanghar, Sindh
                  </div>
                </div>
                <div className="text-[11px] text-zinc-500 dark:text-zinc-400 max-w-xs leading-tight">
                  Authentic photographs will be published directly as official visual archives are approved.
                </div>
              </div>
            </div>

            <div className="flex items-start gap-2.5 p-3 rounded-lg bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800/80 text-xs text-emerald-900 dark:text-emerald-200">
              <Info className="w-4 h-4 flex-shrink-0 text-emerald-600 dark:text-emerald-400 mt-0.5" />
              <span>
                <strong>Zero Stock Photography Policy:</strong> This portal displays only verified school facts and official assets.
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
