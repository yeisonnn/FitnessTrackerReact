import React, { useState, useEffect } from 'react';
import { getActivities } from '../api';
import classes from './AllActivities.module.css';
import AttachActivityToRoutine from './attachActivityRoutine';

const AllActivities = (props) => {
  const { setActId, setActivityName } = props;
  const [activityId, setActivityId] = useState('');
  const [allActivities, setAllActivities] = useState([]);

  const getAllActivities = async () => {
    const allActivitiesFetch = await getActivities();
    const transformedActivities = await allActivitiesFetch.slice(0, 99);

    return setAllActivities(transformedActivities);
  };
  useEffect(() => {
    getAllActivities();
  }, []);

  const activityIdHandler = async (event) => {
    event.preventDefault();
    await setActivityId(event.target.value);
    const activitiesFiltered = [...allActivities];
    const activity = activitiesFiltered.filter(
      (el) => el.name === event.target.value
    );
    const activityId = activity[0].id;
    // const activityName = activity.name
    // if(activity.name){
    //   setActivityName(activityName)
    // }
    // console.log(setActivityName())
    if(activityId){
      setActId(activityId);
    }
    
  };

  return (
    <div className={classes['allActivities-form']}>
      <select
        id="activities"
        name="activities"
        onChange={activityIdHandler}
        value={activityId}
      >
        {allActivities.map((act) => {
          const activityId=act.id
          return (
            <option className={classes.option} value={act.name} key={act.id}>
              {act.name}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default AllActivities;

/*
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
*/
