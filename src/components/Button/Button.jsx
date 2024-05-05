import styles from './Button.module.css';

const Button = ({ onClick }) => {
  return (
    <button className={styles.Button} type="button" onClick={onClick}>
      Load more
    </button>
  );
};

export default Button;
