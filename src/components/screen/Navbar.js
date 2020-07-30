import React from "react";
import { StyledNav } from "../../styles/StyledNav";
const Navbar = () => {
  return (
    <StyledNav>
      <div className="logoContainer">LOGO</div>
      <div className="ProductsCategory">
        <div>Blush</div>
        <div>Bronzer</div>
        <div>Eyebrow</div>
        <div>Eyeliner</div>
        <div>Eyeshadow</div>
        <div>Foundation</div>
        <div>Lip liner</div>
        <div>Lipstick</div>
        <div>Mascara</div>
        <div>Nail polish</div>
      </div>
    </StyledNav>
  );
};

export default Navbar;
