import React from 'react';
import { Navbar } from '@/app/components';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className='font-work-sans'>
      <Navbar />
      {children}
    </div>
  );
}
