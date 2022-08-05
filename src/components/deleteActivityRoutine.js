import React from 'react';
import { deleteRoutineActivity } from '../api';
import { getCurrentData } from '../utils/auth';

const DeleteRoutineActivity = (props) => {
    const { routineActivityId } = props
    const token = getCurrentData("token")


async function handleClick(event){
    event.preventDefault();
    await deleteRoutineActivity (token, routineActivityId)
    }
    
    return(
    <button onClick={handleClick}>
    Delete Activity
    </button>
    )
}

export default DeleteRoutineActivity