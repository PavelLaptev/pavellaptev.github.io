import React from "react";
import styles from "./styles.module.scss";

interface Props {
  className?: string;
}

const ThemeSwitcher: React.FC<Props> = (props) => {
  const [toggle, setToggle] = React.useState(false);

  React.useEffect(() => {
    if (toggle) {
      document.documentElement.className = "dark-theme";
    } else {
      document.documentElement.className = "light-theme";
    }
  }, [toggle]);

  // Check if the user has set a preference
  React.useEffect(() => {
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)");
    setToggle(prefersDark.matches);
  }, []);

  return (
    <section
      className={`${styles.wrapper} ${props.className} ${
        toggle ? styles.moonMode : ""
      }`}
      onClick={() => {
        setToggle(!toggle);
      }}
    >
      <div className={styles.sun} />
      <div className={styles.moon} />
    </section>
  );
};

ThemeSwitcher.defaultProps = {
  className: ""
};

export default ThemeSwitcher;
