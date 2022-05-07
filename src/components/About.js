import LinkForm from "./Link/LinkForm";
import styles from "./About.module.scss";

const About = function () {
  return (
    <section className={styles["section-about"]}>
      <LinkForm></LinkForm>
      <div className='' style={{ marginTop: "50px" }}>
        &nbsp;
      </div>
    </section>
  );
};

export default About;
