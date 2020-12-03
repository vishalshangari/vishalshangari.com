import styled from "styled-components";

// shared
import SectionHeading from "./shared/SectionHeading";

// display components
import Avatar from "./Avatar";
import Intro from "./Intro";
import Actions from "./Actions";
import Recent from "./Recent";
import Projects from "./Projects";
import About from "./About";
import Reading from "./Reading";

const App = () => {
  return (
    <StyledApp>
      <header>
        <Avatar />
        <Intro />
        <Actions />
        <SectionHeading>about</SectionHeading>
        <About />
        <SectionHeading>recent work</SectionHeading>
        <Recent />
        <SectionHeading>projects</SectionHeading>
        <Projects />
        <SectionHeading>currently reading</SectionHeading>
        <Reading />
      </header>
    </StyledApp>
  );
};

const StyledApp = styled.div`
  max-width: 1000px;
  padding: 0 1em 2em;
  margin: 0 auto;
`;

export default App;
