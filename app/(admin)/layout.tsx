export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[#dcdcdc] font-sans flex flex-col items-center justify-center p-4 md:p-8">
      {children}
    </div>
  );
}
