// app/resources/page.tsx
export default function ResourcesPage() {
    return (
      <div className="intro-section">
        <h1>Resources</h1>
        <p style={{ marginTop: '20px' }}>
          Below are some articles, downloadable guides, and external links to help you understand
          your rights and options as a Nigerian man abroad.
        </p>
  
        <h2 style={{ marginTop: '30px' }}>Downloadable Guides</h2>
        <ul style={{ marginTop: '10px', lineHeight: '1.8' }}>
          <li><strong>Africentric Parenting Abroad (PDF)</strong> – Coming Soon</li>
          <li><strong>Domestic Abuse & Immigration Basics (PDF)</strong> – Coming Soon</li>
        </ul>
  
        <h2 style={{ marginTop: '30px' }}>External Links</h2>
        <ul style={{ marginTop: '10px', lineHeight: '1.8' }}>
          <li>
            <strong>Men’s Advice Line (UK):</strong>
            {' '}<a href="https://mensadviceline.org.uk" target="_blank" rel="noopener noreferrer">
              mensadviceline.org.uk
            </a>
          </li>
          <li>
            <strong>ManKind Initiative (UK):</strong>
            {' '}<a href="https://mankind.org.uk" target="_blank" rel="noopener noreferrer">
              mankind.org.uk
            </a>
          </li>
          <li>
            <strong>Lagos State DSVA:</strong>
            {' '}<a href="https://dsvrtlagos.org" target="_blank" rel="noopener noreferrer">
              dsvrtlagos.org
            </a>
          </li>
        </ul>
  
        <p style={{ marginTop: '20px' }}>
          We are continuously updating our resource library. If you know of any helpful materials,
          please <a href="/contact">contact us</a>.
        </p>
      </div>
    )
  }
  