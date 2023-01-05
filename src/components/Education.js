import React from "react";
import styled from "styled-components";
import SectionHeading from "./uiComponents/SectionHeading";

const EducationSection = styled.div`
  padding: 3rem 5rem;
  background-color: #2a2c39;
  color: #fff;

  @media (max-width: 560px) {
    padding: 1rem;
  }
`;
const EducationWrapper = styled.div`
  margin-top: 2rem;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;
const Degree = styled.div`
  background-color: #252734;
  padding: 2rem;
  line-height: 1.5rem;

  @media (max-width: 900px) {
    margin: 1.5rem 0;
  }
`;

const Education = () => {
  return (
    <EducationSection id="education">
      <SectionHeading heading={"Education"} />
      <EducationWrapper>
        <Degree>
          <h3>Computer Science & Engineering</h3>
          <h3>B.Tech</h3>
          <p>P.E.S. College of Engineering, Aurangabad</p>
          <p>2019-2022</p>
        </Degree>
        <Degree>
          <h3>Computer Science & Engineering</h3>
          <h3>Diploma</h3>
          <h4>Government Polytechnic College, Ambad</h4>
          <p>2014-2019</p>
        </Degree>
        <Degree>
          <h3>Computer Science & Engineering</h3>
          <h3>10th</h3>
          <h4>Karun Niketan High School, Vaijapur</h4>
          <p>2013-2014</p>
        </Degree>
      </EducationWrapper>
    </EducationSection>
  );
};
export default Education;
