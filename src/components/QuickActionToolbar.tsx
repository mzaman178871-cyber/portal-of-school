import React from 'react';
import { FileText, CalendarCheck, MessageSquareHeart, MapPin, ArrowUpRight } from 'lucide-react';
import { NavSection, ServiceType } from '../types';

interface QuickActionToolbarProps {
  onNavigate: (section: NavSection) => void;
  onSelectService: (service: ServiceType) => void;
}

export const QuickActionToolbar: React.FC<QuickActionToolbarProps> = ({
  onNavigate,
  onSelectService,
}) => {
  return (
    <section className="bg-emerald-900 dark:bg-emerald-950 text-white border-y border-emerald-800 dark:border-emerald-900/80 py-4 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-400"></div>
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-300">
              Direct Public Access
            </span>
            <p className="text-xs text-emerald-100/90 font-medium">
              Quick access to confirmed public school services and location
            </p>
          </div>
        </div>

        {/* Action Pills */}
        <div className="flex flex-wrap items-center gap-2.5 w-full md:w-auto">
          <button
            id="quick-action-cert"
            onClick={() => {
              onNavigate('services');
              onSelectService('certificate');
            }}
            className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-3.5 py-2 rounded-lg bg-emerald-800/80 hover:bg-emerald-700 border border-emerald-600/50 text-xs font-semibold text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300"
          >
            <FileText className="w-3.5 h-3.5 text-emerald-300" />
            <span>Apply for Certificate</span>
            <ArrowUpRight className="w-3 h-3 text-emerald-300 opacity-80" />
          </button>

          <button
            id="quick-action-leave"
            onClick={() => {
              onNavigate('services');
              onSelectService('leave');
            }}
            className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-3.5 py-2 rounded-lg bg-emerald-800/80 hover:bg-emerald-700 border border-emerald-600/50 text-xs font-semibold text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300"
          >
            <CalendarCheck className="w-3.5 h-3.5 text-emerald-300" />
            <span>Submit Leave Notice</span>
            <ArrowUpRight className="w-3 h-3 text-emerald-300 opacity-80" />
          </button>

          <button
            id="quick-action-feedback"
            onClick={() => {
              onNavigate('services');
              onSelectService('feedback');
            }}
            className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-3.5 py-2 rounded-lg bg-emerald-800/80 hover:bg-emerald-700 border border-emerald-600/50 text-xs font-semibold text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300"
          >
            <MessageSquareHeart className="w-3.5 h-3.5 text-amber-300" />
            <span>Anonymous Feedback (2x/wk)</span>
            <ArrowUpRight className="w-3 h-3 text-emerald-300 opacity-80" />
          </button>

          <button
            id="quick-action-location"
            onClick={() => onNavigate('location')}
            className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-3.5 py-2 rounded-lg bg-emerald-800/80 hover:bg-emerald-700 border border-emerald-600/50 text-xs font-semibold text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300"
          >
            <MapPin className="w-3.5 h-3.5 text-emerald-300" />
            <span>Campus Location</span>
          </button>
        </div>
      </div>
    </section>
  );
};
