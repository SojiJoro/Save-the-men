// app/layout.tsx
import './globals.css'
import { ReactNode } from 'react'
import Head from 'next/head'
import Header from './Header' // We'll create this next

export const metadata = {
  title: 'Save The Men',
  description: 'Supporting Nigerian men abroad facing domestic abuse and challenges',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      {/* 
        Because this is a server component, we can't directly use <Head> here.
        Next.js 13 uses the "metadata" object above for <head> elements.
        If you need a <meta name="viewport">, place it in a "page.tsx" or in 
        a "head.tsx" file. We'll show an example "head.tsx" soon. 
      */}
      <body>
        <Header />
        <main>{children}</main>
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
