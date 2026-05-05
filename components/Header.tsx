"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const links = [
    { href: "/", label: "Home" },
    { href: "/projects", label: "Projects" },
    { href: "/publications", label: "Publications" },
    { href: "/connect", label: "Connect" },
  ];

  return (
    <header className="relative border-b border-[#e0e0e0] w-full z-50 bg-[#ffffff]">
      <nav className="flex justify-between md:justify-center items-center py-4 md:py-5 px-6 md:px-12 w-full max-w-[1400px] mx-auto">
        {/* Mobile Logo */}
        <div className="font-serif font-bold text-xl text-[#1a1a1a] md:hidden flex items-center gap-2">
          <div className="w-5 h-5 rounded-full bg-[#1a1a1a] flex items-center justify-center">
            <div className="w-1.5 h-1.5 rounded-full bg-white"></div>
          </div>
          Kokahu
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-10">
          {links.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm pb-1 border-b-2 transition-all cursor-pointer ${
                  isActive
                    ? "border-[#1a1a1a] font-medium text-[#1a1a1a]"
                    : "border-transparent font-normal text-[#6b6b6b] hover:text-[#1a1a1a] hover:border-[#1a1a1a]"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2 -mr-2 text-[#1a1a1a] transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu Dropdown */}
      <div 
        className={`absolute top-full left-0 w-full bg-[#ffffff] border-b border-[#e0e0e0] flex flex-col items-center py-6 gap-6 md:hidden shadow-lg transition-all duration-300 origin-top ${
          isMenuOpen ? "opacity-100 scale-y-100" : "opacity-0 scale-y-0 pointer-events-none"
        }`}
      >
        {links.map((link) => {
          const isActive = pathname === link.href;
          return (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
              className={`text-base font-medium transition-colors ${
                isActive ? "text-[#1a1a1a]" : "text-[#6b6b6b] hover:text-[#1a1a1a]"
              }`}
            >
              {link.label}
            </Link>
          );
        })}
      </div>
    </header>
  );
}
