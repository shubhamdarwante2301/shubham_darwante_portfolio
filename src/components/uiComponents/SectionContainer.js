import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    background-color: ${({bgColor})=>bgColor};
    padding: 5rem;
    text-align: center;
`;

const SectionContainer = ({bgColor}) => {
    return <Container bgColor={bgColor}></Container>
}

export default SectionContainer
