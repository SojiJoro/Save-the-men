// app/services/page.tsx
export default function ServicesPage() {
    return (
      <div style={{ maxWidth: '1200px', margin: '40px auto', padding: '0 20px' }}>
        <h1>Our Services</h1>
        <p style={{ marginTop: '20px' }}>
          We offer a range of resources and guidance to support Nigerian men abroad, especially
          those facing domestic abuse or difficult home situations.
        </p>
        <ul style={{ marginTop: '20px', lineHeight: '1.8' }}>
          <li><strong>Confidential Helpline Referrals:</strong> We connect you with trusted helplines for immediate crisis support.</li>
          <li><strong>Legal Information & Signposting:</strong> Basic guidance on immigration, family law, and child custody.</li>
          <li><strong>Mental Health Support:</strong> Referral to culturally sensitive counsellors and therapists.</li>
          <li><strong>Advocacy & Mediation:</strong> In some cases, we link you with local advocacy groups that can mediate or guide you through legal proceedings.</li>
          <li><strong>Community Events & Workshops:</strong> Regular sessions on healthy relationships, stress management, and diaspora living.</li>
        </ul>
        <p style={{ marginTop: '10px' }}>
          Note that we are not a licensed legal or medical service. We aim to direct you to
          the right professionals who can help with your situation.
        </p>
      </div>
    )
  }
  