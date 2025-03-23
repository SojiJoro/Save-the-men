// app/layout.tsx
import './globals.css'
import { ReactNode } from 'react'
import Header from './Header' // Ensure the file is named "Header.tsx"

export const metadata = {
  title: 'Save The Men',
  description: 'Supporting Nigerian men abroad facing domestic abuse and challenges',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        {/* HEADER (client component) */}
        <Header />

        {/* MAIN CONTENT */}
        <main>{children}</main>

        <footer className="footer-bar">
  <div className="footer-container">
    <p>© 2025 Save The Men. All rights reserved.</p>
    <p className="footer-disclaimer">
      <strong>Disclaimer:</strong> We are not a crisis centre, law firm, or healthcare provider.
      If you are in immediate danger, please call local emergency services (999 in the UK,
      911 in the US, 112 in Nigeria). We do not assume any legal liability for the actions
      taken by site users.
    </p>

    {/* Add the "Created by" line here */}
    <p style={{ marginTop: '10px' }}>
      Created by
      {' '}
      <a
        href="https://twitter.com/Favoredsinner"
        target="_blank"
        rel="noopener noreferrer"
        style={{ textDecoration: 'none', color: '#1da1f2' }}
      >
        <span style={{ display: 'inline-flex', alignItems: 'center' }}>
          {/* X logo icon */}
          <img
            src="/images/x-logo.svg"
            alt="X Logo"
            style={{ width: '16px', height: '16px', marginRight: '5px' }}
          />
          @Favoredsinner
        </span>
      </a>
      {' '}on X
    </p>
  </div>
</footer>
      </body>
    </html>
  )
}
// Compare this snippet from src/app/Header.tsx:
// // app/Header.tsx
// 'use client'
//
// import { useState } from 'react'
// import Link from 'next/link'
// import Image from 'next/image'
//
