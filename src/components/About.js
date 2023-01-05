import React from "react";
import styled from "styled-components";
import SectionHeading from "./uiComponents/SectionHeading";

const AboutContainer = styled.div`
  background-color: #2a2c39;
  padding: 3rem 5rem;
  text-align: center;

  @media (max-width: 540px) {
    padding: 1rem;
  }
`;

const Description = styled.div`
  color: #ffffff;
  font-size: 1.5rem;
  margin-top: 1.5rem;

  @media (max-width: 540px) {
    font-size: 1.2rem;
  }
`;

const About = () => {
  return (
    <AboutContainer id="about">
      <SectionHeading heading={"About"} />
      <Description>
        <p>Hi, I'm Shubham, nice to meet you. Please Take a look around!</p>
        <p>I am passionate about building excellent web related technologies</p>
      </Description>
    </AboutContainer>
  );
};

export default About;
