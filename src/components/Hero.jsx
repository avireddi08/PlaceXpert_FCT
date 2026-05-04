const Hero = () => (
  <section className="relative min-h-[85vh] flex items-center px-20 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-blue-50/50 via-white to-white overflow-hidden">
    <div className="w-1/2 relative z-10">
      {/* Identity Badge */}
      <div className="inline-flex items-center gap-3 bg-white/60 backdrop-blur-md px-5 py-2 rounded-full border border-slate-100 shadow-sm mb-10">
        <div className="w-8 h-5 bg-slate-100 rounded flex items-center justify-center overflow-hidden">
           <span className="text-[8px] font-bold text-blue-500 italic">place<br/>xpert</span>
        </div>
        <span className="text-[11px] font-bold text-slate-400 tracking-[0.2em] uppercase">Identity • Excellence</span>
      </div>
      
      {/* Main Title */}
      <h1 className="text-[92px] font-[800] text-[#0f172a] leading-[1.05] tracking-tight mb-8">
        Place <span className="text-[#2dd4bf]">Expertly.</span>
      </h1>

      {/* Feature Dots */}
      <div className="flex gap-6 mb-12">
        {['Potential', 'Excellence', 'Recruitment', 'Training'].map((item) => (
          <div key={item} className="flex items-center gap-2">
            <div className="w-2 h-2 bg-[#2dd4bf] rounded-full shadow-[0_0_8px_rgba(45,212,191,0.6)]" />
            <span className="text-[12px] font-bold text-[#0f172a] uppercase tracking-widest">{item}</span>
          </div>
        ))}
      </div>

      <p className="text-slate-500 text-[19px] leading-relaxed max-w-[480px] mb-12 font-medium">
        Advanced placement ecosystem connecting you with verified recruiters through HR-led strategy and automated eligibility tracking.
      </p>

      {/* Buttons */}
      <div className="flex gap-5">
        <button className="bg-[#0a1d37] text-white px-10 py-5 rounded-2xl font-bold text-sm tracking-widest flex items-center gap-3 hover:bg-[#162a4a] transition-all shadow-2xl shadow-blue-900/20 uppercase">
          Portal Login <span className="text-xl">→</span>
        </button>
        <button className="bg-white text-[#0a1d37] border-2 border-slate-100 px-10 py-5 rounded-2xl font-bold text-sm tracking-widest flex items-center gap-3 hover:bg-slate-50 transition-all uppercase">
          Join Platform <div className="w-0 h-0 border-y-[6px] border-y-transparent border-l-[8px] border-l-[#0a1d37] ml-1" />
        </button>
      </div>
    </div>

    {/* Right Graphic Panel */}
    <div className="w-1/2 flex justify-end">
      <div className="relative w-[580px] h-[480px] bg-white/30 backdrop-blur-3xl rounded-[60px] border border-white/50 shadow-[0_32px_64px_-12px_rgba(0,0,0,0.05)] p-12">
        {/* Placeholder for the dashboard illustration */}
        <div className="w-full h-full bg-slate-50/50 rounded-[40px] border border-slate-100 p-10">
          <div className="w-40 h-5 bg-slate-200/50 rounded-full mb-4" />
          <div className="w-64 h-8 bg-slate-100/50 rounded-full mb-12" />
          
          <div className="grid grid-cols-2 gap-6">
            <div className="h-16 bg-white rounded-2xl border border-slate-100 shadow-sm" />
            <div className="h-16 bg-white rounded-2xl border border-slate-100 shadow-sm" />
          </div>
        </div>

        {/* Identity Verified Badge */}
        <div className="absolute bottom-16 right-10 bg-white p-8 rounded-[32px] shadow-2xl border border-slate-50 flex flex-col items-center min-w-[200px]">
          <div className="w-14 h-14 bg-emerald-50 text-emerald-500 rounded-full flex items-center justify-center mb-4">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>
          </div>
          <span className="text-[10px] text-slate-400 font-extrabold uppercase tracking-widest mb-1">System Status</span>
          <span className="text-slate-900 font-extrabold text-lg">Identity Verified</span>
        </div>
      </div>
    </div>
  </section>
);
export default Hero;