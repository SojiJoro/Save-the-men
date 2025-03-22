// app/contact/page.tsx
'use client'

import { useState } from 'react'

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [response, setResponse] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // For now, just show a success message
    setResponse('Thank you for contacting us. We will get back to you soon.')
    // Reset the form
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <div className="form-container">
      <h1>Contact Us</h1>
      <p style={{ marginTop: '20px' }}>
        If you have questions, need guidance, or want to share your story, please fill out the form below.
        We respect your privacy and will keep your details confidential.
      </p>

      <form onSubmit={handleSubmit}>
        <div>
          <label>Name</label><br />
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Email</label><br />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Message</label><br />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={5}
          />
        </div>
        <button type="submit">Send</button>
      </form>

      {response && (
        <p style={{ marginTop: '20px', color: 'green' }}>
          {response}
        </p>
      )}

      <p style={{ marginTop: '20px', fontSize: '0.9rem', color: '#666' }}>
        <strong>Disclaimer:</strong> By submitting this form, you acknowledge that Save The Men is not liable
        for any decisions you make based on our guidance. We provide support and referrals only, and do not
        replace professional legal or medical advice.
      </p>
    </div>
  )
}
