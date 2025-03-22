// app/community/page.tsx
export default function CommunityPage() {
  return (
    <div className="intro-section">
      <h1>Community & Events</h1>
      <p style={{ marginTop: '20px' }}>
        One of our goals is to foster a supportive brotherhood among Nigerian men in the diaspora.
        We host online and offline events where men can meet, share experiences, and learn from each other.
      </p>
      <h2 style={{ marginTop: '30px' }}>Upcoming Events</h2>
      <ul style={{ marginTop: '10px', lineHeight: '1.8' }}>
        <li><strong>Monthly Online Forum:</strong> Last Saturday of each month (Zoom). Topic: “Breaking the Silence: Finding Help.”</li>
        <li><strong>Legal Q&A Session:</strong> Quarterly webinar with volunteer solicitors discussing domestic abuse and immigration.</li>
        <li><strong>In-Person Meetup (London):</strong> A social gathering to share stories and connect with local resources.</li>
      </ul>
      <p style={{ marginTop: '10px' }}>
        Check back for updated schedules or join our mailing list to receive event reminders.
      </p>
    </div>
  )
}
