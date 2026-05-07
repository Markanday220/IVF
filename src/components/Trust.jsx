import React, { useState } from 'react';

const Trust = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    date: '',
    time: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Consultation scheduled:', formData);
    alert('Thank you! We will contact you shortly to confirm your consultation.');
    setFormData({
      name: '',
      phone: '',
      email: '',
      date: '',
      time: ''
    });
  };

  const stats = [
    {
      number: "10,000+",
      label: "Couples Helped",
      description: "Successfully guided to parenthood"
    },
    {
      number: "50+",
      label: "Top IVF Specialists",
      description: "Board-certified experts"
    },
    {
      number: "95%",
      label: "High Success Rate",
      description: "Above national average"
    },
    {
      number: "24/7",
      label: "Support Available",
      description: "Always here for you"
    }
  ];

  const doctors = [
    {
      name: "Dr. Priya Sharma",
      specialty: "Reproductive Endocrinologist",
      image: "/d.png",
      experience: "15+ Years Experience"
    },
    {
      name: "Dr. Rajesh Kumar",
      specialty: "Fertility Specialist",
      image: "/meeting.png",
      experience: "12+ Years Experience"
    },
    {
      name: "Dr. Anjali Mehta",
      specialty: "IVF Coordinator",
      image: "/z.png",
      experience: "10+ Years Experience"
    }
  ];

  return (
    <section className="bg-gradient-to-br from-blue-50 via-white to-green-50 py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            Trusted by Thousands
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Join the families who achieved their dream with our expert care
          </p>
        </div>
        
        {/* Stats Grid */}
        <div className="grid md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-xl transition-all duration-300">
              <div className="text-4xl md:text-5xl font-bold text-primary-green mb-2">
                {stat.number}
              </div>
              <div className="text-xl font-semibold text-gray-900 mb-2">
                {stat.label}
              </div>
              <div className="text-gray-600">
                {stat.description}
              </div>
            </div>
          ))}
        </div>
        
        {/* Doctors and Form Section */}
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
          <div className="grid lg:grid-cols-2 gap-0">
            
            {/* Left Side - Doctors */}
            <div className="p-8 md:p-12 bg-gradient-to-br from-blue-50 to-purple-50">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
                Meet Our Expert Team
              </h3>
              
              <div className="space-y-6">
                {doctors.map((doctor, index) => (
                  <div key={index} className="flex items-center gap-4 bg-white rounded-2xl p-4 shadow-md hover:shadow-lg transition-all duration-300 group">
                    <div className="relative flex-shrink-0">
                      <img 
                        src={doctor.image} 
                        alt={doctor.name}
                        className="w-20 h-20 rounded-full object-cover shadow-lg group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute -bottom-1 -right-1 w-8 h-8 bg-primary-yellow rounded-full flex items-center justify-center shadow-lg">
                        <svg className="w-4 h-4 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-bold text-gray-900">
                        {doctor.name}
                      </h4>
                      <p className="text-sm text-gray-600 mb-1">
                        {doctor.specialty}
                      </p>
                      <p className="text-xs text-primary-green font-semibold">
                        {doctor.experience}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-4 bg-white rounded-xl border-2 border-primary-green">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-10 h-10 bg-primary-green rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h5 className="font-bold text-gray-900 mb-1">Why Choose Our Team?</h5>
                    <p className="text-sm text-gray-600">Board-certified specialists with decades of combined experience in reproductive medicine and IVF treatments.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Consultation Form */}
            <div className="p-8 md:p-12">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                Schedule a Consultation
              </h3>
              <p className="text-gray-600 mb-8">
                Book your FREE consultation with our fertility experts
              </p>

              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Name Input */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-primary-blue focus:outline-none transition-colors duration-200"
                  />
                </div>

                {/* Phone Input */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="+91-9876543210"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-primary-blue focus:outline-none transition-colors duration-200"
                  />
                </div>

                {/* Email Input */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-primary-blue focus:outline-none transition-colors duration-200"
                  />
                </div>

                {/* Date and Time */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Preferred Date *
                    </label>
                    <input
                      type="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-primary-blue focus:outline-none transition-colors duration-200"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Preferred Time *
                    </label>
                    <select
                      name="time"
                      value={formData.time}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-primary-blue focus:outline-none transition-colors duration-200 bg-white"
                    >
                      <option value="">Select time</option>
                      <option value="09:00 AM">09:00 AM</option>
                      <option value="10:00 AM">10:00 AM</option>
                      <option value="11:00 AM">11:00 AM</option>
                      <option value="12:00 PM">12:00 PM</option>
                      <option value="02:00 PM">02:00 PM</option>
                      <option value="03:00 PM">03:00 PM</option>
                      <option value="04:00 PM">04:00 PM</option>
                      <option value="05:00 PM">05:00 PM</option>
                    </select>
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-primary-green hover:bg-green-600 text-white font-bold text-lg py-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                >
                  Schedule Consultation
                </button>

                {/* Trust Badge */}
                <div className="flex items-center justify-center gap-2 text-xs text-gray-500 pt-2">
                  <svg className="w-4 h-4 text-primary-green" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Your information is 100% secure and confidential</span>
                </div>
              </form>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Trust;
