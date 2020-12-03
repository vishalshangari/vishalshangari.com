import React from "react";
import styled from "styled-components";

// assets
import resume from "../assets/VishalShangari-Resume.pdf";

// icons
import { FaEnvelope, FaGithub } from "react-icons/fa";
import { ImFileText2 } from "react-icons/im";

const Actions = () => {
  return (
    <ActionsWrapper>
      <Button href="https://github.com/vishalshangari/">
        <span className="icon">
          <FaGithub />
        </span>
        My Github
      </Button>
      <Button href={resume}>
        <span className="icon">
          <ImFileText2 />
        </span>
        My Resume
      </Button>
      <FilledButton href="mailto:vishalshangari@gmail.com">
        <span className="icon">
          <FaEnvelope />
        </span>
        Get in touch
      </FilledButton>
    </ActionsWrapper>
  );
};

const Button = styled.a`
  text-decoration: none;
  display: block;
  color: inherit;
  font-size: 1.25em;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.75em 1em;
  border-radius: 0.5em;
  border: 0.175em solid #efefef;
  margin-bottom: 1em;
  @media (min-width: 48em) {
  }
  .icon {
    display: flex;
    align-items: center;
    margin-right: 0.5em;
  }
  :hover {
    background: #763ab8;
    border-color: #763ab8;
    color: #efefef;
  }
`;

const FilledButton = styled(Button)`
  background: #efefef;
  color: #202224;
`;

const ActionsWrapper = styled.div`
  @media (min-width: 48em) {
    display: flex;
    align-items: center;
    justify-content: center;
    ${Button} {
      margin-right: 1.5em;
      :last-child {
        margin-right: none;
      }
    }
  }
`;
export default Actions;
