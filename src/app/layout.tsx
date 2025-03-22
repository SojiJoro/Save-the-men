// app/layout.tsx
import './globals.css'
import Link from 'next/link'
import { ReactNode } from 'react'

export const metadata = {
  title: 'Save The Men',
  description: 'Supporting Nigerian men abroad facing domestic abuse and challenges',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        {/* Header / Nav */}
        <header style={{ backgroundColor: '#0D4A71', color: '#fff', padding: '10px 0' }}>
          <nav style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0 20px' }}>
            <div style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>
              <Link href="/">Save The Men</Link>
            </div>
            <ul style={{ display: 'flex', gap: '20px', listStyle: 'none', margin: 0, padding: 0 }}>
              <li><Link href="/">Home</Link></li>
              <li><Link href="/about">About</Link></li>
              <li><Link href="/services">Services</Link></li>
              <li><Link href="/community">Community</Link></li>
              <li><Link href="/resources">Resources</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </nav>
        </header>

        {/* Main Content */}
        <main style={{ minHeight: '70vh' }}>
          {children}
        </main>

        {/* Footer */}
        <footer style={{ backgroundColor: '#0D4A71', color: '#fff', padding: '20px 0', marginTop: '40px' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px', textAlign: 'center' }}>
            <p>© 2025 Save The Men. All rights reserved.</p>
            <p style={{ fontSize: '0.9rem', marginTop: '10px' }}>
              <strong>Disclaimer:</strong> We are not a crisis centre, law firm, or healthcare provider. Information here is for general guidance and does not constitute professional advice. If you are in immediate danger, please call emergency services (999 in the UK, 911 in the US, 112 in Nigeria).
            </p>
          </div>
        </footer>
      </body>
    </html>
  )
}
