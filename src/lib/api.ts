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

  getTodos: async (): Promise<Todo[]> => {
    const response = await fetch("/api/todos");
    const data = await response.json();
    return data;
  },

  getUserInfos: async (): Promise<UserInfo[]> => {
    const response = await fetch("/api/users");
    const data = await response.json();
    return data;
  },

  createUserInfo: async (userInfo: UserInfo): Promise<UserInfo> => {
    const response = await fetch("/api/newuser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userInfo),
    });
    const data = await response.json();
    return data;
  },

  createTodo: async (title: string): Promise<Todo> => {
    const todos = await api.getTodos();

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
    const todos = await api.getTodos();

    const todoIndex = todos.findIndex((todo) => todo.id === id);
    if (todoIndex === -1) {
      throw new Error("Todo not found");
    }

    todos[todoIndex] = { ...todos[todoIndex], ...updates };
    return todos[todoIndex];
  },

  deleteTodo: async (id: number): Promise<void> => {
    await delay(300);

    const todoIndex = todos.findIndex((todo) => todo.id === id);
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
