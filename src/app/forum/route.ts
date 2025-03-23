import { NextResponse } from 'next/server'
import mongoose from 'mongoose'
import { connectDB } from '@/app/utils/db'

const postSchema = new mongoose.Schema({
  title: String,
  body: String,
  comments: [
    {
      text: String,
      createdAt: Date
    }
  ],
  createdAt: { type: Date, default: Date.now }
})
const Post = mongoose.models.Post || mongoose.model('Post', postSchema)

export async function GET() {
  await connectDB()
  const posts = await Post.find().sort({ createdAt: -1 })
  return NextResponse.json(posts)
}

export async function POST(request: Request) {
  await connectDB()
  const { title, body } = await request.json()
  if (!title || !body) {
    return NextResponse.json({ error: 'Invalid data' }, { status: 400 })
  }
  const newPost = await Post.create({ title, body })
  return NextResponse.json(newPost)
}
