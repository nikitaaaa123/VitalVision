import React from 'react';
import { motion } from 'framer-motion';

const PrivacyPolicy = () => {
  return (
    <section className="py-20 px-4 sm:px-8 md:px-16 bg-gradient-to-b from-[#D6FFEC]/20 to-[#C2F9FF]/20 min-h-screen">
      <div className="max-w-5xl mx-auto">
        <motion.h1
          className="text-4xl md:text-5xl font-bold text-center mb-10 text-[#071a52]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Privacy Policy
        </motion.h1>

        <motion.p
          className="text-lg text-[#086972] text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          Your privacy is important to us. This Privacy Policy outlines how we collect, use, and protect your information.
        </motion.p>

        <div className="space-y-10">
          {[
            {
              title: "Information We Collect",
              body: "We may collect personal information such as your name, email address, and usage data when you interact with our website.",
            },
            {
              title: "How We Use Your Information",
              body: "The data collected is used to improve user experience, provide customer support, and ensure security.",
            },
            {
              title: "Data Protection",
              body: "We take appropriate measures to protect your data against unauthorized access or disclosure.",
            },
            {
              title: "Contact Us",
              body: (
                <>
                  If you have any questions about this Privacy Policy, please contact us at{' '}
                  <a href="mailto:contact@example.com" className="text-[#17b978] underline">
                    contact@medcustomercare.com
                  </a>.
                </>
              ),
            },
          ].map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white/60 border border-white/30 shadow-lg backdrop-blur-2xl rounded-2xl p-6"
            >
              <h2 className="text-2xl font-semibold text-[#086972] mb-3">{section.title}</h2>
              <p className="text-[#071a52] leading-relaxed">{section.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PrivacyPolicy;