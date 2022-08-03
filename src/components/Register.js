import React, { useState } from 'react';
import { storeCurrentUser } from '../utils/auth';
import { registerUser } from '../api';
import Layout from './Layout';
import classes from './Register.module.css';

const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [tokenUser, setTokenUser] = useState('');

  const registerUserHandler = async (event) => {
    event.preventDefault();
    const registrationInfo = await registerUser(username, password);
    const token = registrationInfo.token;
    // setTokenUser(token);
    // const user = registrationInfo.user.username;
    // storeCurrentUser('token', token);
    // storeCurrentUser('username', user);
    //resetting value for inputs
    setUsername('');
    setPassword('');
  };

  return (
    <Layout>
      <div className={classes['register-main']}>
        <div className={classes['register-info']}>
          <h2>Make your Move</h2>
          <p>
            Join to our Fantastic Community & and start enjoing all the benefits
          </p>
          <p>Sign Up for free!</p>
        </div>
        <div className={classes['register-form']}>
          <div className={classes['register-login']}>
            <h1>Sign Up</h1>
            <form className={classes.form} onSubmit={registerUserHandler}>
              <input
                type="text"
                placeholder="Username"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <input
                type="password"
                placeholder="Password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
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
