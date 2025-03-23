import { NextResponse } from 'next/server';
import mongoose from 'mongoose';
import { connectDB } from '@/app/utils/db';

// Example schema for forum posts
const postSchema = new mongoose.Schema({
    title: String,
    body: String,
    comments: [{ text: String, createdAt: Date }],
    createdAt: { type: Date, default: Date.now },
});
const Post = mongoose.models.Post || mongoose.model('Post', postSchema);

// GET: return all posts
export async function GET() {
    await connectDB();
    const posts = await Post.find().sort({ createdAt: -1 });
    return NextResponse.json(posts);
}

// POST: create a new post
export async function POST(request: Request) {
    await connectDB();
    const { title, body } = await request.json();
    if (!title?.trim() || !body?.trim()) {
        return NextResponse.json({ error: 'Invalid data' }, { status: 400 });
    }
    const newPost = await Post.create({ title, body });
    return NextResponse.json(newPost);
}