// app/community/page.tsx
export default function CommunityPage() {
  return (
    <div className="intro-section">
      <h1>Community & Events</h1>
      <p style={{ marginTop: '20px' }}>
        A strong community can be a lifeline. We believe in the power of <strong>brotherhood</strong>—men
        helping men. Join us online or in person to share experiences, learn from experts, and make meaningful
        connections.
      </p>

      <h2 style={{ marginTop: '30px' }}>Upcoming Events</h2>
      <ul style={{ marginTop: '10px', lineHeight: '1.8' }}>
        <li>
          <strong>Monthly Online Forum:</strong> 
          Last Saturday of each month via Zoom. Topic: “Breaking the Silence—Real Stories of Nigerian Men Abroad.”
        </li>
        <li>
          <strong>Legal Q&A Session:</strong> 
          Quarterly webinar with volunteer solicitors to discuss domestic abuse and immigration.
        </li>
        <li>
          <strong>In-Person Meetup (London):</strong> 
          A social gathering to share stories and connect with local resources.
        </li>
        <li>
          <strong>Portugal Extension:</strong> 
          We’re planning a small meetup in Lisbon later this year, by popular request.
        </li>
      </ul>

      <p style={{ marginTop: '10px' }}>
        <strong>Join Our Community</strong>:
      </p>
      <ul style={{ marginTop: '10px', lineHeight: '1.8' }}>
        <li><strong>Mailing List:</strong> Sign up to get event reminders and new resources.</li>
        <li><strong>Private Groups:</strong> Ask us about WhatsApp or Telegram for discreet peer-to-peer chats.</li>
        <li><strong>Volunteering:</strong> We welcome legal, counselling, or advocacy skills to help men in crisis.</li>
      </ul>
    </div>
  )
}
