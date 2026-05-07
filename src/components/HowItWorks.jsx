import React, { useEffect, useRef, useState } from 'react';

const HowItWorks = () => {
  const [visibleSteps, setVisibleSteps] = useState([]);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Trigger animations when section comes into view
            steps.forEach((_, index) => {
              setTimeout(() => {
                setVisibleSteps((prev) => [...prev, index]);
              }, index * 200);
            });
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const steps = [
    {
      number: "1",
      title: "Take Fertility Assessment",
      description: "Complete our comprehensive online fertility assessment in just 5 minutes",
      details: "Our expert-designed questionnaire helps us understand your unique fertility journey, medical history, and personal goals to create the perfect treatment plan for you.",
      image: "/test.png",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
        </svg>
      )
    },
    {
      number: "2",
      title: "Get Personalized Plan",
      description: "Receive a customized IVF roadmap designed specifically for your needs",
      details: "Based on your assessment, our fertility specialists create a detailed treatment plan with clear timelines, procedures, and cost breakdown tailored to maximize your success.",
      image: "/Consult.png",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      )
    },
    {
      number: "3",
      title: "Connect with Experts",
      description: "Meet your dedicated IVF specialist and care team in a personal consultation",
      details: "Schedule a one-on-one consultation with our experienced fertility doctors who will guide you through every step, answer all your questions, and provide emotional support.",
      image: "/z.png",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    },
    {
      number: "4",
      title: "Start IVF Journey",
      description: "Begin your treatment with comprehensive support and world-class care",
      details: "With your personalized plan in place and expert team by your side, start your IVF treatment journey with confidence, knowing you're in the best hands for your dream of parenthood.",
      image: "/parents.png",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      )
    }
  ];

  return (
    <section ref={sectionRef} className="bg-gradient-to-br from-gray-50 via-white to-blue-50 py-8 md:py-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
            How It Works
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
            Your journey to parenthood in 4 simple steps
          </p>
        </div>
        
        {/* Desktop Zigzag Timeline */}
        <div className="hidden lg:block relative">
          {/* Vertical Center Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary-blue via-primary-green to-primary-yellow transform -translate-x-1/2"></div>
          
          <div className="space-y-10">
            {steps.map((step, index) => (
              <div 
                key={index} 
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'justify-start' : 'justify-end'
                } transition-all duration-700 ${
                  visibleSteps.includes(index)
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-8'
                }`}
              >
                {/* Card */}
                <div 
                  className={`w-5/12 bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group ${
                    index % 2 === 0 ? 'mr-auto' : 'ml-auto'
                  }`}
                >
                  {/* Image Section */}
                  <div className="relative h-36 overflow-hidden bg-gray-100">
                    <img 
                      src={step.image} 
                      alt={step.title}
                      className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                    
                    {/* Number Badge */}
                    <div className="absolute top-3 left-3 w-11 h-11 bg-gradient-to-br from-primary-blue to-primary-green text-white rounded-full flex items-center justify-center text-xl font-bold shadow-lg">
                      {step.number}
                    </div>

                    {/* Icon Badge */}
                    <div className="absolute top-3 right-3 w-9 h-9 bg-white rounded-full flex items-center justify-center text-primary-blue shadow-md">
                      {step.icon}
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="p-5">
                    <h3 className="text-lg font-bold text-gray-900 mb-1.5">
                      {step.title}
                    </h3>
                    <p className="text-gray-700 mb-2 font-medium text-sm">
                      {step.description}
                    </p>
                    <p className="text-xs text-gray-600 leading-relaxed">
                      {step.details}
                    </p>
                  </div>
                </div>

                {/* Center Circle Connector */}
                <div 
                  className={`absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-white border-3 border-primary-green rounded-full shadow-md z-10 transition-all duration-500 ${
                    visibleSteps.includes(index) ? 'scale-100' : 'scale-0'
                  }`}
                ></div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Mobile/Tablet Vertical Timeline */}
        <div className="lg:hidden relative">
          {/* Vertical Line */}
          <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-blue via-primary-green to-primary-yellow"></div>
          
          <div className="space-y-5">
            {steps.map((step, index) => (
              <div 
                key={index} 
                className={`relative flex items-start gap-3 transition-all duration-700 ${
                  visibleSteps.includes(index)
                    ? 'opacity-100 translate-x-0'
                    : 'opacity-0 -translate-x-8'
                }`}
              >
                {/* Number Circle */}
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-primary-blue to-primary-green text-white rounded-full flex items-center justify-center text-lg font-bold shadow-lg z-10">
                  {step.number}
                </div>
                
                {/* Card */}
                <div className="flex-1 bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300">
                  {/* Image */}
                  <div className="relative h-32 overflow-hidden bg-gray-100">
                    <img 
                      src={step.image} 
                      alt={step.title}
                      className="w-full h-full object-contain"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                    <div className="absolute bottom-2 right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center text-primary-blue shadow-md">
                      {step.icon}
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="p-4">
                    <h3 className="text-base font-bold text-gray-900 mb-1.5">
                      {step.title}
                    </h3>
                    <p className="text-gray-700 mb-1.5 text-sm font-medium">
                      {step.description}
                    </p>
                    <p className="text-xs text-gray-600 leading-relaxed">
                      {step.details}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="text-center mt-8">
          <button className="bg-primary-yellow hover:bg-yellow-500 text-gray-900 font-bold text-base md:text-lg px-8 md:px-10 py-3 md:py-3.5 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
            Start Your Assessment Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
