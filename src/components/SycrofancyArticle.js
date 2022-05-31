/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const SycrofancyArticle = ({ heading, body, message }) => {
  const styles = {
    article: css`
      padding: 0 30px 0 0;
      width: 500px;
    `,
  };

  return (
    <article css={styles.article}>
      <h2>{heading}</h2>
      <p>{body}</p>
      <p>{message}</p>
    </article>
  );
};

export default SycrofancyArticle;
