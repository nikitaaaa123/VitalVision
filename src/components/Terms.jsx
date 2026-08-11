import React from 'react';
import { motion } from 'framer-motion';

const Terms = () => {
  const sections = [
    {
      title: "1. Acceptance of Terms",
      content: "By accessing or using the site, you agree to be bound by these Terms. If you disagree with any part, you may not access the service.",
    },
    {
      title: "2. Use of the Site",
      content: "You agree to use the site only for lawful purposes and in accordance with these Terms.",
    },
    {
      title: "3. Intellectual Property",
      content: "All content, features, and functionality on this site are owned by us and protected by copyright laws.",
    },
    {
      title: "4. Changes to Terms",
      content: "We reserve the right to modify or replace these Terms at any time. Changes will be posted on this page.",
    },
    {
      title: "5. Contact Us",
      content: (
        <>
          If you have any questions, please contact us at{' '}
          <a href="mailto:support@example.com" className="text-[#17b978] underline">
           contact@medcustomercare.com
          </a>.
        </>
      ),
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-8 md:px-16 bg-gradient-to-b from-[#D6FFEC]/20 to-[#C2F9FF]/20 min-h-screen">
      <div className="max-w-5xl mx-auto">
        <motion.h1
          className="text-4xl md:text-5xl font-bold text-center mb-10 text-[#071a52]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Terms of Service
        </motion.h1>

        <motion.p
          className="text-lg text-center text-[#086972] mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          Please read these Terms of Service ("Terms", "Terms of Service") carefully before using our website.
        </motion.p>

        <div className="space-y-10">
          {sections.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white/60 border border-white/30 shadow-lg backdrop-blur-2xl rounded-2xl p-6"
            >
              <h2 className="text-2xl font-semibold text-[#086972] mb-3">{section.title}</h2>
              <p className="text-[#071a52] leading-relaxed">{section.content}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Terms;