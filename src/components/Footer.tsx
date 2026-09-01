import React from 'react';
import { GraduationCap, ShieldCheck, MapPin, FileText, ArrowUp } from 'lucide-react';
import { SCHOOL_INFO } from '../data/schoolInfo';
import { NavSection } from '../types';

interface FooterProps {
  onNavigate: (section: NavSection) => void;
  onOpenPortalModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenPortalModal }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-zinc-950 text-zinc-400 border-t border-zinc-800 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          
          {/* Institutional Brand Column */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3 text-white">
              <div className="w-9 h-9 rounded-lg bg-emerald-700 flex items-center justify-center text-white shadow-md">
                <GraduationCap className="w-5 h-5" />
              </div>
              <div>
                <div className="font-bold text-sm text-white">
                  {SCHOOL_INFO.name}
                </div>
                <div className="text-[11px] text-emerald-400 font-medium">
                  {SCHOOL_INFO.designation}
                </div>
              </div>
            </div>

            <p className="text-zinc-400 leading-relaxed text-xs max-w-sm">
              Standardized English-medium education under the {SCHOOL_INFO.curriculumSystem}, structured progressively starting from {SCHOOL_INFO.levelSpan}.
            </p>

            <div className="flex items-start gap-2 text-zinc-400 text-xs">
              <MapPin className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
              <span>{SCHOOL_INFO.location.address}, {SCHOOL_INFO.location.province}, Pakistan</span>
            </div>
          </div>

          {/* Public Services Column */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="font-bold text-xs uppercase tracking-wider text-zinc-200">
              Confirmed Public Services
            </h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => onNavigate('services')}
                  className="hover:text-emerald-400 transition-colors text-left flex items-center gap-1.5"
                >
                  <FileText className="w-3.5 h-3.5 text-emerald-500" />
                  <span>Student Certificate Applications</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('services')}
                  className="hover:text-emerald-400 transition-colors text-left flex items-center gap-1.5"
                >
                  <FileText className="w-3.5 h-3.5 text-emerald-500" />
                  <span>Student Leave Applications</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('services')}
                  className="hover:text-emerald-400 transition-colors text-left flex items-center gap-1.5"
                >
                  <FileText className="w-3.5 h-3.5 text-emerald-500" />
                  <span>Anonymous Feedback (Twice per Week)</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('location')}
                  className="hover:text-emerald-400 transition-colors text-left flex items-center gap-1.5"
                >
                  <MapPin className="w-3.5 h-3.5 text-emerald-500" />
                  <span>Campus Location & Visiting Hours</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Administrative Portal Link Column */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="font-bold text-xs uppercase tracking-wider text-zinc-200">
              Institutional Access
            </h4>
            <p className="text-zinc-400 text-xs">
              School management, progress monitoring, and attendance systems are restricted to authorized personnel.
            </p>
            <button
              onClick={onOpenPortalModal}
              className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 text-xs font-semibold text-zinc-200 hover:text-white transition-colors"
            >
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Staff Portal Login</span>
            </button>
          </div>

        </div>

        {/* Bottom Strip */}
        <div className="pt-8 border-t border-zinc-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-zinc-500">
          <div>
            © {new Date().getFullYear()} {SCHOOL_INFO.name}. All verified rights reserved.
          </div>

          <div className="flex items-center gap-4">
            <span>Desktop/PC-First Web Application</span>
            <span>•</span>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1 text-zinc-400 hover:text-emerald-400 transition-colors"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
