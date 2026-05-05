"use client";

import Header from "@/components/Header";

export default function Projects() {
  return (
    <div className="bg-[#ffffff] rounded-2xl overflow-hidden shadow-[0_10px_48px_rgba(0,0,0,0.16)] max-w-5xl w-full mx-auto mt-10 border border-[#e0e0e0] min-h-[500px]">
      <Header />
      <div className="p-16 flex items-center justify-center h-[calc(100%-80px)]">
        <h2 className="font-serif text-[40px] font-black text-[#1a1a1a]">Projects (Coming Soon)</h2>
      </div>
    </div>
  );
}
