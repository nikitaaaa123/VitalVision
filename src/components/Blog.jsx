import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Blog = () => {
  const blogPosts = [
    {
      id: "future-of-mental-health",
      title: "The Future of Mental Health Tech",
      summary: "Explore how AI and digital platforms are transforming mental healthcare.",
    },
    {
      id: "importance-of-mental-health",
      title: "Why Prioritizing Mental Health Matters",
      summary: "Understanding the growing need for accessible mental health services.",
    },
    {
      id: "data-privacy",
      title: "How MedPrior Ensures Data Privacy",
      summary: "A look at the security practices behind our platform.",
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
          From Our Blog
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl transition-shadow backdrop-blur-2xl border border-white/30"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold text-[#086972] mb-3">
                {post.title}
              </h3>
              <p className="text-[#071a52] mb-4">{post.summary}</p>
              <Link
                to={`/blog/${post.id}`}
                className="text-[#17b978] font-medium hover:underline"
              >
                Read more →
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;