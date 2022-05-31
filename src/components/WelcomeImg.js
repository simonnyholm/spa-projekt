/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import chefImg from "../img/chef.jpg";

const WelcomeImg = (props) => {
  const styles = {
    img: css`
      width: 100%;
    `,
    imgDiv: css`
      width: 250px;
      padding: 20px;
      background-color: rgb(200, 200, 200);
    `,
  };

  return (
    <div css={styles.imgDiv}>
      <img css={styles.img} src={chefImg} alt={props.altText} />
      <p>{props.imgText}</p>
    </div>
  );
};

export default WelcomeImg;
