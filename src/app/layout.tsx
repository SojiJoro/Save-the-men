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
            <div className="logo" style={{ display: 'flex', alignItems: 'center' }}>
              <Link href="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none', color: '#fff' }}>
                {/* Logo SVG */}
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
              If you are in immediate danger, please call local emergency services (999 in the UK,
              911 in the US, 112 in Nigeria).
            </p>
          </div>
        </footer>
      </body>
    </html>
  )
}
