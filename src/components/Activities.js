import React, { useState, useEffect } from 'react';
import { getActivities } from '../api';
import CreateActivities from './createActivities';
import Layout from './Layout';
import classes from './Activities.module.css';
import AllActivities from './AllActivities';

const Activities = () => {
  const [allActivities, setAllActivities] = useState([]);
  const [activityName, setActivityName] = useState('');

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
    console.log(activityName);
    const activitiesFiltered = [...allActivities];
    const activity = activitiesFiltered.filter(
      (el) => el.name === event.target.value
    );
    const activityId = activity[0].id;
    console.log(activityId);
  };

  return (
    <Layout>
      <div className={classes['activities-main']}>
        <div className={classes['activities-header']}>
          <h2>
            All <span>Activities</span>
          </h2>
        </div>
        <form className={classes['activities-form']}>
          <select
            id="activities"
            name="activities"
            onChange={activityNameHandler}
            value={activityName}
          >
            {allActivities.map((act) => {
              return (
                <option
                  className={classes.option}
                  value={act.name}
                  label={act.name}
                ></option>
              );
            })}
          </select>
        </form>
      </div>
    </Layout>
  );
};

export default Activities;
