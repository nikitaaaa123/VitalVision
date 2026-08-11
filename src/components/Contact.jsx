import React, { useState } from "react";
import { motion } from "framer-motion";
import { Heart, Mail, Phone, MapPin, Send } from "lucide-react";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white text-gray-800">
      {/* Header Section */}
      <section className="bg-gradient-to-r from-[#17b978] to-[#086972] text-white py-24 px-6 text-center">
        <motion.h1
          className="text-5xl font-bold mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Connect With Us
        </motion.h1>
        <motion.p
          className="text-lg max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          Have a question or feedback? Drop us a message and we’ll respond promptly.
        </motion.p>
      </section>

      {/* Contact Info + Form */}
      <section className="py-20 px-6 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
        {/* Contact Info */}
        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-semibold text-[#071a52] mb-4">Reach Out</h2>
          <p className="text-[#086972]">
            Whether it's product support, partnership inquiries, or general questions—we're here to listen and help.
          </p>

          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <MapPin className="text-[#17b978]" />
              <span>123 Healthcare Ave, Medical District</span>
            </div>
            <div className="flex items-center space-x-3">
              <Phone className="text-[#17b978]" />
              <span>+1 (555) 123-4567</span>
            </div>
            <div className="flex items-center space-x-3">
              <Mail className="text-[#17b978]" />
              <span>contact@vitalvision.com</span>
            </div>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.form
          className="space-y-6 bg-white p-8 rounded-2xl shadow-xl border border-[#086972]/10"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          onSubmit={handleSubmit}
        >
          <div>
            <label className="block text-[#071a52] font-semibold mb-1">Your Name</label>
            <input
              type="text"
              className="w-full border border-[#17b978]/30 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#17b978]"
              placeholder="Jane Doe"
              required
            />
          </div>
          <div>
            <label className="block text-[#071a52] font-semibold mb-1">Your Email</label>
            <input
              type="email"
              className="w-full border border-[#17b978]/30 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#17b978]"
              placeholder="jane@example.com"
              required
            />
          </div>
          <div>
            <label className="block text-[#071a52] font-semibold mb-1">Message</label>
            <textarea
              rows="5"
              className="w-full border border-[#17b978]/30 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#17b978]"
              placeholder="Let us know how we can help..."
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="flex items-center justify-center gap-2 w-full bg-[#17b978] hover:bg-[#17b978]/90 text-white py-3 rounded-lg font-semibold transition-all"
          >
            <Send className="w-4 h-4" /> Send Message
          </button>
          {submitted && (
            <p className="text-green-600 text-sm text-center mt-2">Thank you! We'll be in touch shortly.</p>
          )}
        </motion.form>
      </section>

      {/* Footer */}
      <footer className="bg-[#071a52] text-white p-6 text-center">
        <div className="flex justify-center items-center gap-2 mb-2">
          <Heart className="h-5 w-5 text-[#17b978]" />
          <span className="font-bold text-lg">VitalVision</span>
        </div>
        <p>© 2025 VitalVision. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Contact;
