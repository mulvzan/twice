import { useState } from "react";
import { Card, Button, Input, Checkbox, message } from "antd";
import { useForm, Controller } from "react-hook-form";

// 定义 Todo 项的类型
interface TodoItem {
  id: number;
  title: string;
  done: boolean;
}

// 定义表单数据类型
interface TodoFormData {
  title: string;
}

const tos: TodoItem[] = [
  {
    id: 1,
    title: "钱",
    done: false,
  },
  {
    id: 2,
    title: "你好",
    done: true,
  },
];

const Todo: React.FC = () => {
  const [messageApi, contextHolder] = message.useMessage();
  const info = (action: string): void => {
    messageApi.info(action);
  };
  const [todos, setTodos] = useState<TodoItem[]>(tos);
  const [nextId, setNextId] = useState<number>(tos.length + 1);

  // React Hook Form 设置
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<TodoFormData>({
    defaultValues: {
      title: ""
    }
  });

  const onSubmit = (data: TodoFormData): void => {
    if (!data.title.trim()) {
      return;
    }

    setTodos([
      ...todos,
      {
        id: nextId,
        title: data.title.trim(),
        done: false,
      },
    ]);
    setNextId(nextId + 1);
    info("添加成功");
    reset(); // 重置表单
  }; // 用于生成唯一ID
  return (
    <div className="h-screen flex  justify-center">
      <div className="mt-10 h-fit flex flex-col items-center shadow-lg">
        <Card>
          <div className="mb-4">
            <h1 className="mb-4 font-bold">待办事项</h1>
            <form onSubmit={handleSubmit(onSubmit)} className="flex justify-center gap-4">
              <div className="flex-1">
                <Controller
                  name="title"
                  control={control}
                  rules={{
                    required: "请输入待办事项",
                    minLength: {
                      value: 1,
                      message: "待办事项不能为空"
                    }
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
                  <p className="text-red-500 text-xs mt-1">{errors.title.message}</p>
                )}
              </div>
              {contextHolder}
              <Button
                type="primary"
                htmlType="submit"
              >
                添加
              </Button>
            </form>
          </div>

          <ul>
            {todos.map((todo) => (
              <li
                key={todo.id}
                className="mb-2 flex justify-between items-center"
              >
                <Checkbox
                  onClick={() => {
                    setTodos(
                      todos.map((item) => {
                        if (item.id === todo.id) {
                          return {
                            ...item,
                            done: !item.done,
                          };
                        }
                        return item;
                      })
                    );
                  }}
                  checked={todo.done}
                />
                <span>{todo.title}</span>
                {contextHolder}
                <Button
                  danger
                  onClick={() => {
                    setTodos(todos.filter((item) => item.id !== todo.id));
                    info("删除成功");
                  }}
                >
                  删除
                </Button>
              </li>
            ))}
          </ul>
        </Card>
      </div>
    </div>
  );
};
export default Todo;
