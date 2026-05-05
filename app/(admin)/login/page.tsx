"use client";

import { signIn } from "next-auth/react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Lock, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    const res = await signIn("credentials", {
      username,
      password,
      redirect: false,
    });

    if (res?.error) {
      setError("Invalid username or password");
      setLoading(false);
    } else {
      router.push("/admin");
    }
  };

  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-[#ffffff] relative">
      <Link href="/" className="absolute top-8 left-8 flex items-center gap-2 text-[#6b6b6b] hover:text-[#1a1a1a] transition-colors">
        <ArrowLeft className="w-4 h-4" />
        Back to Home
      </Link>
      <div className="max-w-md w-full p-8 border border-[#e0e0e0] rounded-2xl shadow-[0_10px_48px_rgba(0,0,0,0.16)]">
        <div className="flex justify-center mb-6">
          <div className="w-12 h-12 rounded-full bg-[#f5f5f5] flex items-center justify-center border border-[#e0e0e0]">
            <Lock className="w-5 h-5 text-[#1a1a1a]" />
          </div>
        </div>
        <h2 className="text-3xl font-serif font-black text-center text-[#1a1a1a] mb-6">Admin Login</h2>
        
        {error && <p className="text-red-500 text-sm text-center mb-4">{error}</p>}
        
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <div>
            <label className="block text-[14px] font-semibold text-[#1a1a1a] mb-2 tracking-[0.02em]">Username</label>
            <input 
              type="text" 
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full p-4 border-[1.5px] border-[#e0e0e0] rounded-lg text-[15px] outline-none focus:border-[#4a9b8e] transition-colors" 
              required
            />
          </div>
          <div>
            <label className="block text-[14px] font-semibold text-[#1a1a1a] mb-2 tracking-[0.02em]">Password</label>
            <input 
              type="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-4 border-[1.5px] border-[#e0e0e0] rounded-lg text-[15px] outline-none focus:border-[#4a9b8e] transition-colors" 
              required
            />
          </div>
          <button type="submit" disabled={loading} className="w-full py-4 bg-[#1a1a1a] text-white rounded-full font-medium mt-2 hover:opacity-80 transition-opacity disabled:opacity-50">
            {loading ? "Signing In..." : "Sign In"}
          </button>
        </form>
      </div>
    </div>
  );
}
