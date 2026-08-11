import React, { useState } from "react";
import { motion } from "framer-motion";
import { Heart, Linkedin, Mail, X } from "lucide-react";

const teamMembers = [
  {
    name: "Sarthak Jalan",
    role: "Backend and ML Model Developer",
    image: "https://via.placeholder.com/150",
    linkedin: "#",
    email: "mailto:sarthak@example.com",
    bio: "Sarthak is responsible for building and deploying backend APIs and training AI models for intelligent task prioritization.",
  },
  {
    name: "Sanchari Mahanti",
    role: "Frontend Developer",
    image: "https://via.placeholder.com/150",
    linkedin: "www.linkedin.com/in/sanchari-mahanti-03201331b",
    email: "mailto:sanchari.mahanti@gmail.com",
    bio: "Sanchari crafts the user interface and ensures the frontend is sleek, responsive, and user-friendly.",
  },
  {
    name: "Akshara Bhargava",
    role: "Frontend Developer",
    image: "https://via.placeholder.com/150",
    linkedin: "#",
    email: "mailto:aksharabhargava6@gmail.com",
    bio: "Akshara designs and implements intuitive user flows to enhance user experience on the platform.",
  },
  {
    name: "Shubham Raj",
    role: "Backend and ML Model Developer",
    image: "https://via.placeholder.com/150",
    linkedin: "#",
    email: "mailto:shubham@example.com",
    bio: "Shubham works on backend integrations and improving machine learning model accuracy.",
  },
  {
    name: "Kartikey Bisht",
    role: "Backend and ML Model Developer",
    image: "https://via.placeholder.com/150",
    linkedin: "#",
    email: "mailto:kartikey@example.com",
    bio: "Kartikey manages databases and ensures seamless performance of data-driven systems.",
  },
];

const Team = () => {
  const [selectedMember, setSelectedMember] = useState(null);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white text-gray-800">
      <section className="bg-gradient-to-r from-[#17b978] to-[#086972] text-white py-24 px-6 text-center">
        <motion.h1
          className="text-5xl font-bold mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Meet the MedPrior Team
        </motion.h1>
        <motion.p
          className="text-lg max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          A passionate group of developers, designers, and innovators building intelligent prioritization with AI.
        </motion.p>
      </section>

      <section className="py-20 px-6 max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-[#071a52] mb-4">Our Core Contributors</h2>
          <p className="text-xl text-[#086972]">Collaborative. Creative. Committed.</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              onClick={() => setSelectedMember(member)}
              className="bg-white p-6 rounded-2xl shadow-xl border border-[#086972]/10 cursor-pointer hover:scale-[1.02] transition-all duration-300 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden border-4 border-[#17b978]/30">
                <img src={member.image} alt={member.name} className="object-cover w-full h-full" />
              </div>
              <h3 className="text-xl font-semibold text-[#071a52] mb-1">{member.name}</h3>
              <p className="text-[#086972] text-sm">{member.role}</p>
              <div className="mt-4 flex justify-center gap-4">
                <a href={member.linkedin} target="_blank" rel="noreferrer">
                  <Linkedin className="w-5 h-5 text-[#086972] hover:text-[#17b978] transition" />
                </a>
                <a href={member.email}>
                  <Mail className="w-5 h-5 text-[#086972] hover:text-[#17b978] transition" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Modal */}
      {selectedMember && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-2xl max-w-md w-full relative text-center">
            <button
              className="absolute top-4 right-4 text-gray-500 hover:text-red-500"
              onClick={() => setSelectedMember(null)}
            >
              <X className="w-6 h-6" />
            </button>
            <img
              src={selectedMember.image}
              alt={selectedMember.name}
              className="w-24 h-24 mx-auto rounded-full mb-4 border-4 border-[#17b978]/30"
            />
            <h3 className="text-2xl font-semibold text-[#071a52]">{selectedMember.name}</h3>
            <p className="text-[#086972] mb-4">{selectedMember.role}</p>
            <p className="text-gray-700 text-sm leading-relaxed">{selectedMember.bio}</p>
          </div>
        </div>
      )}

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

export default Team;