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
    console.log(activities, 'This is submitted activities');
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

/*
<div className={classes['createActivity-main']}>
      <h3>Create an Activity Here!</h3>
      <form onSubmit={handleSubmit} className={classes['createActivity-form']}>
        <div className={classes['createActivity-name']}>
          <label>Name</label>
          <input
            placeholder="Name of Activity"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className={classes['createActivity-description']}>
          <label>Description</label>
          <input
            placeholder="Description of Activity"
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className={classes['createActivity-btn']}>
          <button type="submit">Create Activity</button>
        </div>

        {errorMessage ? <h1>{errorMessage}</h1> : null}
      </form>
    </div>
*/
