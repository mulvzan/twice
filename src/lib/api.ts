// 模拟 API 延迟
const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

// 定义数据类型
export interface User {
  id: number;
  username: string;
  email: string;
  avatar?: string;
}
export interface UserInfo {
  key: number;
  name: string;
  age: number;
  address: string;
}
export interface Todo {
  id: number;
  title: string;
  done: boolean;
  userId: number;
  createdAt: string;
}

export interface LoginCredentials {
  username: string;
  password: string;
}

export interface LoginResponse {
  user: User;
  token: string;
}

export interface ContactMessage {
  name: string;
  email: string;
  message: string;
}

// 模拟数据
let mockTodos: Todo[] = [
  {
    id: 1,
    title: "学习 React Query",
    done: false,
    userId: 1,
    createdAt: new Date().toISOString(),
  },
  {
    id: 2,
    title: "完成项目重构",
    done: true,
    userId: 1,
    createdAt: new Date().toISOString(),
  },
];

let nextTodoId = 3;

// API 函数
export const api = {
  // 认证相关
  login: async (credentials: LoginCredentials): Promise<LoginResponse> => {
    await delay(1000); // 模拟网络延迟

    if (credentials.username === "admin" && credentials.password === "123456") {
      return {
        user: {
          id: 1,
          username: credentials.username,
          email: "admin@example.com",
          avatar:
            "https://pbs.twimg.com/profile_images/1640574015516594177/JHuG9Yl6_400x400.jpg",
        },
        token: "mock-jwt-token",
      };
    }

    throw new Error("用户名或密码错误");
  },

  // Todo 相关
  getTodos: async (): Promise<Todo[]> => {
    await delay(500);
    return [...mockTodos];
  },

  getUserInfos: async (): Promise<UserInfo[]> => {
    const response = await fetch("http://localhost:3000/users");
    const data = await response.json();
    return data;
  },

  createTodo: async (title: string): Promise<Todo> => {
    await delay(300);

    const newTodo: Todo = {
      id: nextTodoId++,
      title,
      done: false,
      userId: 1,
      createdAt: new Date().toISOString(),
    };

    mockTodos.push(newTodo);
    return newTodo;
  },

  updateTodo: async (id: number, updates: Partial<Todo>): Promise<Todo> => {
    await delay(300);

    const todoIndex = mockTodos.findIndex((todo) => todo.id === id);
    if (todoIndex === -1) {
      throw new Error("Todo not found");
    }

    mockTodos[todoIndex] = { ...mockTodos[todoIndex], ...updates };
    return mockTodos[todoIndex];
  },

  deleteTodo: async (id: number): Promise<void> => {
    await delay(300);

    const todoIndex = mockTodos.findIndex((todo) => todo.id === id);
    if (todoIndex === -1) {
      throw new Error("Todo not found");
    }

    mockTodos.splice(todoIndex, 1);
  },

  // 联系表单
  sendContactMessage: async (
    message: ContactMessage,
  ): Promise<{ success: boolean }> => {
    await delay(1500);

    // 模拟偶尔的失败
    if (Math.random() < 0.1) {
      throw new Error("发送失败，请稍后重试");
    }

    console.log("Contact message sent:", message);
    return { success: true };
  },

  // 获取用户信息
  getUser: async (id: number): Promise<User> => {
    await delay(200);

    return {
      id,
      username: "admin",
      email: "admin@example.com",
      avatar:
        "https://pbs.twimg.com/profile_images/1640574015516594177/JHuG9Yl6_400x400.jpg",
    };
  },

  // 添加统一错误处理
  handleApiError: (error: unknown): string => {
    if (error instanceof Error) {
      return error.message;
    }
    return "未知错误，请重试";
  },
};
