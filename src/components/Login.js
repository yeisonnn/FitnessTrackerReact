import React, { useState } from 'react';
import classes from './Login.module.css';
import { storeCurrentUser, getCurrentData } from '../utils/auth';
import { loginUser } from '../api';
import Layout from './Layout';
import { useNavigate } from 'react-router-dom';

const Login = (props) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [tokenUser, setTokenUser] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [error, setError] = useState(false);
  const { setUserLogged } = props;
  const navigate = useNavigate();

  async function handleSubmit(event) {
    event.preventDefault();
    const loginInfo = await loginUser(username, password);

    if (loginInfo.name === 'TypeError') {
      setErrorMessage('Username or Password is incorrect');
      setError(true);
      return;
    }
    const token = loginInfo.token;
    setTokenUser(token);
    const user = loginInfo.user.username;
    storeCurrentUser('token', token);
    storeCurrentUser('username', user);
    setUsername('');
    setPassword('');
    setErrorMessage('');
    setUserLogged(getCurrentData('username'));
    setTimeout(() => {
      navigate('/routines');
    }, 1500);
  }

  return (
    <div className={classes['login-body']}>
      <form className={classes.form} onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={username}
          onChange={(e) => {
            setUsername(e.target.value);
            setError(false);
          }}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
            setError(false);
          }}
        />

        <input className={classes['login-btn']} type="submit" value="LOGIN" />
        {errorMessage && error ? <h1>{errorMessage}</h1> : null}
      </form>
    </div>
  );
};
export default Login;
