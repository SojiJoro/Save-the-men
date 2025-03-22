// src/app/layout.tsx
import './globals.css'
import { ReactNode } from 'react'
import Link from 'next/link'

export const metadata = {
  title: 'Save The Men',
  description: 'A support space for African men in the diaspora',
}

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <header style={{ background: '#2c3e50', padding: '10px' }}>
          <nav style={{ display: 'flex', justifyContent: 'center', gap: '15px' }}>
            <Link href="/">Home</Link>
            <Link href="/about">About Us</Link>
            <Link href="/services">Services</Link>
            <Link href="/community">Community</Link>
            <Link href="/resources">Resources</Link>
            <Link href="/contact">Contact</Link>
          </nav>
        </header>

        <main style={{ padding: '20px' }}>
          {children}
        </main>

        <footer style={{ background: '#2c3e50', color: 'white', padding: '10px', textAlign: 'center' }}>
          <p>Save The Men 2025. All rights reserved.</p>
        </footer>
      </body>
    </html>
  )
}
