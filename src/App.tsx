import React from "react";

import styles from "./app.module.scss";

import Header from "./components/Header";
import FigmaPlugins from "./components/FigmaPlugins";
import FigmaResources from "./components/FigmaResources";
import Articles from "./components/Articles";
import Projects from "./components/Projects";
import ThemeSwitcher from "./components/ThemeSwitcher/";

// https://www.figma.com/api/session/state

const App = () => {
  const [toggleTheme, setToggleTheme] = React.useState(
    window.matchMedia("(prefers-color-scheme: dark)").matches ? true : false
  );

  React.useEffect(() => {
    document.body.classList.add(
      toggleTheme ? styles.darkTheme : styles.lightTheme
    );
    document.body.classList.remove(
      toggleTheme ? styles.lightTheme : styles.darkTheme
    );
  }, [toggleTheme]);

  return (
    <div className={`${styles.root}`}>
      <main className={styles.wrap}>
        <ThemeSwitcher
          className={styles.themeSwitcher}
          onChange={() => setToggleTheme(!toggleTheme)}
        />
        <Header />
        <FigmaPlugins />
        <FigmaResources />
        <Projects />
        <Articles />
      </main>
    </div>
  );
};

export default App;
