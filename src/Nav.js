import { Link } from "react-router-dom";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useContext } from "react";
import { ThemeContext } from "./contexts/ThemeContext";

const Nav = () => {
  const { theme } = useContext(ThemeContext);

  const styles = {
    siteHeader: css`
      font-size: 50px;
      padding: 0 0 0 20px;
    `,
    nav: css`
      display: flex;
      justify-content: space-around;
      width: 400px;
      padding: 30px 0 0 0;

      & a {
        text-decoration: none;
        font-size: 15px;
        font-weight: 400;

        color: ${theme.darkMode ? "#fff" : "#111"};
      }

      & a:hover {
        text-decoration: underline;
      }
    `,
    headerDiv: css`
      display: flex;
      justify-content: space-between;
      padding: 0 0 70px 0;
      background-color: rgba(3, 184, 255, 0.538);
      margin: 0 0 30px 0;
    `,
  };

  return (
    <nav css={styles.headerDiv}>
      <h1 css={styles.siteHeader}>En helt bestemt applikation</h1>
      <div css={styles.nav} className="navigation">
        <Link to="/">Forside</Link>
        <Link to="/contact">Kontakt</Link>
        <Link to="/about">Om applikationen</Link>
      </div>
    </nav>
  );
};

export default Nav;
