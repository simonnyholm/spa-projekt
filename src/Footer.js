import Quote from "./components/Quote";

/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const Footer = () => {
  const styles = {
    footer: css`
      background-color: #c6cbfe;
      padding: 30px;

      & p {
        font-size: 16px;
        font-weight: 700;
      }
    `,
  };
  return (
    <footer css={styles.footer}>
      <p>Vi bygger vores værdigrundlag på den følgende grundsætning:</p>

      <Quote />
    </footer>
  );
};

export default Footer;
