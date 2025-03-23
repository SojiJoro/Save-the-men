// app/forum/page.tsx
'use client'

import { useState } from 'react'

interface Post {
  id: number
  title: string
  body: string
  comments: Comment[]
  createdAt: Date
}

interface Comment {
  id: number
  text: string
  createdAt: Date
}

export default function ForumPage() {
  const [posts, setPosts] = useState<Post[]>([])
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')
  const [commentText, setCommentText] = useState('')

  // Create a new post
  const handleNewPost = () => {
    if (!title.trim() || !body.trim()) return
    const newPost: Post = {
      id: Date.now(), // ephemeral ID
      title,
      body,
      comments: [],
      createdAt: new Date(),
    }
    setPosts([newPost, ...posts])
    setTitle('')
    setBody('')
  }

  // Add a comment to a specific post
  const handleNewComment = (postId: number) => {
    if (!commentText.trim()) return
    const newComment: Comment = {
      id: Date.now(),
      text: commentText,
      createdAt: new Date(),
    }
    setPosts(prevPosts =>
      prevPosts.map(p => {
        if (p.id === postId) {
          return {
            ...p,
            comments: [...p.comments, newComment],
          }
        }
        return p
      })
    )
    setCommentText('')
  }

  return (
    <div style={{ maxWidth: '800px', margin: '40px auto', padding: '0 20px' }}>
      <h1>Anonymous Forum</h1>
      <p style={{ marginTop: '10px' }}>
        <strong>Disclaimer:</strong> This forum is for anonymous sharing of diaspora experiences. 
        Posts and comments are stored in-memory and will disappear on page refresh. 
        We are <em>not</em> a crisis centre, law firm, or healthcare provider.
      </p>
      <p style={{ marginTop: '10px' }}>
        <strong>Confidentiality:</strong> We do not store personal information or IP addresses here. 
        For urgent help, please contact local emergency services.
      </p>

      {/* New Post Form */}
      <div style={{ marginTop: '30px', background: '#f2f2f2', padding: '20px', borderRadius: '5px' }}>
        <h2>Create a New Post (Anonymous)</h2>
        <div style={{ marginBottom: '10px' }}>
          <label>Title</label><br />
          <input
            type="text"
            value={title}
            onChange={e => setTitle(e.target.value)}
            style={{ width: '100%', padding: '8px' }}
          />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label>Body</label><br />
          <textarea
            value={body}
            onChange={e => setBody(e.target.value)}
            rows={4}
            style={{ width: '100%', padding: '8px' }}
          />
        </div>
        <button onClick={handleNewPost} style={{ padding: '10px 20px', cursor: 'pointer' }}>
          Post
        </button>
      </div>

      {/* Display Posts */}
      <div style={{ marginTop: '30px' }}>
        <h2>Recent Posts</h2>
        {posts.length === 0 && <p>No posts yet. Be the first to share your story.</p>}
        {posts.map(post => (
          <div
            key={post.id}
            style={{
              background: '#fff',
              padding: '20px',
              borderRadius: '5px',
              marginTop: '20px',
              boxShadow: '0 0 5px rgba(0,0,0,0.1)',
            }}
          >
            <h3>{post.title}</h3>
            <p style={{ whiteSpace: 'pre-wrap' }}>{post.body}</p>
            <p style={{ fontSize: '0.8rem', color: '#666' }}>
              Posted anonymously on {post.createdAt.toLocaleString()}
            </p>

            {/* Comments Section */}
            <div style={{ marginTop: '10px', background: '#fafafa', padding: '10px', borderRadius: '5px' }}>
              <h4>Comments (Anonymous)</h4>
              {post.comments.map(comment => (
                <div key={comment.id} style={{ marginBottom: '10px' }}>
                  <p style={{ marginBottom: '5px' }}>{comment.text}</p>
                  <p style={{ fontSize: '0.8rem', color: '#666' }}>
                    Commented on {comment.createdAt.toLocaleString()}
                  </p>
                  <hr style={{ border: 'none', borderTop: '1px solid #ccc' }} />
                </div>
              ))}

              {/* New Comment Form */}
              <div style={{ marginTop: '10px' }}>
                <label>New Comment:</label><br />
                <textarea
                  value={commentText}
                  onChange={e => setCommentText(e.target.value)}
                  rows={2}
                  style={{ width: '100%', padding: '8px' }}
                />
                <button
                  onClick={() => handleNewComment(post.id)}
                  style={{ marginTop: '5px', padding: '8px 16px', cursor: 'pointer' }}
                >
                  Add Comment
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
