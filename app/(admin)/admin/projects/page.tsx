import { getProjects, createProject } from "@/app/actions/projectActions";
import { Briefcase } from "lucide-react";
import ProjectList from "./ProjectList";

export const dynamic = 'force-dynamic';

export default async function AdminProjects() {
  const projects = await getProjects();

  return (
    <>
      <h2 className="font-serif text-[24px] font-bold text-[#1a1a1a] mb-1">Manage Projects</h2>
      <p className="text-[13px] text-[#6b6b6b] mb-6">Add, view, edit, and remove projects</p>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Add Project Form */}
        <div className="bg-[#f5f5f5] p-6 rounded-xl border border-[#e0e0e0] h-fit">
          <h3 className="text-[16px] font-bold text-[#1a1a1a] mb-4 flex items-center gap-2">
            <Briefcase className="w-4 h-4" /> Add New Project
          </h3>
          <form action={createProject} className="flex flex-col gap-4">
            <div>
              <label className="block text-[13px] font-semibold text-[#1a1a1a] mb-1">Title *</label>
              <input type="text" name="title" required className="w-full p-2.5 border border-[#e0e0e0] rounded bg-white text-[13px] outline-none focus:border-[#4a9b8e]" placeholder="Project Title" />
            </div>
            <div>
              <label className="block text-[13px] font-semibold text-[#1a1a1a] mb-1">Description *</label>
              <textarea name="description" required rows={3} className="w-full p-2.5 border border-[#e0e0e0] rounded bg-white text-[13px] outline-none focus:border-[#4a9b8e]" placeholder="Project Description"></textarea>
            </div>
            <div>
              <label className="block text-[13px] font-semibold text-[#1a1a1a] mb-1">Tech Stack (comma separated)</label>
              <input type="text" name="techStack" className="w-full p-2.5 border border-[#e0e0e0] rounded bg-white text-[13px] outline-none focus:border-[#4a9b8e]" placeholder="React, Next.js, MongoDB" />
            </div>
            <div>
              <label className="block text-[13px] font-semibold text-[#1a1a1a] mb-1">Image URL</label>
              <input type="url" name="imageURL" className="w-full p-2.5 border border-[#e0e0e0] rounded bg-white text-[13px] outline-none focus:border-[#4a9b8e]" placeholder="https://..." />
            </div>
            <div>
              <label className="block text-[13px] font-semibold text-[#1a1a1a] mb-1">Live Link</label>
              <input type="url" name="liveLink" className="w-full p-2.5 border border-[#e0e0e0] rounded bg-white text-[13px] outline-none focus:border-[#4a9b8e]" placeholder="https://..." />
            </div>
            <button type="submit" className="mt-2 bg-[#1a1a1a] text-white py-2.5 rounded text-[13px] font-medium hover:bg-[#4a9b8e] transition-colors">
              Add Project
            </button>
          </form>
        </div>

        {/* List Projects */}
        <div className="flex flex-col gap-4">
          <h3 className="text-[16px] font-bold text-[#1a1a1a] mb-2">Existing Projects</h3>
          <ProjectList projects={projects} />
        </div>
      </div>
    </>
  );
}
