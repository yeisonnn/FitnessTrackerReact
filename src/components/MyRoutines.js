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
import { useNavigate } from 'react-router-dom';
import { RoutineActivities } from './RoutineActivities'

// import UpdateRoutineActivity from './editActivityRoutine';
// import DeleteRoutineActivity from './deleteActivityRoutine';

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

  const deleteRoutineHandler = async (event) => {
    event.preventDefault();
    const routineId = event.target.dataset.id;
    const token = getCurrentData('token');
    await deleteRoutine(token, routineId);
    navigate(0);
  };

  const updateRoutineHandler = (event) => {
    event.preventDefault();
    setShowUpdateRoutine(true);
    setRoutineId(event.target.dataset.id);
    navigate(0);
  };

  const attachActivityToRoutineHandler = async (e) => {
    setRoutineId(e.target.dataset.rtnid);
    await attachActivityToRoutine(token, actId, count, duration, routineId);
  };

  console.log(privateRoutine);

  async function handleClick(event){
    event.preventDefault();
    navigate('/routineActivities');
}

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
          />
        </div>
      ) : null}

      {showUpdateRoutine ? (
        <div className={classes['myRtn-modal']}>
          <EditRoutine
            setShowUpdateRoutine={setShowUpdateRoutine}
            routineId={routineId}
          />
        </div>
      ) : null}

      {privateRoutine.length ? (
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
                <div>
                <button onClick={handleClick}>
                View routine's activities
            </button>
                </div>
                <AllActivities setActId={setActId} />
                <div>
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
                    data-rtnId={routine.id}
                    onClick={attachActivityToRoutineHandler}
                  >
                    Attach routine
                  </button>
                </div>

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
{privateRoutine.length ? (
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
                  <p>Activities</p>

                  <div className={classes['activitycontainer']}>
                    {routine.activities.map((activity, indx) => {
                      return (
                        <div key="routineActivityIdKey">
                          <h3>Activity:{activity.name}</h3>
                          <h3>Description:{activity.description}</h3>
                          <h3>Duration:{activity.duration}</h3>
                          <h3>Count:{activity.count}</h3>
                          <UpdateRoutineActivity />
                          <DeleteRoutineActivity />
                        </div>
                      );
                    })}
                  </div>
                </div>
                <AllActivities routineId={routineId} />

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
        <p>There no private routines</p>
      )}
*/
