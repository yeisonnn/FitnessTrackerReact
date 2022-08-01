import React, { useState, useEffect } from 'react';
import { registerUser } from '../api';

const Register = () => {
  const [user, setUser] = useState('');

  const userRegister = async () => {
    const registeredUser = await registerUser(
      'mexicoParaguayArgentinaColombia',
      'mmooopppsassss22244444444'
    );
    setUser(registeredUser);
  };

  const registerUserHandler = async () => {
    userRegister();
    localStorage.setItem('Token', user.token);
  };

  return (
    <>
      <h2>This is the token</h2>
      <button onClick={registerUserHandler}>Register an user</button>
      <h3>Welcome:</h3>
      <p>{user.user.username}</p>
    </>
  );
};

export default Register;
