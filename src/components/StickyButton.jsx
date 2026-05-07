import React, { useState, useEffect } from 'react';

const StickyButton = ({ openModal }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <div className={`fixed bottom-6 left-0 right-0 z-50 px-4 transition-all duration-300 md:hidden ${
      isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
    }`}>
      <button 
        onClick={openModal}
        className="w-full bg-primary-green hover:bg-green-600 text-white font-bold py-4 px-6 rounded-full shadow-2xl flex items-center justify-center space-x-2 transition-all duration-300 hover:scale-105"
      >
        <span>Check Your Fertility Score</span>
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
        </svg>
      </button>
    </div>
  );
};

export default StickyButton;
