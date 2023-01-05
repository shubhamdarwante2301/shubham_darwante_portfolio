import React from "react";
import styled from "styled-components";

const Icon = styled.div`
  width: 25px;
  height: 25px;
  cursor: pointer;
  display: none;
  z-index: 1;

  @media (max-width: 900px) {
    display: block;
  }
`;

const Bar = styled.span`
  display: block;
  width: 100%;
  height: 4px;
  background-color: #ffffff;
  margin: 5px 0px;
  border-radius: 10px;
`;

const HamburgerIcon = ({ handleToggle }) => {
  return (
    <Icon onClick={handleToggle}>
      <Bar></Bar>
      <Bar></Bar>
      <Bar></Bar>
    </Icon>
  );
};

export default HamburgerIcon;
