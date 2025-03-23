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

export default function ForumNairalandStyle() {
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
      maxWidth: '1000px',
      margin: '20px auto',
      fontFamily: 'Verdana, sans-serif',
      color: '#000'
    }}>
      {/* HEADER-STYLE BANNER */}
      <div style={{
        backgroundColor: '#006600',
        color: '#fff',
        padding: '10px 15px',
        marginBottom: '20px'
      }}>
        <h1 style={{ margin: 0, fontSize: '1.5rem' }}>Anonymous Forum (Nairaland Style)</h1>
      </div>

      <div style={{ margin: '0 15px' }}>
        <p style={{ marginBottom: '5px', fontSize: '0.9rem' }}>
          <strong>Disclaimer:</strong> This forum is for anonymous sharing of diaspora experiences. 
          We store data in-memory, so posts vanish on refresh. We are not a crisis centre, law firm, or healthcare provider.
        </p>
        <p style={{ marginBottom: '15px', fontSize: '0.9rem' }}>
          <strong>Confidentiality:</strong> We do not store personal info or IP addresses. For urgent help,
          please contact local emergency services.
        </p>
      </div>

      {/* CREATE NEW POST */}
      <div style={{
        backgroundColor: '#f8f8f8',
        border: '1px solid #ccc',
        padding: '15px',
        margin: '0 15px 20px',
        borderRadius: '4px'
      }}>
        <h2 style={{ fontSize: '1.1rem', marginBottom: '10px', color: '#006600' }}>
          Create a New Post (Anonymous)
        </h2>
        <div style={{ marginBottom: '10px' }}>
          <label style={{ display: 'block', fontWeight: 'bold' }}>Title</label>
          <input
            type="text"
            value={title}
            onChange={e => setTitle(e.target.value)}
            style={{
              width: '100%',
              padding: '6px',
              border: '1px solid #ccc',
              borderRadius: '3px',
              marginTop: '5px'
            }}
            placeholder="Enter a brief title..."
          />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label style={{ display: 'block', fontWeight: 'bold' }}>Body</label>
          <textarea
            value={body}
            onChange={e => setBody(e.target.value)}
            rows={4}
            style={{
              width: '100%',
              padding: '6px',
              border: '1px solid #ccc',
              borderRadius: '3px',
              marginTop: '5px'
            }}
            placeholder="Share your experience..."
          />
        </div>
        <button
          onClick={handleNewPost}
          style={{
            backgroundColor: '#006600',
            color: '#fff',
            padding: '6px 12px',
            border: 'none',
            borderRadius: '3px',
            cursor: 'pointer',
            fontSize: '0.9rem',
            fontWeight: 'bold'
          }}
        >
          Post
        </button>
      </div>

      {/* POST LIST TABLE */}
      <div style={{ margin: '0 15px' }}>
        <h2 style={{ fontSize: '1.1rem', marginBottom: '10px', color: '#006600' }}>
          Recent Topics
        </h2>
        {posts.length === 0 ? (
          <p style={{ fontSize: '0.9rem' }}>No posts yet. Be the first to share your story.</p>
        ) : (
          <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '20px' }}>
            <thead>
              <tr style={{ backgroundColor: '#f0f0f0', borderBottom: '2px solid #ccc' }}>
                <th style={{ textAlign: 'left', padding: '8px' }}>Topic</th>
                <th style={{ textAlign: 'left', padding: '8px', width: '120px' }}>Comments</th>
                <th style={{ textAlign: 'left', padding: '8px', width: '200px' }}>Posted</th>
              </tr>
            </thead>
            <tbody>
              {posts.map((post) => (
                <ForumPostRow
                  key={post.id}
                  post={post}
                  commentText={commentText}
                  setCommentText={setCommentText}
                  handleNewComment={handleNewComment}
                />
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  )
}

/**
 * Renders each post as a row in the table, with a link-like title
 * that expands to show the body and comments (like Nairaland style).
 */
function ForumPostRow({
  post,
  commentText,
  setCommentText,
  handleNewComment
}: {
  post: Post
  commentText: string
  setCommentText: (val: string) => void
  handleNewComment: (postId: number) => void
}) {
  const [expanded, setExpanded] = useState(false)

  const toggleExpand = () => {
    setExpanded(!expanded)
  }

  return (
    <>
      <tr style={{ borderBottom: '1px solid #ddd' }}>
        <td style={{ padding: '8px', fontSize: '0.9rem' }}>
          <span
            style={{ color: '#006600', cursor: 'pointer', textDecoration: 'underline' }}
            onClick={toggleExpand}
          >
            {post.title}
          </span>
        </td>
        <td style={{ padding: '8px', fontSize: '0.9rem' }}>
          {post.comments.length}
        </td>
        <td style={{ padding: '8px', fontSize: '0.8rem', color: '#666' }}>
          {post.createdAt.toLocaleString()}
        </td>
      </tr>

      {/* If expanded, show post body + comment section below */}
      {expanded && (
        <tr>
          <td colSpan={3} style={{ padding: '8px', backgroundColor: '#fafafa' }}>
            <div style={{ marginBottom: '10px' }}>
              <p style={{ margin: 0, whiteSpace: 'pre-wrap', fontSize: '0.9rem' }}>{post.body}</p>
              <p style={{ fontSize: '0.8rem', color: '#999', marginTop: '5px' }}>
                Posted anonymously on {post.createdAt.toLocaleString()}
              </p>
            </div>

            {/* Comments */}
            <div style={{
              border: '1px solid #ddd',
              backgroundColor: '#fff',
              padding: '10px',
              borderRadius: '4px'
            }}>
              <h4 style={{ fontSize: '0.95rem', color: '#006600', marginBottom: '8px' }}>
                Comments ({post.comments.length})
              </h4>
              {post.comments.length === 0 && (
                <p style={{ fontSize: '0.85rem', color: '#666' }}>No comments yet.</p>
              )}
              {post.comments.map((c) => (
                <div key={c.id} style={{ marginBottom: '10px' }}>
                  <p style={{ margin: 0, fontSize: '0.9rem' }}>{c.text}</p>
                  <p style={{ fontSize: '0.75rem', color: '#999' }}>
                    Commented on {c.createdAt.toLocaleString()}
                  </p>
                  <hr style={{ border: 'none', borderTop: '1px solid #ccc', margin: '5px 0' }} />
                </div>
              ))}

              {/* New Comment */}
              <div style={{ marginTop: '10px' }}>
                <label style={{ display: 'block', fontSize: '0.85rem', marginBottom: '5px', fontWeight: 'bold' }}>
                  Add Comment:
                </label>
                <textarea
                  value={commentText}
                  onChange={(e) => setCommentText(e.target.value)}
                  rows={2}
                  style={{
                    width: '100%',
                    padding: '6px',
                    borderRadius: '3px',
                    border: '1px solid #ccc',
                    resize: 'vertical',
                    marginBottom: '5px'
                  }}
                />
                <button
                  onClick={() => handleNewComment(post.id)}
                  style={{
                    backgroundColor: '#006600',
                    color: '#fff',
                    padding: '5px 10px',
                    border: 'none',
                    borderRadius: '3px',
                    cursor: 'pointer',
                    fontSize: '0.85rem',
                    fontWeight: 'bold'
                  }}
                >
                  Submit
                </button>
              </div>
            </div>
          </td>
        </tr>
      )}
    </>
  )
}
