import { Link } from 'react-router-dom';

import classes from './Home.module.css';

const Home = () => {
  return (
    <section className={classes.mainHome}>
      <div className={classes['home-container']}>
        <div className={classes.welcome}>
          <h1 className={classes.title}>
            Welcome to <span>fitness </span>tracker
          </h1>
          <div>
            <button className={`${classes.btn} ${classes.primary}`}>
              <Link to="/login">Login</Link>
            </button>
          </div>
          <h3>Stay healthy - Get fit</h3>
        </div>
        <div className={classes.info}>
          <ul className={classes['info-list']}>
            <li>
              <Link to="/routines">See Routines</Link>
            </li>
            <li>
              <Link to="/activities">See Activities</Link>
            </li>
          </ul>
          <div className={classes['register-btn']}>
            <button className={`${classes.btn} ${classes.secondary}`}>
              <Link to="/register">Register Now!</Link>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
