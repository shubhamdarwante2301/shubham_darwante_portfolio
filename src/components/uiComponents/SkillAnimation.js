import React from "react";
import styled, {keyframes} from 'styled-components'

const Container = styled.div`
    width: 300px;
    height: 300px;
    display: grid;
    grid-template-rows: 1fr 1fr 1fr;
    grid-template-columns: 1fr 1fr 1fr;
    transform: skew(-15deg);
    box-shadow: -50px 10px 30px #2a2c39;
`;

const Item = styled.div`
    // background-color: #2a2c39;
    color: #4a4e67;
    // border: 1px solid black;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 5rem;
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

const One = styled.i`
    animation: 1000ms ${BounceAnimation} 2s ease infinite;
`;
const Two = styled.i`
    animation: 1100ms ${BounceAnimation} 2s ease infinite;
`;
const Three = styled.i`
    animation: 1200ms ${BounceAnimation} 2s ease infinite;
`;
const Four = styled.i`
    animation: 1300ms ${BounceAnimation} 2s ease infinite;
`;
const Five = styled.i`
    animation: 1400ms ${BounceAnimation} 2s ease infinite;
`;
const Six = styled.i`
    animation: 1500ms ${BounceAnimation} 2s ease infinite;
`;
const Seven = styled.i`
    animation: 1600ms ${BounceAnimation} 2s ease infinite;
`;
const Eight = styled.i`
    animation: 1700ms ${BounceAnimation} 2s ease infinite;
`;
const Nine = styled.i`
    animation: 1800ms ${BounceAnimation} 2s ease infinite;
`;

const SkillAnimation = () => {
  return (
    <Container>
      <Item>
        <One className="fa-brands fa-react"></One>
      </Item>
      <Item>
        <Two className="fa-brands fa-html5"></Two>
      </Item>
      <Item>
        <Three className="fa-brands fa-css3-alt"></Three>
      </Item>

      <Item>
        <Four className="fa-brands fa-square-js"></Four>
      </Item>
      <Item>
        <Five className="fa-brands fa-bootstrap"></Five>
      </Item>
      <Item>
        <Six className="fa-brands fa-java"></Six>
      </Item>

      <Item>
        <Seven className="fa-solid fa-c"></Seven>
      </Item>
      <Item>
        <Eight className="fa-brands fa-github"></Eight>
      </Item>
      <Item>
        <Nine className="fa-brands fa-linkedin"></Nine>
      </Item>
    </Container>
  );
};

export default SkillAnimation;
