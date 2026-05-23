import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Categories from './components/Categories';
import FormulaSection from './components/FormulaSection';
import Footer from './components/Footer';
import JoinModal from './components/JoinModal';
import LoginPage from './components/LoginPage';

function App() {
  const [showJoinModal, setShowJoinModal] = useState(false);
  const [showLoginPage, setShowLoginPage] = useState(false);

  return (
    <div className="font-sans text-gray-900">
      <Navbar />
      <Hero
        onJoinClick={() => setShowJoinModal(true)}
        onPortalLogin={() => setShowLoginPage(true)}
      />
      <Categories />
      <FormulaSection />
      <Footer />
      {showLoginPage && (
        <LoginPage
          onClose={() => setShowLoginPage(false)}
          onJoinClick={() => setShowJoinModal(true)}
        />
      )}
      <JoinModal open={showJoinModal} onClose={() => setShowJoinModal(false)} />
    </div>
  );
}

export default App;