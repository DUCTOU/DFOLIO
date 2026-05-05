"use client";

import Header from "@/components/Header";
import { motion } from "framer-motion";
import { MoveRight, Download } from "lucide-react";

export default function Home() {
  return (
    <div className="w-full min-h-screen flex flex-col">
      <Header />
      <div className="flex-1 grid grid-cols-1 md:grid-cols-2 p-6 md:p-16 gap-8 md:gap-0 items-center max-w-[1400px] w-full mx-auto overflow-hidden">
        {/* Left Side */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="pl-0 md:pl-12 lg:pl-32 max-w-[650px] justify-self-center md:justify-self-end text-center md:text-left flex flex-col items-center md:items-start"
        >
          <h1 className="font-serif text-[48px] sm:text-[64px] lg:text-[84px] font-black leading-[1.06] text-[#1a1a1a] mb-6 tracking-[-0.02em]">
            Designing<br />experiences<br />that <em className="italic font-bold">in</em>spire<br />connection
          </h1>
          <p className="text-[15px] lg:text-[18px] text-[#6b6b6b] leading-[1.7] max-w-[400px] mb-10 font-light mx-auto md:mx-0">
            I am a passionate web designer dedicated to bringing your visions to life. With a keen eye for aesthetics and a deep understanding of user experience, I strive to create captivating websites that leave a lasting impression.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-10 md:mb-14 border-none w-full sm:w-auto">
            <button className="inline-flex items-center justify-center gap-2 px-8 py-3.5 sm:py-4 rounded-full font-sans text-[14px] sm:text-[15px] font-medium transition-all duration-200 border-[1.5px] border-[#1a1a1a] text-[#1a1a1a] hover:bg-[#1a1a1a] hover:text-white bg-transparent w-full sm:w-auto">
              <MoveRight className="w-[15px] h-[15px]" />
              Get in Touch
            </button>
            <button className="inline-flex items-center justify-center gap-2 px-8 py-3.5 sm:py-4 rounded-full font-sans text-[14px] sm:text-[15px] font-medium transition-all duration-200 border-[1.5px] border-[#e0e0e0] text-[#1a1a1a] hover:border-[#1a1a1a] bg-transparent w-full sm:w-auto">
              <Download className="w-[15px] h-[15px]" />
              Resume
            </button>
          </div>

          <div className="flex gap-4 justify-center md:justify-start">
            <span className="w-[44px] h-[44px] rounded-full border border-[#e0e0e0] flex items-center justify-center cursor-pointer transition-colors duration-200 text-[#1a1a1a] hover:border-[#1a1a1a]">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none"/></svg>
            </span>
            <span className="w-[44px] h-[44px] rounded-full border border-[#e0e0e0] flex items-center justify-center cursor-pointer transition-colors duration-200 text-[#1a1a1a] hover:border-[#1a1a1a]">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg>
            </span>
            <span className="w-[44px] h-[44px] rounded-full border border-[#e0e0e0] flex items-center justify-center cursor-pointer transition-colors duration-200 text-[#1a1a1a] hover:border-[#1a1a1a]">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/></svg>
            </span>
            <span className="w-[44px] h-[44px] rounded-full border border-[#e0e0e0] flex items-center justify-center cursor-pointer transition-colors duration-200 text-[#1a1a1a] hover:border-[#1a1a1a]">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/></svg>
            </span>
          </div>
        </motion.div>

        {/* Right Side (Astronaut SVG) */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex items-center justify-center relative w-full overflow-visible mt-8 md:mt-0"
        >
          <div className="relative w-[280px] h-[310px] sm:w-[300px] sm:h-[340px] scale-100 md:scale-[1.35] lg:scale-[1.5] origin-center md:origin-left transition-transform duration-500 hover:scale-[1.05] md:hover:scale-[1.4] lg:hover:scale-[1.55]">
            {/* Decorations */}
            <div className="absolute top-4 right-7 text-[20px] text-[#1a1a1a] opacity-45 animate-float">✦</div>
            <div className="absolute top-[70px] left-[10px] text-[10px] text-[#1a1a1a] opacity-30 animate-float delay-1000">✧</div>
            <div className="absolute bottom-[50px] right-0 text-[30px] opacity-50 animate-float delay-500">⊕</div>
            <div className="absolute bottom-[20px] left-[30px] text-[14px] text-[#e8a87c] opacity-70 animate-float delay-150">✦</div>
            <div className="absolute top-[110px] right-2 text-[22px] text-[#e8a87c] opacity-60">+</div>
            <div className="absolute top-2 left-[70px] w-[9px] h-[9px] rounded-full bg-[#e8a87c] opacity-50"></div>

            <svg width="300" height="340" viewBox="0 0 220 270" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="110" cy="140" r="96" stroke="#d8d8d8" strokeWidth="1.2" strokeDasharray="5 6"/>
              <ellipse cx="110" cy="165" rx="43" ry="52" fill="white" stroke="#1a1a1a" strokeWidth="2"/>
              <rect x="101" y="112" width="18" height="15" rx="4" fill="white" stroke="#1a1a1a" strokeWidth="2"/>
              <circle cx="110" cy="97" r="36" fill="white" stroke="#1a1a1a" strokeWidth="2.2"/>
              <ellipse cx="110" cy="97" rx="23" ry="21" fill="#f2f2f2" stroke="#1a1a1a" strokeWidth="1.5"/>
              <circle cx="103" cy="94" r="3.5" fill="#1a1a1a"/>
              <circle cx="117" cy="94" r="3.5" fill="#1a1a1a"/>
              <path d="M103 106 Q110 113 117 106" stroke="#1a1a1a" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
              <path d="M100 87 Q103 84 107 87" stroke="#1a1a1a" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
              <path d="M113 87 Q117 84 120 87" stroke="#1a1a1a" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
              <path d="M76 78 Q72 64 82 59 Q91 54 97 62" stroke="#1a1a1a" strokeWidth="2" fill="none" strokeLinecap="round"/>
              <path d="M82 59 Q87 50 95 53 Q101 56 99 64" stroke="#1a1a1a" strokeWidth="2" fill="none" strokeLinecap="round"/>
              <path d="M99 64 Q105 53 113 55 Q119 57 117 65" stroke="#1a1a1a" strokeWidth="2" fill="none" strokeLinecap="round"/>
              <ellipse cx="70" cy="167" rx="13" ry="26" fill="white" stroke="#1a1a1a" strokeWidth="2" transform="rotate(-15 70 167)"/>
              <ellipse cx="150" cy="167" rx="13" ry="26" fill="white" stroke="#1a1a1a" strokeWidth="2" transform="rotate(15 150 167)"/>
              <ellipse cx="62" cy="187" rx="10" ry="7.5" fill="#ebebeb" stroke="#1a1a1a" strokeWidth="1.5" transform="rotate(-15 62 187)"/>
              <ellipse cx="158" cy="187" rx="10" ry="7.5" fill="#ebebeb" stroke="#1a1a1a" strokeWidth="1.5" transform="rotate(15 158 187)"/>
              <rect x="96" y="147" width="28" height="24" rx="4" fill="#f5f5f5" stroke="#1a1a1a" strokeWidth="1.2"/>
              <circle cx="106" cy="157" r="3" fill="#e8a87c" stroke="#1a1a1a" strokeWidth="1"/>
              <circle cx="114" cy="157" r="3" fill="#4a9b8e" stroke="#1a1a1a" strokeWidth="1"/>
              <rect x="99" y="163" width="22" height="4" rx="2" fill="#e0e0e0"/>
              <ellipse cx="93" cy="218" rx="15" ry="20" fill="white" stroke="#1a1a1a" strokeWidth="2"/>
              <ellipse cx="127" cy="218" rx="15" ry="20" fill="white" stroke="#1a1a1a" strokeWidth="2"/>
              <ellipse cx="91" cy="236" rx="18" ry="8" fill="#ebebeb" stroke="#1a1a1a" strokeWidth="1.5"/>
              <ellipse cx="129" cy="236" rx="18" ry="8" fill="#ebebeb" stroke="#1a1a1a" strokeWidth="1.5"/>
              <circle cx="37" cy="195" r="12" fill="white" stroke="#1a1a1a" strokeWidth="1.6"/>
              <ellipse cx="37" cy="195" rx="21" ry="5.5" fill="none" stroke="#1a1a1a" strokeWidth="1.6" transform="rotate(-22 37 195)"/>
              <circle cx="175" cy="95" r="6" fill="white" stroke="#1a1a1a" strokeWidth="1.5"/>
              <text x="160" y="60" fontSize="12" fill="#1a1a1a" opacity="0.4">✦</text>
              <text x="50" y="82" fontSize="9" fill="#1a1a1a" opacity="0.3">✧</text>
            </svg>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
