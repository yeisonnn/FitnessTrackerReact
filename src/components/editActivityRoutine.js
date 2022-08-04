import React, { useState } from 'react';
import { updateRoutineActivity } from '../api';
import { getCurrentData } from '../utils/auth';

const UpdateRoutineActivity = async () => {
    const [count, setCount] = useState('')
    const [duration, setDuration] = useState('')
    const token = getCurrentData("token")

    async function handleSubmit(event){
      event.preventDefault();
      const updatedRoutineActivity = await updateRoutineActivity (count, duration, token);
      setCount('');
      setDuration('');
      console.log(updatedRoutineActivity, "This is the updated RoutineActivity")
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
        <button type="submit">Edit Activity</button>
      </form>
    </div>
   )
}

export default UpdateRoutineActivity