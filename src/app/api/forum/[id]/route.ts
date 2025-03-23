import { NextRequest, NextResponse } from 'next/server'
import mongoose from 'mongoose'
import { connectDB } from '@/app/utils/db'

// Example schema for forum posts
const postSchema = new mongoose.Schema({
  title: String,
  body: String,
  comments: [{ text: String, createdAt: Date }],
  createdAt: { type: Date, default: Date.now },
})
const Post = mongoose.models.Post || mongoose.model('Post', postSchema)

/**
 * DELETE /api/forum/[id]
 * - Checks x-admin-key in request headers vs process.env.ADMIN_KEY
 * - Deletes post by _id
 */
export async function DELETE(
  request: NextRequest,
  context: { params: { id: string } }
): Promise<NextResponse> {
  try {
    // 1) Destructure `id` from context.params
    const { id } = context.params

    // 2) Check admin key
    const adminKey = request.headers.get('x-admin-key')
    if (!adminKey || adminKey !== process.env.ADMIN_KEY) {
      return NextResponse.json(
        { error: 'Forbidden: Admin key invalid' },
        { status: 403 }
      )
    }

    // 3) Connect to MongoDB
    await connectDB()

    // 4) Attempt to delete post by _id
    const deletedPost = await Post.findByIdAndDelete(id)
    if (!deletedPost) {
      return NextResponse.json({ error: 'Post not found' }, { status: 404 })
    }

    return NextResponse.json({ success: true, deletedPost })
  } catch (error) {
    console.error('DELETE /api/forum/[id] error:', error)
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    )
  }
}
