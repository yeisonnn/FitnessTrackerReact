import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './Login';
import Register from './Register';
import Routines from './Routines';
import ViewRoutines from './ViewRoutines';
import Activities from './Activities';

//https://guarded-stream-12358.herokuapp.com/

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/routines" element={<Routines />} />
      <Route path="/routines/:id" element={<ViewRoutines />} />
      <Route path="/activities" element={<Activities />} />
    </Routes>
  );
}

export default App;
