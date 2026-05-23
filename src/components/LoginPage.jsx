import { useState } from 'react';

const LoginPage = ({ onClose, onJoinClick }) => {
  const [credentials, setCredentials] = useState({ accessKey: '', pin: '' });
  const [showPin, setShowPin] = useState(false);

  const handleChange = (key) => (event) => {
    setCredentials((prev) => ({ ...prev, [key]: event.target.value }));
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/40 backdrop-blur-xl px-4 py-8 animate-fadeIn">
      <div className="relative w-full max-w-lg overflow-hidden rounded-[32px] border border-slate-200 bg-white/95 shadow-2xl shadow-slate-900/10 backdrop-blur-sm animate-zoomIn">
        <button
          type="button"
          onClick={onClose}
          className="absolute left-4 top-4 inline-flex items-center justify-center rounded-full border border-white/30 bg-white/10 px-3 py-2 text-xs font-semibold text-white backdrop-blur transition hover:bg-white/20"
        >
          Back
        </button>
        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 z-10 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-slate-500 shadow-sm transition hover:bg-white"
          aria-label="Close login form"
        >
          <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        <div className="relative overflow-hidden bg-[#06172f] px-8 pb-12 pt-8 text-center text-white">
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-3xl bg-slate-900/80 border border-slate-600 shadow-sm">
            <span className="text-sm font-black uppercase tracking-[0.35em]">PX</span>
          </div>
          <p className="text-[10px] font-semibold tracking-[0.35em] uppercase text-sky-300 mb-3">Placement Portal</p>
          <h1 className="text-3xl font-extrabold tracking-tight">Student Login</h1>
        </div>

        <div className="relative bg-white px-8 pb-6 pt-5">
          <div className="space-y-5">
            <div>
              <div className="mb-2 flex items-center justify-between text-[10px] uppercase tracking-[0.35em] text-slate-500">
                <span>Email or Phone</span>
              </div>
              <div className="flex items-center gap-3 rounded-[22px] border border-slate-200 bg-slate-50 px-4 py-3 shadow-sm transition focus-within:border-sky-500 focus-within:ring-1 focus-within:ring-sky-100">
                <svg className="h-4 w-4 text-slate-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16v16H4z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                <input
                  value={credentials.accessKey}
                  onChange={handleChange('accessKey')}
                  className="w-full bg-transparent text-sm font-medium text-slate-900 outline-none placeholder:text-slate-400"
                  type="text"
                  placeholder="Enter Access Key (Email/Phone)"
                />
              </div>
            </div>

            <div>
              <div className="mb-2 flex items-center justify-between text-[10px] uppercase tracking-[0.35em] text-slate-500">
                <span>Security Pin</span>
                <button type="button" className="text-xs font-semibold text-slate-700 transition hover:text-slate-900">
                  Forgot?
                </button>
              </div>
              <div className="flex items-center gap-3 rounded-[22px] border border-cyan-200 bg-slate-50 px-4 py-3 shadow-sm transition focus-within:border-sky-500 focus-within:ring-1 focus-within:ring-sky-100">
                <svg className="h-4 w-4 text-slate-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                  <path d="M7 11V7a5 5 0 0110 0v4" />
                </svg>
                <input
                  value={credentials.pin}
                  onChange={handleChange('pin')}
                  className="w-full bg-transparent text-sm font-medium text-slate-900 outline-none placeholder:text-slate-400"
                  type={showPin ? 'text' : 'password'}
                  placeholder="Enter Security Pin"
                />
                <button
                  type="button"
                  onClick={() => setShowPin((prev) => !prev)}
                  className="rounded-full p-1 text-slate-500 transition hover:bg-slate-200 hover:text-slate-700"
                  aria-label={showPin ? 'Hide pin' : 'Show pin'}
                >
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    {showPin ? (
                      <>
                        <path d="M17.94 17.94A10.05 10.05 0 0112 20c-5.52 0-10-4.48-10-10 0-2.12.65-4.08 1.76-5.72" />
                        <path d="M1 1l22 22" />
                      </>
                    ) : (
                      <>
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                        <circle cx="12" cy="12" r="3" />
                      </>
                    )}
                  </svg>
                </button>
              </div>
            </div>

            <button className="w-full rounded-[22px] bg-slate-950 px-5 py-4 text-sm font-bold uppercase tracking-[0.25em] text-white transition hover:bg-slate-800">
              Access Portal →
            </button>
          </div>

          <div className="mt-6 text-center text-xs uppercase tracking-[0.35em] text-slate-500">
            <span>No account? </span>
            <button type="button" onClick={onJoinClick} className="font-semibold text-slate-900 hover:text-slate-950">
              Join PlaceXpert
            </button>
          </div>

          <div className="mt-6 flex items-center justify-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-[11px] uppercase tracking-[0.3em] text-slate-500">
            <svg className="h-4 w-4 text-emerald-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20 6L9 17l-5-5" />
            </svg>
            Secured Student Access
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
