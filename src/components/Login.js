import React, {useState} from 'react';
import classes from './Login.module.css';
import { storeCurrentUser } from '../utils/auth';
import { loginUser } from '../api';

const Login = (props) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [tokenUser, setTokenUser] = useState('')
    
    async function handleSubmit(event) {
      
        event.preventDefault();
        const loginInfo = await loginUser(username, password);
        const token = loginInfo.token;
        setTokenUser(token)
        const user = loginInfo.user.username;
        storeCurrentUser('token', token);
        storeCurrentUser('username', user);
  
        setUsername('');
        setPassword('');
        console.log(loginInfo, "This is a click")
    }
        
      


  return (
    <>
      <div className={classes['login-body']}>
        <div className={classes.box}>
          <form onSubmit={handleSubmit}>
            <span className={classes['text-center']}>login</span>
            <div className={classes['input-container']}>
              <input type="text" value={username} onChange={(e) => setUsername(e.target.value)}/>
              <label>Username</label>
            </div>
            <div className={classes['input-container']}>
              <input type="text" value ={password} onChange={(e) => setPassword(e.target.value)}/>
              <label>Password</label>
            </div>
            <button type="submit" className={classes.btn}>
              Login
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;

