import React from "react";
import styled, { keyframes } from "styled-components";
import Socialicons from "./Socialicons";
import SkillAnimation from "./uiComponents/SkillAnimation";
import ResumePDF from "../Shubham_Darwante.pdf"

const HomeStyle = styled.div`
  background-color: #252734;
  padding: 3rem 5rem;
  display: flex;
  align-items: center;

  @media (max-width: 540px) {
    padding: 1.5rem;
    text-align: center;
  }
`;
const ProfileDetail = styled.div`
  flex: 1;
`;
const Heading = styled.h2`
  color: #ffffff;
  margin-top: 1rem;
  font-size: clamp(1.5rem, 2vw + 1rem, 3.5rem);
`;
const Name = styled.h2`
  color: #ffffff;
  margin-top: 0.75rem;
  font-size: clamp(1.5rem, 1vw + 2rem, 5rem);
`;
const Description = styled.p`
  color: #858792;
  margin-top: 1rem;
  font-size: 1.5rem;
`;
const Resume = styled.a`
  display: inline-block;
  border: 1px solid #858792;
  color: #ffffff;
  padding: 10px 20px;
  border-radius: 20px;
  margin-top: 5rem;
  cursor: pointer;

  &:hover {
    background-color: #3a3b47;
    transition: background-color, 0.5s ease;
  }
`;
const BounceAnimation = keyframes`
    70% { transform:translateY(0%); }
    80% { transform:translateY(-15%); }
    90% { transform:translateY(0%); }
    95% { transform:translateY(-7%); }
    97% { transform:translateY(0%); }
    99% { transform:translateY(-3%); }
    100% { transform:translateY(0); }
`;

const Icon = styled.i`
  animation: 1000ms ${BounceAnimation} 2s ease infinite;
`;

const Animation = styled.div`
  padding-right: 4vw;

  @media (max-width: 920px) {
    display: none;
  }
`;

// const ProfileImage = styled.div`
//   // flex: 1;
//   // width: clamp(300px, 1vw + 1rem, 500px);
//   // height: clamp(500px, 1vw + 1rem, 700px);
//   min-width: 300px;
//   display: flex;
//   justify-content: center;
//   overflow: hidden;
// `;

const Home = () => {
  const downloadResume = () => {
    fetch(ResumePDF).then((response) => {
      response.blob().then((blob) => {
        // Creating new object of PDF file
        const fileURL = window.URL.createObjectURL(blob);
        // Setting various property values
        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = "shubham_darwante_resume";
        alink.click();
      });
    });
  };

  return (
    <HomeStyle id="hero">
      <ProfileDetail>
        <Heading>Hello! I'm</Heading>
        <Name>Shubham Darwante</Name>
        <Description>Front-End Developer</Description>
        <Socialicons />
        <Resume onClick={downloadResume}>
          Get Resume
          <Icon
            className="fa-solid fa-download"
            style={{ marginLeft: "0.5rem" }}
          ></Icon>
        </Resume>
      </ProfileDetail>
      <Animation>
        <SkillAnimation />
      </Animation>
      {/* <ProfileImage>
        <img
          src="https://htmldemo.net/lendex/lendex/assets/images/portrait/portrait-hero.png"
          alt="profile"
          style={{ width: "70%", height: "90%", overflow: "hidden" }}
        />
      </ProfileImage> */}
    </HomeStyle>
  );
};
export default Home;
