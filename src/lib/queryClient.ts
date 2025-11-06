import { QueryClient } from '@tanstack/react-query';

// 创建 Query Client 实例
export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // 数据保持新鲜的时间（5分钟）
      staleTime: 5 * 60 * 1000,
      // 缓存时间（10分钟）
      gcTime: 10 * 60 * 1000,
      // 窗口重新获得焦点时重新获取数据
      refetchOnWindowFocus: false,
      // 重试次数
      retry: 1,
    },
    mutations: {
      // 变更失败时重试次数
      retry: 1,
    },
  },
});