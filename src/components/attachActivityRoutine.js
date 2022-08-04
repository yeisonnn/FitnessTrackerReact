import React, { useState } from 'react';
import { attachActivityToRoutine } from '../api';
import { getCurrentData } from '../utils/auth';

const AttachActivityToRoutine = (props) => {
  const { routineId, activityId } = props;
  const [count, setCount] = useState('');
  const [duration, setDuration] = useState('');
  console.log(count);
  console.log(duration);

  const token = getCurrentData('token');
  console.log(
    token,
    'This is token',
    activityId,
    'This activityId',
    count,
    duration,
    routineId,
    'This is routineId'
  );

  async function handleSubmit(event) {
    event.preventDefault();

    const attachedActivity = await attachActivityToRoutine(
      token,
      activityId,
      count,
      duration,
      routineId
    );

    console.log(attachedActivity, 'activity was attached successfully');
  }

  return (
    <div>
      <form>
        <label>
          <input
            type="text"
            value={count}
            onChange={(e) => setCount(e.target.value)}
          ></input>
        </label>
        <label>
          <input
            type="text"
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
          ></input>
        </label>
        <button type="submit" onSubmit={handleSubmit}>
          Attach Activity
        </button>
      </form>
    </div>
  );
};

export default AttachActivityToRoutine;
