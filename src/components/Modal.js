import classes from './Modal.module.css';
import { useNavigate } from 'react-router-dom';

const Modal = (props) => {
  const navigate = useNavigate();
  if (!props.show) {
    return null;
  }

  const closeModalHandler = () => {
    navigate('/');
  };

  return (
    <div className={classes.modal}>
      <div className={classes['modal-content']}>
        <div className={classes['modal-header']}>
          <h4 className={classes['modal-title']}>{props.title}</h4>
        </div>
        <div className={classes['modal-body']}>{props.body}</div>
        <div className={classes['modal-footer']}>
          <button className={classes['modal-btn']} onClick={closeModalHandler}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
