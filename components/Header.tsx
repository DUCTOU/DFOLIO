"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  const links = [
    { href: "/", label: "Home" },
    { href: "/projects", label: "Projects" },
    { href: "/publications", label: "Publications" },
    { href: "/connect", label: "Connect" },
  ];

  return (
    <nav className="flex justify-center items-center gap-10 py-5 px-12 border-b border-[#e0e0e0] w-full">
      {links.map((link) => {
        const isActive = pathname === link.href;
        return (
          <Link
            key={link.href}
            href={link.href}
            className={`text-sm pb-1 border-b-2 transition-colors cursor-pointer ${
              isActive
                ? "border-[#1a1a1a] font-medium text-[#1a1a1a]"
                : "border-transparent font-normal text-[#1a1a1a] hover:border-[#1a1a1a]"
            }`}
          >
            {link.label}
          </Link>
        );
      })}
    </nav>
  );
}
