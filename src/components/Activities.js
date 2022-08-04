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
      <div className={classes['activities-main']}>
        <div className={classes['activities-header']}>
          <h2>
            All <span>Activities</span>
          </h2>
        </div>
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
      </div>
    </Layout>
  );
};

export default Activities;
