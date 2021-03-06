import Quote from "./components/Quote";

/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const Footer = () => {
  const styles = {
    footer: css`
      margin: 30px 0 0 0;
      background-color: rgba(3, 184, 255, 0.538);
      padding: 30px;

      & p {
        font-size: 16px;
        font-weight: 700;
      }
    `,
  };
  return (
    <footer css={styles.footer}>
      <h3>Tillid er vigtig</h3>
      <p>Vi bygger vores værdigrundlag på de følgende grundsætninger:</p>
      <ul>
        <Quote />
      </ul>
    </footer>
  );
};

export default Footer;
