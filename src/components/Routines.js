import React, { useState, useEffect } from 'react';
import { showPublicRoutines } from '../api';
import Layout from './Layout';
import classes from './Routines.module.css';

const Routines = () => {
  const [publicRoutines, setPublicRoutines] = useState([]);

  const getAllPublicRoutines = async () => {
    const publicRoutines = await showPublicRoutines();
    const isPublic = await publicRoutines.filter(
      (ele) => ele.isPublic === true
    );
    setPublicRoutines(isPublic);
    return;
  };

  useEffect(() => {
    getAllPublicRoutines();
  }, []);

  return (
    <Layout>
      <div className={classes['routines-main']}>
        <div className={classes['routines-header']}>
          <h2>
            Public <span>Routines</span>
          </h2>
        </div>
        <div className={classes['routines-body']}>
          <ul>
            {publicRoutines.map((rtn) => (
              <li key={rtn.id}>
                {rtn.name}: {rtn.goal}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Layout>
  );
};

export default Routines;
