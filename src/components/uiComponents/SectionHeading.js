import React from 'react'
import styled from "styled-components";

const SectionHeading = styled.h2`
  color: #fff;
  font-size: 3rem;
  text-align: center;
   @media (max-width: 768px) {
    font-size: 1.7rem;
   }
`;

const SectionHeader = ({heading}) => {
    return (
        <SectionHeading>|| {heading}</SectionHeading>
    )
}

export default SectionHeader
