import Button from "./UI/Button";
import styles from "./Cta.module.scss";

const Cta = function () {
  return (
    <section className={styles["section-cta"]}>
      <div className={styles.cta}>
        <h1 className={styles["cta__heading"]}>Boost your links today</h1>
        <Button className='btn btn--intro'>Get Started</Button>
      </div>
    </section>
  );
};

export default Cta;
