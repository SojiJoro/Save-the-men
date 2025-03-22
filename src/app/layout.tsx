// app/layout.tsx
import './globals.css'
import Image from 'next/image'
import { ReactNode } from 'react'
import Link from 'next/link'

export const metadata = {
  title: 'Save The Men',
  description: 'Supporting Nigerian men abroad facing domestic abuse and challenges',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        {/* HEADER / NAV */}
        <header className="header-bar">
          <nav className="nav-container">
            <div className="logo">
              {/* If you don't have logo.svg, remove the Image component */}
              <Link href="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none', color: '#fff' }}>
                <Image
                  src="/logo.svg"
                  alt="Save The Men Logo"
                  width={40}
                  height={40}
                  priority
                  style={{ marginRight: '8px' }}
                />
                <span style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>Save The Men</span>
              </Link>
            </div>
            <ul className="nav-links">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/about">About</Link></li>
              <li><Link href="/services">Services</Link></li>
              <li><Link href="/community">Community</Link></li>
              <li><Link href="/resources">Resources</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </nav>
        </header>

        {/* MAIN CONTENT */}
        <main>
          {children}
        </main>

        {/* FOOTER */}
        <footer className="footer-bar">
          <div className="footer-container">
            <p>© 2025 Save The Men. All rights reserved.</p>
            <p className="footer-disclaimer">
              <strong>Disclaimer:</strong> We are not a crisis centre, law firm, or healthcare provider.
              Information on this site is for general guidance only. If you are in immediate danger, please call
              local emergency services (999 in the UK, 911 in the US, 112 in Nigeria). We do not assume any legal
              liability for the actions taken by site users.
            </p>
          </div>
        </footer>
      </body>
    </html>
  )
}
