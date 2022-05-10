import LinkItem from "./LinkItem";
import styles from "./LinkList.module.scss";

const LinkList = function (props) {
  return (
    <ul className={styles["about__list"]}>
      {props.links.map((link, i) => (
        <LinkItem
          key={`${link.id}__${i}`}
          id={link.id}
          originalLink={link.originalLink}
          shortenedLink={link.shortenedLink}
        />
      ))}
    </ul>
  );
};

export default LinkList;
