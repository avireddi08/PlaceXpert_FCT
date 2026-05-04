const FormulaSection = () => (
  <section className="py-16 px-6 max-w-6xl mx-auto">
    <div className="flex flex-col md:flex-row items-center gap-12">
      <div className="md:w-1/2">
        <h2 className="text-3xl font-bold mb-6">The <span className="text-orange-500">5 M Formula</span></h2>
        <ul className="space-y-4">
          <li className="flex gap-3"><strong>1. Mentor:</strong> Complete career guidance.</li>
          <li className="flex gap-3"><strong>2. Logic:</strong> Programming logic building.</li>
          <li className="flex gap-3"><strong>3. Confidence:</strong> Communication & Soft skills.</li>
          <li className="flex gap-3"><strong>4. Project:</strong> Live project implementation.</li>
          <li className="flex gap-3"><strong>5. Placement:</strong> HR & Interview opportunities.</li>
        </ul>
      </div>
      <div className="md:w-1/2 bg-gray-200 h-64 rounded-xl flex items-center justify-center">
        <p className="text-gray-500">[Interactive Image/Graphics]</p>
      </div>
    </div>
  </section>
);
export default FormulaSection;