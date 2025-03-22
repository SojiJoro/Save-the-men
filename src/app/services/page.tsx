// app/services/page.tsx
export default function ServicesPage() {
    return (
      <div className="intro-section">
        <h1>Our Services</h1>
        <p style={{ marginTop: '20px' }}>
          We offer a range of resources and guidance to support Nigerian men abroad,
          especially those facing domestic abuse or challenging home situations.
        </p>
        <ul style={{ marginTop: '20px', lineHeight: '1.8' }}>
          <li><strong>Confidential Helpline Referrals:</strong> We connect you with trusted helplines for immediate crisis support.</li>
          <li><strong>Legal Information & Signposting:</strong> Basic guidance on immigration, family law, and child custody.</li>
          <li><strong>Mental Health Support:</strong> Referral to culturally sensitive counsellors and therapists.</li>
          <li><strong>Advocacy & Mediation:</strong> Linking you with local advocacy groups to guide you through legal proceedings.</li>
          <li><strong>Community Events & Workshops:</strong> Sessions on healthy relationships, stress management, and diaspora living.</li>
        </ul>
        <p style={{ marginTop: '10px' }}>
          Please note that we are not a licensed legal or medical service. We aim to direct you to
          the right professionals for your specific situation.
        </p>
      </div>
    )
  }
  