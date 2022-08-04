import React, { useState, useEffect } from 'react';
import { getActivities } from '../api';
import CreateActivities from './createActivities';
import Layout from './Layout';
import classes from './Activities.module.css';
import AllActivities from './AllActivities';

const Activities = () => {
  const [allActivities, setAllActivities] = useState([]);
  const [activityName, setActivityName] = useState('');
  const [activityId, setActivityId] = useState('');
  const [activityDescription, setActivityDescription] = useState('');

  const getAllActivities = async () => {
    const allActivitiesFetch = await getActivities();
    const transformedActivities = await allActivitiesFetch.slice(0, 99);
    return setAllActivities(transformedActivities);
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
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Activities;
