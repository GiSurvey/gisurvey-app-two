import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './../../context/AuthContext';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input } from 'antd';
import { Typography } from 'antd';
import { Link } from 'react-router-dom';
const { Title } = Typography;
const Login = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleLogin = () => {
    login(); // Simulate login
    
    navigate('/dashboard/charts'); // Navigate to the dashboard
  };

  const onFinish = (values) => {
    login(); // Simulate login
    navigate('/dashboard/charts'); // Navigate to the dashboard
    console.log('Received values of form: ', values);
  };

  
  const divStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh', // Full viewport height
    width: '100vw', // Full viewport width
    background: '#01305c'

  };
  return (
    <div style={divStyle}>

    <Form

      form={form}
      layout="vertical"
      name="login"
      className="login-form"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      style={{ 
      padding:" 0 30px 0 30px" ,
      borderRadius: "10px",
      boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.5)',
      border: '1px solid #ddd',
      background: 'white'
      }}
      scrollToFirstError
    >
    <Title style={{ textAlign: "center", color:  '#01305c'}}> 
    Welcome!</Title>
       <Form.Item
        name="Email"
        rules={[
          {
            type: 'email',
            message: 'The input is not valid E-mail!',
          },
          {
            required: true,
            message: 'Please input your E-mail!',
          },
        ]}
      >
        <Input 
          style={{height: '40px', width: "400px"}}
          prefix={<UserOutlined style={{ fontSize: '16px', color: '#01305c' }} color='red' />} 
          placeholder="Email" />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[{ required: true, message: 'Please input your Password!' }]}
      >
        <Input
          prefix={<LockOutlined  style={{ fontSize: '16px', color: '#01305c' }} />}
          style={{height: '40px', width: "400px"}}
          type="password"
          placeholder="Password"
        />
      </Form.Item>

      <Form.Item>
        <div style={{ textAlign:"center"}} >
          <a className="login-form-forgot" href="">
            Forgot password?
          </a>
        </div>
        <Button type="primary" htmlType="submit" className="login-form-button"  style={{ width: "400px" , margin:' 15px 0 10px 0 '}}>
          Log in
        </Button>
        <div style={{ textAlign:"center"}} >
        Don't have any account? <Link to="/signup">Sign Up</Link></div>
      </Form.Item>
    </Form>
    </div>

  );
};

export default Login;