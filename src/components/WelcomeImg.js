/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import chefImg from "../img/chef.jpg";

const WelcomeImg = (props) => {
  const styles = {
    img: css`
      width: 100%;
      height: 100%;
    `,
    imgDiv: css`
      width: 250px;
    `,
  };

  return (
    <div css={styles.imgDiv}>
      <img css={styles.img} src={chefImg} alt={props.altText} />
    </div>
  );
};

export default WelcomeImg;
