import React, { useState, useEffect } from 'react';
import { showPublicRoutines } from '../api';
import CreateRoutine from './createRoutines';
import EditRoutine from './editRoutine';
import DeleteButton from './deleteRoutine';
import Layout from './Layout';
import { getCurrentData } from '../utils/auth';

const MyRoutines = () => {
  const [privateRoutine, setPrivateRoutines] = useState([]);

  const getAllPublicRoutines = async () => {
    const username = getCurrentData("username")
    const publicRoutines = await showPublicRoutines();
    const ownRoutines = await publicRoutines.filter(
        (ele) => ele.creatorName === username
      );
    setPrivateRoutines(ownRoutines);
  };
  console.log(privateRoutine)

  useEffect(() => {
    getAllPublicRoutines();
  }, []);

  return (
    <Layout>
        <div>
            <CreateRoutine/>
        </div>
        <div>
      <p>This is my routines</p>
      <ul>
        {privateRoutine.map((routine, index) => (
          <li key={index}>
            {routine.name} -{routine.goal}
            <EditRoutine routineId = {privateRoutine.id}/>
            <DeleteButton routineId = {privateRoutine.id}/>
          </li>
        ))}
      </ul>
      
      
      </div>
    </Layout>
  );
};

export default MyRoutines;



/*
 <div>
        <div>
          <h2>
            <span>Routines</span>
          </h2>
        </div>
        <div>
            <CreateRoutine/>
        </div>
        <div>
          <ul>
            {privateRoutine.map((rtn) => (
              <li key={rtn.id}>
                Name:{rtn.name}
                Goal:{rtn.goal}
                Activities:{rtn.activities}
                <EditRoutine routineId={privateRoutine.id}/>
                <DeleteButton routineId={privateRoutine.id}/>
              </li>
            ))}
          </ul>
        </div>
      </div>
*/
