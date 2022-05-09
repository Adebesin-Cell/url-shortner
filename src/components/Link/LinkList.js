import LinkItem from "./LinkItem";
import styles from "./LinkList.module.scss";

const LinkList = function (props) {
  console.log(props.links);
  return (
    <ul className={styles["about__list"]}>
      {props.links.map((link) => (
        <LinkItem
          key={link.id}
          id={link.id}
          originalLink={link.originalLink}
          shortenedLink={link.shortenedLink}
        />
      ))}
    </ul>
  );
};

export default LinkList;
