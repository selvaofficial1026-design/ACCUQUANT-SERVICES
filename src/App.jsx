import React, { useState } from 'react';
import './App.css';
import { useScrollReveal } from './hooks/useScrollReveal';
import TopBar from './components/TopBar';
import Navbar from './components/Navbar';
import HeroSlider from './components/HeroSlider';
import FourPillars from './components/FourPillars';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import CtaBanner from './components/CtaBanner';
import ProjectsSection from './components/ProjectsSection';
import StandardsBar from './components/StandardsBar';
import TestimonialsSection from './components/TestimonialsSection';
import QuoteContactSection from './components/QuoteContactSection';
import Footer from './components/Footer';
import QuoteModal from './components/QuoteModal';

function App() {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);

  // Initialize scroll reveal animations for zoom, left, right, and up
  useScrollReveal();

  const handleOpenQuote = () => {
    setQuoteModalOpen(true);
  };

  const handleCloseQuote = () => {
    setQuoteModalOpen(false);
  };

  return (
    <div className="accuquant-app">
      {/* Top Bar with Contacts & Socials */}
      <TopBar />

      {/* Sticky Main Navigation */}
      <Navbar onOpenQuote={handleOpenQuote} />

      <main>
        {/* Dynamic Hero Slider */}
        <HeroSlider onOpenQuote={handleOpenQuote} />

        {/* 4 Pillars: Accuracy, Experienced, Sustainability, Integrity */}
        <FourPillars />

        {/* About Us Section */}
        <AboutSection onOpenQuote={handleOpenQuote} />

        {/* Our Services with Interactive Tabs */}
        <ServicesSection onOpenQuote={handleOpenQuote} />

        {/* "Don't Hesitate To Ask" Ribbon */}
        <CtaBanner onOpenQuote={handleOpenQuote} />

        {/* Our Projects Portfolio */}
        <ProjectsSection onOpenQuote={handleOpenQuote} />

        {/* Engineering Standards & Software Stack */}
        <StandardsBar />

        {/* Client Testimonials */}
        <TestimonialsSection />

        {/* Contact Us & Request A Quote Form */}
        <QuoteContactSection />
      </main>

      {/* 4-Column Footer */}
      <Footer onOpenQuote={handleOpenQuote} />

      {/* Global Instant Quote Request Modal */}
      <QuoteModal isOpen={quoteModalOpen} onClose={handleCloseQuote} />
    </div>
  );
}

export default App;
