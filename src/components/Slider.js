/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import SimpleImageSlider from "react-simple-image-slider";
import office from "../img/office.jpg";
import hallway from "../img/hallway.jpg";
import water from "../img/water.jpg";
import coffee from "../img/coffee.jpg";

const Slider = () => {
  const styles = {
    sliderDiv: css`
      width: 1200px;
      margin: 30px 0 30px 0;
    `,
  };

  const sliderImages = [office, hallway, water, coffee];

  return (
    <div css={styles.sliderDiv}>
      <SimpleImageSlider
        width={1375}
        height={704}
        images={sliderImages}
        showBullets={true}
        showNavs={true}
      />
    </div>
  );
};

export default Slider;
