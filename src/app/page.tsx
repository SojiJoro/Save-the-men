// app/page.tsx
import Link from 'next/link'

export default function HomePage() {
  return (
    <>
      {/* HERO SECTION */}
      <section
        style={{
          position: 'relative',
          backgroundImage: 'url("/images/hero-brotherhood.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          minHeight: '400px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#fff',
        }}
      >
        <div
          style={{
            backgroundColor: 'rgba(0,0,0,0.5)',
            padding: '20px',
            borderRadius: '5px',
            textAlign: 'center',
            maxWidth: '600px',
          }}
        >
          <h1 style={{ fontSize: '2.5rem', marginBottom: '10px' }}>
            Helping Nigerian Men Escape Domestic Abuse
          </h1>
          <p style={{ marginBottom: '20px' }}>
            We provide confidential help and support for men facing domestic violence abroad.
          </p>
          <Link
            href="/contact"
            style={{
              backgroundColor: '#e58406', /* Orange accent */
              color: '#fff',
              padding: '10px 20px',
              textDecoration: 'none',
              borderRadius: '4px',
            }}
          >
            Get Help Now
          </Link>
        </div>
      </section>

      {/* INTRODUCTION SECTION */}
      <section className="intro-section">
        <h2>Welcome to Save The Men</h2>
        <p>
          We understand that Nigerian men living abroad may face unique challenges, including domestic abuse,
          cultural stigma, and legal complexities. Our mission is to provide resources, guidance, and a safe
          community for men who need help.
        </p>
        <p>
          <strong>Remember:</strong> You are not alone. Speak up, reach out, and let us support you in your journey.
        </p>
      </section>

      {/* NEED HELP RIGHT AWAY? SECTION */}
      <section className="help-section">
        <h2>Need Help Right Away?</h2>
        <p>Call emergency services if you are in immediate danger:</p>
        <ul className="help-list">
          <li><strong>UK:</strong> 999</li>
          <li><strong>Nigeria:</strong> 112 (or 767 in Lagos)</li>
          <li><strong>US/Canada:</strong> 911</li>
          <li><strong>Europe:</strong> 112</li>
        </ul>
        <p>Or reach out to our recommended helplines for men:</p>
        <ul className="help-list">
          <li><strong>Men’s Advice Line (UK):</strong> 0808 801 0327</li>
          <li><strong>ManKind Initiative (UK):</strong> 01823 334244</li>
          <li><strong>National DV Hotline (US):</strong> 1-800-799-7233</li>
          <li><strong>Lagos DSVA:</strong> +234 909 283 5000</li>
        </ul>
        <Link
          href="/contact"
          style={{
            display: 'inline-block',
            backgroundColor: '#2c3e50',
            color: '#fff',
            padding: '10px 20px',
            textDecoration: 'none',
            borderRadius: '4px',
            marginTop: '20px',
          }}
        >
          Contact Us for Further Guidance
        </Link>
      </section>
    </>
  )
}
