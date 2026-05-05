"use client";

import Header from "@/components/Header";
import { Mail, Phone } from "lucide-react";
import { useActionState } from "react";
import { submitContact } from "@/app/actions/contact";

export default function Connect() {
  const [state, formAction, pending] = useActionState<any, FormData>(submitContact, null);

  return (
    <div className="w-full min-h-screen flex flex-col">
      <Header />
      <div className="flex-1 grid grid-cols-1 md:grid-cols-2 max-w-[1400px] w-full mx-auto">
        {/* Left Side */}
        <div className="p-8 md:p-16 border-b md:border-b-0 md:border-r border-[#e0e0e0] flex flex-col justify-center text-center md:text-left items-center md:items-start">
          <p className="text-[11px] tracking-[0.1em] uppercase text-[#4a9b8e] mb-3.5 font-semibold">
            Let's talk
          </p>
          <h2 className="font-serif text-[40px] font-black text-[#1a1a1a] leading-[1.1] mb-4.5">
            Get in<br />Touch
          </h2>
          <p className="text-[14px] text-[#6b6b6b] leading-[1.65] max-w-[280px] mb-10">
            Have a project in mind or just want to say hello? I'd love to hear from you. Fill in the form and I'll get back to you shortly.
          </p>
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3 text-[13px] text-[#6b6b6b]">
              <div className="w-9 h-9 rounded-full bg-[#f5f5f5] border border-[#e0e0e0] flex items-center justify-center shrink-0">
                <Phone className="w-3.5 h-3.5 text-[#1a1a1a]" />
              </div>
              +1 (555) 000 0000
            </div>
            <div className="flex items-center gap-3 text-[13px] text-[#6b6b6b]">
              <div className="w-9 h-9 rounded-full bg-[#f5f5f5] border border-[#e0e0e0] flex items-center justify-center shrink-0">
                <Mail className="w-3.5 h-3.5 text-[#1a1a1a]" />
              </div>
              hello@kokahu.design
            </div>
          </div>
        </div>

        {/* Right Side (Form) */}
        <div className="p-8 md:p-16">
          <form action={formAction}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-4.5">
              <div>
                <label className="block text-[12px] font-semibold text-[#1a1a1a] mb-1.5 tracking-[0.02em]">First Name</label>
                <input name="firstName" className="w-full p-3 border-[1.5px] border-[#e0e0e0] rounded-lg text-[13px] text-[#1a1a1a] outline-none transition-colors focus:border-[#4a9b8e] bg-white placeholder:text-[#bbb]" type="text" placeholder="John" />
                {state?.errors?.firstName && <span className="text-red-500 text-xs mt-1">{state.errors.firstName}</span>}
              </div>
              <div>
                <label className="block text-[12px] font-semibold text-[#1a1a1a] mb-1.5 tracking-[0.02em]">Last Name</label>
                <input name="lastName" className="w-full p-3 border-[1.5px] border-[#e0e0e0] rounded-lg text-[13px] text-[#1a1a1a] outline-none transition-colors focus:border-[#4a9b8e] bg-white placeholder:text-[#bbb]" type="text" placeholder="Doe" />
                {state?.errors?.lastName && <span className="text-red-500 text-xs mt-1">{state.errors.lastName}</span>}
              </div>
            </div>
            <div className="mb-4.5">
              <label className="block text-[12px] font-semibold text-[#1a1a1a] mb-1.5 tracking-[0.02em]">Email Address</label>
              <input name="email" className="w-full p-3 border-[1.5px] border-[#e0e0e0] rounded-lg text-[13px] text-[#1a1a1a] outline-none transition-colors focus:border-[#4a9b8e] bg-white placeholder:text-[#bbb]" type="email" placeholder="john@example.com" />
              {state?.errors?.email && <span className="text-red-500 text-xs mt-1">{state.errors.email}</span>}
            </div>
            <div className="mb-4.5">
              <label className="block text-[12px] font-semibold text-[#1a1a1a] mb-1.5 tracking-[0.02em]">Subject</label>
              <input name="subject" className="w-full p-3 border-[1.5px] border-[#e0e0e0] rounded-lg text-[13px] text-[#1a1a1a] outline-none transition-colors focus:border-[#4a9b8e] bg-white placeholder:text-[#bbb]" type="text" placeholder="What's this about?" />
              {state?.errors?.subject && <span className="text-red-500 text-xs mt-1">{state.errors.subject}</span>}
            </div>
            <div className="mb-4.5">
              <label className="block text-[12px] font-semibold text-[#1a1a1a] mb-1.5 tracking-[0.02em]">Message</label>
              <textarea name="message" className="w-full p-3 border-[1.5px] border-[#e0e0e0] rounded-lg text-[13px] text-[#1a1a1a] outline-none transition-colors focus:border-[#4a9b8e] bg-white placeholder:text-[#bbb] resize-none h-24" placeholder="Tell me more about your project..."></textarea>
              {state?.errors?.message && <span className="text-red-500 text-xs mt-1">{state.errors.message}</span>}
            </div>
            {state?.success && <p className="text-green-500 text-sm mb-2">{state.message}</p>}
            <button type="submit" disabled={pending} className="w-full p-3.5 bg-[#1a1a1a] text-white border-none rounded-full font-sans text-[14px] font-medium cursor-pointer mt-2 transition-opacity hover:opacity-80 tracking-[0.02em] disabled:opacity-50">
              {pending ? "Sending..." : "Send Message →"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
