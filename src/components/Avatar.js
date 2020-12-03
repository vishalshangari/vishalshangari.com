import React from "react";
import styled from "styled-components";

// img
import vishal from "../assets/img/vishal.jpg";

const Avatar = () => {
  return (
    <div>
      <StyledAvatar>
        <img src={vishal} alt="Vishal" />
      </StyledAvatar>
    </div>
  );
};

const StyledAvatar = styled.div`
  margin: 4em auto 2em;
  overflow: hidden;
  border-radius: 50%;
  border: 0.25em solid #efefef;
  box-shadow: 0px 0px 1em rgba(0, 0, 0);
  img {
    width: 100%;
  }
  width: 180px;
  height: 180px;
  @media (min-width: 20em) {
    width: 200px;
    height: 200px;
  }
  @media (min-width: 48em) {
    width: 220px;
    height: 220px;
  }
  @media (min-width: 64em) {
    width: 240px;
    height: 240px;
  }
`;

export default Avatar;
