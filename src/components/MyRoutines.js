import React, { useState, useEffect, useCallback } from 'react';
import { showPublicRoutines } from '../api';
import CreateRoutine from './CreateRoutines';
import EditRoutine from './EditRoutine';
import { deleteRoutine } from '../api/index';
import Layout from './Layout';
import { getCurrentData } from '../utils/auth';
import classes from './MyRoutines.module.css';

const MyRoutines = () => {
  const [privateRoutine, setPrivateRoutines] = useState([]);
  const [showCreateRoutine, setShowCreateRoutine] = useState(false);
  const [showUpdateRoutine, setShowUpdateRoutine] = useState(false);
  const username = getCurrentData('username');

  const getAllPublicRoutines = async () => {
    const publicRoutines = await showPublicRoutines();

    const myRoutines = publicRoutines.filter(
      (routine) => routine.creatorName === username
    );
    return myRoutines;
  };

  useEffect(() => {
    const fetchData = async () => {
      const data = await getAllPublicRoutines();
      setPrivateRoutines(data);
    };
    fetchData();
  }, []);

  const testingDown = () => {
    console.log('aqui en my routines');
  };

  const deleteRoutineHandler = async (event) => {
    const routineId = event.target.dataset.id;
    const token = getCurrentData('token');
    await deleteRoutine(token, routineId);
  };

  return (
    <Layout>
      <button
        className={classes['create-btn']}
        onClick={() => setShowCreateRoutine(!showCreateRoutine)}
      >
        {!showCreateRoutine ? 'Create Routine' : 'Close Form'}
      </button>
      {showCreateRoutine ? (
        <div className={classes['myRtn-modal']}>
          <CreateRoutine click={testingDown} />
        </div>
      ) : null}

      {showUpdateRoutine ? (
        <div className={classes['myRtn-modal']}>
          <EditRoutine />
        </div>
      ) : null}

      <div className={classes['routines-body']}>
        {privateRoutine.map((routine) => {
          return (
            <div className={classes['routines-card']} key={routine.id}>
              <div className={classes['rtn-header']}>
                <h2>{routine.name}</h2>
              </div>
              <div className={classes['rtn-body']}>
                <p>Goal</p>
                <h3>{routine.goal}</h3>
                <p>Creator</p>
                <h3>{routine.creatorName}</h3>
              </div>
              <div className={classes['rtn-buttons']}>
                <button onClick={deleteRoutineHandler} data-id={routine.id}>
                  Delete
                </button>
                <button onClick={() => console.log('button edit')}>Edit</button>
              </div>
            </div>
          );
        })}
      </div>
    </Layout>
  );
};

export default MyRoutines;

/*
<Layout>
      <div>
        <CreateRoutine />
      </div>
      {privateRoutine.map((myRtn) => {
        return (
          <>
            <h2>{myRtn.name}</h2>
            <h2>{myRtn.goal}</h2>
          </>
        );
      })}

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
*/
