import React, { useState, useEffect } from 'react';
import { showPublicRoutines } from '../api';
import { useParams, Link } from 'react-router-dom';
import Layout from './Layout';
import classes from './UserActivities.module.css';

const UserActivities = () => {
  const { username } = useParams();
  const [userActivities, setUserActivities] = useState([]);

  const getActivitiesUser = async () => {
    const AllRoutines = await showPublicRoutines();
    const filterActivities = await AllRoutines.filter(
      (act) => act.creatorName === username
    );
    setUserActivities(filterActivities);
  };

  useEffect(() => {
    getActivitiesUser();
  }, []);

  console.log('userActivities', userActivities);
  return (
    <Layout>
      <div className={classes['routines-main']}>
        <div className={classes['routines-header']}>
          <h2>
            <span>{username}'s</span> Activities
          </h2>
        </div>
        {userActivities.length ? (
          <div className={classes['routines-body']}>
            {userActivities.map((routine) => {
              return (
                <div className={classes['routines-card']} key={routine.id}>
                  <div className={classes['rtn-header']}>
                    <h2>{routine.name}</h2>
                  </div>
                  <div className={classes['rtn-body']}>
                    <p>Goal</p>
                    <h3>{routine.goal}</h3>
                    <p>Creator</p>
                    <h3>{routine.creatorName}</h3>
                  </div>
                  <Link to="/routines" className={classes.link}>
                    Go back To routines
                  </Link>
                </div>
              );
            })}
          </div>
        ) : (
          <h2>There are activities for {username}</h2>
        )}
      </div>
    </Layout>
  );
};

export default UserActivities;
