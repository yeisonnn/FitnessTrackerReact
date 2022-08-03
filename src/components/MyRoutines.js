import React, { useState, useEffect } from 'react';
import { showPublicRoutines } from '../api';
import CreateRoutine from './CreateRoutines';
import EditRoutine from './EditRoutine';
import DeleteButton from './DeleteRoutine';
import Layout from './Layout';
import { getCurrentData } from '../utils/auth';
import classes from './MyRoutines.module.css';

const MyRoutines = () => {
  const [privateRoutine, setPrivateRoutines] = useState([]);

  const getAllPublicRoutines = async () => {
    const username = getCurrentData('username');

    const publicRoutines = await showPublicRoutines();
    const ownRoutines = await publicRoutines.filter(
      (ele) => ele.creatorName === username
    );
    return ownRoutines;
  };

  useEffect(() => {
    const fetchData = async () => {
      const data = await getAllPublicRoutines();
      setPrivateRoutines(data);
    };
    fetchData();
  }, []);

  return (
    <Layout>
      <div>
        <CreateRoutine />
      </div>
      <div>
        <ul>
          {privateRoutine.map((routine, index) => (
            <li key={index}>
              {routine.name} -{routine.goal}
              <EditRoutine routineId={privateRoutine.id} />
              <DeleteButton routineId={privateRoutine.id} />
            </li>
          ))}
        </ul>
      </div>
    </Layout>
  );
};

export default MyRoutines;
