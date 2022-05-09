import styles from "./Footer.module.scss";
import { ReactComponent as Logo } from "../assets/svgs/logo.svg";
import { ReactComponent as Facebook } from "../assets/svgs/icon-facebook.svg";
import { ReactComponent as Twitter } from "../assets/svgs/icon-twitter.svg";
import { ReactComponent as Pinterest } from "../assets/svgs/icon-pinterest.svg";
import { ReactComponent as Instagram } from "../assets/svgs/icon-instagram.svg";

const Footer = function () {
  return (
    <footer className={styles.footer}>
      <div className={styles["footer__wrapper"]}>
        <div
          className={`${styles["footer__group"]} ${styles["footer__group--lg"]}`}
        >
          <a href='/' className={styles["footer__link"]}>
            <Logo />
          </a>
        </div>
        <div className={`${styles["footer__group"]}`}>
          <h1 className={styles["footer__heading"]}>Features</h1>
          <ul className={styles["footer__list"]}>
            <li className={styles["footer__item"]}>
              <a
                href='/'
                className={styles["footer__link"]}
                name='Link Shortening'
              >
                Link Shortening
              </a>
            </li>
            <li className={styles["footer__item"]}>
              <a
                href='/'
                className={styles["footer__link"]}
                name='Branded Links'
              >
                Branded Links
              </a>
            </li>
            <li className={styles["footer__item"]}>
              <a href='/' className={styles["footer__link"]} name='Analytics'>
                Analytics
              </a>
            </li>
          </ul>
        </div>
        <div className={`${styles["footer__group"]}`}>
          <h1 className={styles["footer__heading"]}>Resources</h1>
          <ul className={styles["footer__list"]}>
            <li className={styles["footer__item"]}>
              <a href='/' className={styles["footer__link"]} name='Blog'>
                Blog
              </a>
            </li>
            <li className={styles["footer__item"]}>
              <a href='/' className={styles["footer__link"]} name='Developers'>
                Developers
              </a>
            </li>
            <li className={styles["footer__item"]}>
              <a href='/' className={styles["footer__link"]} name='Support'>
                Support
              </a>
            </li>
          </ul>
        </div>
        <div className={`${styles["footer__group"]}`}>
          <h1 className={styles["footer__heading"]}>Company</h1>
          <ul className={styles["footer__list"]}>
            <li className={styles["footer__item"]}>
              <a href='/' className={styles["footer__link"]} name='About'>
                About
              </a>
            </li>
            <li className={styles["footer__item"]}>
              <a href='/' className={styles["footer__link"]} name='Our Team'>
                Our Team
              </a>
            </li>
            <li className={styles["footer__item"]}>
              <a href='/' className={styles["footer__link"]} name='Careers'>
                Careers
              </a>
            </li>
            <li className={styles["footer__item"]}>
              <a href='/' className={styles["footer__link"]} name='Contact'>
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div className={`${styles["footer__group"]}`}>
          <div className={styles["socials"]}>
            <ul className={styles["socials__list"]}>
              <li className={styles["socials__item"]}>
                <a href='/' className={styles["socials__link"]}>
                  <Facebook />
                </a>
              </li>
              <li className={styles["socials__item"]}>
                <a href='/' className={styles["socials__link"]}>
                  <Twitter />
                </a>
              </li>
              <li className={styles["socials__item"]}>
                <a href='/' className={styles["socials__link"]}>
                  <Pinterest />
                </a>
              </li>
              <li className={styles["socials__item"]}>
                <a href='/' className={styles["socials__link"]}>
                  <Instagram />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
