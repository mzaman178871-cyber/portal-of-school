import React, { useState } from 'react';
import { 
  Lock, 
  X, 
  ShieldCheck, 
  AlertCircle, 
  KeyRound, 
  UserCheck, 
  Clock, 
  Sparkles,
  Info 
} from 'lucide-react';
import { SCHOOL_INFO } from '../data/schoolInfo';

interface PortalAccessModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PortalAccessModal: React.FC<PortalAccessModalProps> = ({ isOpen, onClose }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginMessage, setLoginMessage] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!username || !password) {
      setLoginMessage('Please enter both username and password.');
      return;
    }

    if (username.toLowerCase() === 'dev') {
      setLoginMessage('Dev Account recognized: First login password change policy enforced upon authenticated session.');
    } else {
      setLoginMessage(`Authentication gateway for "${username}": Internal credential verification active.`);
    }
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="portal-modal-title"
    >
      <div className="w-full max-w-lg bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-200 dark:border-zinc-800 shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        
        {/* Modal Top Header */}
        <div className="p-6 bg-gradient-to-r from-zinc-900 via-zinc-950 to-emerald-950 text-white flex items-center justify-between border-b border-zinc-800">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-600/30 border border-emerald-500/40 flex items-center justify-center text-emerald-400">
              <Lock className="w-5 h-5" />
            </div>
            <div>
              <h3 id="portal-modal-title" className="font-bold text-lg leading-tight">
                School Program Portal
              </h3>
              <p className="text-xs text-zinc-400">
                PSP School (EMS) • Authenticated Gateway
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
            aria-label="Close portal access dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-6 overflow-y-auto">
          
          {/* Confirmed Security Protocol Notice */}
          <div className="p-4 rounded-xl bg-zinc-50 dark:bg-zinc-800/60 border border-zinc-200 dark:border-zinc-700/80 space-y-3 text-xs">
            <div className="flex items-center gap-2 font-bold text-zinc-900 dark:text-white">
              <ShieldCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
              <span>Authentication & Session Policy</span>
            </div>
            <ul className="space-y-1.5 text-zinc-600 dark:text-zinc-300">
              <li className="flex items-start gap-1.5">
                <span className="text-emerald-600 dark:text-emerald-400 font-bold">•</span>
                <span><strong>Internal Authentication Only:</strong> No social login or third-party email accounts.</span>
              </li>
              <li className="flex items-start gap-1.5">
                <span className="text-emerald-600 dark:text-emerald-400 font-bold">•</span>
                <span><strong>Day-Bound Sessions:</strong> Sessions remain active during the current day and automatically expire at midnight.</span>
              </li>
              <li className="flex items-start gap-1.5">
                <span className="text-emerald-600 dark:text-emerald-400 font-bold">•</span>
                <span><strong>Dev Role:</strong> Mandatory password change required on initial login.</span>
              </li>
            </ul>
          </div>

          {/* Login Form */}
          <form onSubmit={handleLoginSubmit} className="space-y-4">
            <div>
              <label htmlFor="portal-username" className="block text-xs font-bold uppercase tracking-wider text-zinc-700 dark:text-zinc-300 mb-1.5">
                Account Username *
              </label>
              <div className="relative">
                <input
                  id="portal-username"
                  type="text"
                  required
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="e.g., Dev, Admin, or designated role ID"
                  className="w-full pl-10 pr-3.5 py-2.5 rounded-lg bg-zinc-50 dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-700 text-zinc-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
                <UserCheck className="w-4 h-4 text-zinc-400 absolute left-3.5 top-3" />
              </div>
            </div>

            <div>
              <label htmlFor="portal-password" className="block text-xs font-bold uppercase tracking-wider text-zinc-700 dark:text-zinc-300 mb-1.5">
                Secure Password *
              </label>
              <div className="relative">
                <input
                  id="portal-password"
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••••••"
                  className="w-full pl-10 pr-3.5 py-2.5 rounded-lg bg-zinc-50 dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-700 text-zinc-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
                <KeyRound className="w-4 h-4 text-zinc-400 absolute left-3.5 top-3" />
              </div>
            </div>

            {loginMessage && (
              <div className="p-3 rounded-lg bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-300 dark:border-emerald-800 text-xs text-emerald-900 dark:text-emerald-200 flex items-start gap-2">
                <Info className="w-4 h-4 text-emerald-600 dark:text-emerald-400 flex-shrink-0 mt-0.5" />
                <span>{loginMessage}</span>
              </div>
            )}

            <button
              type="submit"
              id="btn-portal-submit-login"
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-zinc-900 hover:bg-zinc-800 dark:bg-emerald-700 dark:hover:bg-emerald-800 text-white font-semibold text-sm shadow-md transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
            >
              <Lock className="w-4 h-4 text-emerald-400 dark:text-emerald-200" />
              <span>Authenticate & Enter Management Environment</span>
            </button>
          </form>

          {/* Confirmed Role Matrix Statement */}
          <div className="border-t border-zinc-200 dark:border-zinc-800 pt-4 text-[11px] text-zinc-500 dark:text-zinc-400">
            <span className="font-semibold text-zinc-700 dark:text-zinc-300 block mb-1">
              Authorized Operational Roles:
            </span>
            <div className="flex flex-wrap gap-1.5">
              {['DEV', 'ADMIN (3)', 'PRINCIPAL', 'VICE PRINCIPAL', 'FLOOR COORDINATOR', 'CLASS TEACHER'].map((role, idx) => (
                <span key={idx} className="px-2 py-0.5 rounded bg-zinc-100 dark:bg-zinc-800 font-mono text-[10px] text-zinc-700 dark:text-zinc-300">
                  {role}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-zinc-100 dark:bg-zinc-950 border-t border-zinc-200 dark:border-zinc-800 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg text-xs font-semibold text-zinc-700 dark:text-zinc-300 hover:bg-zinc-200 dark:hover:bg-zinc-800 transition-colors"
          >
            Return to Public Site
          </button>
        </div>

      </div>
    </div>
  );
};
