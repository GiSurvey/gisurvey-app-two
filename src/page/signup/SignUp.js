
import React, { useState } from 'react';
import { useNavigate , Link} from 'react-router-dom';
import { useAuth } from './../../context/AuthContext';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Typography } from 'antd';

import {
  AutoComplete,
  Button,
  Cascader,
  Checkbox,
  Col,
  Form,
  Input,
  InputNumber,
  Row,
  Select,
} from 'antd';

const { Title } = Typography;

const { Option } = Select;

interface DataNodeType {
  value: string;
  label: string;
  children?: DataNodeType[];
}


const SignUp: React.FC = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleLogin = () => {
    login(); // Simulate login
    navigate('/dashboard/charts'); // Navigate to the dashboard
  };

  const onFinish = (values: any) => {
    login(); // Simulate login
    navigate('/dashboard/charts'); // Navigate to the dashboard
    console.log('Received values of form: ', values);
  };

  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select style={{ width: 70 }}>
        <Option value="86">+86</Option>
        <Option value="87">+87</Option>
      </Select>
    </Form.Item>
  );
  const divStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh', // Full viewport height
    width: '100vw', // Full viewport width,
    background: '#01305c'

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
  
      padding:" 0 30px 0 30px" ,
      borderRadius: "10px",
      boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.5)',
      border: '1px solid #ddd',
      background: 'white'
      }}
      scrollToFirstError
    >

<Title style={{ textAlign: "center", color:  '#01305c'}}> 
    Create Account</Title>
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
        hasFeedback
        rules={[{ required: true, message: 'Please input your Password!' }]}
      >
        <Input.Password 
          prefix={<LockOutlined  style={{ fontSize: '16px', color: '#01305c' }} />}
          style={{height: '40px', width: "400px"}}
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
              return Promise.reject(new Error('The new password that you entered do not match!'));
            },
          }),
        ]}
      >
        <Input.Password 
         prefix={<LockOutlined  style={{ fontSize: '16px', color: '#01305c' }} />}
         style={{height: '40px', width: "400px"}} 
         placeholder="Confirm Password" 

        />
      </Form.Item>

      <Form.Item
        name="agreement"
        valuePropName="checked"
        style={{ marginBottom: "0"}}
        rules={[
          {
            validator: (_, value) =>
              value ? Promise.resolve() : Promise.reject(new Error('Should accept agreement')),
          },
        ]}
      >
        <Checkbox  >
          I have read the <a href="">agreement</a>
        </Checkbox>
      </Form.Item>
     
      <Form.Item >
        <Button type="primary" htmlType="submit" style={{ width: "400px" , margin:' 10px 0'}} >
           Sign Up
        </Button>
        <div style={{textAlign:"center"}} >
        Already have a account? <Link to="/">Login</Link></div>
      </Form.Item>
    </Form>
 
    </div>
  );
};

export default SignUp;


/* import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './../../context/AuthContext';

const SignUp = () => {
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleLogin = () => {
    login(); // Simulate login
    navigate('/dashboard/home'); // Navigate to the dashboard
  };

   const divStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh', // Full viewport height
    width: '100vw', // Full viewport width
    border: '1px solid black', // Example border
  };
  return (
    <div>
      <h1>SignUp</h1>
      <button onClick={handleLogin}>Sign Up</button>
    </div>
  );
};

export default SignUp; */