import Nav from "./Nav";
import Button from "./UI/Button";
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
        <div className={styles["header__extras"]}>
          <a href='/' className={styles["header__link"]}>
            Login
          </a>
          <Button className='btn btn--header'>Sign Up</Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
