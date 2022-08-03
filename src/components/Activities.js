import React, { useState } from 'react';
import { getActivities } from '../api';
import CreateActivities from './createActivities'

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
      <CreateActivities/>
    </div>
  </>
  )

};

export default Activities;
