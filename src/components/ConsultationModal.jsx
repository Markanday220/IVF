import React, { useState, useEffect } from 'react';

const ConsultationModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    treatment: ''
  });

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

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
    onClose();
    // Reset form
    setFormData({
      name: '',
      phone: '',
      email: '',
      treatment: ''
    });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black bg-opacity-50 transition-opacity"
        onClick={onClose}
      ></div>

      {/* Modal */}
      <div className="flex min-h-full items-center justify-center p-4">
        <div className="relative bg-white rounded-3xl shadow-2xl max-w-md w-full p-8 transform transition-all">
          
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Header */}
          <div className="mb-6">
            <h2 className="text-3xl font-bold text-primary-blue mb-2">
              Book a FREE Consultation
            </h2>
            <p className="text-gray-600">
              Talk to our fertility experts
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Name Input */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Name *
              </label>
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-primary-blue focus:outline-none transition-colors duration-200"
              />
            </div>

            {/* Phone Input */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
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
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email *
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

            {/* Treatment Dropdown */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Treatment Option *
              </label>
              <select
                name="treatment"
                value={formData.treatment}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-primary-blue focus:outline-none transition-colors duration-200 bg-white"
              >
                <option value="">Select treatment</option>
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
              className="w-full bg-primary-yellow hover:bg-yellow-500 text-gray-900 font-bold text-lg py-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              Submit Request
            </button>
          </form>

          {/* Trust Badge */}
          <div className="mt-4 flex items-center justify-center space-x-2 text-xs text-gray-500">
            <svg className="w-4 h-4 text-primary-green" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span>Your information is 100% secure</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConsultationModal;
