import React from "react";
import styled from "styled-components";

// shared
import Link from "./shared/Link";

const About = () => {
  return (
    <AboutWrapper>
      <ul>
        <li className="study">
          <span className="icon">📚</span>
          <span>
            graduated from <Link href="https://www.ubc.ca/">UBC</Link> with a
            BCom (Honours) and completed my CPA articling hours at PwC
          </span>
        </li>
        <li className="next">
          <span className="icon">👨🏻‍💻</span>
          <span>
            taught myself coding and commited to a complete education as a
            software engineer
          </span>
        </li>
        <li className="tech">
          <span className="icon">🤓</span>
          <span>
            enjoy building impactful products and{" "}
            <Link href="https://news.ycombinator.com/">reading</Link> about tech
          </span>
        </li>
        <li className="me">
          <span className="icon">📍</span>
          <span>
            am either working on a project, watching a basketball game, making
            music, or practicing my{" "}
            <Link href="https://media2.giphy.com/media/xULW8D8Mc58RapxkK4/giphy.gif">
              Steph shimmy
            </Link>
          </span>
        </li>
      </ul>
    </AboutWrapper>
  );
};

const AboutWrapper = styled.div`
  font-family: "Merriweather";
  ul {
    padding: 0;
    padding-inline-start: 1em;
  }

  .icon {
    display: flex;
    align-items: center;
    padding-right: 1em;
  }

  li {
    margin: 0 0 1em;
    display: flex;
    line-height: 1.5;
  }
`;

export default About;
