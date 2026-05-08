import React from 'react';

const FertilityJourneySupport = () => {
  const journeyStages = [
    {
      title: "Struggling to conceive?",
      description: "You don't have to figure this out on your own. Get clarity on what's holding you back.",
      image: "/P (2).png",
      category: "Fertility Issues",
      categoryColor: "text-pink-500"
    },
    {
      title: "Want a baby with your own DNA?",
      description: "Advanced IVF solutions focused on own egg, own sperm, own DNA, own baby.",
      image: "/s.png",
      category: "IVF Related Treatments",
      categoryColor: "text-primary-blue"
    },
    {
      title: "Trying again after a miscarriage?",
      description: "Healing comes first. Get the right medical support for both body and mind.",
      image: "/mariage.png",
      category: "Pregnancy Loss Care",
      categoryColor: "text-primary-green"
    },
    {
      title: "Thinking about freezing?",
      description: "Preserve today's possibilities for tomorrow—safely, ethically, and with expert guidance.",
      image: "/Freezing.png",
      category: "Fertility Preservation",
      categoryColor: "text-primary-orange"
    }
  ];

  return (
    <section className="bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50 py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            Wherever you are in your <span className="text-pink-500">fertility journey</span>, you're not alone
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Expert-led care, clear answers, and personalised treatment designed around your needs and your timeline.
          </p>
        </div>

        {/* Journey Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {journeyStages.map((stage, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={stage.image} 
                  alt={stage.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 min-h-[56px]">
                  {stage.title}
                </h3>
                
                <p className="text-gray-600 mb-4 leading-relaxed text-sm">
                  {stage.description}
                </p>
                
                {/* Category Tag */}
                <div className={`inline-block ${stage.categoryColor} font-semibold text-sm`}>
                  {stage.category}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Text */}
        <div className="text-center mt-12">
          <p className="text-gray-600 text-lg">
            No matter where you are, we're here to guide you every step of the way.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FertilityJourneySupport;
