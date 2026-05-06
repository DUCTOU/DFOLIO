import Header from "@/components/Header";
import { getProjects } from "@/app/actions/projectActions";
import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";

export const dynamic = 'force-dynamic';

export const metadata = {
  title: "Projects | Kokahu",
  description: "My portfolio projects",
};

export default async function Projects() {
  const projects = await getProjects();

  return (
    <div className="w-full min-h-screen flex flex-col bg-[#ffffff]">
      <Header />
      <div className="flex-1 p-8 md:p-16 max-w-7xl mx-auto w-full">
        <h2 className="font-serif text-[40px] md:text-[56px] font-black text-[#1a1a1a] mb-12">Projects</h2>
        
        {projects.length === 0 ? (
          <div className="flex items-center justify-center py-20">
            <p className="text-[#6b6b6b] text-lg">No projects added yet.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project: any) => (
              <div key={project._id} className="group border border-[#e0e0e0] rounded-xl overflow-hidden hover:shadow-[0_10px_48px_rgba(0,0,0,0.08)] transition-all duration-300 flex flex-col bg-white">
                {project.imageURL && (
                  <div className="w-full h-48 overflow-hidden bg-[#f5f5f5]">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img 
                      src={project.imageURL} 
                      alt={project.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                )}
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="font-serif text-[22px] font-bold text-[#1a1a1a] mb-3">{project.title}</h3>
                  <p className="text-[#6b6b6b] text-[14px] leading-relaxed mb-6 flex-1">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.techStack?.map((tech: string, i: number) => (
                      <span key={i} className="text-[11px] bg-[#f5f5f5] text-[#6b6b6b] py-1 px-2.5 rounded-full font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>

                  {project.liveLink && (
                    <Link 
                      href={project.liveLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-[13px] font-semibold text-[#1a1a1a] hover:text-[#4a9b8e] transition-colors mt-auto"
                    >
                      View Project <ExternalLink className="w-3.5 h-3.5" />
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
