import React, { useState, useEffect } from 'react';
import { getActivities } from '../api';
import classes from './AllActivities.module.css';
import AttachActivityToRoutine from './attachActivityRoutine';

const AllActivities = (props) => {
  const { routineId } = props;
  const [activityId, setActivityId] = useState('');
  const [allActivities, setAllActivities] = useState([]);
  const getAllActivities = async () => {
    const allActivitiesFetch = await getActivities();
    const transformedActivities = await allActivitiesFetch.slice(0, 99);
    console.log(routineId, activityId)
    return setAllActivities(transformedActivities);
    
  };
  useEffect(() => {
    getAllActivities();
  }, []);

  const activityIdHandler = async (event) => {
    event.preventDefault();
    setActivityId(event.target.value);
    const activitiesFiltered = [...allActivities];
    const activity = activitiesFiltered.filter(
      (el) => el.name === event.target.value
    );
    const activityId = activity[0].id;
    console.log(activityId);
  };

  return (
    <div className={classes['allActivities-form']}>
      <select 
      id="activities"
      name="activities"
      onChange={activityIdHandler}
      value={activityId}>
        {allActivities.map((act) => {
          return (
            <option className={classes.option} value={act.name} key={act.id}>
              {act.name}
            </option>
          );
        })}
      </select>
      <AttachActivityToRoutine routineId={routineId} activityId={activityId} />
    </div>
  );
};

export default AllActivities;
