import { useState } from "react";
import { Card, Button, Input, Checkbox } from "antd";

const tos = [
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

const Todo = () => {
  const [todos, setTodos] = useState(tos);
  const [inputValue, setInputValue] = useState("");
  return (
    <div className="h-full flex  justify-center">
      <div className="mt-10 h-fit flex flex-col items-center shadow-lg">
        <Card>
          <div className="mb-4">
            <h1 className="mb-4 font-bold">待办事项</h1>
            <div className="flex justify-center">
              <div className="mr-4">
                <Input
                  type="text"
                  placeholder="请输入待办事项"
                  value={inputValue}
                  onChange={(e) => {
                    setInputValue(e.target.value);
                  }}
                />
              </div>
              <Button type="primary"
                onClick={() => {
                  if (!inputValue.trim()) {
                    return;
                  }

                  setTodos([
                    ...todos,
                    {
                      id: todos.length + 1,
                      title: inputValue,
                      done: false,
                    },
                  ]);
                  setInputValue("");
                }}
              >
                添加
              </Button>
            </div>
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
                <Button
                  danger
                  onClick={() => {
                    setTodos(todos.filter((item) => item.id !== todo.id));
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
