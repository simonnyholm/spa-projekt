import { Outlet } from "react-router-dom";
import Nav from "./Nav";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Footer from "./Footer";
import UseDarkMode from "./UseDarkMode";

function App() {
  const { theme, toggleTheme } = UseDarkMode();

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
    `,
  };

  return (
    <div
      className="App"
      style={{
        background: theme === "dark" ? "#000" : "#fff",
        color: theme === "dark" ? "#fff" : "#000",
      }}
    >
      <div css={styles.page} className="page">
        <header className="header">
          <Nav />
        </header>
        <main className="content">
          <Outlet />
        </main>
        <Footer />
        <button css={styles.themeButton} onClick={toggleTheme}>
          Skift farvetema
        </button>
      </div>
    </div>
  );
}

export default App;
