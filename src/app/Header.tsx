// app/Header.tsx
'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="header-bar">
      <nav className="nav-container">
        {/* LOGO */}
        <div className="logo">
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

        {/* HAMBURGER BUTTON */}
        <button
          className="hamburger-btn"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>

        {/* NAV LINKS */}
        <ul className={`nav-links ${menuOpen ? 'show' : ''}`}>
          <li><Link href="/">Home</Link></li>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/services">Services</Link></li>
          <li><Link href="/community">Community</Link></li>
          <li><Link href="/resources">Resources</Link></li>
          <li><Link href="/contact">Contact</Link></li>
        </ul>
      </nav>
    </header>
  )
}
