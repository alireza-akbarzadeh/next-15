import React from "react";
import { Navbar } from "@/components/common/navbar";
import "easymde/dist/easymde.min.css";

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
