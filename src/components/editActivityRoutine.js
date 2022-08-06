import React, { useState } from 'react';
import { updateRoutineActivity } from '../api';
import { getCurrentData } from '../utils/auth';
import classes from './EditActivityRoutine.module.css';

const UpdateRoutineActivity = (props) => {
  const { routineActivityId, getAllPublicRoutines } = props;
  const [count, setCount] = useState('');
  const [duration, setDuration] = useState('');
  const token = getCurrentData('token');

  async function updateRoutineHandler(event) {
    event.preventDefault();

    const updatedRoutineActivity = await updateRoutineActivity(
      count,
      duration,
      token,
      routineActivityId
    );

    setCount('');
    setDuration('');
    getAllPublicRoutines();
  }
  return (
    <div className={classes['editActivity-main']}>
      <div className={classes['editActivity']}>
        <label>Count</label>
        <input
          type="text"
          placeholder="new count..."
          value={count}
          onChange={(e) => setCount(e.target.value)}
        ></input>
      </div>
      <div className={classes['editActivity']}>
        <label>Duration</label>
        <input
          type="text"
          placeholder="new duration..."
          value={duration}
          onChange={(e) => setDuration(e.target.value)}
        ></input>
      </div>
      <div className={classes['editActivity-btn']}>
        <button type="submit" onClick={updateRoutineHandler}>
          Edit Activity
        </button>
      </div>
    </div>
  );
};

export default UpdateRoutineActivity;
