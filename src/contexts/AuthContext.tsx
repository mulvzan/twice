import { createContext, useContext, ReactNode, useState, useEffect } from 'react';
import { User } from '../lib/api';

interface AuthContextType {
  user: User | null;
  login: (credentials: { username: string; password: string }) => Promise<void>;
  logout: () => void;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    // 尝试从本地存储恢复用户状态
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser));
      } catch {
        // 如果解析失败，清除无效数据
        localStorage.removeItem('user');
      }
    }
  }, []);

  const login = async (credentials: { username: string; password: string }) => {
    // 这里应该调用实际的登录API
    // 模拟登录过程
    const userData = {
      id: 1,
      username: credentials.username,
      email: `${credentials.username}@example.com`,
      avatar: "https://pbs.twimg.com/profile_images/1640574015516594177/JHuG9Yl6_400x400.jpg"
    };
    
    setUser(userData);
    localStorage.setItem('user', JSON.stringify(userData));
    localStorage.setItem('token', 'mock-jwt-token');
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
    localStorage.removeItem('token');
  };

  const isAuthenticated = !!user;

  return (
    <AuthContext.Provider value={{ user, login, logout, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};