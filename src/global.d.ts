// src/global.d.ts (example path)
export {}

declare global {
  interface Window {
    DISQUS?: {
      reset: (opts: {
        reload: boolean
        config: (this: { page: { url: string; identifier: string } }) => void
      }) => void
    }
  }
}
