import React from 'react';

import {useNavigate} from 'react-router-dom';
import {Button} from 'antd';

function Login() {

    const navigate = useNavigate();

    const handleLogin = () =>{
        navigate('/')
    }

  return (
    <div>
      <h1>Login</h1>
      <Button onClick={handleLogin}>Login</Button>
    </div>
  )
}

export default Login
