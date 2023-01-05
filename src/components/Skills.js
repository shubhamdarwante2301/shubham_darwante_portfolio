import React from "react";
import styled from "styled-components";
import SectionHeading from "./uiComponents/SectionHeading";

const SectionContainer = styled.div`
  background-color: #252734;
  padding: 3rem 5rem;

  @media (max-width: 540px) {
    padding: 1rem;
  }
`;

const SkillIcon = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 3rem;
`;
const Icon = styled.div`
  background-color: #2a2c39;
  color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 3rem;
  width: 5rem;
  height: 5rem;
  border: 1px solid #ffffff;
  border-radius: 50%;
  position: relative;

  &:hover::after {
    content: attr(data-tooltip);
    font-size: 1rem;
    position: absolute;
    top: calc(100% + 5px);
    background-color: grey;
    padding: 2px 15px;
    border-radius: 5px;
  }
`;



const Skills = () => {
  return (
    <SectionContainer id="skills">
      <SectionHeading heading={"Skills"} />
      <SkillIcon>
        <Icon data-tooltip="HTML">
          <i className="fa-brands fa-html5"></i>
        </Icon>
        <Icon data-tooltip="CSS">
          <i className="fa-brands fa-css3-alt"></i>
        </Icon>
        <Icon data-tooltip="Bootstrap">
          <i className="fa-brands fa-bootstrap"></i>
        </Icon>
      </SkillIcon>
      <SkillIcon>
        <Icon data-tooltip="Javascript">
          <i className="fa-brands fa-square-js"></i>
        </Icon>
        <Icon data-tooltip="ReactJs">
          <i className="fa-brands fa-react"></i>
        </Icon>
        <Icon data-tooltip="Java">
          <i className="fa-brands fa-java"></i>
        </Icon>
      </SkillIcon>
    </SectionContainer>
  );
};

export default Skills;
