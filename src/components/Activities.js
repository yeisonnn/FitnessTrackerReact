import React, { useState, useEffect } from 'react';
import {
  getActivities,
  getAllPublicRoutinesbyActivityId,
  editActivityDescription,
} from '../api';

import Layout from './Layout';
import classes from './Activities.module.css';
import { getCurrentData } from '../utils/auth';

const Activities = () => {
  const [allActivities, setAllActivities] = useState([]);
  const [activityName, setActivityName] = useState('');
  const [activityId, setActivityId] = useState('');
  const [activityDescription, setActivityDescription] = useState('');
  const [newDescription, setNewDescription] = useState('');
  const [activityPublicRoutines, setActivityPublicRoutines] = useState([]);
  const [showRoutines, setShowRoutines] = useState(false);
  const token = getCurrentData('token');

  const getAllActivities = async () => {
    const allActivitiesFetch = await getActivities();
    const transformedActivities = await allActivitiesFetch.slice(0, 199);
    return setAllActivities(transformedActivities);
  };

  const getActivitiesById = async (actId) => {
    const data = await getAllPublicRoutinesbyActivityId(actId);
    setActivityPublicRoutines(data);
    if (activityPublicRoutines.length) {
      setShowRoutines(true);
    }
    console.log(activityPublicRoutines, '$$$$$$$$$$$$$$$');
  };

  useEffect(() => {
    getAllActivities();
  }, []);

  const activityNameHandler = (event) => {
    event.preventDefault();
    setActivityName(event.target.value);
    const activitiesFiltered = [...allActivities];
    const activity = activitiesFiltered.filter(
      (el) => el.name === event.target.value
    );

    const activityId = activity[0].id;
    const description = activity[0].description;
    setActivityId(activityId);
    setActivityDescription(description);
    setShowRoutines(false);
  };

  const publicRoutinesHandler = () => {
    getActivitiesById(activityId);
  };

  const updateDescriptionHandler = async () => {
    const data = await editActivityDescription(
      token,
      newDescription,
      activityId
    );
    getAllActivities();
    setNewDescription('');
    setActivityName(data.name);
    setActivityDescription(data.description);

    console.log(allActivities);
  };

  return (
    <Layout>
      <div className={classes['activities-main']}>
        <div className={classes['activities-header']}>
          <h2>
            All <span>Activities</span>
          </h2>
        </div>
        <div className={classes['activities-info']}>
          <p>Select an Activity to see more content</p>
          <p>There are {allActivities.length} available Activites Now</p>
        </div>

        <form className={classes['activities-form']}>
          <select
            id="activities"
            name="activities"
            onChange={activityNameHandler}
          >
            {allActivities.map((act) => {
              return (
                <option
                  className={classes.option}
                  value={act.name}
                  label={act.name}
                  key={`${act.id}+${act.name}`}
                ></option>
              );
            })}
          </select>
        </form>
        {activityName && (
          <div className={classes['activity-info']}>
            <div className={classes['activity-card']}>
              <h2>Activity Name</h2>
              <h3>{activityName}</h3>
              <h2>Activity description</h2>
              <h3>
                {activityDescription
                  ? activityDescription
                  : 'There is no description'}
              </h3>
              {activityDescription && (
                <div className={classes['description-update']}>
                  <label>Update here</label>
                  <input
                    type="text"
                    value={newDescription}
                    onChange={(e) => setNewDescription(e.target.value)}
                  />

                  <button onClick={updateDescriptionHandler}>
                    Update Description
                  </button>
                </div>
              )}
            </div>
          </div>
        )}
        {activityName && (
          <button
            className={classes['btn-publicRtn']}
            onClick={publicRoutinesHandler}
          >
            See Public Routines
          </button>
        )}
        {activityPublicRoutines.length && showRoutines ? (
          <div className={classes['routines-body']}>
            {activityPublicRoutines.map((routine) => {
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
                </div>
              );
            })}
          </div>
        ) : (
          <h3>{!showRoutines ? 'Click to see Routines' : 'Not Routines'}</h3>
        )}
      </div>
    </Layout>
  );
};

export default Activities;
