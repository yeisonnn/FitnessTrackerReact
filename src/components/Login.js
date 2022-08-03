import React, { useState } from 'react';
import classes from './Login.module.css';
import { storeCurrentUser } from '../utils/auth';
import { loginUser } from '../api';
import Layout from './Layout';

const Login = (props) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [tokenUser, setTokenUser] = useState('');

  async function handleSubmit(event) {
    event.preventDefault();
    const loginInfo = await loginUser(username, password);
    const token = loginInfo.token;
    setTokenUser(token);
    const user = loginInfo.user.username;
    storeCurrentUser('token', token);
    storeCurrentUser('username', user);

    setUsername('');
    setPassword('');
    console.log(loginInfo, 'This is a click');
  }

  return (
    <div className={classes['login-body']}>
      <form className={classes.form} onSubmit={handleSubmit}>
        <input
          name="name"
          type="text"
          placeholder="Name"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          name="email"
          type="text"
          placeholder="Email"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <input type="submit" value="LOGIN" />
      </form>
    </div>
  );
};
export default Login;
