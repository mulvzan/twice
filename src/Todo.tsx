import { Card, Button, Input, Checkbox, message, Spin, Alert } from "antd";
import { useForm, Controller } from "react-hook-form";
import { useTodos, useCreateTodo, useUpdateTodo, useDeleteTodo } from "./hooks/useApi";
import { MESSAGES } from "./constants/messages";

// 定义表单数据类型
interface TodoFormData {
  title: string;
}

// 加载状态组件
const TodoLoading = () => (
  <div className="h-screen flex justify-center items-center">
    <div className="text-center">
      <Spin size="large" />
      <p className="mt-4 text-gray-500">正在加载待办事项...</p>
    </div>
  </div>
);

// 错误状态组件
const TodoError = ({ error, onRetry }: { error: Error; onRetry: () => void }) => (
  <div className="h-screen flex justify-center items-center">
    <Alert
      message="加载失败"
      description={error.message}
      type="error"
      showIcon
      action={
        <Button size="small" danger onClick={onRetry}>
          重试
        </Button>
      }
    />
  </div>
);

const Todo: React.FC = () => {
  const [messageApi, contextHolder] = message.useMessage();

  // React Query hooks
  const { data: todos, isLoading, error, refetch } = useTodos();
  const createTodoMutation = useCreateTodo();
  const updateTodoMutation = useUpdateTodo();
  const deleteTodoMutation = useDeleteTodo();

  // React Hook Form 设置
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<TodoFormData>({
    defaultValues: {
      title: "",
    },
  });

  const onSubmit = async (data: TodoFormData): Promise<void> => {
    if (!data.title.trim()) {
      return;
    }

    try {
      await createTodoMutation.mutateAsync(data.title.trim());
      messageApi.success(MESSAGES.TODO.SUCCESS.CREATE);
      reset();
    } catch (error) {
      messageApi.error(MESSAGES.TODO.ERROR.CREATE);
    }
  };

  const handleToggleTodo = async (id: number, done: boolean) => {
    try {
      await updateTodoMutation.mutateAsync({ id, updates: { done } });
      messageApi.success(done ? "任务已完成" : "任务已重新开启");
    } catch (error) {
      messageApi.error(MESSAGES.TODO.ERROR.UPDATE);
    }
  };

  const handleDeleteTodo = async (id: number) => {
    try {
      await deleteTodoMutation.mutateAsync(id);
      messageApi.success(MESSAGES.TODO.SUCCESS.DELETE);
    } catch (error) {
      messageApi.error(MESSAGES.TODO.ERROR.DELETE);
    }
  };

  if (isLoading) {
    return <TodoLoading />;
  }

  if (error) {
    return <TodoError error={error} onRetry={refetch} />;
  }

  return (
    <div className="h-screen flex justify-center">
      <div className="mt-10 h-fit flex flex-col items-center shadow-lg">
        <Card>
          <div className="mb-4">
            <div className="flex justify-between items-center mb-4">
              <h1 className="font-bold">待办事项</h1>
              {(createTodoMutation.isPending ||
                updateTodoMutation.isPending ||
                deleteTodoMutation.isPending) && (
                <div className="flex items-center gap-2 text-blue-500 text-sm">
                  <Spin size="small" />
                  <span>同步中...</span>
                </div>
              )}
            </div>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex justify-center gap-4"
            >
              <div className="flex-1">
                <Controller
                  name="title"
                  control={control}
                  rules={{
                    required: "请输入待办事项",
                    minLength: {
                      value: 1,
                      message: "待办事项不能为空",
                    },
                  }}
                  render={({ field }) => (
                    <Input
                      {...field}
                      placeholder="请输入待办事项"
                      status={errors.title ? "error" : ""}
                    />
                  )}
                />
                {errors.title && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.title.message}
                  </p>
                )}
              </div>
              {contextHolder}
              <Button
                type="primary"
                htmlType="submit"
                loading={createTodoMutation.isPending}
                disabled={!errors.title && createTodoMutation.isPending}
              >
                {createTodoMutation.isPending ? "添加中..." : "添加"}
              </Button>
            </form>
          </div>

          <ul className="space-y-2">
            {todos?.length === 0 ? (
              <li className="text-center text-gray-500 py-8">
                暂无待办事项，点击上方添加按钮创建第一个任务吧！
              </li>
            ) : (
              todos?.map((todo) => (
                <li
                  key={todo.id}
                  className="mb-2 flex justify-between items-center p-3 border rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <Checkbox
                      checked={todo.done}
                      disabled={updateTodoMutation.isPending}
                      onChange={(e) =>
                        handleToggleTodo(todo.id, e.target.checked)
                      }
                    />
                    <span
                      className={`${
                        todo.done ? "line-through text-gray-500" : ""
                      } ${updateTodoMutation.isPending ? "opacity-50" : ""}`}
                    >
                      {todo.title}
                    </span>
                  </div>
                  <Button
                    danger
                    size="small"
                    loading={deleteTodoMutation.isPending}
                    disabled={updateTodoMutation.isPending}
                    onClick={() => handleDeleteTodo(todo.id)}
                  >
                    删除
                  </Button>
                </li>
              ))
            )}
          </ul>
        </Card>
      </div>
    </div>
  );
};
export default Todo;
