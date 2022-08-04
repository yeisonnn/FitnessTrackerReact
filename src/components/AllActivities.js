import React, { useState, useEffect } from 'react';
import { getActivities } from '../api';
import classes from './AllActivities.module.css';
import AttachActivityToRoutine from './attachActivityRoutine';

const AllActivities = (props) => {
  const { routineId } = props;
  const [allActivities, setAllActivities] = useState([]);
  const getAllActivities = async () => {
    const allActivitiesFetch = await getActivities();
    const transformedActivities = await allActivitiesFetch.slice(0, 99);
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
      <AttachActivityToRoutine routineId = {routineId}/>
    </form>
  );
};

export default AllActivities;
