import React from 'react';
import { motion } from 'framer-motion';

const Research = () => {
  const projects = [
    {
      title: "Project 1: chatbot and its techniques",
      description: "effective for queries and structured tasks .",
    },
    {
      title: "Project 2: advantages and constraints of a hybrid model k-12 E- learning assistant chatbot",
      description: "enhanced learning outcomes and scalable educational support.",
    },
    {
      title: "Project 3: A conversation - Driven approach for chatbot management",
      description: "Better understanding of user needs and adaptability to changing contexts .",
    },
     {
      title: "Project 4: AI planning and scheduling in the medical hospital enviourment",
      description: "optimizing resource allocation and staff workload balancing .",
    },
     {
      title: "Project 5: Machine learning and medical appointment scheduling ",
      description: "Bias in data and algorithms also for resource allocation and scheduling .",
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-8 md:px-16 bg-gradient-to-b from-[#D6FFEC]/20 to-[#C2F9FF]/20 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-4xl font-bold text-center mb-12 text-[#071a52]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Research & Innovation
        </motion.h2>

        <motion.p
          className="text-xl text-center text-[#086972] max-w-2xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          Welcome to the research section. Here you’ll find details about our current projects and findings.
        </motion.p>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="relative p-6 rounded-2xl border border-white/30 shadow-lg backdrop-blur-2xl bg-white/60 hover:shadow-xl transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-semibold text-[#086972] mb-2">
                {project.title}
              </h3>
              <p className="text-[#071a52]">{project.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Research;