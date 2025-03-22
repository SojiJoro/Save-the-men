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
            Helping Nigerian Men in the Diaspora
          </h1>
          <p style={{ marginBottom: '20px' }}>
            Inspired by discussions and calls for men to speak up, we provide confidential support and resources.
          </p>
          <Link
            href="/contact"
            style={{
              backgroundColor: '#e58406',
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
          We noticed a surge of conversations  highlighting how Nigerian men abroad often
          feel unheard—especially when dealing with domestic violence or legal battles. After seeing
          tweets calling for men-focused support, we decided to take action.
        </p>
        <p>
          Our platform provides culturally relevant guidance, legal signposting, mental health resources,
          and a safe community where Nigerian men can speak openly. Whether you’re in the UK, Portugal,
          the US, or elsewhere, our mission is to remind you: <strong>You are not alone.</strong>
        </p>
      </section>

      {/* NEED HELP RIGHT AWAY? SECTION */}
      <section className="help-section">
        <h2>Need Help Right Away?</h2>
        <p>If you’re in immediate danger, call emergency services:</p>
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
