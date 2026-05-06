import Header from "@/components/Header";
import { getPublications } from "@/app/actions/publicationActions";
import Link from "next/link";
import { ExternalLink, FileText } from "lucide-react";

export const metadata = {
  title: "Publications | Kokahu",
  description: "My publications and articles",
};

export default async function Publications() {
  const publications = await getPublications();

  return (
    <div className="w-full min-h-screen flex flex-col bg-[#ffffff]">
      <Header />
      <div className="flex-1 p-8 md:p-16 max-w-4xl mx-auto w-full">
        <h2 className="font-serif text-[40px] md:text-[56px] font-black text-[#1a1a1a] mb-12">Publications</h2>
        
        {publications.length === 0 ? (
          <div className="flex items-center justify-center py-20">
            <p className="text-[#6b6b6b] text-lg">No publications added yet.</p>
          </div>
        ) : (
          <div className="flex flex-col gap-6">
            {publications.map((pub: any) => (
              <div key={pub._id} className="group border border-[#e0e0e0] rounded-xl p-6 md:p-8 hover:border-[#1a1a1a] hover:shadow-[0_10px_48px_rgba(0,0,0,0.06)] transition-all duration-300 bg-white flex flex-col md:flex-row gap-6 items-start">
                <div className="w-12 h-12 rounded-full bg-[#f5f5f5] flex items-center justify-center shrink-0 border border-[#e0e0e0]">
                  <FileText className="w-5 h-5 text-[#1a1a1a]" />
                </div>
                
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 mb-2">
                    <h3 className="font-serif text-[22px] font-bold text-[#1a1a1a] leading-tight">{pub.title}</h3>
                    {pub.date && (
                      <span className="text-[12px] text-[#6b6b6b] bg-[#f5f5f5] px-2.5 py-1 rounded-full w-fit">
                        {new Date(pub.date).toLocaleDateString(undefined, { year: 'numeric', month: 'long' })}
                      </span>
                    )}
                  </div>
                  
                  {pub.publisher && (
                    <p className="text-[13px] font-medium text-[#4a9b8e] mb-3">{pub.publisher}</p>
                  )}
                  
                  <p className="text-[#6b6b6b] text-[14.5px] leading-relaxed mb-5">{pub.description}</p>
                  
                  {pub.url && (
                    <Link 
                      href={pub.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-[13px] font-semibold text-[#1a1a1a] hover:text-[#4a9b8e] transition-colors"
                    >
                      Read Publication <ExternalLink className="w-3.5 h-3.5" />
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
