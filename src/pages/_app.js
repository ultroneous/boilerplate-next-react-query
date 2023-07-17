import queryClient from '@/services/react-query-instance'
import '@/styles/globals.css'
import { QueryClientProvider } from '@tanstack/react-query'

export default function App({ Component, pageProps }) {
  return (
    <QueryClientProvider client={queryClient}>
      <Component {...pageProps} />
    </QueryClientProvider>
  )
}
