cat << 'EOF' > src/app/api/forum/[id]/route.ts
import { NextResponse } from 'next/server'
import mongoose from 'mongoose'
import { connectDB } from '@/app/utils/db'

// Example schema from your code
const postSchema = new mongoose.Schema({
  title: String,
  body: String,
  comments: [{ text: String, createdAt: Date }],
  createdAt: { type: Date, default: Date.now },
})
const Post = mongoose.models.Post || mongoose.model('Post', postSchema)

export async function DELETE(request: Request, { params }: { params: { id: string } }) {
  try {
    await connectDB()
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
EOF
