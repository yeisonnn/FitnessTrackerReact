import React from 'react';
import { loginUser } from "../api";

function Login(props){
const { setToken } = props;
async function handleSubmit(event) {
    event.preventDefault();
    const username = event.target[0].value;
    const password = event.target[1].value;
    loginUser(username, password, setToken);
  }
  return (
    <div>
        <input type='text'></input>
        <label>username</label>
        <input type='text'></input>
        <label>password</label>
    </div>
  )
}

export default Login;