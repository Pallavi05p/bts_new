import React, { useState } from 'react';
import { LuMapPin } from "react-icons/lu";
import { BsTelephone } from "react-icons/bs";
import { TfiEmail } from "react-icons/tfi";

const Contactform = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contact: '',
    message: '',
  });

  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const res = await fetch('https://bts-contactus.onrender.com/bts/gitIntouch/add', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', contact: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (err) {
      console.error(err);
      setStatus('error');
    }
  };

  return (
    <div className="bg-black text-white py-16 px-6 md:px-28 flex flex-col md:flex-row gap-10 items-start justify-between max-w-[100vw]">
      {/* Left - Contact Info */}
      <div className="md:w-1/2 space-y-6">
        <h2 className="text-4xl font-semibold font-kumbh">Let's talk with us</h2>
        <p className="text-[#D9D9D9] font-dmsans whitespace-nowrap">
          Questions, comments, or suggestions? Simply fill in<br /> the form and we’ll be in touch shortly.
        </p>
        <div className="space-y-3">
          <div className="flex items-start gap-2 font-dmsans">
            <LuMapPin className="text-blue-500 w-6 h-6" />
            <p className="text-[#D9D9D9]">
              Golden City Center, Near Prozon Mall<br />
              Chhatrapati Sambhajinagar, 431001
            </p>
          </div>
          <div className="flex items-start gap-2 font-dmsans text-semibold">
            <BsTelephone className="text-blue-500 w-6 h-6" />
            <p>+1 234 678 9108 99</p>
          </div>
          <div className="flex items-center gap-2 font-dmsans text-semibold">
            <TfiEmail className="text-blue-500 w-6 h-6" />
            <p>Contact@bts.com</p>
          </div>
        </div>
      </div>

      {/* Right - Form */}
      <form
        onSubmit={handleSubmit}
        className="bg-white rounded-lg p-6 md:p-8 w-full md:w-3/6 text-black shadow-lg"
      >
        <div className="flex flex-col md:flex-row gap-4 mb-4">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Name*"
            required
            className="border border-gray-300 focus:border-blue-500 focus:outline-none px-4 py-2 rounded w-full"
          />
        </div>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email*"
          required
          className="border border-gray-300 focus:border-blue-500 focus:outline-none px-4 py-2 rounded w-full mb-4"
        />
        <input
          type="tel"
          name="contact"
          value={formData.contact}
          onChange={handleChange}
          placeholder="Phone Number*"
          required
          className="border border-gray-300 focus:border-blue-500 focus:outline-none px-4 py-2 rounded w-full mb-4"
        />
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Your message..."
          required
          className="border border-gray-300 focus:border-blue-500 focus:outline-none px-4 py-2 rounded w-full h-28 mb-4 resize-none"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-6 py-2 rounded-full w-full hover:bg-blue-600"
        >
          Send Message
        </button>

        {status === 'loading' && (
          <p className="text-sm text-gray-500 mt-2">Sending...</p>
        )}
        {status === 'success' && (
          <p className="text-sm text-green-600 mt-2">Message sent successfully!</p>
        )}
        {status === 'error' && (
          <p className="text-sm text-red-500 mt-2">Failed to send. Please try again.</p>
        )}
      </form>
    </div>
  );
};

export default Contactform;
