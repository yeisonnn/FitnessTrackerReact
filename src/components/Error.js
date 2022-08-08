import classes from './Error.module.css';

const Error = (props) => {
  const closeErrorHandler = () => {
    props.closeError(false);
  };
  return (
    <div className={classes.error}>
      <div className={classes['error-content']}>
        <div className={classes['error-header']}>
          <h4 className={classes['error-title']}>Routine was not attached</h4>
        </div>
        <div className={classes['error-body']}>
          Please Select another activity or Try again!
        </div>
        <div className={classes['error-footer']}>
          <button className={classes['error-btn']} onClick={closeErrorHandler}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default Error;
