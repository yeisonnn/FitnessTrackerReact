import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './Login';
import Register from './Register';
import Routines from './Routines';
import MyRoutines from './MyRoutines';
import ViewRoutines from './ViewRoutines';
import Activities from './Activities';
import RoutineActivities from './RoutineActivities';
import Home from './Home';
import UserRoutines from './UserRoutines';

//https://guarded-stream-12358.herokuapp.com/

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<Register />} />
      <Route path="/routines" element={<Routines />} />
      <Route path="/myRoutines" element={<MyRoutines />} />
      <Route path="/routines/:id" element={<ViewRoutines />} />
      <Route path="/routineActivities" element = {<RoutineActivities/>}/>
      <Route path="/activities" element={<Activities />} />
      <Route path="/:username/routines" element={<UserRoutines />} />
    </Routes>
  );
}

export default App;
