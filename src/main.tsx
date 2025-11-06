import { createRoot } from 'react-dom/client'
import Router from './router.tsx'

// 不使用 ! 会报错，因为 createRoot 不接受 null
// createRoot(document.getElementById('root')).render(<Router />)

// 使用 ! 告诉 TypeScript 我们确定这个元素存在
createRoot(document.getElementById('root')!).render(
  <Router />
)
