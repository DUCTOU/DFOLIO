"use client";

import { LogOut } from "lucide-react";
import { signOut } from "next-auth/react";

export default function SignOutButton() {
  return (
    <button 
      onClick={() => signOut({ callbackUrl: "/login" })} 
      className="text-[11.5px] bg-[#1a1a1a] text-white py-1.5 px-3.5 rounded-full flex items-center gap-1.5 hover:opacity-80 transition-opacity cursor-pointer"
    >
      <LogOut className="w-3 h-3" />
      Sign Out
    </button>
  );
}
