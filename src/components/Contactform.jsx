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
        <p className="text-white font-dmsans">
          Questions, comments, or suggestions? Simply fill in the form and we’ll be in touch shortly.
        </p>

        <div className="space-y-4">
          {/* Address */}
          <div className="flex items-start gap-3 ">
            <LuMapPin className="text-blue-500 w-6 h-6 mt-1" />
            <a
              href="https://maps.app.goo.gl/7tCBz8qgqSt5mqUg7"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline text-white"
            >
              Khinavasara August Heighstreet, Office No. F-12,<br />
              Ulkanagari, Garkheda,<br />
              Chh. Sambhajinagar 431001
            </a>
          </div>

          {/* Phone numbers */}
          <div className="flex items-start gap-3">
            <BsTelephone className="text-blue-500 w-5 h-5 mt-1 " />
            <div>
              <a href="tel:9284979500" className="block text-white hover:underline">9284979500</a>
              <a href="tel:7741009500" className="block text-white hover:underline">7741009500</a>
            </div>
          </div>

          {/* Email */}
          <div className="flex items-start gap-3">
            <TfiEmail className="text-blue-500 w-5 h-5 mt-1" />
            <a href="mailto:marketing@btsadvertising.in" className="hover:underline text-white">
              marketing@btsadvertising.in
            </a>
          </div>
        </div>
      </div>

      {/* Right - Contact Form */}
      <form
        onSubmit={handleSubmit}
        className="bg-white rounded-lg p-6 md:p-8 w-full md:w-3/6 text-black shadow-lg"
      >
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Name*"
          required
          className="border border-gray-300 focus:border-blue-500 focus:outline-none px-4 py-2 rounded w-full mb-4"
        />
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

        {status === 'loading' && <p className="text-sm text-gray-500 mt-2">Sending...</p>}
        {status === 'success' && <p className="text-sm text-green-600 mt-2">Message sent successfully!</p>}
        {status === 'error' && <p className="text-sm text-red-500 mt-2">Failed to send. Please try again.</p>}
      </form>
    </div>
  );
};

export default Contactform;
