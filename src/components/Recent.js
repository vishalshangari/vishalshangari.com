import React from "react";
import styled from "styled-components";

// shared
import Link from "./shared/Link";

const Recent = () => {
  return (
    <RecentWrapper>
      <ul>
        <li>
          <span className="icon">🎧</span>
          <span>
            created <Link href="https://comparify.io/">comparify.io</Link>{" "}
            &mdash; a beautiful way to compare your Spotify library and musical
            interests with others
          </span>
        </li>
        <li>
          <span className="icon">💼</span>
          <span>
            completed my CPA designation at{" "}
            <Link href="https://www.pwc.com/">PwC</Link>
          </span>
        </li>
      </ul>
    </RecentWrapper>
  );
};

const RecentWrapper = styled.div`
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

export default Recent;
