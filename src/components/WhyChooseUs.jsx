import React from 'react';

const WhyChooseUs = ({ openModal }) => {
  const features = [
    {
      title: "World-Class IVF Facilities",
      description: "We help people fight against reproductive difficulties, infertility or fertility problems who dream of starting a family",
      details: "Our state-of-the-art laboratories are equipped with the latest technology and maintained at the highest standards to ensure optimal conditions for embryo development.",
      image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=600&h=400&fit=crop",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      )
    },
    {
      title: "Trusted IVF Experts with Years of Experience",
      description: "Our kind and compassionate care team includes physicians, nurses, medical assistants and other support staff",
      details: "With over 50+ fertility specialists and embryologists, our team brings decades of combined experience in reproductive medicine and has successfully helped thousands of families.",
      image: "/d.png",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    },
    {
      title: "More than 10,000+ Satisfied Couples",
      description: "Over 10,000 satisfied couples have trusted us to guide them on their journey to parenthood",
      details: "Our team of fertility experts uses the latest advancements in reproductive medicine to overcome even the most stubborn fertility challenges with personalized care.",
      image: "/p.png",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: "Ethical Practices",
      description: "Oxxy adheres to its code of ethics and legislation. People will be able to make sound decisions if they are aware of and comprehend the outcomes of their decisions",
      details: "We maintain complete transparency in all our procedures, ensuring you understand every step of your treatment journey with full informed consent.",
      image: "/meeting.png",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    {
      title: "Scientific Approach",
      description: "Our kind and compassionate team is committed to developing a multifaceted scientific approach to improve therapeutic interventions for infertility treatments",
      details: "We combine evidence-based medicine with cutting-edge research to provide you with the most effective and advanced fertility treatments available today.",
      image: "/lab.png",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      )
    },
    {
      title: "Realistic Ideas",
      description: "Providing IVF Treatment and care with the realistic and holistic approach",
      details: "We set realistic expectations and provide honest guidance throughout your fertility journey, ensuring you're fully prepared for each stage of treatment with comprehensive support.",
      image: "/ivf.png",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
        </svg>
      )
    }
  ];

  return (
    <section className="bg-gradient-to-br from-pink-50 via-white to-purple-50 py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16 relative">
          <div className="flex items-center justify-center mb-4">
            <div className="flex-1 h-0.5 bg-gradient-to-r from-transparent via-pink-400 to-pink-400 max-w-xs"></div>
            <h2 className="text-3xl md:text-5xl font-bold text-pink-500 mx-8">
              Why Choose Us ?
            </h2>
            <div className="flex-1 h-0.5 bg-gradient-to-l from-transparent via-pink-400 to-pink-400 max-w-xs"></div>
          </div>
          <p className="text-xl text-gray-600 mt-4 max-w-3xl mx-auto">
            Discover what makes Oxxy the trusted choice for thousands of families on their journey to parenthood
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={feature.image} 
                  alt={feature.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                
                {/* Icon Badge */}
                <div className="absolute top-4 right-4 w-14 h-14 bg-white rounded-full flex items-center justify-center text-primary-blue shadow-lg">
                  {feature.icon}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 min-h-[56px]">
                  {feature.title}
                </h3>
                
                <p className="text-gray-700 mb-3 leading-relaxed">
                  {feature.description}
                </p>
                
                <p className="text-sm text-gray-600 leading-relaxed">
                  {feature.details}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <button 
            onClick={openModal}
            className="bg-primary-yellow hover:bg-yellow-500 text-gray-900 font-bold text-lg px-12 py-5 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            Start Your Journey with Oxxy
          </button>
          <p className="text-gray-600 mt-4">
            Join 10,000+ families who chose Oxxy for their fertility journey
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
