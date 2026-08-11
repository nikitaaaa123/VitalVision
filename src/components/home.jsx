import React, { useState, useEffect } from 'react';
import { motion } from "framer-motion";
import { Heart, Shield, Clock, Brain, MessageCircle, Activity, Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin, Menu, X, Sparkles, Users } from 'lucide-react';
import { Link } from "react-router-dom";


const Button = ({ children, className, size = "default", variant = "default", ...props }) => {
  const baseStyles = "inline-flex items-center justify-center rounded-lg font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50";
  const sizeStyles = {
    default: "h-10 px-4 py-2",
    sm: "h-9 px-3",
    lg: "h-11 px-8",
    icon: "h-10 w-10",
  };
  const variantStyles = {
    default: "bg-primary text-primary-foreground hover:bg-primary/90",
    outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
  };

  return (
    <button
      className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

const Home = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Features", href: "#features" },
    { name: "Our Team", href: "/Team" },
    { name: "Contact", href: "/Contact" }
  ];

  const features = [
    {
      icon: Brain,
      title: "AI Diagnostics Assistant",
      description: "Our diagnosis virtual assistant helps identify potential mental health concerns through intelligent assessment."
    },
    {
      icon: MessageCircle,
      title: "Therapy Support",
      description: "Access personalized therapy support 24/7 through our virtual assistant, offering guidance and coping strategies."
    },
    {
      icon: Heart,
      title: "Mental Wellness Tracking",
      description: "Monitor your mental well-being with our comprehensive tracking tools, helping you understand patterns."
    },
    {
      icon: Shield,
      title: "Secure & Confidential",
      description: "Your mental health journey is private. We ensure all interactions and data are protected with security."
    },
    {
      icon: Sparkles,
      title: "Meditation & Mindfulness",
      description: "Explore guided meditation sessions and mindfulness exercises designed to reduce stress and improve clarity."
    },
    {
      icon: Activity,
      title: "Daily Wellness Routines",
      description: "Build healthy habits with customized daily routines that support your mental health and overall well-being."
    }
  ];

  const stats = [
    { icon: Users, label: "Active Users", value: "10K+" },
    { icon: Shield, label: "Data Security", value: "HIPAA" },
    { icon: Clock, label: "Response Time", value: "24/7" },
  ];

  const footerLinks = {
    company: [
      { name: "About Us", href: "/About" },
      { name: "Our Team", href: "/Team" },
      { name: "Careers", href: "/Careers" },
      { name: "Contact", href: "/Contact" }
    ],
    resources: [
      { name: "Blog", href: "/Blog" },
      { name: "Research", href: "/Research" },
      { name: "Privacy Policy", href: "/Privacy" },
      { name: "Terms of Service", href: "/Terms" }
    ],
    contact: [
      { icon: MapPin, text: "123 Healthcare Ave, Medical District" },
      { icon: Mail, text: "contact@medcare.com" },
      { icon: Phone, text: "+1 (555) 123-4567" }
    ],
    social: [
      { icon: Facebook, href: "#" },
      { icon: Twitter, href: "#" },
      { icon: Instagram, href: "#" },
      { icon: Linkedin, href: "#" }
    ]
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Navigation */}
      <motion.header
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled ? "bg-white/60 backdrop-blur-xl shadow-sm border-b border-white/20" : "bg-transparent"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-9xl mx-auto px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <motion.div
              className="flex items-center space-x-2"
              whileHover={{ scale: 1.05 }}
            >
              <Heart className="h-6 w-6 text-[#17b978]" />
              <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#17b978] to-[#086972]">
                MedPrior
              </span>
            </motion.div>

            <nav className="hidden md:flex items-center space-x-4">
              {navLinks.map((link) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  className="px-4 py-2 text-[#071a52] hover:text-[#17b978] transition-colors relative group text-lg rounded-lg hover:bg-[#17b978]/5"
                  whileHover={{ scale: 1.05 }}
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-[#17b978] scale-x-0 group-hover:scale-x-100 transition-transform" />
                </motion.a>
              ))}
            </nav>

            <div className="flex items-center space-x-4">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className="hidden md:block"
              >
                <a
                  href="/login"
                  className="inline-flex items-center px-5 py-2.5 border-2 border-[#086972] rounded-full text-sm font-semibold text-[#086972] hover:bg-[#086972]/10 transition-all duration-200 backdrop-blur-lg whitespace-nowrap"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 14v8H4a8 8 0 0 1 8-8zm0-1c-3.315 0-6-2.685-6-6s2.685-6 6-6 6 2.685 6 6-2.685 6-6 6zm9 4h2v6h-2v-6z" />
                  </svg>
                  Sign In
                </a>
              </motion.div>
            </div>
          </div>
        </div>

        {mobileMenuOpen && (
          <motion.div
            className="md:hidden"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            <div className="px-6 py-4 space-y-3 bg-white/80 backdrop-blur-2xl shadow-lg border-t border-white/20">
              {navLinks.map((link) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  className="block px-4 py-2.5 text-[#071a52] hover:text-[#17b978] hover:bg-[#17b978]/5 rounded-lg transition-colors"
                  whileHover={{ x: 10 }}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </motion.a>
              ))}
              <div className="px-4 py-2.5">
                <Button className="w-full bg-[#17b978] hover:bg-[#17b978]/90 text-white shadow-lg shadow-[#17b978]/20">
                  Sign In
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </motion.header>

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 min-h-screen flex items-center">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-br from-[#D6FFEC]/30 to-[#C2F9FF]/30" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="mb-8"
              >
                <span className="inline-flex items-center rounded-full px-4 py-1 text-lg font-medium bg-[#17b978]/10 text-[#17b978] backdrop-blur-sm border border-[#17b978]/20">
                  Healthcare Reimagined
                </span>
              </motion.div>

              <motion.h1
                className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#17b978] to-[#086972]">
                  Modern Healthcare
                </span>
                <br />
                <span className="text-[#071a52]">Platform for Everyone</span>
              </motion.h1>

              <motion.p
                className="text-xl text-[#086972] max-w-2xl mb-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
              >
                Experience healthcare delivery reimagined for the digital age.
                Seamless appointments, secure communications, and personalized care plans.
              </motion.p>

              <motion.div
                className="flex flex-wrap gap-6 mb-16"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
              >
                <Link to="/login">
                <Button
                  size="lg"
                  className="group bg-[#17b978] hover:bg-[#17b978]/90 text-white px-8 py-6 text-lg"
                >
                  Get Started
                  <motion.span
                    className="ml-2 inline-block"
                    whileHover={{ x: 5 }}
                  >
                    →
                  </motion.span>
                </Button>
                </Link>
                <Link to="/About">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-[#086972] text-[#086972] hover:bg-[#C2F9FF]/20 backdrop-blur-2xl px-8 py-6 text-lg"
                >
                  Learn More
                </Button>
                </Link>
              </motion.div>

              <div className="grid grid-cols-3 gap-8">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    className="text-center bg-white/50 backdrop-blur-2xl p-6 rounded-xl border border-white/20 shadow-lg"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 + index * 0.1, duration: 0.5 }}
                  >
                    <div className="flex justify-center mb-3">
                      <stat.icon className="h-6 w-6 text-[#17b978]" />
                    </div>
                    <div className="font-semibold text-2xl text-[#071a52] mb-1">{stat.value}</div>
                    <div className="text-sm text-[#086972]">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right column with illustration */}
            <motion.div
              className="relative hidden lg:block"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <div className="relative w-full aspect-square">
                <div className="absolute inset-0 bg-gradient-to-br from-[#D6FFEC]/40 to-[#C2F9FF]/20 rounded-full blur-3xl" />
                <div className="relative bg-white/30 backdrop-blur-2xl rounded-3xl p-8 shadow-xl border border-white/20">
                  <svg className="w-full h-full" viewBox="0 0 800 600" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                      <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" style={{stopColor:"#D6FFEC", stopOpacity:0.3}}/>
                        <stop offset="100%" style={{stopColor:"#C2F9FF", stopOpacity:0.3}}/>
                      </linearGradient>
                    </defs>
                    
                    <circle cx="400" cy="300" r="250" fill="url(#bgGrad)" opacity="0.5"/>
                    <circle cx="400" cy="300" r="200" fill="white" opacity="0.3"/>
                    
                    <g transform="translate(350,250)">
                    <rect x="-15" y="-40" width="30" height="80" rx="4" fill="#17b978"/>
                      <rect x="-40" y="-15" width="80" height="30" rx="4" fill="#17b978"/>
                    </g>
                    
                    <circle cx="400" cy="300" r="180" fill="none" stroke="#086972" strokeWidth="8" opacity="0.2"/>
                    
                    <path d="M250,300 L320,300 L350,250 L380,350 L410,250 L440,350 L470,300 L550,300" 
                          fill="none" stroke="#17b978" strokeWidth="6" strokeLinecap="round"/>
                    
                    <g fill="#086972" opacity="0.1">
                      <circle cx="200" cy="150" r="5"/>
                      <circle cx="600" cy="150" r="5"/>
                      <circle cx="200" cy="450" r="5"/>
                      <circle cx="600" cy="450" r="5"/>
                    </g>
                    
                    <g transform="translate(400,300)" fill="none" stroke="#086972" strokeWidth="2">
                      <circle cx="0" cy="0" r="140" opacity="0.1"/>
                      <circle cx="0" cy="0" r="100" opacity="0.2"/>
                    </g>
                    
                    <path d="M400,200 L460,220 L460,280 C460,340 430,380 400,400 C370,380 340,340 340,280 L340,220 Z" 
                          fill="none" stroke="#17b978" strokeWidth="4" opacity="0.5"/>
                  </svg>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#D6FFEC]/20 to-[#C2F9FF]/20 backdrop-blur-2xl" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            className="text-center mb-24"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <span className="text-[#17b978] text-lg font-semibold tracking-wider uppercase block mb-4">
              Our Services
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-[#071a52] mb-6">
              Comprehensive Mental Health Support
            </h2>
            <p className="text-xl text-[#086972] max-w-2xl mx-auto">
              Experience a holistic approach to mental wellness with our innovative features
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="group relative"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#D6FFEC]/30 to-[#C2F9FF]/30 rounded-2xl transform transition-transform group-hover:scale-105" />
                <div className="relative p-8 backdrop-blur-2xl rounded-2xl border border-white/30 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="w-12 h-12 rounded-xl bg-[#17b978]/10 flex items-center justify-center mb-6 group-hover:bg-[#17b978]/20 transition-colors">
                    <feature.icon className="w-6 h-6 text-[#17b978]" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-[#071a52]">{feature.title}</h3>
                  <p className="text-[#086972] leading-relaxed">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-b from-white to-[#071a52]/5 pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            <div className="space-y-6">
              <motion.div
                className="flex items-center space-x-2 mb-6"
                whileHover={{ scale: 1.05 }}
              >
                <Heart className="h-6 w-6 text-[#17b978]" />
                <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#17b978] to-[#086972]">
                  VitalVision
                </span>
              </motion.div>
              <p className="text-[#086972] max-w-xs mb-6">
                Empowering healthcare through innovative technology and compassionate service.
              </p>
              <div className="flex space-x-4">
                {footerLinks.social.map((item, index) => (
                  <motion.a
                    key={index}
                    href={item.href}
                    className="text-[#071a52] hover:text-[#17b978] transition-colors"
                    whileHover={{ scale: 1.1 }}
                  >
                    <item.icon className="h-5 w-5" />
                  </motion.a>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-[#071a52] mb-6">Company</h3>
              <ul className="space-y-3">
                {footerLinks.company.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-[#086972] hover:text-[#17b978] transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-[#071a52] mb-6">Resources</h3>
              <ul className="space-y-3">
                {footerLinks.resources.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-[#086972] hover:text-[#17b978] transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-[#071a52] mb-6">Contact Us</h3>
              <ul className="space-y-4">
                {footerLinks.contact.map((item, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <item.icon className="h-5 w-5 text-[#17b978] mt-1" />
                    <span className="text-[#086972]">{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-16 pt-8 border-t border-[#071a52]/10">
            <p className="text-center text-[#086972]">
              © {new Date().getFullYear()} VitalVision. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;