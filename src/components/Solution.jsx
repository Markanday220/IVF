import React from 'react';

const Solution = () => {
  const solutions = [
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      text: "Personalized IVF plan tailored to you"
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      text: "Complete cost transparency upfront"
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      text: "Expert consultation at every step"
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      text: "End-to-end emotional support"
    }
  ];

  return (
    <section className="bg-gradient-to-br from-green-50 via-white to-blue-50 py-8 md:py-12">
      <div className="section-container">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Left Image */}
          <div className="relative order-2 md:order-1">
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img 
                src="/parents.png" 
                alt="Medical consultation" 
                className="w-full h-[350px] md:h-[400px] object-contain bg-white"
              />
            </div>
            {/* Floating Badge */}
            <div className="absolute -top-4 -right-4 bg-primary-yellow rounded-xl shadow-lg p-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900">95%</div>
                <div className="text-xs text-gray-700 mt-0.5">Success Rate</div>
              </div>
            </div>
          </div>
          
          {/* Right Content */}
          <div className="space-y-5 order-1 md:order-2">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
              Your Path to Parenthood,
              <span className="text-primary-green"> Made Clear</span>
            </h2>
            
            <p className="text-base md:text-lg text-gray-600">
              We provide everything you need for a successful IVF journey
            </p>
            
            <div className="space-y-3">
              {solutions.map((solution, index) => (
                <div key={index} className="flex items-start space-x-3 bg-white rounded-lg p-3 shadow-md">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary-green text-white rounded-full flex items-center justify-center">
                    {solution.icon}
                  </div>
                  <p className="text-sm md:text-base text-gray-700 pt-0.5">
                    {solution.text}
                  </p>
                </div>
              ))}
            </div>
            
            <button className="btn-secondary text-base">
              Learn More About Our Approach
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solution;
