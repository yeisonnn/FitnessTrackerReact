import classes from './Modal.module.css';

const Modal = (props) => {
  if (!props.show) {
    return null;
  }

  return (
    <div className={classes.modal}>
      <div className={classes['modal-content']}>
        <div className={classes['modal-header']}>
          <h4 className={classes['modal-title']}>{props.title}</h4>
        </div>
        <div className={classes['modal-body']}>{props.body}</div>
        <div className={classes['modal-footer']}>
          <button className={classes['modal-btn']}>Close</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
