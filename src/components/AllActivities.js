import React, { useState, useEffect } from 'react';
import { getActivities } from '../api';
import classes from './AllActivities.module.css';
import AttachActivityToRoutine from './attachActivityRoutine';

const AllActivities = (props) => {
  const { setActId, setActivityName, setShowEdit, setError } = props;
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
    setActivityName(activity.name);
    setError(false);

    setShowEdit(true);
    if (activity) {
      setActId(activity[0].id);
      setActivityName(activity[0].name);
    }
  };

  return (
    <div className={classes['allActivities-form']}>
      <select id="activities" name="activities" onChange={activityIdHandler}>
        <>
          <option
            className={classes.option}
            id={Math.random()}
            value="select..."
          >
            Select ...
          </option>
          {allActivities.map((act) => {
            const activityId = act.id;
            return (
              <option className={classes.option} value={act.name} key={act.id}>
                {act.name}
              </option>
            );
          })}
        </>
      </select>
    </div>
  );
};

export default AllActivities;
