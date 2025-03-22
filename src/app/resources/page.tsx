// app/resources/page.tsx
export default function ResourcesPage() {
    return (
      <div className="intro-section">
        <h1>Resources</h1>
        <p style={{ marginTop: '20px' }}>
          Below you’ll find articles, downloadable guides, and external links to help you navigate
          life abroad as a Nigerian man. We’re always adding more—feel free to contact us with suggestions.
        </p>
  
        <h2 style={{ marginTop: '30px' }}>Downloadable Guides</h2>
        <ul style={{ marginTop: '10px', lineHeight: '1.8' }}>
          <li><strong>Men’s Guide to Domestic Abuse & Immigration (PDF)</strong> – Coming Soon</li>
          <li><strong>Parenting Across Cultures: Tips for Nigerian Fathers Abroad (PDF)</strong> – Coming Soon</li>
        </ul>
  
        <h2 style={{ marginTop: '30px' }}>External Links</h2>
        <ul style={{ marginTop: '10px', lineHeight: '1.8' }}>
          <li>
            <strong>Men’s Advice Line (UK):</strong>{' '}
            <a href="https://mensadviceline.org.uk" target="_blank" rel="noopener noreferrer">
              mensadviceline.org.uk
            </a>
          </li>
          <li>
            <strong>ManKind Initiative (UK):</strong>{' '}
            <a href="https://mankind.org.uk" target="_blank" rel="noopener noreferrer">
              mankind.org.uk
            </a>
          </li>
          <li>
            <strong>Lagos State DSVA:</strong>{' '}
            <a href="https://dsvrtlagos.org" target="_blank" rel="noopener noreferrer">
              dsvrtlagos.org
            </a>
          </li>
        </ul>
  
        <p style={{ marginTop: '20px' }}>
          <em>Disclaimer:</em> These resources are provided for informational purposes. We do not own or
          control the content of external sites. Please seek professional advice for specific legal or
          medical matters.
        </p>
      </div>
    )
  }
  