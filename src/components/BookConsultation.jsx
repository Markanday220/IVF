import React, { useState } from 'react';

const BookConsultation = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    treatment: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you! We will contact you soon.');
  };

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          
          {/* Left Side - Image */}
          <div className="relative order-2 md:order-1">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="/Consult.png" 
                alt="Doctor consultation with couple" 
                className="w-full h-auto"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary-yellow rounded-full opacity-20 blur-2xl"></div>
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-primary-blue rounded-full opacity-20 blur-2xl"></div>
          </div>

          {/* Right Side - Form */}
          <div className="order-1 md:order-2">
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl shadow-xl p-8 md:p-12 border-2 border-primary-blue/20">
              
              <h2 className="text-3xl md:text-4xl font-bold text-primary-blue mb-4">
                Book a FREE<br />
                Consultation
              </h2>
              
              <p className="text-lg text-gray-700 mb-8">
                and talk to our fertility experts
              </p>

              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Name Input */}
                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-4 rounded-lg border-2 border-gray-200 focus:border-primary-blue focus:outline-none transition-colors duration-200 text-gray-900 placeholder-gray-500"
                  />
                </div>

                {/* Phone Input */}
                <div>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="+91-9876543210"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-4 rounded-lg border-2 border-gray-200 focus:border-primary-blue focus:outline-none transition-colors duration-200 text-gray-900 placeholder-gray-500"
                  />
                </div>

                {/* Email Input */}
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-4 rounded-lg border-2 border-gray-200 focus:border-primary-blue focus:outline-none transition-colors duration-200 text-gray-900 placeholder-gray-500"
                  />
                </div>

                {/* Treatment Dropdown */}
                <div>
                  <select
                    name="treatment"
                    value={formData.treatment}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-4 rounded-lg border-2 border-gray-200 focus:border-primary-blue focus:outline-none transition-colors duration-200 text-gray-700 bg-white"
                  >
                    <option value="">Select your Treatment options?</option>
                    <option value="ivf">IVF Treatment</option>
                    <option value="iui">IUI Treatment</option>
                    <option value="egg-freezing">Egg Freezing</option>
                    <option value="fertility-test">Fertility Testing</option>
                    <option value="consultation">General Consultation</option>
                  </select>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-primary-blue hover:bg-blue-700 text-white font-bold text-lg py-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                >
                  Submit
                </button>
              </form>

              {/* Trust Badge */}
              <div className="mt-6 flex items-center justify-center space-x-2 text-sm text-gray-600">
                <svg className="w-5 h-5 text-primary-green" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Your information is 100% secure and confidential</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default BookConsultation;
