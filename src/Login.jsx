import {Form, Input, Button} from 'antd';
const Login = () => {
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
                rules={[{ required: true, message: 'Please input your username!' }]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                label="Password"
                name="password"
                rules={[{ required: true, message: 'Please input your password!' }]}
            >
                <Input.Password />
            </Form.Item>

            <Form.Item>
                <Button type="primary" htmlType="submit"  block>
                    <a href="/">Login</a>
                </Button>
            </Form.Item>
        </Form>
    </div>
);
};

export default Login;
