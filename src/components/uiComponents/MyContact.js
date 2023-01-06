import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  background-color: #252734;
  height: max-content;
  padding: 3rem;

  @media (max-width: 540px) {
    padding: 2rem;
  }

  @media (max-width: 1044px) {
    width: 100%;
  }
`;

const Contact = styled.div`
  background-color: #2a2c39;
  padding: 1rem 2rem;
  margin: 1rem 0;
  border: 3px solid #2a2c39;

  &:hover {
    background-color: #252734;
    transition: background-color 0.5s ease-in-out;
  }

  a {
    text-decoration: none;
    color: #858792;
  }
`;
const MyContact = () => {
  return (
    <Wrapper className="div-details">
      <Contact>
        <p>Phone:</p>
        <a href="tel:+917720031947">+91 7720031947</a>
      </Contact>
      <Contact>
        <p>Email:</p>
        <a href="mailto:shubhamdarwante2301@gmail.com">
          shubhamdarwante2301@gmail.com
        </a>
      </Contact>
      <Contact>
          <p>Website:</p>
          <span><a href="/">www.shubhamdarwante.tech</a></span>
      </Contact>
    </Wrapper>
  );
};

export default MyContact;
