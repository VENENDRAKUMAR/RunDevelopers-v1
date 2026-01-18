"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { CertificationsSection } from '@/components/certifications-section';
import { ShieldCheck, Lock, Eye, Scale, FileText, Bell } from 'lucide-react'; // icons ke liye

const LegalPages = ({ type }) => {
  const isPrivacy = type === 'privacy';

  // Solid & Professional Content
  const content = isPrivacy ? {
    title: "Privacy",
    highlight: "Policy",
    subtitle: "At Run Developers, your data privacy is our structural foundation.",
    items: [
      { t: "Information Integrity", d: "We collect precise data (Name, Contact, Interests) solely to enhance your property search experience. No fluff, just facts.", icon: <ShieldCheck className="text-blue-500" /> },
      { t: "Encryption Standards", d: "Every byte of your information is shielded with enterprise-grade SSL encryption. Your privacy isn't just a policy; it's a promise.", icon: <Lock className="text-purple-500" /> },
      { t: "Zero Leakage Policy", d: "Run Developers strictly prohibits the sale or trade of client databases to third-party telemarketers. Your number stays private.", icon: <Eye className="text-emerald-500" /> },
      { t: "Digital Footprints", d: "We use cookies only to remember your project filters and provide a seamless return experience to our portal.", icon: <FileText className="text-orange-500" /> }
    ]
  } : {
    title: "Terms of",
    highlight: "Service",
    subtitle: "Legal framework ensuring transparency between Run Developers and you.",
    items: [
      { t: "Authentic Representation", d: "All project renders and floor plans are representational as per RERA guidelines. Final specs will align with the Allotment Letter.", icon: <Scale className="text-blue-500" /> },
      { t: "Intellectual Assets", d: "The 'Run Developers' brand, logos, and digital architectural assets are protected. Unauthorized replication is strictly prohibited.", icon: <ShieldCheck className="text-red-500" /> },
      { t: "Dynamic Pricing", d: "Real estate markets shift; therefore, unit availability and pricing are subject to real-time updates until the booking is confirmed.", icon: <Bell className="text-yellow-500" /> },
      { t: "Dispute Resolution", d: "All transactions and interactions are governed by the laws of India and subject to local jurisdiction for maximum transparency.", icon: <FileText className="text-indigo-500" /> }
    ]
  };

  return (
    <div className="min-h-screen bg-[#ffffff]  selection:bg-blue-500/30 font-sans">
      <div className="py-24 px-6 max-w-7xl mx-auto">
        
        {/* Animated Header */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h1 className="text-7xl md:text-4xl  tracking-tighter uppercase mb-4">
            {content.title} <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-blue-600">{content.highlight}</span>
          </h1>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed">
            {content.subtitle}
          </p>
        </motion.div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-20">
          {content.items.map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ y: -10 }}
              transition={{ delay: i * 0.1 }}
              className={`p-8 rounded-[2rem] border border-white/5 bg-[#f4f4f4] flex flex-col justify-between hover:bg-[#161616] hover:border-blue-500/50 transition-all duration-500 ${i === 0 || i === 3 ? 'md:col-span-2' : 'md:col-span-1'}`}
            >
              <div className="mb-12 h-12 w-12 rounded-2xl bg-white flex items-center justify-center border border-white/10">
                {item.icon}
              </div>
              <div>
                <h4 className="text-2xl font-bold mb-3 tracking-tight text-white">{item.t}</h4>
                <p className="text-gray-500 text-sm leading-relaxed">{item.d}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certifications Section with extra spacing */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-32 pt-20 border-t border-white/5"
        >
          <CertificationsSection />
        </motion.div>

        {/* Footer Quick Action */}
        <div className="mt-20 text-center">
            <p className="text-gray-600 text-sm italic">Last updated: January 2026 • Run Developers Legal Team</p>
        </div>
      </div>
    </div>
  );
};

export default LegalPages;