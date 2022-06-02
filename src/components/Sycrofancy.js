/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import SycrofancyArticle from "./SycrofancyArticle";
import SycrofancyButton from "./SycrofancyButton";

const Sycrofancy = ({ heading, body, message, buttonText, bonding, setBonding }) => {
  const styles = {
    section: css`
      padding: 30px;
      display: flex;
      margin: 30px 0 30px 0;
      background-color: #ffffd1;
    `,
  };

  return (
    <section css={styles.section}>
      <SycrofancyArticle heading={heading} body={body} message={message} />
      <SycrofancyButton bonding={bonding} setBonding={setBonding}  buttonText={buttonText} />
    </section>
  );
};

export default Sycrofancy;
