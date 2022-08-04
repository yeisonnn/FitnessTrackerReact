import React from 'react';
import { deleteRoutineActivity } from '../api';
import { getCurrentData } from '../utils/auth';

const DeleteRoutineActivity = () => {
    const token = getCurrentData("token")
    async function handleClick(event){
        event.preventDefault();
        await deleteRoutineActivity (token)
    }
    
    return(
        <button onClick={handleClick}>
      Delete Activity
    </button>
    )
}

export default DeleteRoutineActivity