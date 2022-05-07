import Button from "../UI/Button";
import styles from "./LinkForm.module.scss";

const LinkForm = function (props) {
  return (
    <form action='/' className={styles.form}>
      <div className={styles["form__group"]}>
        <input
          type='text'
          className={styles["form__input"]}
          placeholder='Shorten a link here...'
          id='link_Input'
          name='link'
        />
      </div>
      <div className={styles["form__group"]}>
        <Button className='btn btn--submit'>Shorten It!</Button>
      </div>
    </form>
  );
};

export default LinkForm;
