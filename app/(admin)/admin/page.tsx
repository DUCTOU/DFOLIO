import Link from "next/link";
import { LayoutDashboard, MessageSquare, Briefcase, FileText, Image as ImageIcon, TableProperties } from "lucide-react";
import SignOutButton from "./SignOutButton";
import { connectToDatabase } from "@/lib/mongodb";
import { Contact } from "@/lib/models/Contact";

export default async function AdminDashboard() {
  await connectToDatabase();
  const contacts = await Contact.find().sort({ timestamp: -1 }).lean();

  return (
    <div className="w-full min-h-screen flex flex-col">
      {/* Topbar */}
      <div className="flex justify-between items-center py-4 px-8 border-b border-[#e0e0e0]">
        <div className="flex gap-7">
          <Link href="/" className="text-[13px] text-[#6b6b6b] transition-colors hover:text-[#1a1a1a]">Home</Link>
          <Link href="/projects" className="text-[13px] text-[#6b6b6b] transition-colors hover:text-[#1a1a1a]">Projects</Link>
          <Link href="/publications" className="text-[13px] text-[#6b6b6b] transition-colors hover:text-[#1a1a1a]">Publications</Link>
          <Link href="/connect" className="text-[13px] text-[#6b6b6b] transition-colors hover:text-[#1a1a1a]">Connect</Link>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-[11.5px] bg-[#f5f5f5] border border-[#e0e0e0] py-1.5 px-3.5 rounded-full text-[#6b6b6b]">
            ⚙ Admin Access
          </span>
          <SignOutButton />
        </div>
      </div>

      <div className="grid grid-cols-[210px_1fr] min-h-[440px]">
        {/* Sidebar */}
        <div className="border-r border-[#e0e0e0] py-4">
          <div className="flex items-center gap-2.5 py-3 px-5 text-[13px] cursor-pointer transition-colors bg-[#f5f5f5] text-[#1a1a1a] font-medium">
            <MessageSquare className="w-3.5 h-3.5" />
            Form Submissions
          </div>
          <div className="flex items-center gap-2.5 py-3 px-5 text-[13px] text-[#6b6b6b] cursor-pointer transition-colors hover:bg-[#f5f5f5] hover:text-[#1a1a1a]">
            <TableProperties className="w-3.5 h-3.5" />
            Connect Data
          </div>
          <div className="flex items-center gap-2.5 py-3 px-5 text-[13px] text-[#6b6b6b] cursor-pointer transition-colors hover:bg-[#f5f5f5] hover:text-[#1a1a1a]">
            <Briefcase className="w-3.5 h-3.5" />
            Projects
          </div>
          <div className="flex items-center gap-2.5 py-3 px-5 text-[13px] text-[#6b6b6b] cursor-pointer transition-colors hover:bg-[#f5f5f5] hover:text-[#1a1a1a]">
            <FileText className="w-3.5 h-3.5" />
            Publications
          </div>
          <div className="flex items-center gap-2.5 py-3 px-5 text-[13px] text-[#6b6b6b] cursor-pointer transition-colors hover:bg-[#f5f5f5] hover:text-[#1a1a1a]">
            <ImageIcon className="w-3.5 h-3.5" />
            Media (Cloudinary)
          </div>
        </div>

        {/* Main Content */}
        <div className="py-7 px-9">
          <h2 className="font-serif text-[24px] font-bold text-[#1a1a1a] mb-1">Form Submissions</h2>
          <p className="text-[13px] text-[#6b6b6b] mb-4.5">Connect Data</p>
          
          <span className="inline-flex items-center gap-1.5 bg-[#4a9b8e] text-white text-[11px] font-medium py-1 px-3 rounded mb-4.5">
            <LayoutDashboard className="w-2.5 h-2.5" />
            Submission table
          </span>

          <table className="w-full border-collapse text-[12.5px]">
            <thead>
              <tr>
                <th className="text-left py-2 px-3 bg-[#f5f5f5] border-b border-[#e0e0e0] font-semibold text-[#1a1a1a] text-[11.5px] tracking-[0.02em]">Name</th>
                <th className="text-left py-2 px-3 bg-[#f5f5f5] border-b border-[#e0e0e0] font-semibold text-[#1a1a1a] text-[11.5px] tracking-[0.02em]">Email</th>
                <th className="text-left py-2 px-3 bg-[#f5f5f5] border-b border-[#e0e0e0] font-semibold text-[#1a1a1a] text-[11.5px] tracking-[0.02em]">Subject</th>
                <th className="text-left py-2 px-3 bg-[#f5f5f5] border-b border-[#e0e0e0] font-semibold text-[#1a1a1a] text-[11.5px] tracking-[0.02em]">Message</th>
                <th className="text-left py-2 px-3 bg-[#f5f5f5] border-b border-[#e0e0e0] font-semibold text-[#1a1a1a] text-[11.5px] tracking-[0.02em]">Date</th>
              </tr>
            </thead>
            <tbody>
              {contacts.length === 0 ? (
                <tr>
                  <td colSpan={5} className="py-4 px-3 text-center text-[#6b6b6b] text-[12px]">No form submissions found.</td>
                </tr>
              ) : (
                contacts.map((contact: any) => (
                  <tr key={contact._id.toString()} className="hover:bg-[#fafafa]">
                    <td className="py-2.5 px-3 border-b border-[#e0e0e0] text-[#1a1a1a] font-medium align-top">{contact.firstName} {contact.lastName}</td>
                    <td className="py-2.5 px-3 border-b border-[#e0e0e0] text-[#6b6b6b] align-top"><span className="max-w-[130px] whitespace-nowrap overflow-hidden text-ellipsis block">{contact.email}</span></td>
                    <td className="py-2.5 px-3 border-b border-[#e0e0e0] text-[#6b6b6b] align-top">{contact.subject}</td>
                    <td className="py-2.5 px-3 border-b border-[#e0e0e0] text-[#6b6b6b] align-top"><span className="max-w-[130px] whitespace-nowrap overflow-hidden text-ellipsis block">{contact.message}</span></td>
                    <td className="py-2.5 px-3 border-b border-[#e0e0e0] text-[#6b6b6b] align-top text-[11px] whitespace-nowrap">
                      {new Date(contact.timestamp).toLocaleString()}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
