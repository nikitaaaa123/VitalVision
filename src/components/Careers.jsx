import React from "react";
import { motion } from "framer-motion";
import { Heart, Briefcase, UserPlus, Lightbulb, Code2, ShieldCheck, Database, Wand2 } from "lucide-react";

const jobOpenings = [
  { title: "Frontend Developer", type: "Full-Time", location: "Remote", icon: Code2 },
  { title: "Backend Developer", type: "Full-Time", location: "Remote", icon: Database },
  { title: "UI/UX Designer", type: "Part-Time", location: "Hybrid", icon: UserPlus },
  { title: "Marketing Specialist", type: "Contract", location: "On-Site", icon: Lightbulb },
  { title: "Data Scientist", type: "Full-Time", location: "Remote", icon: Wand2 },
  { title: "Cybersecurity Analyst", type: "Full-Time", location: "Hybrid", icon: ShieldCheck },
];

const Careers = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white text-gray-800">
      {/* Header Section */}
      <section className="bg-gradient-to-r from-[#17b978] to-[#086972] text-white py-24 px-6 text-center">
        <motion.h1
          className="text-5xl font-bold mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Join the MedPrior Team
        </motion.h1>
        <motion.p
          className="text-lg max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          Be part of a revolutionary mission in intelligent healthcare and AI innovation.
        </motion.p>
      </section>

      {/* Job Listings */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-[#071a52] mb-4">Open Positions</h2>
          <p className="text-xl text-[#086972]">Explore exciting opportunities to grow with us.</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {jobOpenings.map((job, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-2xl border border-[#086972]/10 shadow-md hover:shadow-xl transition duration-300 text-left"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 rounded-full bg-[#17b978]/10 text-[#17b978]">
                  <job.icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#071a52]">{job.title}</h3>
                  <p className="text-sm text-[#086972]">{job.type} • {job.location}</p>
                </div>
              </div>
              <p className="text-sm text-gray-600 mb-4">
                Join our growing team as a {job.title.toLowerCase()} and help shape the future of AI-powered healthcare.
              </p>
              <a
                href="#"
                className="inline-block text-[#086972] font-semibold hover:text-[#17b978] transition-colors"
              >
                Apply Now →
              </a>
            </motion.div>
          ))}
        </div>
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

export default Careers;
