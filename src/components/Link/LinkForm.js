import { useRef, useState } from "react";
import axios from "axios";
import Button from "../UI/Button";
import styles from "./LinkForm.module.scss";

// ${styles["form__input--error"]}

const LinkForm = function (props) {
  const [hasError, setHasError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const inputRef = useRef("");

  const submitFormHandler = async function (e) {
    e.preventDefault();

    if (inputRef.current.value.trim() === "") {
      setHasError(true);
      setErrorMessage("Please add a link");
      return;
    }

    try {
      setHasError(false);
      const response = await axios.post(
        `https://api.shrtco.de/v2/shorten?url=${inputRef.current.value}`
      );

      const template = response.data.result;

      console.log(template);

      const data = {
        id: template.code,
        originalLink: template.original_link,
        shortenedLink: template.short_link,
        fullShortLink: template.full_short_link,
      };

      props.onAddData(data);
    } catch (error) {
      console.log(error);
      setHasError(true);
      setErrorMessage(error.message);
      throw new Error(error.message);
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
      {hasError && <p className={styles.error}>{errorMessage}</p>}
    </form>
  );
};

export default LinkForm;
