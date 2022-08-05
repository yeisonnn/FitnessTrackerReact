import React, { useState, useEffect } from 'react';
import { showPublicRoutines, deleteRoutineActivity } from '../api';
import { getCurrentData } from '../utils/auth';
import DeleteRoutineActivity from './deleteActivityRoutine';
import UpdateRoutineActivity from './editActivityRoutine';
import Layout from './Layout';
import classes from './RoutineActivities.module.css';

const RoutineActivities = () => {
  const [privateRoutine, setPrivateRoutines] = useState([]);
  const [routineActivityId, setRoutineActivityId] = useState('');
  const username = getCurrentData('username');
  const token = getCurrentData('token');

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

  console.log(privateRoutine);

  const routineIdHandler = (event) => {
    console.log(event.target.dataset.rid);
    console.log(token);
    setRoutineActivityId(event.target.dataset.rid);
    deleteRoutineActivity(token, routineActivityId);
  };

  return (
    <Layout>
      <div className={classes['routines-main']}>
        {privateRoutine.map((routine, idx) => {
          return (
            <div
              key={`${routine.name}${idx}`}
              className={classes['routines-card']}
            >
              <div>
                <h2>{routine.name}</h2>
              </div>
              <div>
                {routine.activities.length ? (
                  routine.activities.map((activity, indx) => {
                    return (
                      <div
                        className={classes['routines-card']}
                        key={`${activity.count}${activity.duration}${indx}`}
                      >
                        <div className={classes['rtn-header']}>
                          <h2>{activity.name}</h2>
                        </div>
                        <div className={classes['rtn-body']}>
                          <p>Description</p>
                          <h3>{activity.description}</h3>
                          <p>Count</p>
                          <h3>{activity.count}</h3>
                          <p>Duration</p>
                          <h3>{activity.duration}</h3>
                        </div>
                        <DeleteRoutineActivity
                          getAllPublicRoutines={getAllPublicRoutines}
                          routineActivityId={activity.routineActivityId}
                        />
                        <div>
                          <UpdateRoutineActivity
                            routineActivityId={activity.routineActivityId}
                          />
                        </div>
                      </div>
                    );
                  })
                ) : (
                  <p>No activities</p>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </Layout>
  );
};

export default RoutineActivities;

/*

  const getRoutineActivityId = async () => {
    const publicRoutines = await showPublicRoutines();
    const myRoutines = publicRoutines.filter(
      (routine) => routine.creatorName === username
    );
    // for (let i = 0; i < myRoutines.activities.length; i++){
    //     for (let k = 0; k <  )
    // }
  };

<Layout>
      <div>
        {privateRoutine.map((routine, idx) => {
          return (
            <div key={idx}>
              <div>
                <h2>{routine.name}</h2>
              </div>
              <div>
                {routine.activities.map((activity, indx) => {
                  return (
                    <div key={activity.id}>
                      <h3>Activity:{activity.name}</h3>
                      <h3>Description:{activity.description}</h3>
                      <h3>Duration:{activity.duration}</h3>
                      <h3>Count:{activity.count}</h3>
                      <div>
                        <UpdateRoutineActivity/>
                        <DeleteRoutineActivity />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </Layout>
  );


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
                  <Link to="/routines" className={classes.link}>
                    Go back To routines
                  </Link>
                </div>
  
 <div key={activity.id}>
                      <h3>Activity:{activity.name}</h3>
                      <h3>Description:{activity.description}</h3>
                      <h3>Duration:{activity.duration}</h3>
                      <h3>Count:{activity.count}</h3>
                      <h2>routineID:{activity.routineActivityId}</h2>
                      <button
                        onClick={routineIdHandler}
                        data-rid={activity.routineActivityId || ''}
                      >
                        Delete Activity
                      </button>
                    </div>

*/
