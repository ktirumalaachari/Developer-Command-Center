import React from 'react';
import {
  ShieldCheck,
  Lock,
  Smartphone,
  CheckCircle2,
  X,
  ExternalLink,
  Zap,
  Globe,
  FileCode,
} from 'lucide-react';

interface PrivacyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PrivacyModal: React.FC<PrivacyModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const trustGuarantees = [
    {
      icon: Smartphone,
      title: 'Zero Device Access (100% Sandboxed)',
      color: 'emerald',
      description:
        'This application runs 100% inside your web browser sandbox. It CANNOT access, read, or scan your phone storage, photos, contacts, camera, microphone, or SMS messages.',
      badges: ['No Device Permissions', 'Browser Sandboxed', 'Zero Local File Access'],
    },
    {
      icon: Lock,
      title: 'Minimal Read-Only OAuth Permissions',
      color: 'cyan',
      description:
        'When you sign in with Google or GitHub, we only receive your basic public profile name, email, and avatar. We NEVER access private files, Google Drive, or modify your repositories without explicit consent.',
      badges: ['Scope: openid email profile', 'Read-Only Verification', 'No Password Stored'],
    },
    {
      icon: ShieldCheck,
      title: 'Hardware-Grade Cryptography',
      color: 'purple',
      description:
        'All third-party tokens are encrypted at rest with AES-256-GCM authenticated ciphers. Passwords use salted bcrypt (cost factor 12) with zero plain-text retention.',
      badges: ['AES-256-GCM', 'bcrypt 12 Rounds', 'SSL 256-bit HTTPS'],
    },
    {
      icon: Zap,
      title: '100% Anonymous 1-Click Demo Sandbox',
      color: 'amber',
      description:
        'Prefer not to log in? Use "Instant 1-Click Demo Access" to evaluate full engineering telemetry, DORA metrics, and AI reviews without providing any email, name, or password.',
      badges: ['Zero Data Collected', 'No Registration Needed', 'Instant Access'],
    },
    {
      icon: FileCode,
      title: '100% Open-Source & Transparent',
      color: 'teal',
      description:
        'Our full frontend and backend code is publicly hosted on GitHub. Anyone, including security researchers, can audit and verify that no tracking or hidden data collection occurs.',
      badges: ['Public GitHub Repo', 'Auditable Codebase', 'Zero Hidden Telemetry'],
    },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/75 backdrop-blur-md animate-in fade-in duration-200 select-none">
      <div
        className="w-full max-w-2xl bg-[#091024]/95 backdrop-blur-2xl border border-white/15 rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[92vh] sm:max-h-[85vh] animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="p-4 sm:p-6 border-b border-white/10 flex items-center justify-between bg-white/[0.02]">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-2xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 shadow-md shadow-emerald-500/10">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-base sm:text-lg font-bold text-white tracking-tight flex items-center gap-2">
                <span>Privacy & Device Safety Guarantee</span>
                <span className="hidden sm:inline-flex px-2 py-0.5 rounded-full text-[10px] font-mono bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                  Verified Safe
                </span>
              </h2>
              <p className="text-xs text-slate-300 font-mono">
                Enterprise security standards & zero device intrusion
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-white/10 transition-all"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Body */}
        <div className="p-4 sm:p-6 overflow-y-auto space-y-4 flex-1">
          {/* Quick TL;DR Banner */}
          <div className="p-3.5 sm:p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/25 flex items-start gap-3 text-xs text-emerald-200">
            <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
            <div className="space-y-1">
              <p className="font-bold text-emerald-300">
                Summary: Your Phone & Personal Data Are 100% Safe
              </p>
              <p className="text-[11px] sm:text-xs text-emerald-200/90 leading-relaxed font-sans">
                Developer Command Center is a standard web application. By web security architecture,
                websites cannot access your mobile files, photos, contacts, or location. We collect zero
                invasive telemetry.
              </p>
            </div>
          </div>

          {/* Cards Grid */}
          <div className="space-y-3">
            {trustGuarantees.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-white/20 transition-all space-y-2.5"
                >
                  <div className="flex items-center gap-2.5">
                    <div className="p-2 rounded-xl bg-white/5 border border-white/10 text-emerald-400">
                      <Icon className="w-4 h-4" />
                    </div>
                    <h3 className="text-xs sm:text-sm font-bold text-white tracking-tight">
                      {item.title}
                    </h3>
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed font-sans">
                    {item.description}
                  </p>

                  <div className="flex items-center gap-1.5 flex-wrap pt-1">
                    {item.badges.map((b, bIdx) => (
                      <span
                        key={bIdx}
                        className="px-2 py-0.5 rounded-md text-[10px] font-mono font-medium bg-white/5 border border-white/10 text-slate-300"
                      >
                        ✓ {b}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Footer Actions */}
        <div className="p-4 sm:p-5 border-t border-white/10 bg-[#070d1e]/80 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono">
          <a
            href="https://github.com/alokchoudhary885-coder/Developer-Command-Center-"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-cyan-400 hover:text-cyan-300 transition-colors"
          >
            <Globe className="w-3.5 h-3.5" />
            <span>Audit Source Code on GitHub</span>
            <ExternalLink className="w-3 h-3" />
          </a>

          <button
            onClick={onClose}
            className="w-full sm:w-auto px-5 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-white font-bold transition-all shadow-md shadow-emerald-500/20"
          >
            Got It, Thanks!
          </button>
        </div>
      </div>
    </div>
  );
};
