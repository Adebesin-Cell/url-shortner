import styles from "./LinkItem.module.scss";
import Button from "../UI/Button";
import useCopyClipboard from "react-use-clipboard";

const LinkItem = function (props) {
  console.log(props);
  const [isCopied, setCopied] = useCopyClipboard(props.fullShortLink);

  return (
    <li className={styles["about__item"]}>
      <p
        className={`${styles["about__link"]} ${styles["about__link--original"]}`}
      >
        {`${props.originalLink.substr(0, 30)}...`}
      </p>
      <div className={styles["about__extras"]}>
        <p
          className={`${styles["about__link"]} ${styles["about__link--shortened"]}`}
        >
          {props.fullShortLink}
        </p>
        <Button
          className={`btn btn--copy ${isCopied ? "btn--copied" : ""}`}
          onClick={setCopied}
        >
          {isCopied ? "Copied!" : " Copy"}
        </Button>
      </div>
    </li>
  );
};

export default LinkItem;
