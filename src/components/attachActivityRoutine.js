import React, { useState } from 'react';
import { attachActivityToRoutine } from '../api';
import { getCurrentData } from '../utils/auth';

const AttachActivityToRoutine = (props) => {
    const {routineId} = props
    const [count, setCount] = useState('')
    const [duration, setDuration] = useState('')
    const [activityId, setActivityId] = useState('');
    
      
    async function handleSubmit(event){
      event.preventDefault();
      const activityId = event.target.dataset.id;
      setActivityId(event.target.dataset.id);
      const token = getCurrentData("token")
      attachActivityToRoutine(token, activityId, count, duration, routineId)
    }

    return(
    <div>
      <form onSubmit={handleSubmit}>
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
        <button type="submit">Attach Activity</button>
      </form>
    </div>
    )
}

export default AttachActivityToRoutine