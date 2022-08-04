import classes from './Navbar.module.css';
import { Link, useNavigate } from 'react-router-dom';
import { IoHomeSharp } from 'react-icons/io5';
import { CgGym } from 'react-icons/cg';
import { FaUserCheck } from 'react-icons/fa';
import { GiRunningNinja } from 'react-icons/gi';
import { BsClockHistory } from 'react-icons/bs';
import { getCurrentData, clearCurrentData } from '../utils/auth';

const Navbar = () => {
  const user = getCurrentData('username');
  const navigate = useNavigate();

  const signupHandler = () => {
    clearCurrentData();
    navigate('/');
  };

  return (
    <nav className={classes.navbar}>
      {user ? (
        <ul className={classes.list}>
          <li>
            <Link to="/">
              <IoHomeSharp />
              Home
            </Link>
          </li>
          <li>
            <Link to="/activities">
              <CgGym />
              Activities
            </Link>
          </li>
          <li>
            <Link to="/routines">
              <GiRunningNinja />
              Routines
            </Link>
          </li>
          <li>
            <Link to="/myRoutines">
              <BsClockHistory />
              My Routines
            </Link>
          </li>
          <button className={classes.signup} onClick={signupHandler}>
            Sign out
          </button>
        </ul>
      ) : (
        <ul className={classes.list}>
          <li>
            <Link to="/">
              <IoHomeSharp />
              Home
            </Link>
          </li>
          <li>
            <Link to="/activities">
              <CgGym />
              Activities
            </Link>
          </li>
          <li>
            <Link to="/routines">
              <GiRunningNinja />
              Routines
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
