import classes from './Layout.module.css';
import Navbar from './Navbar';
import logo from '../images/logo.svg';

const Layout = (props) => {
  return (
    <div className={classes['layout-main']}>
      <div className={classes['layout-header']}>
        <h3>
          Fitness <span>TRACKER</span>
        </h3>
        <img className={classes.logo} src={logo} alt="logo" />
      </div>
      <div className={classes['layout-body']}>
        <Navbar />
        <div> {props.children}</div>
      </div>
    </div>
  );
};

export default Layout;
