import React from "react";
import styled from "styled-components";

const IconWrapper = styled.div`
  margin-top: 1rem;
  display: flex;

  @media (max-width: 540px) {
    justify-content: center;
  }
`;

const Icon = styled.div`
  width: 3rem;
  height: 3rem;
  color: #ffffff;
  font-size: 1.5rem;
  margin-right: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #ffffff;
  border-radius: 50%;
  cursor: pointer;
  position: relative;

  .link {
    color: #fff;
  }

  &:hover {
    color: #2a2c39;
    background-color: #ffffff;
    transition: background-color 0.5s linear;

    .link {
      color: #2a2c39;
    }
  }

  
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

const Socialicons = () => {
  return (
    <IconWrapper>
      <Icon data-tooltip="GitHub">
        <a className="link" href="https://github.com/shubhamdarwante2301" rel="noreferrer noopener" target="_blank"><i className="fa-brands fa-github"></i></a>
      </Icon>
      <Icon data-tooltip="LinkedIn">
        <a className="link" href="https://www.linkedin.com/in/shubham-darwante/" rel="noreferrer noopener" target="_blank" ><i className="fa-brands fa-linkedin"></i></a>
      </Icon>
      <Icon data-tooltip="Twitter">
        <a className="link" href="https://twitter.com/DarwanteShubham" rel="noreferrer noopener" target="_blank"><i className="fa-brands fa-twitter"></i></a>
      </Icon>
      <Icon data-tooltip="Instagram">
        <a className="link" href="https://www.instagram.com/shubham_r_darwante/" rel="noreferrer noopener" target="_blank"><i className="fa-brands fa-instagram"></i></a>
      </Icon>
    </IconWrapper>
  );
};

export default Socialicons;
