import React, { useState, useEffect } from 'react';
import { registerUser } from '../api';
import { storeCurrentUser } from '../utils/auth';

const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const registerUserHandler = async () => {
    const registrationInfo = await registerUser(username, password);
    const { token } = registrationInfo;
    const newUser = registrationInfo.user.username;

    //Storing new user in local storage
    storeCurrentUser('token', token);
    storeCurrentUser('newUser', newUser);
    storeCurrentUser('password', password);

    //resetting value for inputs
    setUsername('');
    setPassword('');
    console.log(token, newUser, 'registration *********');
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
