import React, { useState } from 'react';
import { getActivities } from '../api';
import CreateActivities from './createActivities';
import Layout from './Layout';

const Activities = () => {
  const [allActivities, setAllActivities] = useState([]);
  const getAllActivities = async () => {
    const allActivities = await getActivities();
    setAllActivities(allActivities);
    return;
  };
  getAllActivities();
  return (
    <Layout>
      <h1>This is the activities</h1>
      <ul>
        {allActivities.map((rtn) => (
          <li key={rtn.id}>
            {rtn.name}: {rtn.description}
          </li>
        ))}
      </ul>
      <div>
        <CreateActivities />
      </div>
    </Layout>
  );
};

export default Activities;
