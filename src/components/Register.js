import React, { useState } from 'react';
import { registerUser } from '../api';
import Layout from './Layout';
import classes from './Register.module.css';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState ('')
  const [passwordError, setPasswordError] = useState ('')
  const navigate = useNavigate();

  const registerUserHandler = async (event) => {
    event.preventDefault();
    if (password.length < 8){
      setErrorMessage('')
      setPasswordError("Password must be 8 characters or longer")
      return
    }
    const registrationInfo = await registerUser(username, password);
    if (!registrationInfo){
      setPasswordError('')
      setErrorMessage("That username has been taken")
      return 
    }

    //resetting value for inputs
    
    
    setUsername('');
    setPassword('');
    navigate('/');
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
              {errorMessage ? (
                <h1>{errorMessage}</h1>
              ):null}
              {passwordError ? (
                <h1>{passwordError}</h1>
              ):null}
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Register;
