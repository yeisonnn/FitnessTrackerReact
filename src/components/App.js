import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Register from './Register';
import Routines from './Routines';
import MyRoutines from './MyRoutines';
import ViewRoutines from './ViewRoutines';
import Activities from './Activities';
import RoutineActivities from './RoutineActivities';
import Home from './Home';
import UserRoutines from './UserRoutines';
import Modal from './Modal';


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<Register />} />
      <Route path="/routines" element={<Routines />} />
      <Route path="/myRoutines" element={<MyRoutines />} />
      <Route path="/routines/:id" element={<ViewRoutines />} />
      <Route path="/routineActivities" element={<RoutineActivities />} />
      <Route path="/activities" element={<Activities />} />
      <Route path="/:username/routines" element={<UserRoutines />} />
      <Route
        path="*"
        element={
          <Modal title="Page Not Found" body={'Error 404'} show={true} />
        }
      />
    </Routes>
  );
}

export default App;
