import React from "react";
import { Navbar } from "@/components/common/navbar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="font-work-sans">
      <Navbar />
      {children}
    </div>
  );
}
