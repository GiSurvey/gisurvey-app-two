import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from './../../context/AuthContext';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input } from 'antd';
import { Typography } from 'antd';

const { Title } = Typography;

const SignUp = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const { register } = useAuth();
  const [loading, setLoading] = useState(false); // State for loading effect

  const onFinish = (values) => {
    setLoading(true); // Start the loading effect

    // Call register and check if the registration is successful
    const isRegistered = register(values.Email, values.password);
    if (isRegistered) {
      // Add a delay before redirecting (e.g., 2 seconds)
      setTimeout(() => {
        setLoading(false); // Stop the loading effect
        navigate('/dashboard/charts'); // Navigate to the dashboard after 2 seconds
      }, 2000); // 2000 milliseconds = 2 seconds
    } else {
      setLoading(false); // Stop loading if registration fails (due to duplicate email)
    }
  };

  const divStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    width: '100vw',
    background: '#01305c',
  };

  return (
    <div style={divStyle}>
      <Form
        form={form}
        layout="vertical"
        name="register"
        onFinish={onFinish}
        initialValues={{
          remember: true,
        }}
        style={{
          padding: '0 30px 0 30px',
          borderRadius: '10px',
          boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.5)',
          border: '1px solid #ddd',
          background: 'white',
        }}
        scrollToFirstError
      >
        <Title style={{ textAlign: 'center', color: '#01305c' }}>Create Account</Title>

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
            style={{ height: '40px', width: '400px' }}
            prefix={<UserOutlined style={{ fontSize: '16px', color: '#01305c' }} />}
            placeholder="Email"
          />
        </Form.Item>

        <Form.Item
          name="password"
          hasFeedback
          rules={[{ required: true, message: 'Please input your Password!' }]}
        >
          <Input.Password
            prefix={<LockOutlined style={{ fontSize: '16px', color: '#01305c' }} />}
            style={{ height: '40px', width: '400px' }}
            placeholder="Password"
          />
        </Form.Item>

        <Form.Item
          name="confirm"
          dependencies={['password']}
          hasFeedback
          rules={[
            {
              required: true,
              message: 'Please confirm your password!',
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue('password') === value) {
                  return Promise.resolve();
                }
                return Promise.reject(new Error('The passwords do not match!'));
              },
            }),
          ]}
        >
          <Input.Password
            prefix={<LockOutlined style={{ fontSize: '16px', color: '#01305c' }} />}
            style={{ height: '40px', width: '400px' }}
            placeholder="Confirm Password"
          />
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            style={{ width: '400px', margin: '10px 0' }}
            loading={loading}
          >
            {loading ? 'Processing...' : 'Sign Up'}
          </Button>
          <div style={{ textAlign: 'center' }}>
            Already have an account? <Link to="/">Login</Link>
          </div>
        </Form.Item>
      </Form>
    </div>
  );
};

export default SignUp;
