export {}

declare global {
  interface Window {
    DISQUS?: {
      reset: (config: {
        reload: boolean
        config: () => void
      }) => void
    }
  }
}
