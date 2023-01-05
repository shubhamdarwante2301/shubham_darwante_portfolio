import React from "react";
import styled from "styled-components";
import Socialicons from "./Socialicons";

const SectionContainer = styled.div`
  background-color: #252734;
  padding: 3rem 5rem;

  @media (max-width: 540px) {
    padding: 1rem;
  }
`;
const SectionHeading = styled.h2`
  color: #fff;
  font-size: 2rem;
  text-align: center;
  margin-bottom: 1.5rem;
`;
const Wrapper = styled.div`
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #ffffff;
`;
const Description = styled.div`
  margin-top: 1rem;
`;

const Footer = () => {
  return (
    <SectionContainer>
      <SectionHeading>SHUBHAM.</SectionHeading>
      <Wrapper>
        <Description>FrontEnd Developer - India, Pune</Description>
        <Socialicons />
        <Description>
          <p><i className="fa-regular fa-copyright" style={{margin: "0.5rem"}}></i>2023 Shubham Darwante - All rights reserved. Publish with GitHub.</p>
        </Description>
      </Wrapper>
    </SectionContainer>
  );
};
export default Footer;
