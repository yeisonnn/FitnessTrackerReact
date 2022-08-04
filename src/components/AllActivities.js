import React, { useState, useEffect } from 'react';
import { getActivities } from '../api';
import classes from './AllActivities.module.css';

const AllActivities = () => {
  const [allActivities, setAllActivities] = useState([]);
  const getAllActivities = async () => {
    const allActivitiesFecth = await getActivities();
    const transformedActivities = await allActivitiesFecth.slice(0, 99);
    return setAllActivities(transformedActivities);
  };

  useEffect(() => {
    getAllActivities();
  }, []);

  return (
    <form className={classes['allActivities-form']}>
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
  );
};

export default AllActivities;
