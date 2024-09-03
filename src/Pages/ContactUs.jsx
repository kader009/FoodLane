import React, { useState } from 'react';

const ContactUs = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.message) {
      alert('Please fill out all fields.');
      return;
    }

    console.log('Form submitted:', form);
    // Implement form submission logic here
  };

  return (
    <div className="min-h-screen bg-black text-white p-8 flex justify-center items-center">
      <div className="max-w-5xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Left Side - Contact Information */}
        <div className="space-y-8">
          <h1 className="text-4xl font-bold">Contact Us</h1>
          <p>
            We're here to help! If you have any questions, comments, or
            concerns, please don't hesitate to reach out to us. Your feedback is
            important to us.
          </p>
          <div>
            <h2 className="text-2xl font-semibold">Contact Information</h2>
            <ul className="mt-4 space-y-2">
              <li className="flex items-center space-x-2">
                <span>📇</span>
                <span>FoodLane</span>
              </li>
              <li className="flex items-center space-x-2">
                <span>📞</span>
                <span>+880-123-456-789</span>
              </li>
              <li className="flex items-center space-x-2">
                <span>✉️</span>
                <span>info@foodlane.com</span>
              </li>
              <li className="flex items-center space-x-2">
                <span>⏰</span>
                <span>Mon-Fri, 09:00 AM - 06:00 PM</span>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-semibold">Follow Us</h2>
            <div className="flex space-x-4 mt-2">
              <a href="#" className="text-white hover:underline">
                Facebook
              </a>
              <a href="#" className="text-white hover:underline">
                Instagram
              </a>
              <a href="#" className="text-white hover:underline">
                Twitter
              </a>
            </div>
          </div>
        </div>

        {/* Right Side - Contact Form */}
        <div className="bg-gray-950 p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-6">Send Us a Message</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="p-3 bg-black text-white rounded focus:outline-none focus:ring-2 focus:ring-[#F44336]"
                required
              />
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Your Email"
                className="p-3 bg-black text-white rounded focus:outline-none focus:ring-2 focus:ring-[#F44336]"
                required
              />
            </div>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Your Message..."
              rows="5"
              className="w-full p-3 bg-black text-white rounded focus:outline-none focus:ring-2 focus:ring-[#F44336]"
              required
            />
            <button
              type="submit"
              className="w-full py-3 flex justify-center items-center bg-[#F44336] text-white font-bold rounded hover:bg-red-600"
            >
              Send
              <div className='ms-2'>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
                  />
                </svg>
              </div>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
