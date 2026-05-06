"use client";

import Header from "@/components/Header";
import { motion } from "framer-motion";
import { MoveRight, Download, Mail } from "lucide-react";
import Link from "next/link";
import Image from 'next/image';


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
            <Link href="/connect" className="inline-flex items-center justify-center gap-2 px-8 py-3.5 sm:py-4 rounded-full font-sans text-[14px] sm:text-[15px] font-medium transition-all duration-200 border-[1.5px] border-[#1a1a1a] text-[#1a1a1a] hover:bg-[#1a1a1a] hover:text-white bg-transparent w-full sm:w-auto">
              <MoveRight className="w-[15px] h-[15px]" />
              Get in Touch
            </Link>
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 px-8 py-3.5 sm:py-4 rounded-full font-sans text-[14px] sm:text-[15px] font-medium transition-all duration-200 border-[1.5px] border-[#e0e0e0] text-[#1a1a1a] hover:border-[#1a1a1a] bg-transparent w-full sm:w-auto">
              <Download className="w-[15px] h-[15px]" />
              Resume
            </a>
          </div>

          <div className="flex gap-4 justify-center md:justify-start">
            <a href="https://www.linkedin.com/in/dharun-prakash-5ab7012a0/" target="_blank" rel="noopener noreferrer" className="w-[44px] h-[44px] rounded-full border border-[#e0e0e0] flex items-center justify-center cursor-pointer transition-colors duration-200 text-[#1a1a1a] hover:border-[#1a1a1a]">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </a>
            <a href="mailto:dharunprakash2128@gmail.com" className="w-[44px] h-[44px] rounded-full border border-[#e0e0e0] flex items-center justify-center cursor-pointer transition-colors duration-200 text-[#1a1a1a] hover:border-[#1a1a1a]">
              <Mail className="w-[18px] h-[18px]" strokeWidth={1.5} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="w-[44px] h-[44px] rounded-full border border-[#e0e0e0] flex items-center justify-center cursor-pointer transition-colors duration-200 text-[#1a1a1a] hover:border-[#1a1a1a]">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" stroke="none">
                <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"/>
              </svg>
            </a>
          </div>
        </motion.div>

        <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex items-center justify-center relative w-full overflow-visible mt-8 md:mt-0"
          >
            <div className="relative w-[280px] h-[310px] sm:w-[300px] sm:h-[340px] scale-100 md:scale-[1.35] lg:scale-[1.5] origin-center md:origin-left transition-transform duration-500 hover:scale-[1.05] md:hover:scale-[1.4] lg:hover:scale-[1.55]">
              
              <div className="absolute top-4 right-7 text-[20px] text-[#1a1a1a] opacity-45 animate-float">✦</div>
              <div className="absolute top-[70px] left-[10px] text-[10px] text-[#1a1a1a] opacity-30 animate-float delay-1000">✧</div>
              <div className="absolute bottom-[50px] right-0 text-[30px] opacity-50 animate-float delay-500">⊕</div>
              <div className="absolute bottom-[20px] left-[30px] text-[14px] text-[#e8a87c] opacity-70 animate-float delay-150">✦</div>
              <div className="absolute top-[110px] right-2 text-[22px] text-[#e8a87c] opacity-60">+</div>
              <div className="absolute top-2 left-[70px] w-[9px] h-[9px] rounded-full bg-[#e8a87c] opacity-50"></div>

              <div className="relative w-full h-full overflow-hidden">
                <Image 
                  src="/c.jpg"
                  alt="Developer Illustration"
                  fill
                  priority
                  unoptimized
                  className="object-contain scale-[1.2]" 
                />
              </div>

              {/* Circular Dotted Border (Optional: matches your previous SVG vibe) */}
              <div className="absolute inset-0 border-[1.2px] border-dashed border-[#d8d8d8] rounded-full -z-10 scale-[1.1]" />

            </div>
          </motion.div>
      </div>
    </div>
  );
}
