import React from 'react';
import {Form, Input, message} from 'antd';
import '../styles/Register.css';
import axios from 'axios';
import { Link, useNavigate} from 'react-router-dom';

function Register() {

  const navigate = useNavigate();


  // From hamdler
  const onFinishHandler = async (values) => {
    try {
      // Sending registration data to the server
      const res = await axios.post('/api/v1/user/register', values);
      if (res.data && res.data.message) {
        // Show success message if registration is successful
        message.success(res.data.message);
        // Redirect to login page
        navigate('/login');
      }
    } catch (error) {
      if (error.response && error.response.status === 400) {
        // If user already exists, display the error message from the backend
        message.error(error.response.data.message);
        navigate('/login')
      } else {
        // Show error message if an error occurs during registration
        message.error('Something went wrong');
      }
    }
  };
  


  return (
    <>
    <div className="form-container">
        <Form layout='vertical' onFinish={onFinishHandler} className='card p-5' >
          <h3 className='text-center'>Register here...</h3>
            <Form.Item label='name' name='name'>
              <Input type='text' required></Input>
            </Form.Item>
            <Form.Item label='email' name='email'>
              <Input type='email' required></Input>
            </Form.Item>
            <Form.Item label='password' name='password'>
              <Input type='password' required></Input>
            </Form.Item>
            <Link to='/login' className='m-2 '>Already user login here</Link>
            <button className='btn btn-primary' type='submit'>Register</button>
        </Form>
    </div>
    </>
  )
}

export default Register