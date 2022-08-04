import React from 'react';
import { deleteRoutineActivity } from '../api';
import { getCurrentData } from '../utils/auth';

const DeleteRoutineActivity = () => {
    const token = getCurrentData("token")


async function handleClick(event){
    event.preventDefault();
    const deletedAttachedActivity = await deleteRoutineActivity (token)
    console.log(deletedAttachedActivity, "This is the deleted attached activity")
    }
    
    return(
    <button onClick={handleClick}>
    Delete Activity
    </button>
    )
}

export default DeleteRoutineActivity