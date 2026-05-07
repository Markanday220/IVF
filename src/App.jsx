import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WhyChooseUs from './components/WhyChooseUs';
import BookConsultation from './components/BookConsultation';
import FertilityJourneySupport from './components/FertilityJourneySupport';
import Solution from './components/Solution';
import HowItWorks from './components/HowItWorks';
import Trust from './components/Trust';
import Services from './components/Services';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import StickyButton from './components/StickyButton';
import ConsultationModal from './components/ConsultationModal';
import ChatBox from './components/ChatBox';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="App">
      <Navbar openModal={openModal} />
      <div id="home">
        <Hero openModal={openModal} />
      </div>
      <WhyChooseUs openModal={openModal} />
      <BookConsultation />
      <FertilityJourneySupport />
      <Solution />
      <HowItWorks />
      <Trust />
      <div id="services">
        <Services />
      </div>
      <div id="pricing">
        <Pricing />
      </div>
      <div id="testimonials">
        <Testimonials />
      </div>
      <div id="faq">
        <FAQ />
      </div>
      <FinalCTA />
      <Footer />
      <StickyButton openModal={openModal} />
      
      {/* Consultation Modal */}
      <ConsultationModal isOpen={isModalOpen} onClose={closeModal} />
      
      {/* Chat Box */}
      <ChatBox />
    </div>
  );
}

export default App;
