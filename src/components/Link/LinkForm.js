import { useRef, useState } from "react";
import axios from "axios";
import Button from "../UI/Button";
import styles from "./LinkForm.module.scss";

// ${styles["form__input--error"]}

const LinkForm = function (props) {
  const [hasError, setHasError] = useState(false);
  const inputRef = useRef("");
  let errorContent;

  const submitFormHandler = async function (e) {
    e.preventDefault();

    if (inputRef.current.value.trim() === "") {
      setHasError(true);
      errorContent = "Please add a link";
      return;
    }

    console.log(errorContent);

    console.log(inputRef.current.value);

    try {
      setHasError(false);
      const response = await axios.post(
        `https://api.shrtco.de/v2/shorten?url=${inputRef.current.value}`
      );

      console.log(response);
    } catch (error) {
      console.log(error);
      setHasError(true);
      errorContent = error.message;
    }

    inputRef.current.value = "";
  };

  return (
    <form action='/' className={styles.form} onSubmit={submitFormHandler}>
      <div className={styles["form__wrapper"]}>
        <div className={styles["form__group"]}>
          <input
            ref={inputRef}
            type='url'
            className={`${styles["form__input"]} ${
              hasError ? styles["form__input--error"] : ""
            }`}
            placeholder='Shorten a link here...'
            id='link_Input'
            name='link'
          />
        </div>
        <div className={styles["form__group"]}>
          <Button className='btn btn--submit'>Shorten It!</Button>
        </div>
      </div>
      {hasError && <p className={styles.error}>Please add a link</p>}
    </form>
  );
};

export default LinkForm;
