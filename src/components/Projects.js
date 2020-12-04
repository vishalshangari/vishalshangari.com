import React from "react";
import styled from "styled-components";

// shared
import Link from "./shared/Link";

const Projects = () => {
  return (
    <ProjectsWrapper>
      <Project>
        <strong>comparify.io</strong>
        &nbsp;&mdash;&nbsp;
        <Link href="https://comparify.io">visit</Link>&nbsp;/&nbsp;
        <Link href="https://comparify.io">github</Link>
        <p>
          Compare your music with others. Get a custom comparify.io/ URL to
          share with friends. Discover new music.
        </p>
      </Project>
      <Project>
        <strong>everylink</strong>
        &nbsp;&mdash;&nbsp;
        <Link href="https://everylink.me">visit</Link>&nbsp;/&nbsp;
        <Link href="https://github.com/vishalshangari/everylink-ui">
          github
        </Link>
        <p>
          Harness the power of your platform. Connect audiences to all of your
          content with just one, beautiful, link.
        </p>
      </Project>
      <Project>
        <strong>simple blockchain</strong>&nbsp;&mdash;&nbsp;
        <Link href="https://comparify.io">github</Link>
        <p>
          A simple implementation of blockchain in Java with a Spring Boot REST
          API for visualization.
        </p>
      </Project>
    </ProjectsWrapper>
  );
};

const Project = styled.div`
  transition: 0.2s ease all;
  border: 1px solid rgba(255, 255, 255, 0.25);
  border-radius: 0.5em;
  margin-bottom: 1em;
  padding: 1em;
  font-size: 1.25em;
  p {
    font-size: 0.8em;
    font-family: "Merriweather", serif, sans-serif;
    transition: 0.2s ease all;
    margin-bottom: 0;
    opacity: 0.5;
    line-height: 1.5;
  }
  :hover {
    border-color: rgba(255, 255, 255, 0.75);
    p {
      opacity: 0.75;
    }
  }
  .development {
    opacity: 0.5;
    font-style: italic;
  }
`;

const ProjectsWrapper = styled.div``;

export default Projects;
