import { Form, Card, Input, Button } from "antd";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const navigate = useNavigate();
  const handleLogin = () => {
    navigate("/");
  };
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Card className="w-350px  text-center bg-white shadow-lg">
        <h1 className="mb-6">Login</h1>
        <Form name="login" initialValues={{ remember: true }} layout="vertical">
          <Form.Item label="Username" name="username">
            <Input />
          </Form.Item>

          <Form.Item label="Password" name="password">
            <Input.Password />
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="button"
              block
              onClick={handleLogin}
            >
              Login
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};

export default Login;
