import { Form, Card, Input, Button } from "antd";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = (values) => {
    // 这里可以添加登录逻辑，比如验证用户名密码
    console.log("Login values:", values);
    navigate("/");
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Card className="w-[350px] text-center bg-white shadow-lg">
        <h1 className="mb-6">Login</h1>
        <Form
          name="login"
          initialValues={{ remember: true }}
          layout="vertical"
          onFinish={handleLogin}
        >
          <Form.Item
            label="Username"
            name="username"
            rules={[{ required: true, message: "Please input your username!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" block>
              Login
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};

export default Login;
