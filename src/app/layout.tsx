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
