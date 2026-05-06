import { getPublications, createPublication, deletePublication } from "@/app/actions/publicationActions";
import { FileText, Trash2 } from "lucide-react";

export const dynamic = 'force-dynamic';

export default async function AdminPublications() {
  const publications = await getPublications();

  return (
    <>
      <h2 className="font-serif text-[24px] font-bold text-[#1a1a1a] mb-1">Manage Publications</h2>
      <p className="text-[13px] text-[#6b6b6b] mb-6">Add, view, and remove publications</p>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Add Publication Form */}
        <div className="bg-[#f5f5f5] p-6 rounded-xl border border-[#e0e0e0]">
          <h3 className="text-[16px] font-bold text-[#1a1a1a] mb-4 flex items-center gap-2">
            <FileText className="w-4 h-4" /> Add New Publication
          </h3>
          <form action={createPublication} className="flex flex-col gap-4">
            <div>
              <label className="block text-[13px] font-semibold text-[#1a1a1a] mb-1">Title *</label>
              <input type="text" name="title" required className="w-full p-2.5 border border-[#e0e0e0] rounded bg-white text-[13px] outline-none focus:border-[#4a9b8e]" placeholder="Publication Title" />
            </div>
            <div>
              <label className="block text-[13px] font-semibold text-[#1a1a1a] mb-1">Description *</label>
              <textarea name="description" required rows={3} className="w-full p-2.5 border border-[#e0e0e0] rounded bg-white text-[13px] outline-none focus:border-[#4a9b8e]" placeholder="Short summary"></textarea>
            </div>
            <div>
              <label className="block text-[13px] font-semibold text-[#1a1a1a] mb-1">Publisher</label>
              <input type="text" name="publisher" className="w-full p-2.5 border border-[#e0e0e0] rounded bg-white text-[13px] outline-none focus:border-[#4a9b8e]" placeholder="e.g., Medium, IEEE, Dev.to" />
            </div>
            <div>
              <label className="block text-[13px] font-semibold text-[#1a1a1a] mb-1">Date</label>
              <input type="date" name="date" className="w-full p-2.5 border border-[#e0e0e0] rounded bg-white text-[13px] outline-none focus:border-[#4a9b8e]" />
            </div>
            <div>
              <label className="block text-[13px] font-semibold text-[#1a1a1a] mb-1">Link (URL)</label>
              <input type="url" name="url" className="w-full p-2.5 border border-[#e0e0e0] rounded bg-white text-[13px] outline-none focus:border-[#4a9b8e]" placeholder="https://..." />
            </div>
            <button type="submit" className="mt-2 bg-[#1a1a1a] text-white py-2.5 rounded text-[13px] font-medium hover:bg-[#4a9b8e] transition-colors">
              Add Publication
            </button>
          </form>
        </div>

        {/* List Publications */}
        <div className="flex flex-col gap-4">
          <h3 className="text-[16px] font-bold text-[#1a1a1a] mb-2">Existing Publications</h3>
          {publications.length === 0 ? (
            <p className="text-[13px] text-[#6b6b6b]">No publications found.</p>
          ) : (
            publications.map((pub: any) => (
              <div key={pub._id} className="border border-[#e0e0e0] p-4 rounded-lg flex justify-between items-start gap-4">
                <div>
                  <h4 className="font-bold text-[15px] text-[#1a1a1a]">{pub.title}</h4>
                  <p className="text-[13px] text-[#6b6b6b] mt-1 line-clamp-2">{pub.description}</p>
                  <p className="text-[11px] text-[#4a9b8e] mt-2 font-medium">{pub.publisher} {pub.date && `• ${new Date(pub.date).toLocaleDateString()}`}</p>
                </div>
                <form action={deletePublication.bind(null, pub._id)}>
                  <button type="submit" className="text-red-500 hover:text-red-700 p-2 bg-red-50 rounded transition-colors" title="Delete Publication">
                    <Trash2 className="w-4 h-4" />
                  </button>
                </form>
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
}
