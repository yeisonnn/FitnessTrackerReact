import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import classes from './Home.module.css';
import Login from './Login';
import { AiOutlinePlus } from 'react-icons/ai';

const Home = () => {
  const [showLogin, setLogin] = useState(true);
  return (
    <>
      <section className={classes.mainHome}>
        <div className={classes['home-container']}>
          <div className={classes.welcome}>
            <h1 className={classes.title}>
              Welcome to <span>fitness </span>tracker
            </h1>
            <div>
              <button className={`${classes.btn} ${classes.secondary}`}>
                <Link to="/register">Sign Up Now!</Link>
              </button>
            </div>
            <h3>Stay healthy - Get fit</h3>
            <ul className={classes['info-list']}>
              <li>
                <Link to="/routines">Routines</Link>
              </li>
              <li>
                <Link to="/activities">Activities</Link>
              </li>
            </ul>
          </div>
          <div className={classes.info}>
            {showLogin ? (
              <Login />
            ) : (
              <>
                <h1>Welcome username</h1>
              </>
            )}
          </div>
        </div>
      </section>
      <div className={classes.questions}>
        <h2>Have questions?</h2>
      </div>
      <div className={classes.description}>
        <h4>What you can do here!</h4>
        <div className={classes['description-list']}>
          <ul>
            <li>
              <AiOutlinePlus />
              See public routines
            </li>
            <li>
              {' '}
              <AiOutlinePlus />
              Create a free account
            </li>
            <li>
              {' '}
              <AiOutlinePlus />
              Create your own Activities
            </li>
            <li>
              {' '}
              <AiOutlinePlus />
              Create your own Routines
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Home;
