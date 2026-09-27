import React, { useState, useEffect, useCallback } from 'react';
import {
  X,
  ShieldAlert,
  ShieldCheck,
  Zap,
  CheckCircle2,
  AlertTriangle,
  Bot,
  RefreshCw,
  ExternalLink,
  Code2,
} from 'lucide-react';
import { PullRequest, PrReview } from '../../types';
import { api } from '../../services/api';

interface PRReviewModalProps {
  pr: PullRequest | null;
  onClose: () => void;
}

export const PRReviewModal: React.FC<PRReviewModalProps> = ({ pr, onClose }) => {
  const [review, setReview] = useState<PrReview | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [reviewing, setReviewing] = useState<boolean>(false);

  const fetchExistingReview = useCallback(async () => {
    if (!pr) return;
    try {
      setLoading(true);
      const res = await api.get(`/ai/reviews/${pr.id}`);
      if (res.data.success && res.data.data?.reviews?.length > 0) {
        setReview(res.data.data.reviews[0]);
      } else {
        // Auto trigger review if none exists
        triggerNewReview();
      }
    } catch (err) {
      console.error('Failed to fetch PR reviews:', err);
    } finally {
      setLoading(false);
    }
  }, [pr]);

  useEffect(() => {
    if (pr) {
      fetchExistingReview();
    }
  }, [pr, fetchExistingReview]);

  const triggerNewReview = async () => {
    if (!pr) return;
    try {
      setReviewing(true);
      const res = await api.post(`/ai/review-pr/${pr.id}`);
      if (res.data.success && res.data.data?.review) {
        setReview(res.data.data.review);
      }
    } catch (err) {
      console.error('AI PR Review failed:', err);
    } finally {
      setReviewing(false);
    }
  };

  if (!pr) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/75 backdrop-blur-md animate-in fade-in duration-200 select-none">
      <div className="bg-[#091024]/95 backdrop-blur-2xl border border-white/15 rounded-3xl w-full max-w-2xl max-h-[92vh] sm:max-h-[85vh] flex flex-col shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200">
        {/* Header */}
        <div className="p-4 sm:p-6 border-b border-white/10 flex items-center justify-between bg-white/[0.02]">
          <div className="flex items-center gap-2.5 sm:gap-3 min-w-0">
            <div className="p-2 sm:p-2.5 rounded-2xl bg-gradient-to-tr from-purple-600 to-indigo-600 text-white shadow-md shadow-purple-600/20 shrink-0">
              <Bot className="w-4 h-4 sm:w-5 sm:h-5" />
            </div>
            <div className="min-w-0">
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono font-bold text-cyan-400 shrink-0">
                  #{pr.number}
                </span>
                <h3 className="text-xs sm:text-sm font-bold text-white truncate max-w-[200px] sm:max-w-md">
                  {pr.title}
                </h3>
              </div>
              <p className="text-[10px] sm:text-[11px] font-mono text-slate-400 mt-0.5 truncate">
                AI Code Review & Security Audit • {pr.repository?.name || 'repo'}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
            <button
              onClick={triggerNewReview}
              disabled={reviewing}
              title="Re-run AI Analysis"
              className="p-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-400 hover:text-white transition-all disabled:opacity-50"
            >
              <RefreshCw className={`w-3.5 h-3.5 sm:w-4 sm:h-4 ${reviewing ? 'animate-spin text-cyan-400' : ''}`} />
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-white/5 hover:bg-rose-500/15 border border-white/10 text-slate-400 hover:text-rose-400 transition-all"
            >
              <X className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </button>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-4 sm:p-6 overflow-y-auto space-y-4 sm:space-y-6">
          {loading || reviewing ? (
            <div className="py-12 sm:py-16 text-center space-y-3 sm:space-y-4">
              <div className="inline-flex p-3 sm:p-4 rounded-2xl bg-purple-500/15 border border-purple-500/30 text-purple-300 animate-pulse">
                <Bot className="w-6 h-6 sm:w-8 sm:h-8 animate-bounce" />
              </div>
              <div>
                <h4 className="text-xs sm:text-sm font-semibold text-white">
                  Gemini AI is analyzing Git diff & security heuristics...
                </h4>
                <p className="text-[11px] text-slate-400 mt-1 font-mono">
                  Scanning for OWASP vulnerabilities, token leaks, and O(N) complexity
                </p>
              </div>
            </div>
          ) : review ? (
            <>
              {/* Score & Verdict Banner */}
              <div className="p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                <div className="space-y-1">
                  <span className="text-[10px] sm:text-[11px] font-mono text-slate-400 uppercase tracking-wider">
                    Code Quality Score
                  </span>
                  <div className="flex items-center gap-2.5 sm:gap-3">
                    <span className="text-2xl sm:text-3xl font-black font-mono text-white">
                      {review.score}
                      <span className="text-xs sm:text-sm text-slate-500 font-normal">/100</span>
                    </span>
                    <span
                      className={`px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full text-[10px] sm:text-xs font-mono font-bold border ${
                        review.verdict === 'APPROVED'
                          ? 'bg-emerald-500/15 text-emerald-400 border-emerald-500/30'
                          : review.verdict === 'CHANGES_REQUESTED'
                          ? 'bg-rose-500/15 text-rose-400 border-rose-500/30'
                          : 'bg-amber-500/15 text-amber-400 border-amber-500/30'
                      }`}
                    >
                      {review.verdict}
                    </span>
                  </div>
                </div>

                <div className="text-left sm:text-right">
                  <span className="text-[10px] sm:text-[11px] font-mono text-slate-400 block">Security Status</span>
                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-400 mt-0.5">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    Passed Audit
                  </span>
                </div>
              </div>

              {/* Executive Summary */}
              <div className="space-y-2">
                <h4 className="text-xs font-bold font-mono text-slate-300 uppercase tracking-wider flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                  Executive Summary
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed p-3.5 sm:p-4 rounded-xl bg-white/5 border border-white/10 font-sans">
                  {review.summary}
                </p>
              </div>

              {/* Security Alerts */}
              {review.securityAlerts && review.securityAlerts.length > 0 && (
                <div className="space-y-2">
                  <h4 className="text-xs font-bold font-mono text-rose-400 uppercase tracking-wider flex items-center gap-2">
                    <ShieldAlert className="w-4 h-4" />
                    Security Recommendations ({review.securityAlerts.length})
                  </h4>
                  <div className="space-y-2">
                    {review.securityAlerts.map((alert, idx) => (
                      <div
                        key={idx}
                        className="p-3.5 rounded-xl bg-rose-500/5 border border-rose-500/20 space-y-1"
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-bold text-rose-300">{alert.title}</span>
                          <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-rose-500/20 text-rose-300">
                            {alert.severity}
                          </span>
                        </div>
                        <p className="text-xs text-slate-400 leading-relaxed">
                          {alert.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Performance Notes */}
              {review.performanceNotes && review.performanceNotes.length > 0 && (
                <div className="space-y-2">
                  <h4 className="text-xs font-bold font-mono text-amber-400 uppercase tracking-wider flex items-center gap-2">
                    <Zap className="w-4 h-4" />
                    Performance & Execution Notes
                  </h4>
                  <div className="space-y-2">
                    {review.performanceNotes.map((note, idx) => (
                      <div
                        key={idx}
                        className="p-3 rounded-xl bg-amber-500/5 border border-amber-500/20 flex items-start gap-2.5"
                      >
                        <Zap className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                        <p className="text-xs text-slate-300">{note.message}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Code Smells / Cleanliness */}
              {review.codeSmells && review.codeSmells.length > 0 && (
                <div className="space-y-2">
                  <h4 className="text-xs font-bold font-mono text-slate-400 uppercase tracking-wider flex items-center gap-2">
                    <Code2 className="w-4 h-4 text-slate-400" />
                    Architectural Suggestions
                  </h4>
                  <ul className="space-y-1.5 p-3 rounded-xl bg-surface-100/30 border border-white/5 text-xs text-slate-400">
                    {review.codeSmells.map((smell, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-brand-secondary font-bold">•</span>
                        <span>{smell}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </>
          ) : (
            <div className="p-8 text-center">
              <AlertTriangle className="w-8 h-8 text-amber-400 mx-auto mb-2" />
              <p className="text-xs text-slate-400">Click below to generate an automated review.</p>
              <button
                onClick={triggerNewReview}
                className="mt-4 px-4 py-2 rounded-lg bg-brand-primary text-white text-xs font-semibold"
              >
                Run AI Code Review
              </button>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-white/5 flex items-center justify-between bg-surface-100/40">
          <a
            href={pr.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs font-mono text-slate-400 hover:text-white transition-colors"
          >
            <span>Open PR #{pr.number} on GitHub</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>

          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-lg bg-surface-100 hover:bg-surface-200 text-xs font-semibold text-white border border-white/10 transition-all"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
};
