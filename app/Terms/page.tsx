"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Lock, Fingerprint, EyeOff, Gavel, Scale, FileCheck, MapPin } from 'lucide-react';

const LegalPage = ({ type = 'privacy' }) => {
  const isPrivacy = type === 'privacy';

  const privacyContent = [
    { 
      title: "Data Sovereignty", 
      desc: "We prioritize your privacy by implementing high-end 256-bit encryption. Your personal details are treated as digital assets, protected under strict security protocols.", 
      icon: <Fingerprint className="w-8 h-8 text-blue-500" />,
      size: "md:col-span-2" 
    },
    { 
      title: "RERA Transparency", 
      desc: "Every lead captured is processed in alignment with RERA's data handling guidelines for real estate transparency.", 
      icon: <Shield className="w-8 h-8 text-emerald-500" />,
      size: "md:col-span-1" 
    },
    { 
      title: "Zero Third-Party Sharing", 
      desc: "Run Developers guarantees that your contact information will never be sold, leased, or shared with external marketing agencies or unauthorized brokers.", 
      icon: <EyeOff className="w-8 h-8 text-purple-500" />,
      size: "md:col-span-1" 
    },
    { 
      title: "Automated Precision", 
      desc: "We utilize cookies and site metrics only to refine your property search experience, ensuring you see projects that match your lifestyle and investment goals.", 
      icon: <Lock className="w-8 h-8 text-amber-500" />,
      size: "md:col-span-2" 
    }
  ];

  const termsContent = [
    { 
      title: "Visual Representation", 
      desc: "3D renders, walkthroughs, and elevation images are artistic impressions. Final project specifications will strictly follow the signed Agreement for Sale.", 
      icon: <MapPin className="w-8 h-8 text-blue-500" />,
      size: "md:col-span-2" 
    },
    { 
      title: "IP Protection", 
      desc: "All architectural designs, logos, and digital assets of Run Developers are protected under Intellectual Property laws. Unauthorized use is strictly prohibited.", 
      icon: <Gavel className="w-8 h-8 text-red-500" />,
      size: "md:col-span-1" 
    },
    { 
      title: "Market Dynamics", 
      desc: "Property availability and pricing are dynamic and subject to change until a formal token amount is processed and a booking receipt is generated.", 
      icon: <Scale className="text-purple-500 w-8 h-8" />,
      size: "md:col-span-1" 
    },
    { 
      title: "Legal Jurisdiction", 
      desc: "Any disputes or legal inquiries arising from website interactions are subject to the local courts where the specific project is registered under RERA.", 
      icon: <FileCheck className="w-8 h-8 text-emerald-500" />,
      size: "md:col-span-2" 
    }
  ];

  const activeData = isPrivacy ? privacyContent : termsContent;

  return (
    <div className="bg-[#e9e9e9] text-white min-h-screen py-24 px-6 font-sans selection:bg-blue-500/40">
      <div className="max-w-6xl mx-auto">
        
        {/* Animated Hero Header */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-24"
        >
          <span className="text-blue-500 uppercase tracking-[0.4em] text-sm font-bold block mb-4">Run Developers</span>
          <h1 className="text-6xl md:text-8xl font-black tracking-tight mb-6 bg-gradient-to-b from-white to-white/40 bg-clip-text text-transparent italic">
            {isPrivacy ? "PRIVACY" : "TERMS"} <span className="not-italic text-white">.</span>
          </h1>
          <p className="text-gray-500 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed font-light">
            {isPrivacy 
              ? "Protecting your digital footprint with the same integrity we use to build your homes." 
              : "Ensuring a transparent and legally sound partnership between our vision and your investment."}
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {activeData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.02 }}
              className={`${item.size} group relative bg-[#ffffff] border border-white/5 p-10 rounded-[2.5rem] overflow-hidden hover:border-blue-500/30 transition-all`}
            >
              {/* Subtle Gradient Glow on Hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <div className="mb-6 p-4 w-fit rounded-2xl bg-white/5 border border-white/10 group-hover:bg-blue-500/10 group-hover:border-blue-500/20 transition-colors">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 tracking-tight">{item.title}</h3>
                <p className="text-gray-400 leading-relaxed font-light text-sm md:text-base">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Contact CTA */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-20 py-12 px-8 rounded-[3rem] bg-gradient-to-r from-blue-600/10 to-purple-600/10 border border-white/5 text-center backdrop-blur-3xl"
        >
          <p className="text-gray-300 text-lg">For detailed legal inquiries, contact our compliance officer at</p>
          <a href="mailto:legal@rundevlopers.com" className="text-2xl font-bold text-blue-400 hover:text-blue-300 transition-colors block mt-2">
      abdulahadk104@gmail.com
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default LegalPage;