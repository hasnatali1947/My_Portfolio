'use client';
import React from 'react';

export const metadata = {
  title: 'Hasnat Portfolio',
  description: 'Hasnat portfolio. A highly skilled fullstack developer',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}