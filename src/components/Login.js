import React from 'react';
import classes from './Login.module.css';

const Login = () => {
  return (
    <>
      <div className={classes['login-body']}>
        <div className={classes.box}>
          <form>
            <span className={classes['text-center']}>login</span>
            <div className={classes['input-container']}>
              <input type="text" />
              <label>Username</label>
            </div>
            <div className={classes['input-container']}>
              <input type="text" />
              <label>Password</label>
            </div>
            <button type="button" className={classes.btn}>
              Login
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
