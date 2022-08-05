import React, { useState, useEffect } from 'react';
import { showPublicRoutines } from '../api';
import CreateRoutine from './createRoutines';
import EditRoutine from './editRoutine';
import { deleteRoutine } from '../api/index';
import Layout from './Layout';
import { getCurrentData } from '../utils/auth';
import classes from './MyRoutines.module.css';
import AllActivities from './AllActivities';
import { getActivities } from '../api';
import { attachActivityToRoutine } from '../api';
import { useNavigate, Link } from 'react-router-dom';
import { RoutineActivities } from './RoutineActivities';

const MyRoutines = () => {
  const [privateRoutine, setPrivateRoutines] = useState([]);
  const [showCreateRoutine, setShowCreateRoutine] = useState(false);
  const [showUpdateRoutine, setShowUpdateRoutine] = useState(false);
  const [routineId, setRoutineId] = useState('');
  const [actId, setActId] = useState('');
  const [count, setCount] = useState('');
  const [duration, setDuration] = useState('');
  const [loadingPage, setLoadingPage] = useState(false);
  const username = getCurrentData('username');
  const token = getCurrentData('token');
  const navigate = useNavigate();
  const [activityName, setActivityName] = useState('');

  const getAllPublicRoutines = async () => {
    const publicRoutines = await showPublicRoutines();
    const myRoutines = await publicRoutines.filter(
      (routine) => routine.creatorName === username
    );
    setPrivateRoutines(myRoutines);
  };

  useEffect(() => {
    getAllPublicRoutines();
  }, []);

  const deleteRoutineHandler = async (event) => {
    event.preventDefault();
    const routineId = event.target.dataset.id;
    const token = getCurrentData('token');
    deleteRoutine(token, routineId);
    getAllPublicRoutines();
  };

  const updateRoutineHandler = (event) => {
    event.preventDefault();
    setShowUpdateRoutine(true);
    setRoutineId(event.target.dataset.id);
  };

  const attachActivityToRoutineHandler = (e) => {
    setRoutineId(e.target.dataset.rtnid);
    console.log(routineId);
    console.log(actId);
    console.log(privateRoutine);

    const allCards = [...privateRoutine];
    const myRoutine = allCards.filter((rtn) => rtn.id === routineId);
    console.log(myRoutine);

    // if (duration && count && routineId) {
    //   attachActivityToRoutine(token, actId, count, duration, routineId);
    // } else {
    //   console.log('Something went wrong');
    // }
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
          <CreateRoutine
            setShowCreateRoutine={setShowCreateRoutine}
            setLoadingPage={setLoadingPage}
            getAllPublicRoutines={getAllPublicRoutines}
          />
        </div>
      ) : null}

      {showUpdateRoutine ? (
        <div className={classes['myRtn-modal']}>
          <EditRoutine
            setShowUpdateRoutine={setShowUpdateRoutine}
            routineId={routineId}
            getAllPublicRoutines={getAllPublicRoutines}
          />
        </div>
      ) : null}

      {privateRoutine.length ? (
        <div className={classes['routines-body']}>
          {privateRoutine.map((routine) => {
            const routineId = routine.id;
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
                <div>
                  <Link to="/routineActivities">View Routine's Activities</Link>
                </div>
                <AllActivities
                  setActId={setActId}
                  activityName={setActivityName}
                />
                {actId ? (
                  <div className={classes['attach-routines']}>
                    <label>Count</label>
                    <input
                      type="text"
                      onChange={(e) => setCount(e.target.value)}
                    />
                    <label>Duration</label>
                    <input
                      type="text"
                      onChange={(e) => setDuration(e.target.value)}
                    />
                    <button
                      data-rtnid={routine.id}
                      onClick={attachActivityToRoutineHandler}
                    >
                      Attach routine
                    </button>
                  </div>
                ) : null}

                <div className={classes['rtn-buttons']}>
                  <button onClick={deleteRoutineHandler} data-id={routine.id}>
                    Delete
                  </button>
                  <button onClick={updateRoutineHandler} data-id={routine.id}>
                    Edit
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <p>You have no routines</p>
      )}
    </Layout>
  );
};

export default MyRoutines;

/*
  const getAllPublicRoutines = async () => {
    const publicRoutines = await showPublicRoutines();

    const myRoutines = publicRoutines.filter(
      (routine) => routine.creatorName === username
    );
    console.log(myRoutines);
    return myRoutines;
  };

  useEffect(() => {
    const fetchData = async () => {
      const data = await getAllPublicRoutines();
      setPrivateRoutines(data);
    };
    fetchData();
  }, []);
*/
