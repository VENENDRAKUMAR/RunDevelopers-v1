"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { 
  ShieldCheck, 
  Gavel, 
  Scale, 
  FileCheck, 
  MapPin, 
  AlertTriangle, 
  Handshake, 
  Copyright 
} from 'lucide-react';

const TermsAndConditions = () => {
  const termsContent = [
    { 
      title: "Artistic Impressions", 
      desc: "All 3D renders, walkthroughs, and elevation images are artistic impressions meant to provide an indicative view of the project. Final specifications will strictly adhere to the registered 'Agreement for Sale'.", 
      icon: <MapPin className="w-8 h-8 text-blue-500" />,
      size: "md:col-span-2" 
    },
    { 
      title: "Intellectual Property", 
      desc: "All logos, architectural designs, and digital content on this site are the exclusive property of Run Developers. Unauthorized reproduction or use is strictly prohibited under IP laws.", 
      icon: <Copyright className="w-8 h-8 text-red-500" />,
      size: "md:col-span-1" 
    },
    { 
      title: "Pricing & Availability", 
      desc: "Property prices and unit availability are dynamic and subject to change without prior notice. A booking is only considered formal upon the issuance of a signed receipt after the token amount is processed.", 
      icon: <Scale className="text-purple-500 w-8 h-8" />,
      size: "md:col-span-1" 
    },
    { 
      title: "RERA Compliance", 
      desc: "Run Developers operates in full compliance with the Real Estate Regulatory Authority. Users are encouraged to verify individual project registration numbers on the official RERA state portal.", 
      icon: <ShieldCheck className="w-8 h-8 text-emerald-500" />,
      size: "md:col-span-2" 
    },
    { 
      title: "Disclaimer of Liability", 
      desc: "While we strive for accuracy, Run Developers is not liable for any discrepancies arising from third-party links or technical errors on the website. Physical site visits are recommended for final verification.", 
      icon: <AlertTriangle className="w-8 h-8 text-amber-500" />,
      size: "md:col-span-1" 
    },
    { 
      title: "Legal Jurisdiction", 
      desc: "These terms are governed by the laws of India. Any disputes or legal proceedings shall be subject to the exclusive jurisdiction of the courts where the specific project is officially registered.", 
      icon: <FileCheck className="w-8 h-8 text-blue-500" />,
      size: "md:col-span-2" 
    }
  ];

  return (
    <div className="bg-[#f1f1f1]  min-h-screen py-24 px-6 font-sans selection:bg-blue-500/40">
      <div className="max-w-6xl mx-auto">
  
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-24"
        >
          <span className="text-blue-500 uppercase tracking-[0.4em] text-sm  block mb-4">Run Developers</span>
          <h1 className="text-6xl md:text-8xl  tracking-tight mb-6 bg-gradient-to-b from-black  to-blue-200 bg-clip-text text-transparent italic">
            TERMS <span className="not-italic ">&</span> CONDITIONS<span className="not-italic text-blue-500">.</span>
          </h1>
          <p className="text-gray-500 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed font-light">
            Defining a transparent and legally sound partnership between our architectural vision and your investment.
          </p>
        </motion.div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {termsContent.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.02 }}
              className={`${item.size} group relative bg-[#ffffff] border border-white/5 p-10 rounded-[2.5rem] overflow-hidden hover:border-blue-500/30 transition-all`}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <div className="mb-6 p-4 w-fit rounded-2xl bg-white/5 border border-white/10 group-hover:bg-blue-500/10 group-hover:border-blue-500/20 transition-colors">
                  {item.icon}
                </div>
                <h3 className="text-2xl  mb-4 tracking-tight">{item.title}</h3>
                <p className=" leading-relaxed font-light text-sm md:text-base">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Contact Footer */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-20 py-12 px-8 rounded-[3rem] bg-gradient-to-r from-blue-600/10 to-purple-600/10 border border-white/5 text-center backdrop-blur-3xl"
        >
          <Handshake className="w-12 h-12 text-blue-500 mx-auto mb-6" />
          <p className="text-black text-lg">For detailed legal inquiries or compliance documentation, contact us at:</p>
          <a href="mailto:abdulahadk104@gmail.com" className="text-2xl font-bold text-blue-400 hover:text-blue-300 transition-colors block mt-2">
            abdulahadk104@gmail.com
          </a>
          <p className="mt-6 text-gray-500 text-sm italic">© 2026 Run Developers. All Rights Reserved.</p>
        </motion.div>
      </div>
    </div>
  );
};

export default TermsAndConditions;