export const config = {
  apiUrl: import.meta.env.VITE_API_URL || 'http://localhost:3000/api',
  enableMock: import.meta.env.VITE_ENABLE_MOCK === 'true',
  debugMode: import.meta.env.DEV,
};