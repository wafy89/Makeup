import styled from "styled-components";
import centerImage from "../images/center1.jpg";

export const StyledHome = styled.div`
  margin: 3rem;

  height: 90vh;
  display: grid;
  display: grid;
  grid-template-columns: 1fr 1.2fr 0.8fr;
  grid-template-rows: 1fr 1fr;
  gap: 12px 20px;
  grid-template-areas: ". centerImage ." ". centerImage .";
  .centerImage {
    grid-area: centerImage;

    background-image: url(${centerImage});
    background-position: center;
    background-size: cover;
  }
  .imageWrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
  }
`;
