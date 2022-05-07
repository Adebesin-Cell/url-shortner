import Button from "./UI/Button";
import styles from "./Intro.module.scss";
import IntroImage from "../assets/svgs/illustration-working.svg";

const Intro = function () {
  return (
    <section className={styles["section-intro"]}>
      <div className={styles.intro}>
        <div className={styles["intro__content"]}>
          <h1 className={styles["intro__heading"]}>
            <span>More than just </span>
            <span>shorter links</span>
          </h1>
          <p className={styles["intro__paragraph"]}>
            Build your brand’s recognition and get detailed insights on how your
            links are performing.
          </p>
          <Button className='btn btn--intro' type='button' text='Get Started'>
            Get Started
          </Button>
        </div>
        <div className={styles["intro__image-box"]}>
          <img
            src={IntroImage}
            className={styles["intro__image"]}
            alt='man working with a desktop'
          />
        </div>
      </div>
    </section>
  );
};

export default Intro;
