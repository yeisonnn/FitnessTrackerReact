import React from 'react';
import {Routes, Route } from 'react-router-dom';
import Login from "./Login"

function App() {
  return (
    <div>
      <Routes>
        <Route exact path ='login'
        element = {<Login/>}
        />
      </Routes>
      
      <h1>Hello World</h1>
    </div>
  );
}

export default App;
