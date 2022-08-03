import React, { useState } from 'react';
import { storeCurrentUser } from '../utils/auth';
import { registerUser } from '../api';
import Layout from './Layout';
import classes from './Register.module.css';

const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [tokenUser, setTokenUser] = useState('');

  const registerUserHandler = async () => {
    const registrationInfo = await registerUser(username, password);
    const token = registrationInfo.token;
    setTokenUser(token);
    const user = registrationInfo.user.username;
    storeCurrentUser('token', token);
    storeCurrentUser('username', user);
    //resetting value for inputs
    setUsername('');
    setPassword('');
    console.log(token, user, 'registration *********');
  };

  return (
    <Layout>
      <div className={classes['register-main']}>
        <div className={classes['register-photo']}>image</div>
        <div className={classes['register-form']}>
          <div className={classes['register-login']}>
            <h1>Sign Up</h1>
            <form className={classes.form}>
              <input
                type="text"
                placeholder="Username"
                id="username"
                value={username}
              />
              <input type="password" placeholder="Password" />
              <div className={classes['register-btn']}>
                <button type="submit">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Register;

/*

 <h2>This is the Register</h2>
      <label>Enter a username</label>
      <input
        type="text"
        id="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <label>Enter password</label>
      <input
        type="text"
        id={password}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={registerUserHandler}>Login</button>
*/
