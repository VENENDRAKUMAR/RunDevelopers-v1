"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Lock, Eye, Scale, FileText, Fingerprint } from 'lucide-react';

const PolicyCard = ({ title, content, icon, index, span }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: index * 0.1 }}
    viewport={{ once: true }}
    whileHover={{ y: -5 }}
    className={`${span} relative group p-8 rounded-[2.5rem] bg-white border border-slate-100 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_60px_-20px_rgba(0,0,0,0.1)] transition-all duration-500 overflow-hidden`}
  >
    {/* Subtle Gradient Glow */}
    <div className="absolute -right-10 -top-10 w-32 h-32 bg-blue-50/50 rounded-full blur-3xl group-hover:bg-blue-100 transition-colors" />
    
    <div className="relative z-10">
      <div className="mb-6 w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center text-blue-600 group-hover:scale-110 transition-transform duration-500">
        {icon}
      </div>
      <h3 className="text-2xl font-bold text-slate-900 mb-4 tracking-tight">
        {title}
      </h3>
      <p className="text-slate-500 leading-relaxed font-medium text-balance">
        {content}
      </p>
    </div>
  </motion.div>
);

export default function PrivacyPage() {
  const policies = [
    { 
      title: "Data Integrity & RERA", 
      content: "As a standard-setting real estate firm, Run Developers aligns every data touchpoint with RERA transparency norms. Your inquiries are strictly used to facilitate legitimate project disclosures and legal compliance.",
      icon: <ShieldCheck size={28} />,
      span: "md:col-span-2"
    },
    { 
      title: "Encrypted Security", 
      content: "We utilize 256-bit SSL encryption. Your personal information is treated with the same structural integrity we apply to our premium constructions.",
      icon: <Lock size={28} />,
      span: "md:col-span-1"
    },
    { 
      title: "Privacy First", 
      content: "No third-party leaks. No spam. Your contact details are stored in a vault, accessible only to our authorized relationship managers.",
      icon: <Eye size={28} />,
      span: "md:col-span-1"
    },
    { 
      title: "Digital Compliance", 
      content: "Our platform uses refined cookies to optimize your browsing experience and remember your property preferences without compromising your digital identity.",
      icon: <Fingerprint size={28} />,
      span: "md:col-span-2"
    }
  ];

  return (
    <section className="bg-[#fcfcfd] min-h-screen py-24 px-6 font-sans">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-20"
        >
          <span className="text-blue-600 font-bold tracking-[0.2em] text-sm uppercase mb-4 block">Trust & Transparency</span>
          <h1 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tighter mb-6">
            Privacy <span className="text-slate-400">Policy.</span>
          </h1>
          <p className="text-lg text-slate-500 max-w-xl font-medium leading-relaxed">
            At Run Developers, we build more than just structures; we build trust through absolute data protection.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {policies.map((p, i) => (
            <PolicyCard 
              key={i} 
              index={i}
              title={p.title} 
              content={p.content} 
              icon={p.icon}
              span={p.span}
            />
          ))}
        </div>

        {/* Footer Luxury Note */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="p-12 rounded-[3rem] bg-slate-900 text-white flex flex-col md:flex-row items-center justify-between gap-8"
        >
          <div className="text-center md:text-left">
            <h4 className="text-2xl font-bold mb-2">Legal Queries?</h4>
            <p className="text-slate-400">Connect with our compliance team for any clarifications.</p>
          </div>
          <a 
            href="mailto:legal@rundevlopers.com" 
            className="px-10 py-4 bg-blue-600 hover:bg-blue-500 rounded-2xl font-bold transition-all shadow-lg shadow-blue-900/20"
          >
abdulahadk104@gmail.com
          </a>
        </motion.div>
      </div>
    </section>
  );
}