import React, { useState } from 'react';
import { createActivity } from '../api';
import { getCurrentData } from '../utils/auth';
import classes from './CreateActivities.module.css';

const CreateActivities = (props) => {
  const token = getCurrentData('token');
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const { getAllActivities } = props;

  async function handleSubmit(event) {
    event.preventDefault();
    const activities = await createActivity(name, description, token);
    if (!activities) {
      setErrorMessage('An Activity with this name already exists');
    }
    setName('');
    setDescription('');
    getAllActivities();
  }
  return (
    <div className={classes['createAct-main']}>
      <div className={classes['createActivity-body']}>
        <form className={classes.form} onSubmit={handleSubmit}>
          <input
            placeholder="Name of Activity"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            placeholder="Description of Activity"
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />

          <input
            className={classes['createRoutine-btn']}
            type="submit"
            value="create Activity"
          />
        </form>
      </div>
    </div>
  );
};

export default CreateActivities;
