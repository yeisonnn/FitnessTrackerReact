import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import classes from './Home.module.css';
import Login from './Login';
import { getCurrentData, clearCurrentData } from '../utils/auth';
import { AiOutlinePlus } from 'react-icons/ai';
import logo from '../images/logo.svg';

const Home = () => {
  const [userLogged, setUserLogged] = useState(false);
  const currentUser = getCurrentData('username');

  const signOutHandler = () => {
    setUserLogged();
    clearCurrentData();
  };

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
            {!currentUser && !userLogged ? (
              <Login setUserLogged={setUserLogged} />
            ) : (
              <div className={classes['home-user']}>
                <h3>Welcome</h3>
                <h2>{currentUser}</h2>
                <button onClick={signOutHandler}>Sign out</button>
              </div>
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
      <div className={classes.divider}></div>
      <footer className={classes.footer}>
        <div className={classes['footer-main']}>
          <div>
            <img className={classes['footer-logo']} src={logo} alt="logo" />
          </div>
          <div>
            <h3 className={classes['footer-title']}>info</h3>
            <ul className={classes['footer-list']}>
              <li>Our Mission</li>
              <li>Contact Us</li>
              <li>Help & FAQs</li>
              <li>Privacy Policy</li>
              <li>Terms of Service</li>
            </ul>
          </div>
          <div>
            <h3 className={classes['footer-title']}>Help us</h3>
            <ul className={classes['footer-list']}>
              <li>Donate</li>
              <li>share our Work</li>
            </ul>
          </div>
          <div>
            <h3 className={classes['footer-title']}>Resources</h3>
            <ul className={classes['footer-list']}>
              <li>API Docs</li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Home;
