import React, { useState, useEffect } from 'react';
import { showPublicRoutines, deleteRoutineActivity } from '../api';
import { getCurrentData } from '../utils/auth';
import DeleteRoutineActivity from './deleteActivityRoutine';
import UpdateRoutineActivity from './editActivityRoutine';
import Layout from './Layout';
import classes from './RoutineActivities.module.css';
import { Link } from 'react-router-dom';

const RoutineActivities = () => {
  const [privateRoutine, setPrivateRoutines] = useState([]);
  const [routineActivityId, setRoutineActivityId] = useState('');
  const username = getCurrentData('username');
  const token = getCurrentData('token');

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

  const routineIdHandler = (event) => {
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
              <div className={classes['routines-title']}>
                <>
                  {' '}
                  <h2>{routine.name}</h2>
                  <Link
                    to={`/myRoutines
                  `}
                    className={classes['link-routines']}
                  >
                    Go Back to My routines
                  </Link>
                </>
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
                            getAllPublicRoutines={getAllPublicRoutines}
                          />
                        </div>
                      </div>
                    );
                  })
                ) : (
                  <p className={classes['no-activities']}>No activities</p>
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