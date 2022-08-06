import React, { useState } from 'react';
import { createRoutine } from '../api';
import { getCurrentData } from '../utils/auth';
import classes from './CreateRoutine.module.css';

const CreateRoutine = (props) => {
  const token = getCurrentData('token');
  const [name, setName] = useState('');
  const [goal, setGoal] = useState('');
  const [isPublic, setIsPublic] = useState(true);
  const { setShowCreateRoutine, setLoadingPage, getAllPublicRoutines } = props;
  const [error, setError] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();
    if (name && goal) {
      const activities = await createRoutine(name, goal, isPublic, token);
      setName('');
      setGoal('');
      setShowCreateRoutine(false);
      getAllPublicRoutines();
    } else {
      setError(true);
    }
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
          onChange={(e) => {
            setName(e.target.value);
            setError(false);
          }}
        />
        <input
          type="text"
          placeholder="Goal"
          value={goal}
          onChange={(e) => {
            setGoal(e.target.value);
            setError(false);
          }}
        />

        <input
          className={classes['createRoutine-btn']}
          type="submit"
          value="create"
        />
      </form>
      {error && <p className={classes.error}>Please fill Name and Goal</p>}
    </div>
  );
};

export default CreateRoutine;
