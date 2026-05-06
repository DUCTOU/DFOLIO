"use client";

import { useState } from "react";
import Link from "next/link";
import { MessageSquare, Briefcase, FileText, Menu, X } from "lucide-react";
import SignOutButton from "./SignOutButton";

export default function AdminDashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="w-full min-h-screen flex flex-col bg-[#ffffff] pt-[73px]">
      {/* Topbar */}
      <div className="fixed top-0 left-0 w-full h-[73px] flex justify-between items-center py-4 px-4 md:px-8 border-b border-[#e0e0e0] bg-white z-50">
        <div className="flex items-center gap-4">
          <button 
            className="md:hidden p-1 text-[#1a1a1a]"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
          
          <Link href="/" className="z-10 flex items-center mr-4">
            <img 
              src="/d2.jpg" 
              alt="DFOLIO Logo" 
              className="h-8 w-auto object-contain" 
              onError={(e) => {
                (e.target as HTMLImageElement).style.display = 'none';
                (e.target as HTMLImageElement).nextElementSibling?.classList.remove('hidden');
              }}
            />
            <span className="hidden font-serif font-bold text-xl text-[#1a1a1a]">DFOLIO</span>
          </Link>

          <div className="hidden md:flex gap-7 items-center">
            <Link href="/" className="text-[13px] text-[#6b6b6b] transition-colors hover:text-[#1a1a1a]">Home</Link>
            <Link href="/projects" className="text-[13px] text-[#6b6b6b] transition-colors hover:text-[#1a1a1a]">Projects</Link>
            <Link href="/publications" className="text-[13px] text-[#6b6b6b] transition-colors hover:text-[#1a1a1a]">Publications</Link>
            <Link href="/connect" className="text-[13px] text-[#6b6b6b] transition-colors hover:text-[#1a1a1a]">Connect</Link>
          </div>
          <span className="md:hidden font-serif font-bold text-[#1a1a1a] text-sm">Admin</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="hidden sm:inline-block text-[11.5px] bg-[#f5f5f5] border border-[#e0e0e0] py-1.5 px-3.5 rounded-full text-[#6b6b6b]">
            ⚙ Admin Access
          </span>
          <SignOutButton />
        </div>
      </div>

      <div className="flex flex-1 relative h-[calc(100vh-73px)] overflow-hidden">
        {/* Mobile Overlay */}
        {isMobileMenuOpen && (
          <div 
            className="fixed inset-0 bg-black/20 z-10 md:hidden" 
            onClick={() => setIsMobileMenuOpen(false)}
          />
        )}

        {/* Sidebar */}
        <div className={`
          absolute md:static top-0 left-0 h-full bg-white z-40 border-r border-[#e0e0e0] py-4 w-[240px] md:w-[210px] shrink-0
          transition-transform duration-300 ease-in-out overflow-y-auto
          ${isMobileMenuOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}
        `}>
          <div className="md:hidden px-5 pb-4 mb-4 border-b border-[#e0e0e0] flex flex-col gap-3">
            <span className="text-[11px] font-bold text-[#999] uppercase tracking-wider">Public Links</span>
            <Link href="/" className="text-[13px] text-[#6b6b6b]">Home</Link>
            <Link href="/projects" className="text-[13px] text-[#6b6b6b]">Projects</Link>
            <Link href="/publications" className="text-[13px] text-[#6b6b6b]">Publications</Link>
            <Link href="/connect" className="text-[13px] text-[#6b6b6b]">Connect</Link>
          </div>

          <span className="md:hidden px-5 text-[11px] font-bold text-[#999] uppercase tracking-wider mb-2 block">Dashboard</span>

          <Link onClick={() => setIsMobileMenuOpen(false)} href="/admin" className="flex items-center gap-2.5 py-3 px-5 text-[13px] text-[#6b6b6b] transition-colors hover:bg-[#f5f5f5] hover:text-[#1a1a1a]">
            <MessageSquare className="w-3.5 h-3.5" />
            Form Submissions
          </Link>
          <Link onClick={() => setIsMobileMenuOpen(false)} href="/admin/projects" className="flex items-center gap-2.5 py-3 px-5 text-[13px] text-[#6b6b6b] transition-colors hover:bg-[#f5f5f5] hover:text-[#1a1a1a]">
            <Briefcase className="w-3.5 h-3.5" />
            Projects
          </Link>
          <Link onClick={() => setIsMobileMenuOpen(false)} href="/admin/publications" className="flex items-center gap-2.5 py-3 px-5 text-[13px] text-[#6b6b6b] transition-colors hover:bg-[#f5f5f5] hover:text-[#1a1a1a]">
            <FileText className="w-3.5 h-3.5" />
            Publications
          </Link>
        </div>

        {/* Main Content */}
        <div className="flex-1 py-6 px-4 md:py-7 md:px-9 overflow-y-auto w-full h-full">
          {children}
        </div>
      </div>
    </div>
  );
}
