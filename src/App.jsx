import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import { LanguageProvider } from './context/LanguageContext';

function App() {
  return (
    <LanguageProvider>
      <div className="bg-slate-900 min-h-screen text-slate-200 font-sans selection:bg-cyan-500 selection:text-slate-900">
        <Navbar />
        <Hero />
        <Features />
        <Testimonials />
        <Footer />
      </div>
    </LanguageProvider>
  );
}

export default App;
