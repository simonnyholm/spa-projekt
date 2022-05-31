import { Link } from "react-router-dom";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const Nav = () => {
  const styles = {
    siteHeader: css`
      font-size: 50px;
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
        color: #111111;
      }

      & a:hover {
        text-decoration: underline;
      }
    `,
    headerDiv: css`
      display: flex;
      justify-content: space-between;
      padding: 0 0 70px 0;
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
