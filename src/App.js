import { Outlet } from "react-router-dom";
import Nav from "./Nav";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Footer from "./Footer";
import { ThemeContext } from "./contexts/ThemeContext";
import { useState } from "react";

function App() {
  const [theme, setTheme] = useState({
    darkMode: false,
    light: "#fff",
    dark: "#333",
  });

  const styles = {
    page: css`
      margin: 30px 70px 30px 70px;
    `,
    themeButton: css`
      margin: 20px 0 20px 0;
      padding: 0 10px 0 10px;
      width: 100%;
      height: 80px;
      font-size: 20px;
      font-weight: 500;
      border: none;
      background-color: #7592d5;
      color: #020611;
      cursor: pointer;

      :hover {
        background-color: #586c9c;
      }
    `,
    appDiv: css`
      margin: 0;
    `,
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div css={styles.appDiv} className={theme.darkMode ? "dark-mode" : ""}>
        <div css={styles.page} className="page">
          <header className="header">
            <Nav />
          </header>
          <main className="content">
            <Outlet />
          </main>
          <Footer />
          <button
            css={styles.themeButton}
            onClick={() => {
              setTheme({ darkMode: !theme.darkMode });
              console.log(theme);
            }}
          >
            Skift farvetema
          </button>
        </div>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
