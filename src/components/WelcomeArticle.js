/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const WelcomeArticle = (props) => {
  const styles = {
    article: css`
      width: 800px;
      padding: 0 30px 0 0;

    `,
  };

  return (
    <article css={styles.article}>
      <h2>{props.heading}</h2>
      <p>Af {props.author}</p>
      <p>{props.body}</p>
    </article>
  );
};

export default WelcomeArticle;
