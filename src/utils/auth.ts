export const TokenManager = {
  setToken: (token: string) => {
    localStorage.setItem('auth_token', token);
  },
  
  getToken: (): string | null => {
    return localStorage.getItem('auth_token');
  },
  
  removeToken: () => {
    localStorage.removeItem('auth_token');
  },
  
  isTokenExpired: (token: string): boolean => {
    try {
      // 解析 JWT 并检查过期时间
      // 这里简化处理，实际项目中应正确解析JWT
      return false; // 简化示例
    } catch {
      return true;
    }
  }
};