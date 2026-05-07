import React from 'react';

const FinalCTA = () => {
  return (
    <section className="relative bg-gray-900 py-12 md:py-16 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1492725764893-90b379c2b6e7?w=1920&h=1080&fit=crop" 
          alt="Happy family" 
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/95 to-gray-900/90"></div>
      </div>
      
      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
            Take the First Step
            <br />
            <span className="text-primary-yellow">Towards Parenthood</span>
          </h2>
          
          <p className="text-base md:text-lg lg:text-xl text-gray-300 mb-8 leading-relaxed">
            Your journey to becoming a parent starts here. Let us guide you with expert care, transparent pricing, and unwavering support.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-10">
            <button className="bg-primary-yellow hover:bg-yellow-500 text-gray-900 font-bold text-base md:text-lg px-8 md:px-10 py-3 md:py-4 rounded-full shadow-2xl hover:scale-105 transform transition-all duration-300">
              Start Your Fertility Check →
            </button>
            <button className="bg-white/10 hover:bg-white/20 text-white font-semibold text-base md:text-lg px-8 md:px-10 py-3 md:py-4 rounded-full transition-all duration-300 border-2 border-white/30">
              Schedule Free Consultation
            </button>
          </div>
          
          {/* Trust Indicators */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-white/20">
            <div className="text-center">
              <div className="text-primary-yellow mb-2">
                <svg className="w-8 h-8 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="text-white font-semibold text-sm md:text-base">Quick Response</div>
              <div className="text-gray-400 text-xs md:text-sm">Within 24 hours</div>
            </div>
            
            <div className="text-center">
              <div className="text-primary-yellow mb-2">
                <svg className="w-8 h-8 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <div className="text-white font-semibold text-sm md:text-base">Confidential</div>
              <div className="text-gray-400 text-xs md:text-sm">100% Private</div>
            </div>
            
            <div className="text-center">
              <div className="text-primary-yellow mb-2">
                <svg className="w-8 h-8 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="text-white font-semibold text-sm md:text-base">No Obligation</div>
              <div className="text-gray-400 text-xs md:text-sm">Free consultation</div>
            </div>
            
            <div className="text-center">
              <div className="text-primary-yellow mb-2">
                <svg className="w-8 h-8 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <div className="text-white font-semibold text-sm md:text-base">Expert Team</div>
              <div className="text-gray-400 text-xs md:text-sm">50+ specialists</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
