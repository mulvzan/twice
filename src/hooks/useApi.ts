import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { api, type Todo, type UserInfo } from "../lib/api";

// Query Keys - 用于缓存管理
export const queryKeys = {
  todos: ["todos"] as const,
  user: (id: number) => ["user", id] as const,
  userinfos: ["userinfos"] as const,
};

// Todo 相关 hooks
export const useTodos = () => {
  return useQuery({
    queryKey: queryKeys.todos,
    queryFn: api.getTodos,
  });
};
export const useUserInfo = () => {
  return useQuery({
    queryKey: queryKeys.userinfos,
    queryFn: api.getUserInfos,
  });
};
export const useCreateTodo = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: api.createTodo,
    onSuccess: (newTodo) => {
      // 乐观更新：立即更新缓存
      queryClient.setQueryData<Todo[]>(queryKeys.todos, (oldTodos) => {
        return oldTodos ? [...oldTodos, newTodo] : [newTodo];
      });
    },
    onError: () => {
      // 发生错误时重新获取数据
      queryClient.invalidateQueries({ queryKey: queryKeys.todos });
    },
  });
};

export const useUpdateTodo = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, updates }: { id: number; updates: Partial<Todo> }) =>
      api.updateTodo(id, updates),
    onSuccess: (updatedTodo: Todo) => {
      // 更新缓存中的特定 Todo
      queryClient.setQueryData<Todo[]>(queryKeys.todos, (oldTodos) => {
        return (
          oldTodos?.map((todo) =>
            todo.id === updatedTodo.id ? updatedTodo : todo
          ) || []
        );
      });
    },
    onError: () => {
      queryClient.invalidateQueries({ queryKey: queryKeys.todos });
    },
  });
};

export const useDeleteTodo = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: api.deleteTodo,
    onSuccess: (_, deletedId) => {
      // 从缓存中移除已删除的 Todo
      queryClient.setQueryData<Todo[]>(queryKeys.todos, (oldTodos) => {
        return oldTodos?.filter((todo) => todo.id !== deletedId) || [];
      });
    },
    onError: () => {
      queryClient.invalidateQueries({ queryKey: queryKeys.todos });
    },
  });
};

// 认证相关 hooks
export const useLogin = () => {
  return useMutation({
    mutationFn: api.login,
    onSuccess: (data) => {
      // 登录成功后可以缓存用户信息
      console.log("Login successful:", data);
      // 这里可以保存 token 到 localStorage 等
      if (
        data &&
        typeof data === "object" &&
        "token" in data &&
        "user" in data
      ) {
        localStorage.setItem("token", data.token as string);
        localStorage.setItem("user", JSON.stringify(data.user));
      }
    },
  });
};

// 用户信息 hooks
export const useUser = (id: number) => {
  return useQuery({
    queryKey: queryKeys.user(id),
    queryFn: () => api.getUser(id),
    enabled: !!id, // 只有当 id 存在时才执行查询
  });
};

// 联系表单 hooks
export const useSendContactMessage = () => {
  return useMutation({
    mutationFn: api.sendContactMessage,
    onSuccess: () => {
      console.log("Contact message sent successfully");
    },
  });
};
