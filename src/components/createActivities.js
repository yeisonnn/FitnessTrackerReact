import React, { useState } from 'react';
import { createActivity } from '../api';
import { getCurrentData } from '../utils/auth';

const CreateActivities = (props) => {
  const token = getCurrentData('token');
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [errorMessage, setErrorMessage] = useState ('')

  async function handleSubmit(event) {
    event.preventDefault();
    const activities = await createActivity(name, description, token);
    if (!activities){
      setErrorMessage("An Activity with this name already exists")
    }
    setName('');
    setDescription('');
    console.log(activities, 'This is submitted activities');
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Name
        </label>
          <input
          placeholder = "Name of Activity"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></input>
        <label>
          Description
        </label>
          <input
          placeholder = "Description of Activity"
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></input>
        
        <button>Create Activity</button>
        {errorMessage ?(
          <h1>{errorMessage}</h1>
        ) :null}
      </form>
    </div>
  );
};

export default CreateActivities;
