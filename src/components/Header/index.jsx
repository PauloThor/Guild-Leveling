import React from "react";
import { StyledDiv, StyledHeader } from "./styles";
import logo from "../../assets/logo-gray.png";

const Header = ({ children }) => {
  const imgStyle = {
    width: "80px",
  };

  return (
    <>
      <StyledHeader>
        <StyledDiv>
          <h1>
            <img src={logo} style={imgStyle} alt="logo" />
          </h1>
        </StyledDiv>
      </StyledHeader>
      {children}
    </>
  );
};

export default Header;
