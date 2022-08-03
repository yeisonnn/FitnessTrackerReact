import React, { useState, useEffect } from 'react';
import { showMyInfo, showPublicRoutines } from '../api';
import CreateRoutine from './createRoutines';
import EditRoutine from './editRoutine';
import DeleteButton from './deleteRoutine';
import Layout from './Layout';

const MyRoutines = () => {
  const [privateRoutine, setPrivateRoutines] = useState([]);

  const getAllPublicRoutines = async () => {
    const publicRoutines = await showPublicRoutines();
    await setPrivateRoutines(publicRoutines);
  };

  useEffect(() => {
    getAllPublicRoutines();
  }, []);

  return (
    <Layout>
      <p>This is my routines</p>
      <ul>
        {privateRoutine.map((routine, index) => (
          <li key={index}>
            {routine.name} -{routine.goal}
          </li>
        ))}
      </ul>
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
