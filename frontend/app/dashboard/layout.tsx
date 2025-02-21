import Header from "@/components/dashboard/Header";

function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="w-full bg-[#F6F5F1] h-screen">
      <div className="w-full px-4 md:px-6 lg:w-[90%] mx-auto max-w-custom">
        <Header />
        {children}
      </div>
    </div>
  );
}

export default RootLayout;
