import React, { useState } from 'react';
import { createRoutine } from '../api';
import { getCurrentData } from '../utils/auth';
import classes from './CreateRoutine.module.css';

const CreateRoutine = (props) => {
  const token = getCurrentData('token');
  const [name, setName] = useState('');
  const [goal, setGoal] = useState('');
  const [isPublic, setIsPublic] = useState(true);
  const { setShowCreateRoutine, setLoadingPage } = props;

  async function handleSubmit(event) {
    event.preventDefault();
    const activities = await createRoutine(name, goal, isPublic, token);
    setName('');
    setGoal('');
    console.log(activities, 'This is submitted activities');
    setShowCreateRoutine(false);
    setLoadingPage(true);
  }
  return (
    <div className={classes['login-body']}>
      <div className={classes.close}>
        <button type="button" onClick={() => setShowCreateRoutine(false)}>
          X
        </button>
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

        <input type="submit" value="create" />
      </form>
    </div>
  );
};

export default CreateRoutine;
