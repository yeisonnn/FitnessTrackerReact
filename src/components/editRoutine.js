import React, { useState } from 'react';
import { editRoutine } from '../api';
import { getCurrentData } from '../utils/auth';
import classes from './EditRoutine.module.css';

const EditRoutine = (props) => {
  const { routineId } = props;
  const token = getCurrentData('token');
  const [name, setName] = useState('');
  const [goal, setGoal] = useState('');
  const [isPublic, setIsPublic] = useState(true);

  async function handleSubmit(event) {
    event.preventDefault();
    const activities = await editRoutine(
      name,
      goal,
      isPublic,
      routineId,
      token
    );
    setName('');
    setGoal('');
    console.log(activities, 'This is submitted activities');
  }
  return (
    <div className={classes['login-body']}>
      <div className={classes.close}>
        <button type="button">X</button>
      </div>
      <form className={classes.form} onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name Of Routine"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Goal"
          value={goal}
          onChange={(e) => setGoal(e.target.value)}
        />

        <input type="submit" value="Update" />
      </form>
    </div>
  );
};

export default EditRoutine;
