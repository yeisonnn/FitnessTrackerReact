import React, { useState, useEffect } from 'react';
import { showPublicRoutines } from '../api';
import Layout from './Layout';
import classes from './Routines.module.css';

const Routines = () => {
  const [publicRoutines, setPublicRoutines] = useState([]);

  const getAllPublicRoutines = async () => {
    const allRoutines = await showPublicRoutines();
    const routinesSorted = await allRoutines.slice(0, 20);
    const isPublic = await routinesSorted.filter(
      (ele) => ele.isPublic === true
    );
    console.log(isPublic);
    return isPublic;
  };

  useEffect(() => {
    const fetchData = async () => {
      const data = await getAllPublicRoutines();
      setPublicRoutines(data);
    };
    fetchData();
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
          {publicRoutines.map((routine) => {
            return (
              <div className={classes['routines-card']}>
                <div className={classes['rtn-header']}>
                  <h2>{routine.name}</h2>
                </div>
                <div className={classes['rtn-body']}>
                  <p>Goal</p>
                  <h3>{routine.goal}</h3>
                  <p>Creator</p>
                  <h3>{routine.creatorName}</h3>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Layout>
  );
};

export default Routines;

/*
{publicRoutines.length ? (
            <div>
              {publicRoutines.map((routine) => (
                <div>{routine.name}</div>
              ))}
            </div>
          ) : (
            <p>We cannot find any Routine</p>
          )}
*/
