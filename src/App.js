import { Outlet } from "react-router-dom";
import Nav from "./Nav";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

function App() {
  const styles = {
    page: css`
      margin: 30px 70px 30px 70px;
    `,
  };

  return (
    <div className="App">
      <div css={styles.page} className="page">
        <header className="header">
          <Nav />
        </header>
        <main className="content">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default App;
