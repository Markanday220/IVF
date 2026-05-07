import React from 'react';

const Pricing = () => {
  const plans = [
    {
      name: "Basic Guidance",
      price: "₹1,999",
      description: "Perfect for getting started",
      features: [
        "Initial fertility assessment",
        "Personalized treatment plan",
        "Email support",
        "Educational resources"
      ],
      popular: false,
      color: "border-gray-200"
    },
    {
      name: "Advanced IVF Plan",
      price: "₹2,999",
      description: "Most popular choice",
      features: [
        "Complete IVF cycle",
        "Medication included",
        "Dedicated care coordinator",
        "24/7 support access",
        "Genetic screening option"
      ],
      popular: true,
      color: "border-primary-green"
    },
    {
      name: "Premium Support",
      price: "₹3,999",
      description: "Comprehensive care package",
      features: [
        "Multiple IVF cycles",
        "All medications included",
        "Priority specialist access",
        "Unlimited consultations",
        "Advanced genetic testing",
        "Pregnancy support included"
      ],
      popular: false,
      color: "border-gray-200"
    }
  ];

  return (
    <section className="bg-gradient-to-br from-yellow-50 via-white to-green-50 py-8 md:py-12">
      <div className="section-container">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
            Transparent Pricing
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
            No hidden fees. Know exactly what you're paying for.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`card relative ${plan.popular ? 'ring-4 ring-primary-green scale-105 shadow-xl' : ''} bg-white border-2 ${plan.color}`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-primary-green text-white px-5 py-1.5 rounded-full text-xs font-semibold shadow-lg">
                    Most Popular
                  </span>
                </div>
              )}
              
              <div className="text-center mb-6">
                <h3 className="text-xl font-bold text-gray-900 mb-1.5">
                  {plan.name}
                </h3>
                <p className="text-sm text-gray-600 mb-4">
                  {plan.description}
                </p>
                <div className="mb-1">
                  <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                </div>
                <p className="text-xs text-gray-500">Per month</p>
              </div>
              
              <ul className="space-y-3 mb-6">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    <svg className="w-5 h-5 text-primary-green flex-shrink-0 mr-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <button className={`w-full py-3 rounded-full font-semibold text-sm transition-all duration-300 ${
                plan.popular 
                  ? 'bg-primary-green text-white hover:bg-green-600 shadow-lg hover:shadow-xl' 
                  : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
              }`}>
                Get Started
              </button>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-8">
          <p className="text-sm text-gray-600 mb-3">
            Need a custom plan? We're here to help.
          </p>
          <button className="text-primary-green text-sm font-semibold hover:underline">
            Schedule a Free Consultation →
          </button>
        </div>
        
        {/* Trust Badges */}
        <div className="mt-10 bg-white rounded-xl shadow-lg p-6">
          <div className="grid md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-primary-green mb-1.5">
                <svg className="w-10 h-10 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <div className="font-semibold text-sm text-gray-900">Money-Back Guarantee</div>
            </div>
            <div>
              <div className="text-primary-green mb-1.5">
                <svg className="w-10 h-10 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <div className="font-semibold text-sm text-gray-900">Secure Payment</div>
            </div>
            <div>
              <div className="text-primary-green mb-1.5">
                <svg className="w-10 h-10 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <div className="font-semibold text-sm text-gray-900">Flexible Financing</div>
            </div>
            <div>
              <div className="text-primary-green mb-1.5">
                <svg className="w-10 h-10 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <div className="font-semibold text-sm text-gray-900">Insurance Accepted</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
