import React from "react";
import styled from "styled-components";

// shared
import Link from "./shared/Link";

const Intro = () => {
  return (
    <div>
      <Heading>
        <span className="hi">👋🏼</span>
        hi, i'm <span className="name">vishal</span>
      </Heading>
      <SplashText>
        <p>
          I'm a computer science student at&nbsp;
          <Link href="https://www.sfu.ca/">SFU</Link> and most interested in
          distributed systems and FinTech. I'm also a CPA&nbsp;&nbsp;🤷🏻‍♂️
        </p>
      </SplashText>
    </div>
  );
};

const SplashText = styled.div`
  max-width: 480px;
  font-family: "Merriweather";
  margin: 3em auto;
  text-align: center;
  p {
    line-height: 1.5;
  }
`;

const Heading = styled.h1`
  text-align: center;
  .hi {
    margin-right: 0.5em;
    font-size: 80%;
  }
  .name {
    position: relative;
    display: inline-block;
    ::after {
      position: absolute;
      left: 0;
      top: 100%;
      width: 100%;
      height: 0.125em;
      background: linear-gradient(90deg, #3bd3b1 0%, #65a6e1 50%, #e747fb 100%);
      content: "";
      border-radius: 0.125em;
    }
  }
`;

export default Intro;
