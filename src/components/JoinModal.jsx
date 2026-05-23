import { useState } from 'react';

const JoinModal = ({ open, onClose }) => {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    mobile: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [errors, setErrors] = useState({});
  const [submitMessage, setSubmitMessage] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  if (!open) return null;

  const iconStyle = 'h-4 w-4 text-slate-400';

  const validate = () => {
    const nextErrors = {};
    if (!form.firstName.trim()) nextErrors.firstName = 'First name is required.';
    if (!form.lastName.trim()) nextErrors.lastName = 'Last name is required.';
    if (!form.mobile.trim()) {
      nextErrors.mobile = 'Mobile number is required.';
    } else if (!/^\d{10}$/.test(form.mobile.trim())) {
      nextErrors.mobile = 'Enter a valid 10-digit mobile number.';
    }
    if (!form.email.trim()) {
      nextErrors.email = 'Email address is required.';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(form.email.trim())) {
      nextErrors.email = 'Enter a valid email address.';
    }
    if (!form.password) {
      nextErrors.password = 'Password is required.';
    } else if (form.password.length < 8) {
      nextErrors.password = 'Password must be at least 8 characters long.';
    }
    if (!form.confirmPassword) {
      nextErrors.confirmPassword = 'Confirm password is required.';
    } else if (form.confirmPassword !== form.password) {
      nextErrors.confirmPassword = 'Passwords do not match.';
    }
    return nextErrors;
  };

  const handleChange = (key) => (event) => {
    setForm((prev) => ({ ...prev, [key]: event.target.value }));
    if (errors[key]) {
      setErrors((prev) => ({ ...prev, [key]: undefined }));
    }
    if (submitMessage) setSubmitMessage('');
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const nextErrors = validate();
    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      setSubmitMessage('Please fix the highlighted fields before continuing.');
      return;
    }

    setSubmitMessage('Registration request submitted successfully!');
    setErrors({});
  };

  const fieldClass = (field) =>
    `w-full bg-transparent outline-none text-sm font-medium ${errors[field] ? 'text-red-700' : 'text-slate-900'}`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/50 backdrop-blur-xl px-4 py-8 animate-fadeIn">
      <form onSubmit={handleSubmit} className="relative w-full max-w-lg overflow-x-hidden overflow-y-auto rounded-[32px] border border-slate-200 bg-white/95 backdrop-blur-sm shadow-2xl shadow-slate-900/10 animate-zoomIn max-h-[calc(100vh-4rem)] no-scrollbar">
        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 z-10 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-slate-500 shadow-sm transition hover:bg-white"
          aria-label="Close registration form"
        >
          <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        <div className="relative overflow-hidden bg-[#06172f] px-8 pb-12 pt-8 text-center text-white">
          <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-3xl bg-slate-900/80 border border-slate-700 shadow-sm">
            <span className="text-sm font-black uppercase tracking-[0.35em]">PX</span>
          </div>
          <p className="text-[10px] font-semibold tracking-[0.35em] uppercase text-sky-300 mb-3">Placement Portal</p>
          <h1 className="text-2xl font-extrabold tracking-tight">Join PlaceXpert</h1>
          <p className="mx-auto mt-2 max-w-xs text-[13px] text-slate-300">Register now to access verified placement drives and student portal services.</p>
        </div>

        {submitMessage && (
          <div className={`px-8 py-3 text-sm font-medium ${Object.keys(errors).length ? 'bg-rose-50 text-rose-700 border border-rose-200' : 'bg-emerald-50 text-emerald-700 border border-emerald-200'}`}>
            {submitMessage}
          </div>
        )}

        <div className="bg-white px-8 pb-6 pt-5">
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-4">
              <div>
                <div className="mb-2 text-[10px] uppercase tracking-[0.35em] text-slate-500">First Name</div>
                <div className={`flex items-center gap-3 rounded-[22px] border px-4 py-3 shadow-sm transition focus-within:border-sky-500 focus-within:ring-1 focus-within:ring-sky-100 ${errors.firstName ? 'border-rose-300 bg-rose-50' : 'border-slate-200 bg-slate-50'}`}>
                  <svg className={iconStyle} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
                    <circle cx="12" cy="7" r="4" />
                  </svg>
                  <input
                    className={fieldClass('firstName')}
                    type="text"
                    placeholder="Your First Name"
                    value={form.firstName}
                    onChange={handleChange('firstName')}
                  />
                </div>
                {errors.firstName && <p className="mt-1 text-xs text-rose-600">{errors.firstName}</p>}
              </div>

              <div>
                <div className="mb-2 text-[10px] uppercase tracking-[0.35em] text-slate-500">Mobile Number</div>
                <div className={`flex items-center gap-3 rounded-[22px] border px-4 py-3 shadow-sm transition focus-within:border-sky-500 focus-within:ring-1 focus-within:ring-sky-100 ${errors.mobile ? 'border-rose-300 bg-rose-50' : 'border-slate-200 bg-slate-50'}`}>
                  <svg className={iconStyle} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2A19.86 19.86 0 013 5.18 2 2 0 015 3h3a2 2 0 012 1.72c.12 1.05.34 2.08.67 3.07a2 2 0 01-.45 2.11L9 11.88a16 16 0 006.12 6.12l1.99-1.2a2 2 0 012.11-.45c.99.33 2.02.55 3.07.67A2 2 0 0122 16.92z" />
                  </svg>
                  <input
                    className={fieldClass('mobile')}
                    type="tel"
                    placeholder="9876543210"
                    value={form.mobile}
                    onChange={handleChange('mobile')}
                  />
                </div>
                {errors.mobile && <p className="mt-1 text-xs text-rose-600">{errors.mobile}</p>}
              </div>

              <div>
                <div className="mb-2 text-[10px] uppercase tracking-[0.35em] text-slate-500">Password</div>
                <div className={`flex items-center gap-3 rounded-[22px] border px-4 py-3 shadow-sm transition focus-within:border-sky-500 focus-within:ring-1 focus-within:ring-sky-100 ${errors.password ? 'border-rose-300 bg-rose-50' : 'border-slate-200 bg-slate-50'}`}>
                  <svg className={iconStyle} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                    <path d="M7 11V7a5 5 0 0110 0v4" />
                  </svg>
                  <input
                    className={fieldClass('password')}
                    type={showPassword ? 'text' : 'password'}
                    placeholder="••••••••"
                    value={form.password}
                    onChange={handleChange('password')}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword((prev) => !prev)}
                    className="rounded-full p-1 text-slate-500 hover:bg-slate-200 hover:text-slate-700 transition"
                    aria-label={showPassword ? 'Hide password' : 'Show password'}
                  >
                    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      {showPassword ? (
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
                {errors.password && <p className="mt-1 text-xs text-rose-600">{errors.password}</p>}
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <div className="mb-2 text-[10px] uppercase tracking-[0.35em] text-slate-500">Last Name</div>
                <div className={`flex items-center gap-3 rounded-[22px] border px-4 py-3 shadow-sm transition focus-within:border-sky-500 focus-within:ring-1 focus-within:ring-sky-100 ${errors.lastName ? 'border-rose-300 bg-rose-50' : 'border-slate-200 bg-slate-50'}`}>
                  <svg className={iconStyle} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
                    <circle cx="12" cy="7" r="4" />
                  </svg>
                  <input
                    className={fieldClass('lastName')}
                    type="text"
                    placeholder="Your last name"
                    value={form.lastName}
                    onChange={handleChange('lastName')}
                  />
                </div>
                {errors.lastName && <p className="mt-1 text-xs text-rose-600">{errors.lastName}</p>}
              </div>

              <div>
                <div className="mb-2 text-[10px] uppercase tracking-[0.35em] text-slate-500">Email Address</div>
                <div className={`flex items-center gap-3 rounded-[22px] border px-4 py-3 shadow-sm transition focus-within:border-sky-500 focus-within:ring-1 focus-within:ring-sky-100 ${errors.email ? 'border-rose-300 bg-rose-50' : 'border-slate-200 bg-slate-50'}`}>
                  <svg className={iconStyle} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16v16H4z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                  <input
                    className={fieldClass('email')}
                    type="email"
                    placeholder="yourmail@example.com"
                    value={form.email}
                    onChange={handleChange('email')}
                  />
                </div>
                {errors.email && <p className="mt-1 text-xs text-rose-600">{errors.email}</p>}
              </div>

              <div>
                <div className="mb-2 text-[10px] uppercase tracking-[0.35em] text-slate-500">Confirm Password</div>
                <div className={`flex items-center gap-3 rounded-[22px] border px-4 py-3 shadow-sm transition focus-within:border-sky-500 focus-within:ring-1 focus-within:ring-sky-100 ${errors.confirmPassword ? 'border-rose-300 bg-rose-50' : 'border-slate-200 bg-slate-50'}`}>
                  <svg className={iconStyle} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                    <path d="M7 11V7a5 5 0 0110 0v4" />
                  </svg>
                  <input
                    className={fieldClass('confirmPassword')}
                    type={showConfirmPassword ? 'text' : 'password'}
                    placeholder="••••••••"
                    value={form.confirmPassword}
                    onChange={handleChange('confirmPassword')}
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword((prev) => !prev)}
                    className="rounded-full p-1 text-slate-500 hover:bg-slate-200 hover:text-slate-700 transition"
                    aria-label={showConfirmPassword ? 'Hide confirm password' : 'Show confirm password'}
                  >
                    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      {showConfirmPassword ? (
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
                {errors.confirmPassword && <p className="mt-1 text-xs text-rose-600">{errors.confirmPassword}</p>}
              </div>
            </div>
          </div>

          <div className="mt-5 space-y-4">
            <button className="w-full rounded-[22px] bg-slate-950 px-5 py-3 text-sm font-bold uppercase tracking-[0.25em] text-white transition hover:bg-slate-800">
              Initiate Registration
            </button>

            <div className="text-center text-xs uppercase tracking-[0.35em] text-slate-500">
              <span>Already have an account? </span>
              <button type="button" onClick={onClose} className="font-semibold text-slate-900 hover:text-slate-950">
                Go to Login
              </button>
            </div>

            <div className="flex items-center justify-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-[11px] uppercase tracking-[0.3em] text-slate-500">
              <svg className="h-4 w-4 text-emerald-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 6L9 17l-5-5" />
              </svg>
              Secured Student Access
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default JoinModal;
