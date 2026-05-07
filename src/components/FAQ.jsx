import React, { useState } from 'react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What is the IVF success rate?",
      answer: "Our success rates are above the national average at 95% for women under 35, and 70-80% for women 35-40. Success rates depend on various factors including age, health conditions, and treatment protocol. We provide personalized success rate estimates during your consultation."
    },
    {
      question: "How much does IVF cost?",
      answer: "Our IVF packages range from $12,000 to $18,500, which includes medications, monitoring, egg retrieval, and embryo transfer. We offer transparent pricing with no hidden fees, flexible payment plans, and accept most insurance providers."
    },
    {
      question: "How long does the IVF process take?",
      answer: "A complete IVF cycle typically takes 4-6 weeks from start to finish. This includes ovarian stimulation (10-14 days), egg retrieval, fertilization, and embryo transfer. We'll provide you with a detailed timeline during your initial consultation."
    },
    {
      question: "Is IVF painful?",
      answer: "Most patients experience minimal discomfort. The egg retrieval is performed under sedation, so you won't feel pain during the procedure. Some women experience mild cramping or bloating during hormone stimulation, which is normal and manageable."
    },
    {
      question: "What are the risks of IVF?",
      answer: "IVF is generally safe, but like any medical procedure, it has some risks including ovarian hyperstimulation syndrome (rare), multiple pregnancies, and ectopic pregnancy. Our experienced team monitors you closely to minimize risks and ensure your safety."
    },
    {
      question: "Do you accept insurance?",
      answer: "Yes, we work with most major insurance providers. Our financial team will verify your coverage and help you understand what's covered. We also offer flexible payment plans and financing options for out-of-pocket expenses."
    },
    {
      question: "Can I choose the gender of my baby?",
      answer: "Gender selection through PGT (Preimplantation Genetic Testing) is available for medical reasons or family balancing in certain states. We'll discuss the legal and ethical considerations during your consultation."
    },
    {
      question: "What if the first IVF cycle doesn't work?",
      answer: "While our success rates are high, sometimes multiple cycles are needed. We offer multi-cycle packages at discounted rates and will adjust your treatment protocol based on what we learned from the first cycle to improve your chances."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-gradient-to-br from-blue-50 via-white to-green-50 py-8 md:py-12">
      <div className="section-container">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
            Frequently Asked Questions
          </h2>
          <p className="text-sm md:text-base text-gray-600 max-w-2xl mx-auto">
            Get answers to common questions about IVF
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto space-y-3">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-5 py-4 flex items-center justify-between text-left hover:bg-gray-50 transition-colors duration-200"
              >
                <span className="text-base md:text-lg font-semibold text-gray-900 pr-6">
                  {faq.question}
                </span>
                <div className={`flex-shrink-0 w-7 h-7 bg-primary-green rounded-full flex items-center justify-center transition-transform duration-300 ${
                  openIndex === index ? 'rotate-180' : ''
                }`}>
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <div className="px-5 pb-4 text-sm text-gray-600 leading-relaxed">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-8">
          <p className="text-sm text-gray-600 mb-3">
            Still have questions?
          </p>
          <button className="btn-secondary text-base">
            Schedule a Free Consultation
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
