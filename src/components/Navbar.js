import classes from './Navbar.module.css';
import { Link } from 'react-router-dom';
import { IoHomeSharp } from 'react-icons/io5';
import { CgGym } from 'react-icons/cg';
import { FaUserCheck } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className={classes.navbar}>
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
          <Link to="/Login">
            <FaUserCheck />
            Login
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
