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
      id: Date.now(),
      title,
      body,
      comments: [],
      createdAt: new Date(),
    }
    setPosts([newPost, ...posts])
    setTitle('')
    setBody('')
  }

  // Add a comment
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
    <div style={{
      maxWidth: '900px',
      margin: '40px auto',
      padding: '0 20px',
      fontFamily: 'Arial, sans-serif'
    }}>
      <h1 style={{ fontSize: '2rem', marginBottom: '10px' }}>Anonymous Forum</h1>
      <p style={{ marginBottom: '5px', color: '#666' }}>
        <strong>Disclaimer:</strong> This forum is for anonymous sharing of diaspora experiences. Posts and
        comments are stored in-memory and will disappear on page refresh. We are not a crisis centre, law firm,
        or healthcare provider.
      </p>
      <p style={{ marginBottom: '20px', color: '#666' }}>
        <strong>Confidentiality:</strong> We do not store personal information or IP addresses here. For urgent help,
        please contact local emergency services.
      </p>

      {/* New Post Form */}
      <div style={{
        background: '#fff',
        padding: '20px',
        borderRadius: '8px',
        boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
        marginBottom: '30px'
      }}>
        <h2 style={{ fontSize: '1.4rem', marginBottom: '15px' }}>Create a New Post (Anonymous)</h2>
        <div style={{ marginBottom: '10px' }}>
          <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Title</label>
          <input
            type="text"
            value={title}
            onChange={e => setTitle(e.target.value)}
            style={{
              width: '100%',
              padding: '10px',
              borderRadius: '4px',
              border: '1px solid #ccc',
            }}
            placeholder="Enter a brief title..."
          />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Body</label>
          <textarea
            value={body}
            onChange={e => setBody(e.target.value)}
            rows={4}
            style={{
              width: '100%',
              padding: '10px',
              borderRadius: '4px',
              border: '1px solid #ccc',
              resize: 'vertical',
            }}
            placeholder="Share your experience or question..."
          />
        </div>
        <button
          onClick={handleNewPost}
          style={{
            backgroundColor: '#e58406',
            color: '#fff',
            padding: '10px 20px',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            fontWeight: 'bold',
            boxShadow: '0 2px 4px rgba(0,0,0,0.2)',
            transition: 'background-color 0.2s ease'
          }}
          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#cf7305')}
          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#e58406')}
        >
          Post
        </button>
      </div>

      {/* Display Posts */}
      <div>
        <h2 style={{ fontSize: '1.4rem', marginBottom: '10px' }}>Recent Posts</h2>
        {posts.length === 0 && (
          <p style={{ color: '#666' }}>No posts yet. Be the first to share your story.</p>
        )}
        {posts.map(post => (
          <div
            key={post.id}
            style={{
              background: '#fff',
              padding: '20px',
              borderRadius: '8px',
              boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
              marginBottom: '20px'
            }}
          >
            <h3 style={{ fontSize: '1.2rem', marginBottom: '5px' }}>{post.title}</h3>
            <p style={{ marginBottom: '10px', whiteSpace: 'pre-wrap' }}>{post.body}</p>
            <p style={{ fontSize: '0.85rem', color: '#999' }}>
              Posted anonymously on {post.createdAt.toLocaleString()}
            </p>

            {/* Comments Section */}
            <div
              style={{
                marginTop: '15px',
                background: '#fafafa',
                padding: '15px',
                borderRadius: '6px',
                border: '1px solid #eee'
              }}
            >
              <h4 style={{ fontSize: '1rem', marginBottom: '10px' }}>Comments (Anonymous)</h4>
              {post.comments.map(comment => (
                <div key={comment.id} style={{ marginBottom: '15px' }}>
                  <p style={{ marginBottom: '5px' }}>{comment.text}</p>
                  <p style={{ fontSize: '0.8rem', color: '#999' }}>
                    Commented on {comment.createdAt.toLocaleString()}
                  </p>
                  <hr style={{ border: 'none', borderTop: '1px solid #ccc', margin: '10px 0' }} />
                </div>
              ))}

              {/* New Comment Form */}
              <div>
                <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>
                  New Comment:
                </label>
                <textarea
                  value={commentText}
                  onChange={e => setCommentText(e.target.value)}
                  rows={2}
                  style={{
                    width: '100%',
                    padding: '8px',
                    borderRadius: '4px',
                    border: '1px solid #ccc',
                    resize: 'vertical'
                  }}
                  placeholder="Write your comment..."
                />
                <button
                  onClick={() => handleNewComment(post.id)}
                  style={{
                    marginTop: '10px',
                    backgroundColor: '#2c3e50',
                    color: '#fff',
                    padding: '8px 16px',
                    border: 'none',
                    borderRadius: '4px',
                    cursor: 'pointer',
                    fontWeight: 'bold',
                    boxShadow: '0 2px 4px rgba(0,0,0,0.2)',
                    transition: 'background-color 0.2s ease'
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#1f2d3b')}
                  onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#2c3e50')}
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
