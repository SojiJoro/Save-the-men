// app/utils/db.ts
import mongoose from 'mongoose'

let isConnected = false

export async function connectDB() {
  if (isConnected) return
  if (!process.env.MONGODB_URI) {
    throw new Error('MONGODB_URI not found in environment variables')
  }
  await mongoose.connect(process.env.MONGODB_URI)
  isConnected = true
  console.log('MongoDB connected')
}
