import React from 'react';
import { 
  MapPin, 
  Navigation, 
  Clock, 
  Building, 
  Compass, 
  ShieldCheck 
} from 'lucide-react';
import { SCHOOL_INFO } from '../data/schoolInfo';

export const LocationContact: React.FC = () => {
  return (
    <section id="location-contact-section" className="py-16 sm:py-20 bg-zinc-50 dark:bg-zinc-950 border-b border-zinc-200 dark:border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950/80 border border-emerald-300 dark:border-emerald-800 text-emerald-800 dark:text-emerald-300 text-xs font-semibold uppercase tracking-wider">
            <MapPin className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
            <span>Campus Location & Access</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-zinc-900 dark:text-white tracking-tight">
            Visiting PSP School (EMS), Sanghar
          </h2>
          <p className="text-zinc-600 dark:text-zinc-300 text-base leading-relaxed">
            Conveniently situated along Nawabshah Road in Sanghar, adjacent to the Government High School precinct.
          </p>
        </div>

        {/* Location & Directions Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Official Location Card */}
          <div className="lg:col-span-6 bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-200 dark:border-zinc-800 p-6 sm:p-8 space-y-6 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-emerald-700 dark:text-emerald-400 font-bold text-xs uppercase tracking-wider">
                <Navigation className="w-4 h-4" />
                <span>Physical Postal Address</span>
              </div>
              
              <div className="p-4 rounded-xl bg-zinc-50 dark:bg-zinc-800/60 border border-zinc-200 dark:border-zinc-700/60 space-y-2">
                <h3 className="font-bold text-lg text-zinc-900 dark:text-white">
                  {SCHOOL_INFO.name}
                </h3>
                <div className="text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed font-medium">
                  {SCHOOL_INFO.location.address}
                </div>
                <div className="text-xs text-zinc-500 dark:text-zinc-400 pt-1">
                  District: {SCHOOL_INFO.location.district} • Province: {SCHOOL_INFO.location.province} • {SCHOOL_INFO.location.country}
                </div>
              </div>

              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-3 text-xs text-zinc-600 dark:text-zinc-300">
                  <Building className="w-4 h-4 text-emerald-600 dark:text-emerald-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-zinc-900 dark:text-white block">Prominent Landmark:</strong>
                    Near Government High School, Sanghar campus grounds.
                  </div>
                </div>

                <div className="flex items-start gap-3 text-xs text-zinc-600 dark:text-zinc-300">
                  <Navigation className="w-4 h-4 text-emerald-600 dark:text-emerald-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-zinc-900 dark:text-white block">Main Access Corridor:</strong>
                    Nawabshah Road, Sanghar, Sindh, Pakistan.
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-zinc-200 dark:border-zinc-800 flex items-center justify-between text-xs text-zinc-500 dark:text-zinc-400">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                Government Educational Zone
              </span>
              <span>Sanghar, Sindh</span>
            </div>
          </div>

          {/* Right Column: Architectural Map Schematic */}
          <div className="lg:col-span-6 bg-zinc-900 dark:bg-zinc-950 rounded-2xl border border-zinc-800 p-6 sm:p-8 text-white space-y-6 flex flex-col justify-between shadow-xl">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 flex items-center gap-1.5">
                  <Compass className="w-4 h-4" />
                  Regional Position
                </span>
                <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-zinc-800 text-zinc-300">
                  Nawabshah Road Corridor
                </span>
              </div>

              {/* Vector Location Schematic */}
              <div className="w-full aspect-[16/9] rounded-xl bg-zinc-950 border border-zinc-800 relative overflow-hidden flex flex-col items-center justify-center p-6 text-center">
                {/* Road Line Graphic */}
                <div className="absolute inset-x-0 h-8 bg-zinc-800/80 -rotate-6 flex items-center justify-center">
                  <span className="text-[10px] uppercase font-mono tracking-widest text-zinc-400">
                    ═══════ Nawabshah Road ═══════
                  </span>
                </div>

                {/* Pin marker */}
                <div className="relative z-10 flex flex-col items-center space-y-2">
                  <div className="w-12 h-12 rounded-full bg-emerald-600/90 border-2 border-emerald-400 flex items-center justify-center text-white shadow-lg shadow-emerald-950/60 animate-bounce">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div className="bg-zinc-900/95 px-3 py-1.5 rounded-lg border border-zinc-700 shadow-md text-center">
                    <div className="font-bold text-xs text-white">PSP School (EMS)</div>
                    <div className="text-[10px] text-emerald-400">Sanghar Campus</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-xs text-zinc-400 bg-zinc-850 p-3 rounded-lg border border-zinc-800">
              Visitors are requested to check in at the reception desk for application status tracking or in-person queries.
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
