import React, { useState } from 'react';
import { getActivities } from '../api';
import createAnActivity from './createActivity'

const Activities = () => {
  const [allActivities, setAllActivities] = useState([]);
  const getAllActivities = async () => {
    const allActivities = await getActivities();
    setAllActivities(allActivities)
    return
    }  
  getAllActivities()
  return (
    <>
  <h1>This is the activities</h1>
    <ul>
      {allActivities.map((rtn) => (
        <li key={rtn.id}>
          {rtn.name}: {rtn.description}
        </li>
        
      )
      )}
    </ul>
    <div>
      <createAnActivity/>
    </div>
  </>
  )

};

export default Activities;
