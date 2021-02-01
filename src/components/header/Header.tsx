import { ReactComponent as DarkModeIcon } from "../../assets/icons/moon.svg";
import { ReactComponent as LightModeIcon } from "../../assets/icons/sun.svg";
import styles from "./header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <p className={styles.logo}>Where in the world</p>
      <button className={styles.themeToggle}>
        <span>
          <DarkModeIcon />
        </span>
        <span hidden>
          <LightModeIcon />
        </span>
        Dark Mode
      </button>
    </header>
  );
};

export default Header;
