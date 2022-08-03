import classes from './Layout.module.css';
import Navbar from './Navbar';

const Layout = (props) => {
  return (
    <div className={classes['layout-main']}>
      <div className={classes['layout-header']}>
        <h3>
          Fitness <span>TRACKER</span>
        </h3>
      </div>
      <div className={classes['layout-body']}>
        <Navbar />
        <div> {props.children}</div>
      </div>
    </div>
  );
};

export default Layout;
