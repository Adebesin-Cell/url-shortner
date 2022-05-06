import styles from "./Nav.module.scss";

const Nav = function () {
  return (
    <nav className={styles.nav}>
      <ul className={styles["nav__list"]}>
        <li className={styles["nav__item"]}>
          <a
            href='/features'
            className={styles["nav__link"]}
            name='Features'
            aria-label='Features'
          >
            Features
          </a>
        </li>
        <li className={styles["nav__item"]}>
          <a
            href='/pricing'
            className={styles["nav__link"]}
            name='Pricing'
            aria-label='Pricing'
          >
            Pricing
          </a>
        </li>
        <li className={styles["nav__item"]}>
          <a
            href='/resources'
            className={styles["nav__link"]}
            name='Resources'
            aria-label='Resources'
          >
            Resources
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
