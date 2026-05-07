import React, { useState } from 'react';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const testimonials = [
    {
      name: "Priya & Rajesh Kumar",
      image: "/p.png",
      quote: "After years of trying, we finally have our beautiful daughter. The team made our IVF journey so much easier with their support and expertise.",
      location: "Mumbai, Maharashtra"
    },
    {
      name: "Anjali & Vikram Sharma",
      image: "/family.png",
      quote: "The transparent pricing and personalized care made all the difference. We felt supported every step of the way. Now we're expecting twins!",
      location: "Delhi, NCR"
    },
    {
      name: "Neha & Arjun Patel",
      image: "/parents.png",
      quote: "We were overwhelmed at first, but the team guided us through everything. Their success rate speaks for itself - we're now proud parents!",
      location: "Bangalore, Karnataka"
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="bg-white py-8 md:py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-6">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
            Success Stories
          </h2>
          <p className="text-sm md:text-base text-gray-600 max-w-2xl mx-auto">
            Real families, real results, real joy
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl shadow-lg p-6 md:p-8 relative">
            {/* Quote Icon */}
            <div className="absolute top-4 left-4 text-primary-yellow opacity-20">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
            </div>
            
            <div className="relative z-10 text-center pt-4 pb-3">
              <img 
                src={testimonials[currentIndex].image} 
                alt={testimonials[currentIndex].name}
                className="w-16 h-16 rounded-full object-cover mx-auto mb-4 shadow-lg border-3 border-white"
              />
              
              <p className="text-sm md:text-base text-gray-700 italic mb-4 px-4">
                "{testimonials[currentIndex].quote}"
              </p>
              
              <h4 className="text-lg font-bold text-gray-900 mb-0.5">
                {testimonials[currentIndex].name}
              </h4>
              <p className="text-xs text-gray-600">
                {testimonials[currentIndex].location}
              </p>
            </div>
            
            {/* Navigation Buttons */}
            <div className="flex justify-center items-center space-x-3 mt-4">
              <button 
                onClick={prevTestimonial}
                className="w-8 h-8 bg-white rounded-full shadow-md flex items-center justify-center hover:bg-primary-yellow transition-all duration-300"
              >
                <svg className="w-4 h-4 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              
              {/* Dots */}
              <div className="flex space-x-1.5">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentIndex ? 'bg-primary-green w-6' : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>
              
              <button 
                onClick={nextTestimonial}
                className="w-8 h-8 bg-white rounded-full shadow-md flex items-center justify-center hover:bg-primary-yellow transition-all duration-300"
              >
                <svg className="w-4 h-4 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
          
          {/* Trust Badge */}
          <div className="text-center mt-5">
            <div className="inline-flex items-center space-x-1.5 bg-primary-yellow px-4 py-2 rounded-full shadow-md">
              <svg className="w-4 h-4 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
              </svg>
              <span className="font-semibold text-gray-900 text-xs md:text-sm">4.9/5 from 2,000+ reviews</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
