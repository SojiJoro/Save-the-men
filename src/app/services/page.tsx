// app/services/page.tsx
export default function ServicesPage() {
    return (
      <div className="intro-section">
        <h1>Our Services</h1>
        <p style={{ marginTop: '20px' }}>
          We understand every man’s situation is unique. That’s why we offer multiple pathways to help:
        </p>
  
        <ul style={{ marginTop: '20px', lineHeight: '1.8' }}>
          <li>
            <strong>Confidential Helpline Referrals:</strong> 
            We can direct you to helplines in the UK, Nigeria, the US, or elsewhere that understand male survivors.
          </li>
          <li>
            <strong>Legal Information & Signposting:</strong> 
            We provide basic guidance on immigration, child custody, or false allegations, plus referrals to
            qualified solicitors. <em>We are not a law firm.</em>
          </li>
          <li>
            <strong>Mental Health Support:</strong> 
            Cultural stigma often stops men from seeking therapy. We connect you to culturally aware counsellors
            and mental health networks.
          </li>
          <li>
            <strong>Advocacy & Mediation:</strong> 
            For certain cases, we partner with diaspora advocates or community leaders who can help mediate or
            guide you through social services.
          </li>
          <li>
            <strong>Workshops & Seminars:</strong> 
            Check our Community page for events on healthy relationships, diaspora parenting, and legal Q&As.
          </li>
        </ul>
  
        <p style={{ marginTop: '10px' }}>
          <strong>Disclaimer:</strong> We are <em>not</em> a licensed law firm or medical service. Our role is to
          guide you to the right experts and offer peer support. We cannot guarantee specific outcomes, nor
          do we take legal responsibility for any decisions you make based on our suggestions.
        </p>
      </div>
    )
  }
  