import React, { useState, useEffect } from 'react';
import { showPublicRoutines, deleteRoutineActivity } from '../api';
import { getCurrentData } from '../utils/auth';
import Layout from './Layout';

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

  const routineIdHandler = async (event) => {
    await setRoutineActivityId(event.target.dataset.rid);
    deleteRoutineActivity(token, routineActivityId);
  };

  return (
    <Layout>
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
                    <h2>routineID:{activity.routineActivityId}</h2>
                    <button
                      onClick={routineIdHandler}
                      data-rid={activity.routineActivityId || ''}
                    >
                      Delete Activity
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
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

  

*/
