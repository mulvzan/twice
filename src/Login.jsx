import {Form, Input, Button} from 'antd';
import { useNavigate } from 'react-router-dom';
const Login = () => {

const navigate = useNavigate();
const handleLogin = () => {
    navigate('/');
};
return (
    <div className='flex flex-col items-center justify-center h-screen'>
        <h1 className='mb-6'>Login </h1>
        <Form
            name="login"
            style={{ maxWidth: 300 }}
            initialValues={{ remember: true }}
        >
            <Form.Item
                label="Username"
                name="username"
            >
                <Input />
            </Form.Item>

            <Form.Item
                label="Password"
                name="password"
            >
                <Input.Password />
            </Form.Item>

            <Form.Item>
                <Button type="primary" htmlType="button" block onClick={handleLogin}>
                    Login
                </Button>
            </Form.Item>
        </Form>
    </div>
);
};

export default Login;
