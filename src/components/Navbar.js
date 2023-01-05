import React, { useState } from "react";
import styled from "styled-components";
import {Link} from 'react-scroll'

import HamburgerIcon from "./HamburgerIcon";
import ResumePDF from "../Shubham_Darwante.pdf"

const NavbarStyle = styled.div`
    background-color: #2a2c39;
    color: #ffffff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.5rem 4rem;
    position: sticky;
    top: 0;
    z-index: 10;
    
    @media (max-width: 540px) {
      padding: 1.5rem 1rem;
    }
  `;

  const Menu = styled.ul`
    list-style-type: none;
    font-size: 1.3rem;
    display: flex;
    color: #858792;

    @media (max-width: 900px) {
      background-color: #2a2c39;
      // background-color: red;
      color: #ffffff;
      height: 100vh;
      width: 250px;
      padding: 20px;
      margin-top: 0;
      display: ${({ toggle }) => (toggle ? "block" : "none")};
      position: absolute;
      right: ${({ toggle }) => (toggle ? "0px" : "-300px")};
      top: 0;
      transition: right 0.5s ease;
      overflow: hidden;
      z-index: 10;
    }
  `;

  const Logo = styled.div`
    font-size: 1.7rem;
    cursor: pointer;
  `;

  const MenuItem = styled.li`
    padding: 0 0.9rem;
    cursor: pointer;
    /* color: #858792; */

    &:hover {
      color: #ffffff;
      transition: color, 0.5s ease;
    }

    @media (max-width: 900px) {
      padding: 10px 20px;
    }
  `;

  const Resume = styled.div`
    border: 1px solid #3b3d49;
    padding: 10px 20px;
    border-radius: 20px;
    cursor: pointer;

    &:hover {
      background-color: #3a3b47;
      transition: background-color, 0.5s ease-in-out;
    }

    @media (max-width: 900px) {
      display: none;
    }
  `;

  const CloseIcon = styled.div`
    display: none;
    cursor: pointer;

    @media (max-width: 900px) {
      display: block;
    }
  `;


const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  const downloadResume = () => {
    fetch(ResumePDF).then((response) => {
      response.blob().then((blob) => {
        // Creating new object of PDF file
        const fileURL = window.URL.createObjectURL(blob);
        // Setting various property values
        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = "shubham_darwante_resume";
        alink.click();
      });
    });
  };

  return (
    <NavbarStyle>
      <Logo><Link to="hero" spy={true} smooth={true} offset={-100} duration={500}>SHUBHAM.</Link></Logo>
      <Menu toggle={toggle}>
        <CloseIcon onClick={()=>{handleToggle()}}>
          <i className="fa-regular fa-circle-xmark"></i>
        </CloseIcon>
        <MenuItem>
          <Link to="about" spy={true} smooth={true} offset={-100} duration={500} onClick={()=>{handleToggle()}}>About</Link>
        </MenuItem>
        <MenuItem>
          <Link to="skills" spy={true} smooth={true} offset={-100} duration={500} onClick={()=>{handleToggle()}}>Skills</Link>
        </MenuItem>
        <MenuItem>
          <Link to="education" spy={true} smooth={true} offset={-100} duration={500} onClick={()=>{handleToggle()}}>Education</Link>
        </MenuItem>
        <MenuItem>
          <Link to="project" spy={true} smooth={true} offset={-100} duration={500} onClick={()=>{handleToggle()}}>Project</Link>
        </MenuItem>
        <MenuItem>
          <Link to="contact" spy={true} smooth={true} offset={-100} duration={500} onClick={()=>{handleToggle()}}>Contact</Link>
        </MenuItem>
      </Menu>
      <Resume onClick={downloadResume}>
        Resume
        <i className="fa-solid fa-download" style={{ marginLeft: "0.5rem" }}></i>
      </Resume>
      <HamburgerIcon handleToggle={handleToggle} />
    </NavbarStyle>
  );
};
export default Navbar;
