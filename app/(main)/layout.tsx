export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-[#ffffff] text-[#1a1a1a] flex flex-col font-sans">
      {children}
    </div>
  );
}
