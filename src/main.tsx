import { createRoot } from 'react-dom/client'
import { QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { queryClient } from './lib/queryClient'
import Router from './router.tsx'
import { AuthProvider } from './contexts/AuthContext'

// 不使用 ! 会报错，因为 createRoot 不接受 null
// createRoot(document.getElementById('root')).render(<Router />)

// 使用 ! 告诉 TypeScript 我们确定这个元素存在
createRoot(document.getElementById('root')!).render(
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <Router />
      <ReactQueryDevtools initialIsOpen={false} />
    </AuthProvider>
  </QueryClientProvider>
)
