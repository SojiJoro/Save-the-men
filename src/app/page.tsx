// app/page.tsx
import Image from 'next/image'
import Link from 'next/link'

export default function HomePage() {
  return (
    <div>
      {/* Hero Section */}
      <section style={{ position: 'relative', textAlign: 'center' }}>
        <Image
          src="/hero-man.jpg"
          alt="Man looking into the distance"
          width={1920}
          height={800}
          style={{ width: '100%', height: 'auto', objectFit: 'cover', maxHeight: '500px' }}
        />
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          color: '#fff',
          backgroundColor: 'rgba(0,0,0,0.4)',
          padding: '20px',
          borderRadius: '5px'
        }}>
          <h1 style={{ fontSize: '2rem', margin: '0 0 10px' }}>
            Helping Nigerian Men Escape Domestic Abuse
          </h1>
          <p style={{ marginBottom: '10px' }}>
            We provide confidential help and support for men facing domestic violence abroad.
          </p>
          <Link href="/contact" style={{
            backgroundColor: '#FFA726',
            color: '#fff',
            padding: '10px 20px',
            textDecoration: 'none',
            borderRadius: '4px'
          }}>
            Get Help Now
          </Link>
        </div>
      </section>

      {/* Introduction Section */}
      <section style={{ maxWidth: '1200px', margin: '40px auto', padding: '0 20px' }}>
        <h2 style={{ fontSize: '1.8rem', marginBottom: '20px' }}>Welcome to Save The Men</h2>
        <p style={{ lineHeight: '1.6' }}>
          We understand that Nigerian men living abroad may face unique challenges, including domestic abuse,
          cultural stigma, and legal complexities. Our mission is to provide resources, guidance, and a safe
          community for men who need help. Whether you are seeking emotional support, legal information, or
          a listening ear, we are here for you.
        </p>
        <p style={{ lineHeight: '1.6', marginTop: '10px' }}>
          <strong>Remember:</strong> You are not alone. Speak up, reach out, and let us support you in your journey.
        </p>
      </section>

      {/* Need Help / Contact Section */}
      <section style={{ backgroundColor: '#f9f9f9', padding: '40px 20px', textAlign: 'center' }}>
        <h2 style={{ fontSize: '1.6rem', marginBottom: '20px' }}>Need Help Right Away?</h2>
        <p style={{ marginBottom: '10px' }}>
          Call emergency services if you are in immediate danger:
        </p>
        <ul style={{ listStyle: 'none', padding: 0, marginBottom: '20px' }}>
          <li><strong>UK:</strong> 999</li>
          <li><strong>Nigeria:</strong> 112 (or 767 in Lagos)</li>
          <li><strong>US/Canada:</strong> 911</li>
          <li><strong>Europe:</strong> 112</li>
        </ul>
        <p style={{ marginBottom: '20px' }}>
          Or reach out to our recommended helplines for men:
        </p>
        <ul style={{ listStyle: 'none', padding: 0, marginBottom: '30px' }}>
          <li><strong>Men’s Advice Line (UK):</strong> 0808 801 0327</li>
          <li><strong>ManKind Initiative (UK):</strong> 01823 334244</li>
          <li><strong>National DV Hotline (US):</strong> 1-800-799-7233</li>
          <li><strong>Lagos DSVA:</strong> +234 909 283 5000</li>
        </ul>

        <Link href="/contact" style={{
          display: 'inline-block',
          backgroundColor: '#0D4A71',
          color: '#fff',
          padding: '10px 20px',
          textDecoration: 'none',
          borderRadius: '4px'
        }}>
          Contact Us for Further Guidance
        </Link>
      </section>
    </div>
  )
}
