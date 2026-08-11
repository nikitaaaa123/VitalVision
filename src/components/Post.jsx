import React from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";

const blogContent = {
  "future-of-mental-health": {
    title: "The Future of Mental Health Tech",
    content: `
Mental health care is undergoing a digital revolution. From AI-powered therapy bots
and machine learning-based diagnostics to mood-tracking apps that can predict emotional
patterns, the landscape is evolving rapidly. MedPrior is contributing by using AI to
triage patient needs, personalize care experiences, and support therapists with real-time
data insights and recommendations.

Beyond clinical applications, mental health tech is reaching into everyday life. Smartwatches,
virtual assistants, and journaling apps are now capable of detecting signs of anxiety or
depression based on subtle behavior patterns. These systems provide interventions even before
a human clinician is involved, expanding the reach of mental wellness solutions.

The integration of teletherapy platforms, wearable tech, and AI also reduces the strain on
mental health systems. MedPrior’s model prioritizes urgent cases using predictive analytics,
allowing professionals to focus their time on patients who need immediate help.
    `,
  },
  "importance-of-mental-health": {
    title: "Why Prioritizing Mental Health Matters",
    content: `
Mental health isn't a luxury—it's essential. In a fast-paced world, prioritizing emotional
well-being helps us stay balanced, productive, and fulfilled. At MedPrior, we're building
tools that reduce barriers to care, provide early intervention, and empower users.

According to the World Health Organization, one in four people will experience a mental or
neurological disorder at some point in their lives. Despite this, stigma, cost, and lack of
access often prevent people from getting the help they need. By leveraging technology,
MedPrior is making it easier to seek help, track symptoms, and access relevant resources.

Mental wellness impacts everything from workplace productivity to academic performance to
personal relationships. With AI-powered insights, we can recognize early warning signs,
customize support, and ultimately create a culture where mental health is treated with the
same urgency and seriousness as physical health.
    `,
  },
  "data-privacy": {
    title: "How MedPrior Ensures Data Privacy",
    content: `
Privacy is at the heart of everything we do. Our platform uses end-to-end encryption,
anonymized data pipelines, and zero-trust architecture to ensure that your mental health data
remains confidential and secure.

MedPrior complies with all major data protection laws including HIPAA and GDPR. We implement
role-based access controls and multi-factor authentication to prevent unauthorized access.
User data is never sold or shared without consent, and users have full transparency over how
their information is used.

We also believe in privacy by design. Every feature in MedPrior is created with the user’s
confidentiality as a top priority. Regular audits, security reviews, and real-time monitoring
help us stay ahead of potential threats. Your trust is our mission, and we’re constantly
updating our infrastructure to meet and exceed industry standards.
    `,
  },
};

const Post = () => {
  const { id } = useParams();
  const post = blogContent[id];

  if (!post) {
    return (
      <div className="h-screen flex items-center justify-center text-red-600 text-lg font-medium">
        Blog post not found.
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white text-gray-800">
      {/* Header */}
      <section className="bg-gradient-to-r from-[#17b978] to-[#086972] text-white py-20 px-6 text-center">
        <motion.h1
          className="text-5xl font-bold mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          {post.title}
        </motion.h1>
        <p className="text-sm text-white/70">Published by MedPrior Insights</p>
      </section>

      {/* Content Section */}
      <section className="py-16 px-6 max-w-4xl mx-auto">
        <motion.div
          className="bg-white p-8 rounded-2xl shadow-lg border border-[#086972]/10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-lg text-[#086972] whitespace-pre-line leading-8">
            {post.content}
          </p>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="bg-[#071a52] text-white p-6 text-center">
        <p className="font-semibold">© 2025 VitalVision. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Post;
