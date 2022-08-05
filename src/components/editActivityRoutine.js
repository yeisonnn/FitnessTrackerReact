import React, { useState } from 'react';
import { updateRoutineActivity } from '../api';
import { getCurrentData } from '../utils/auth';

const UpdateRoutineActivity = (props) => {
    const { routineActivityId } = props
    const [count, setCount] = useState('')
    const [duration, setDuration] = useState('')
    const token = getCurrentData("token")

    async function OnClick(event){
      event.preventDefault();
      const updatedRoutineActivity = await updateRoutineActivity (count, duration, token, routineActivityId);
      setCount('');
      setDuration('');
      console.log(updatedRoutineActivity, "This is the updated RoutineActivity")
    }
   return(
    <div>
      <label>Count</label>
      <input type="text"
          placeholder="New Count"
          value={count}
          onChange={(e) => 
          setCount(e.target.value)}>
          </input>
      <label>Duration</label>
      <input type="text"
          placeholder="New Duration"
          value={duration}
          onChange={(e) => 
          setDuration(e.target.value)}>
          </input>
        <button type="submit" onClick = {OnClick} >Edit Activity
        </button>
    </div>
   )
}

export default UpdateRoutineActivity