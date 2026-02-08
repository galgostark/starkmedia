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
      <div className="bg-background min-h-screen text-slate-200 font-sans selection:bg-primary selection:text-background">
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
