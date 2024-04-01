import React from 'react'
import {Form, Input} from 'antd';
import '../styles/Register.css';
import { Link } from 'react-router-dom';

function Login() {

  // From hamdler
  const onFinishHandler = (values) => {
    console.log(values);
  }

  return (
    <>
      <div className="form-container">
        <Form layout='vertical' onFinish={onFinishHandler} className='card p-5' >
          <h3 className='text-center'>Login here...</h3>
          <Form.Item label='email' name='email'>
            <Input type='email' required></Input>
          </Form.Item>
          <Form.Item label='password' name='password'>
            <Input type='password' required></Input>
          </Form.Item>
          <Link to='/register' className='m-2 '>Not a user, register here.</Link>
          <button className='btn btn-primary' type='submit'>Register</button>
        </Form>
      </div>
    </>
  )
}

export default Login