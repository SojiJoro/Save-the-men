import { NextResponse } from 'next/server'
import mongoose from 'mongoose'
import { connectDB } from '@/app/utils/db'

// Example schema for your forum posts
const postSchema = new mongoose.Schema({
  title: String,
  body: String,
  comments: [{ text: String, createdAt: Date }],
  createdAt: { type: Date, default: Date.now },
})
// Use existing model if it exists, otherwise create it
const Post = mongoose.models.Post || mongoose.model('Post', postSchema)

/**
 * DELETE /api/forum/[id]
 * - Checks admin key from request.headers.get('x-admin-key')
 * - If matches process.env.ADMIN_KEY, deletes the post with the given id
 */
export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    // 1) Check the admin key
    const adminKey = request.headers.get('x-admin-key')
    if (!adminKey || adminKey !== process.env.ADMIN_KEY) {
      return NextResponse.json({ error: 'Forbidden: Admin key invalid' }, { status: 403 })
    }

    // 2) Connect to DB
    await connectDB()

    // 3) Delete the post
    const { id } = params
    const deletedPost = await Post.findByIdAndDelete(id)
    if (!deletedPost) {
      return NextResponse.json({ error: 'Post not found' }, { status: 404 })
    }

    return NextResponse.json({ success: true, deletedPost })
  } catch (error) {
    console.error('DELETE /api/forum/[id] error:', error)
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}
