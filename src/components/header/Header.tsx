import { useContext } from "react";
import { ReactComponent as DarkModeIcon } from "../../assets/icons/moon.svg";
import { ReactComponent as LightModeIcon } from "../../assets/icons/sun.svg";
import { ThemeContext } from "../../context/themeContext";
import Container from "../container/Container";
import styles from "./header.module.css";

const Header = () => {
  const ctx = useContext(ThemeContext);

  function handleThemeClick() {
    ctx?.setIsDark(!ctx?.isDark);
  }

  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.row}>
          <p className={styles.logo}>Where in the world</p>
          {ctx?.isDark ? (
            <button onClick={handleThemeClick} className={styles.themeToggle}>
              <span>
                <LightModeIcon />
              </span>
              Light Mode
            </button>
          ) : (
            <button onClick={handleThemeClick} className={styles.themeToggle}>
              <span>
                <DarkModeIcon />
              </span>
              Dark Mode
            </button>
          )}
        </div>
      </Container>
    </header>
  );
};

export default Header;
