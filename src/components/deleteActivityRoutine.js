import React from 'react';
import { deleteRoutineActivity } from '../api';
import { getCurrentData } from '../utils/auth';
import classses from './DeleteActivityRoutine.module.css';

const DeleteRoutineActivity = (props) => {
  const { routineActivityId, getAllPublicRoutines } = props;
  const token = getCurrentData('token');

  async function handleClick(event) {
    event.preventDefault();
    await deleteRoutineActivity(token, routineActivityId);
    await getAllPublicRoutines();
  }

  return (
    <div className={classses['delete-button']}>
      <button onClick={handleClick}>Delete Activity</button>
    </div>
  );
};

export default DeleteRoutineActivity;
