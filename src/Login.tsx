import { Card, Input, Button, message } from "antd";
import { useNavigate } from "react-router-dom";
import { useForm, Controller } from "react-hook-form";
import { useLogin } from "./hooks/useApi";
import { MESSAGES } from "./constants/messages";

interface LoginFormValues {
  username: string;
  password: string;
}

const Login: React.FC = () => {
  const navigate = useNavigate();
  const [messageApi, contextHolder] = message.useMessage();
  const loginMutation = useLogin();

  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm<LoginFormValues>({
    defaultValues: {
      username: "",
      password: ""
    }
  });

  const onSubmit = async (data: LoginFormValues): Promise<void> => {
    try {
      await loginMutation.mutateAsync(data);
      messageApi.success(MESSAGES.AUTH.SUCCESS);

      // 延迟导航，让用户看到成功消息
      setTimeout(() => {
        navigate("/");
      }, 1000);
    } catch (error) {
      messageApi.error(error instanceof Error ? error.message : MESSAGES.AUTH.ERROR);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      {contextHolder}
      <Card className="w-[350px] text-center bg-white shadow-lg">
        <h1 className="mb-6">Login</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label className="block text-left mb-1 text-sm font-medium">
              Username
            </label>
            <Controller
              name="username"
              control={control}
              rules={{
                required: "Username is required",
                minLength: {
                  value: 3,
                  message: "Username must be at least 3 characters"
                }
              }}
              render={({ field }) => (
                <Input
                  {...field}
                  placeholder="Enter your username"
                  status={errors.username ? "error" : ""}
                />
              )}
            />
            {errors.username && (
              <p className="text-red-500 text-xs mt-1">{errors.username.message}</p>
            )}
          </div>

          <div>
            <label className="block text-left mb-1 text-sm font-medium">
              Password
            </label>
            <Controller
              name="password"
              control={control}
              rules={{
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters"
                }
              }}
              render={({ field }) => (
                <Input.Password
                  {...field}
                  placeholder="Enter your password"
                  status={errors.password ? "error" : ""}
                />
              )}
            />
            {errors.password && (
              <p className="text-red-500 text-xs mt-1">{errors.password.message}</p>
            )}
          </div>

          <Button
            type="primary"
            htmlType="submit"
            block
            loading={loginMutation.isPending}
            className="mt-4"
          >
            {loginMutation.isPending ? "Logging in..." : "Login"}
          </Button>
        </form>

        <div className="mt-4 text-xs text-gray-500">
          <p>测试账号: admin</p>
          <p>测试密码: 123456</p>
        </div>
      </Card>
    </div>
  );
};

export default Login;
