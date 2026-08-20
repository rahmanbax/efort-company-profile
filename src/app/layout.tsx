import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import "./globals.css";

export const metadata: Metadata = {
  title: "EFORT",
  description: "Innovative Geographic Information Systems (GIS) and geospatial solutions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`scroll-smooth`}>
      <body className="antialiased text-zinc-900 bg-white">
        <Navbar />
        {children}
      </body>
    </html>
  );
}

