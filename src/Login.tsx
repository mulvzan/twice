import { Card, Input, Button } from "antd";
import { useNavigate } from "react-router-dom";
import { useForm, Controller } from "react-hook-form";

interface LoginFormValues {
  username: string;
  password: string;
}

const Login: React.FC = () => {
  const navigate = useNavigate();
  
  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting }
  } = useForm<LoginFormValues>({
    defaultValues: {
      username: "",
      password: ""
    }
  });

  const onSubmit = (data: LoginFormValues): void => {
    console.log("Login values:", data);
    // 这里可以添加登录逻辑，比如验证用户名密码
    navigate("/");
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
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
            loading={isSubmitting}
            className="mt-4"
          >
            {isSubmitting ? "Logging in..." : "Login"}
          </Button>
        </form>
      </Card>
    </div>
  );
};

export default Login;
