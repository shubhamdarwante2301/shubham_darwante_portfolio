import React from "react";
import styled from "styled-components";
import SectionHeading from "./uiComponents/SectionHeading";

const SectionContainer = styled.div`
  background-color: #252734;
  padding: 3rem 5rem;
`;
const ProjectWrapper = styled.div`
  margin-top: 2rem;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  color: #ffffff;

  .link {
    color: #fff;
    text-decoration: none;
  }
`;

const Movie = styled.div`
  flex: 1;
  padding: 6rem 1rem;
  min-width: 300px;
  margin: 1rem;
  background-color: #2a2c39;
  text-align: center;
  font-size: 1.5rem;
  cursor: pointer;
  flex-wrap: wrap;

  &:hover {
    background-color: #3a3b47;
    transition: background-color, 0.5s ease;
  }
`;


const Project = () => {
  return (
    <SectionContainer id="project">
      <SectionHeading heading={"Project"} />
      <ProjectWrapper>
        <a className="link" href="https://shubhamdarwante2301.github.io/movie_verse/" rel="noreferrer noopener" target="_blank"><Movie>Movie Verse</Movie></a>

        <a className="link" href="https://shubhamdarwante2301.github.io/tic-tac-toe/" rel="noreferrer noopener" target="_blank"><Movie>Tik-Tak-Toe</Movie></a>

        <a className="link" href="https://shubhamdarwante2301.github.io/javascript-projects/to-do%20list/index.html" rel="noreferrer noopener" target="_blank"><Movie>To-Do List</Movie></a>
      </ProjectWrapper>
    </SectionContainer>
  );
};

export default Project;
