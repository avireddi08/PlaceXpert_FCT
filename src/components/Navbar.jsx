const Navbar = () => (
  <nav className="flex justify-between items-center px-12 py-6 bg-white border-b border-gray-100 sticky top-0 z-50">
    <div className="flex items-center gap-3">
      <div className="w-10 h-10 bg-slate-50 border border-gray-200 rounded-xl flex items-center justify-center shadow-sm">
        <span className="text-[10px] font-bold text-blue-600 italic">place<br/>xpert</span>
      </div>
      <div>
        <h1 className="text-xl font-extrabold text-slate-800 leading-none">PlaceXpert</h1>
        <p className="text-[10px] font-bold text-slate-400 tracking-widest uppercase mt-1">Career Portal</p>
      </div>
    </div>
    
    <div className="flex items-center gap-12">
      <img src="https://fortunecloudindia.com/img/logo.png" alt="FortuneCloud" className="h-10 opacity-70" />
    </div>
  </nav>
);
export default Navbar;