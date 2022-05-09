import styles from "./LinkItem.module.scss";

const LinkItem = function (props) {
  console.log(props);
  return (
    <li className={styles["about__item"]}>
      <p
        className={`${styles["about__link"]} ${styles["about__link--original"]}`}
      >
        {props.originalLink}
      </p>
    </li>
  );
};

export default LinkItem;
