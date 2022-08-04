import React, { useState } from 'react';
import { attachActivityToRoutine } from '../api';

const AttachActivityToRoutine = (props) => {
    const {routineId} = props
    const [count, setCount] = useState('')
    const [duration, setDuration] = useState('')
    const token = getCurrentData("token")

await attachActivityToRoutine(token, activityId, count, duration, routineId)
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
        <button type="submit">AttachActivityToRoutine Activity</button>
      </form>
    </div>
    )
}

export default AttachActivityToRoutine