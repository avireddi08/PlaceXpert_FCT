import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Categories from './components/Categories';
import FormulaSection from './components/FormulaSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="font-sans text-gray-900">
      <Navbar />
      <Hero />
      <Categories />
      <FormulaSection />
      <Footer />
    </div>
  );
}

export default App;