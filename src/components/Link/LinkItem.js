import styles from "./LinkItem.module.scss";
import Button from "../UI/Button";
import { useState } from "react";

const LinkItem = function (props) {
  const [isCopied, setIsCopied] = useState(false);
  console.log(props);

  const copyLinkHandler = function (copy) {
    setIsCopied(true);
  };

  return (
    <li className={styles["about__item"]}>
      <p
        className={`${styles["about__link"]} ${styles["about__link--original"]}`}
      >
        {props.originalLink}
      </p>
      <div className={styles["about__extras"]}>
        <p
          className={`${styles["about__link"]} ${styles["about__link--shortened"]}`}
        >
          {props.shortenedLink}
        </p>
        <Button
          className={`btn btn--copy ${isCopied ? "btn--copied" : ""}`}
          onClick={copyLinkHandler}
        >
          {isCopied ? "Copied!" : " Copy"}
        </Button>
      </div>
    </li>
  );
};

export default LinkItem;
