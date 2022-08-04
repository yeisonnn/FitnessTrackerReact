import React, { useState, useEffect } from 'react';
import { getActivities } from '../api';
import CreateActivities from './CreateActivities';
import Layout from './Layout';
import classes from './Activities.module.css';

const Activities = () => {
  const [allActivities, setAllActivities] = useState([]);
  const getAllActivities = async () => {
    const allActivitiesFecth = await getActivities();
    const transformedActivities = await allActivitiesFecth.slice(0, 99);
    return setAllActivities(transformedActivities);
  };

  useEffect(() => {
    getAllActivities();
  }, []);

  console.log(allActivities);

  return (
    <Layout>
      <form className={classes['activities-form']}>
        <select id="activities" name="activities">
          {allActivities.map((act) => {
            return (
              <option className={classes.option} value={act.name}>
                {act.name}
              </option>
            );
          })}
        </select>
      </form>
    </Layout>
  );
};

export default Activities;
