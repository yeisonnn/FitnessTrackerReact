import React, { useState } from 'react';
import { updateRoutineActivity } from '../api';
import { getCurrentData } from '../utils/auth';

const UpdateRoutineActivity = () => {
    const [count, setCount] = useState('')
    const [duration, setDuration] = useState('')
    const token = getCurrentData("token")


   await updateRoutineActivity (count, duration, token)
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
        <button type="submit">Edit Activity</button>
      </form>
    </div>
   )
}

export default UpdateRoutineActivity