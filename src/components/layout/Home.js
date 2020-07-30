import React from "react";
import { StyledHome } from "../../styles/styledHome";
import Image1 from "../../images/image1.jpg";
import Image2 from "../../images/image2.jpg";
import Image3 from "../../images/image3.jpg";
import Image4 from "../../images/image4.jpg";
import ImageCenter from "../../images/center1.jpg";

const Home = () => {
  return (
    <StyledHome>
      <div className="imageWrapper">
        <img src={Image1} alt="img" />
      </div>
      <div className="imageWrapper">
        <img src={Image2} alt="img" />
      </div>
      <div className="imageWrapper centerImage">
        <img src={ImageCenter} alt="img" />
      </div>
      <div className="imageWrapper">
        <img src={Image3} alt="img" />
      </div>
      <div className="imageWrapper">
        <img src={Image4} alt="img" />
      </div>
    </StyledHome>
  );
};

export default Home;
