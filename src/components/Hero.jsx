import React from 'react';

const Hero = ({ openModal }) => {
  return (
    <section className="relative bg-gradient-to-br from-blue-50 via-white to-purple-50 h-screen flex items-center overflow-hidden pt-16 md:pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid md:grid-cols-2 gap-6 md:gap-10 items-center">
          
          {/* Left Side - Image */}
          <div className="relative order-2 md:order-1">
            <div className="relative">
              <img 
                src="/family.png" 
                alt="Happy family with baby - IVF success story" 
                className="w-full h-auto max-h-[45vh] md:max-h-[70vh] lg:max-h-[80vh] object-contain rounded-2xl"
              />
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="space-y-4 md:space-y-5 order-1 md:order-2">
            <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 leading-tight">
              Your Dream of<br />
              <span className="text-primary-green">Parenthood Starts Here</span>
            </h1>
            
            <p className="text-base md:text-lg lg:text-xl text-gray-700 font-medium">
              Oxxy Fertility & IVF – Trusted by 10,000+ Families
            </p>
            
            <button 
              onClick={openModal}
              className="bg-primary-yellow hover:bg-yellow-500 text-gray-900 font-bold text-sm md:text-base lg:text-lg px-6 md:px-8 lg:px-10 py-3 md:py-3.5 lg:py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              Book Your FREE Consultation
            </button>

            {/* Trust Indicators */}
            <div className="space-y-2.5 md:space-y-3 pt-2 md:pt-3">
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-10 h-10 md:w-11 md:h-11 lg:w-12 lg:h-12 bg-primary-green/10 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 md:w-5 md:h-5 lg:w-6 lg:h-6 text-primary-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-sm md:text-base lg:text-lg font-semibold text-gray-900">95% Success Rate</h3>
                  <p className="text-xs md:text-sm text-gray-600">Best in class pregnancy outcomes</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-10 h-10 md:w-11 md:h-11 lg:w-12 lg:h-12 bg-primary-green/10 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 md:w-5 md:h-5 lg:w-6 lg:h-6 text-primary-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-sm md:text-base lg:text-lg font-semibold text-gray-900">10,000+ Happy Families</h3>
                  <p className="text-xs md:text-sm text-gray-600">Trusted by couples nationwide</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-10 h-10 md:w-11 md:h-11 lg:w-12 lg:h-12 bg-primary-yellow/20 rounded-full flex items-center justify-center border-2 border-primary-yellow">
                  <div className="text-center">
                    <div className="text-xs md:text-sm font-bold text-gray-900 leading-tight">0%<br/>EMI</div>
                  </div>
                </div>
                <div>
                  <h3 className="text-sm md:text-base lg:text-lg font-semibold text-gray-900">Zero Interest EMI Plans</h3>
                  <p className="text-xs md:text-sm text-gray-600">Affordable payment options</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
