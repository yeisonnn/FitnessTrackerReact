import React, { useState } from 'react';
import { updateRoutineActivity } from '../api';
import { getCurrentData } from '../utils/auth';

const UpdateRoutineActivity = async () => {
    const [count, setCount] = useState('')
    const [duration, setDuration] = useState('')
    const token = getCurrentData("token")

    async function handleSubmit(event){
      event.preventDefault();
      const routineActivityId = event.target
      const updatedRoutineActivity = await updateRoutineActivity (count, duration, token, routineActivityId);
      setCount('');
      setDuration('');
      console.log(updatedRoutineActivity, "This is the updated RoutineActivity")
    }

   
   return(
    <div>
      <div >
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
        <button type="submit" OnSubmit = {handleSubmit} >Edit Activity</button>
      </div>
    </div>
   )
}

export default UpdateRoutineActivity