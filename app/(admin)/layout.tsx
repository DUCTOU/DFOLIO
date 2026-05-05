export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[#ffffff] font-sans flex flex-col">
      {children}
    </div>
  );
}
