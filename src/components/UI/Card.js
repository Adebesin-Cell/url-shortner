import styles from "./Card.module.scss";

const Card = function (props) {
  const cardId = `card--${props.id}`;

  return (
    <div className=''>
      <div className={`${styles.card} ${styles[cardId]}`}>
        <div className={styles["card__body"]}>
          <div className={styles["card__image-box"]}>
            <img
              src={props.icon}
              alt={props.title}
              className={styles["card__image"]}
            />
          </div>
          <h1 className={styles["card__heading"]}>{props.title}</h1>
          <p className={styles["card__paragraph"]}>{props.details}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
