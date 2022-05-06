import Nav from "./Nav";
import styles from "./Header.module.scss";
import { ReactComponent as Logo } from "../assets/svgs/logo.svg";

const Header = function () {
  return (
    <header className={styles.header}>
      <div className={styles["header__wrapper"]}>
        <div className={styles.logo}>
          <a href='/' className={styles["logo__link"]}>
            <Logo></Logo>
          </a>
        </div>
        <Nav></Nav>
      </div>
    </header>
  );
};

export default Header;
