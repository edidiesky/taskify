import type { Metadata } from "next";
import "./globals.css";
import ProviderLayout from "@/providers/StoreProvider";
export const metadata: Metadata = {
  title: "Taskify: Creating a new dispensation in building tasks",
  description: "Discover a new way to create Tasks",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ProviderLayout>
          {children}
        </ProviderLayout>
      </body>
    </html>
  );
}
