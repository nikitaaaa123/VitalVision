// src/components/About.jsx
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Heart } from "lucide-react";

const About = () => {
  const containerRef = useRef(null);

  // Optional: Scroll automatically to each section every 4s
  useEffect(() => {
    const pages = containerRef.current?.children || [];
    let index = 0;

    const scrollInterval = setInterval(() => {
      if (index < pages.length - 1) {
        index++;
        pages[index].scrollIntoView({ behavior: "smooth" });
      } else {
        clearInterval(scrollInterval); // Stop at the last section
      }
    }, 4000);

    return () => clearInterval(scrollInterval);
  }, []);

  return (
    <div
      ref={containerRef}
      className="h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth"
    >
      {/* About Us Page */}
      <section className="snap-start h-screen bg-gradient-to-r from-[#17b978] to-[#086972] text-white flex flex-col items-center justify-center px-6 text-center">
        <motion.h1
          className="text-5xl font-bold mb-4"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
        >
          About Us
        </motion.h1>
        <motion.p
          className="text-lg max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          MedPrior is a pioneering AI-based platform designed to optimize task prioritization across various sectors.
          We specialize in transforming how individuals and organizations handle task management by incorporating real-time
          analytics, machine learning, and intelligent automation. Our platform goes beyond basic to-do lists—it's a full-scale
          decision-making assistant that understands urgency, evaluates context, and continuously adapts to improve workflows.
          At our core, we believe that time is valuable, and managing it smartly is critical to success.
        </motion.p>
      </section>

      {/* Mission Page */}
      <section className="snap-start h-screen bg-white text-[#071a52] flex flex-col items-center justify-center px-6 text-center">
        <motion.h2
          className="text-4xl font-bold mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          Our Mission
        </motion.h2>
        <motion.p
          className="text-lg max-w-3xl text-[#086972]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
         Our mission is to empower businesses and individuals with AI-driven task intelligence that anticipates needs,
          minimizes inefficiencies, and supports high-stakes decision-making. We aim to eliminate the guesswork from
          prioritization by developing tools that assess risk, urgency, and impact in real-time. MedPrior is committed to
          advancing productivity through automation while keeping the user in control. We believe that smarter tools
          create smarter outcomes—and we're here to make that vision accessible and scalable for all.
        </motion.p>
      </section>

      {/* Vision Page */}
      <section className="snap-start h-screen bg-[#f0fdfa] text-[#071a52] flex flex-col items-center justify-center px-6 text-center">
        <motion.h2
          className="text-4xl font-bold mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          Our Vision
        </motion.h2>
        <motion.p
          className="text-lg max-w-3xl text-[#086972]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          We envision a future where intelligent prioritization becomes second nature to every workflow—whether in healthcare,
          education, logistics, or personal productivity. MedPrior strives to become the global leader in task intelligence,
          shaping how systems and people interact with time-sensitive challenges. Through constant innovation and user-centered
          design, we aspire to make AI a natural extension of every professional environment, improving not only efficiency but
          confidence and peace of mind in decision-making.
        </motion.p>
      </section>

      {/* Footer */}
      <footer className="snap-start h-fit bg-[#071a52] text-white p-6 text-center">
        <div className="flex justify-center items-center gap-2 mb-2">
          <Heart className="h-5 w-5 text-[#17b978]" />
          <span className="font-bold text-lg">VitalVision</span>
        </div>
        <p>© 2025 VitalVision. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default About;
