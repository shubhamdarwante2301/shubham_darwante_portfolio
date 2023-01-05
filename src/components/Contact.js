import React from "react";
import styled from "styled-components";
import SectionHeading from "./uiComponents/SectionHeading";


const ContactSection = styled.div`
  padding: 3rem 5rem;
  background-color: #2a2c39;
  overflow: hidden;

  @media (max-width: 365px) {
    padding: 1rem;
  }
`;

const ContactWrapper = styled.div`
  margin-top: 2rem;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  color: #ffffff;
`;
const Group = styled.div`
  display: flex;
  width: 70vw;

  @media (max-width: 900px) {
    flex-wrap: wrap;
  }
`;
const Input = styled.input`
  flex: 1;
  font-size: 1rem;
  padding: 0.7rem;
  margin: 1rem;
  background-color: #2a2c39;
  border: 1px solid #757575;
  color: #ffffff;
`;
const TextArea = styled.textarea`
  margin: 1rem;
  width: 100%;
  height: 10rem;
  padding: 0.7rem;
  background-color: #2a2c39;
  border: 1px solid #757575;
  color: #ffffff;
  font-size: 1rem;
`;

const Button = styled.input`
  margin: 1rem;
  padding: 1rem 2rem;
  background-color: #2a2c39;
  border: 1px solid #757575;
  border-radius: 4rem;
  color: #ffffff;
  font-size: 1rem;
  cursor: pointer;

  &:hover {
    background-color: #3a3b47;
    transition: background-color, 0.5s ease;
  }
`;

const Contact = () => {
  return (
    <ContactSection id="contact">
      <SectionHeading heading={"Contact Me"} />
      <ContactWrapper>
        <form action="https://formspree.io/f/moqzqjwz" method="POST">
          <Group>
            <Input name="name" type="text" placeholder="Name" autoComplete="off" required/>
            <Input name="email" type="text" placeholder="Email" autoComplete="off" required/>
          </Group>
          <Group>
            <Input name="subject" type="text" placeholder="Subject" autoComplete="off" required/>
            <Input name="phone no" type="text" placeholder="Phone No." autoComplete="off" required/>
          </Group>
          <TextArea name="message" placeholder="Message" autoComplete="off" required/>
          <Button type="submit" value="Send Message" />
        </form>
      </ContactWrapper>
    </ContactSection>
  );
};

export default Contact;
