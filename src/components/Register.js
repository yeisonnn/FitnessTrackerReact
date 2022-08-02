import React, { useState } from 'react';
import { storeCurrentUser } from '../utils/auth';
import { registerUser } from '../api';


const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [tokenUser, setTokenUser] = useState('')

  const registerUserHandler = async () => {
    const registrationInfo = await registerUser(username, password);
    const token = registrationInfo;
    setTokenUser(token)
    const user = registrationInfo.user.username;
    storeCurrentUser('token', tokenUser);
    storeCurrentUser('username', user);
    //resetting value for inputs
    setUsername('');
    setPassword('');
    console.log(token, user, 'registration *********');
  };

  return (
    <>
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
    </>
  );
};

export default Register;
