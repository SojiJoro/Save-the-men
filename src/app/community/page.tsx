// app/community/page.tsx
'use client'

import { useEffect } from 'react'

export default function CommunityPage() {
  // Replace with your actual Disqus shortname
  const DISQUS_SHORTNAME = 'save-the-men' // e.g. 'save-the-men' if your Disqus URL is https://save-the-men.disqus.com

  // The canonical URL for this page on your live site:
  const PAGE_URL = 'https://save-the-men.vercel.app/community'
  
  // A unique identifier for this thread (can be any string)
  const PAGE_IDENTIFIER = 'community-page'

  useEffect(() => {
    // If Disqus is already loaded, reset it with new config
    if (window.DISQUS) {
      window.DISQUS.reset({
        reload: true,
        config: function () {
          this.page.url = PAGE_URL
          this.page.identifier = PAGE_IDENTIFIER
        },
      })
    } else {
      // Otherwise, create a new Disqus <script>
      const d = document
      const s = d.createElement('script')
      s.src = `https://${DISQUS_SHORTNAME}.disqus.com/embed.js`
      s.setAttribute('data-timestamp', +new Date().toString())
      ;(d.head || d.body).appendChild(s)
    }
  }, [DISQUS_SHORTNAME, PAGE_URL, PAGE_IDENTIFIER])

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

      {/* DISQUS COMMENT SECTION */}
      <section style={{ marginTop: '40px' }}>
        <h2>Community Forum</h2>
        <p style={{ fontSize: '0.9rem', color: '#555' }}>
          Discuss, ask questions, or share your story below. Sign in via Disqus, Facebook, or Twitter.
        </p>
        <div id="disqus_thread" style={{ marginTop: '20px' }} />
      </section>
    </div>
  )
}
