import React, {useState, useEffect, useRef} from "react";
import styled from "styled-components";
import SectionHeading from "./uiComponents/SectionHeading";

import { useForm } from '@formspree/react';
import MyContact from "./uiComponents/MyContact";


const ContactSection = styled.div`
  padding: 3rem 5rem;
  background-color: #2a2c39;
  overflow: hidden;

  @media (max-width: 540px) {
    padding: 1rem;
  }
`;

const SuccessMessage = styled.div`
  text-align: center;
  font-size: 1.5rem;
  color: #fff;
`;

const ContactWrapper = styled.div`
  margin-top: 2rem;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap-reverse;
  color: #ffffff;
  gap: 1rem;

  .contact-form {
    flex: 2;
    display: flex;
    flex-direction: column;
  }
`;
const Group = styled.div`
  display: flex;

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
  height: 10rem;
  padding: 0.7rem;
  background-color: #2a2c39;
  border: 1px solid #757575;
  color: #ffffff;
  font-size: 1rem;
`;

const Button = styled.input`
  max-width: 300px;
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

const ContactForm = () => {
    const formRef = useRef()
    const [state, handleSubmit] = useForm('moqzqjwz')
    const [success, setSuccess] = useState(false)
    

    useEffect(()=>{
      if (state.succeeded) {
        setSuccess(true)
        formRef.current.reset()
        console.log("message sent successsfully");
      }
      setTimeout(()=>{
        setSuccess(false)
      },1500)
    },[state.succeeded])
  
  return (
    <ContactSection id="contact">
      <SectionHeading heading={"Contact Me"} />
        {success && <SuccessMessage>Thank you for contacting me!</SuccessMessage>}
      <ContactWrapper>
        <MyContact />
        <form onSubmit={handleSubmit} ref={formRef} className="contact-form">
          <Group>
            <Input name="name" type="text" placeholder="Name" autoComplete="off" required/>
            <Input name="email" type="text" placeholder="Email" autoComplete="off" required/>
          </Group>
          <Group>
            <Input name="subject" type="text" placeholder="Subject" autoComplete="off" required/>
            <Input name="phone no" type="text" placeholder="Phone No." autoComplete="off" required/>
          </Group>
          <TextArea name="message" placeholder="Message" autoComplete="off" required/>
          <Button type="submit" value="Send Message" disabled={state.submitting}/>
        </form>
      </ContactWrapper>
    </ContactSection>
  );
};

export default ContactForm;
