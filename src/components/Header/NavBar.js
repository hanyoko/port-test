import React, { useState } from 'react';
import { Container, Navbar } from 'react-bootstrap';
import {
    // AiFillStar,
    AiOutlineHome,
    AiOutlineFundProjectionScreen,
    AiOutlineContacts
  } from "react-icons/ai";
import { GiSkills } from "react-icons/gi"
import { Link } from 'react-router-dom';
import "./NavBar.scss";

const NavBar = () => {
  const [expand, updateExpanded] = useState(false);
  const [navColor, updateNavbar] = useState(false);

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  window.addEventListener("scroll", scrollHandler);

    return (
      <Navbar
        expanded={expand}
        fixed="top"
        expand="md"
        className={navColor ? "sticky" : "navbar"}
      >
      <Container>
        <ul className="nav">
          <li>
            <Link
              to="/home"
            >
              <AiOutlineHome /> Home
            </Link>
          </li>
          <li>
            <Link
              to="/skillset"
            >
              <GiSkills /> Skillset
            </Link>
          </li>
          <li>
            <Link
              to="/projects"
            >
              <AiOutlineFundProjectionScreen /> Projects
            </Link>
          </li>
          <li>
            <Link
              to="contact"
            >
              <AiOutlineContacts /> Contact Me
            </Link>
          </li>
        </ul>
      </Container>
      </Navbar>
    );
};

export default NavBar;