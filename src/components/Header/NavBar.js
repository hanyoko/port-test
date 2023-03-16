import React from 'react';
import { NavLink } from 'react-bootstrap';
import {
    // AiFillStar,
    AiOutlineHome,
    AiOutlineFundProjectionScreen,
    AiOutlineContacts
  } from "react-icons/ai";
import { GiSkills } from "react-icons/gi"
import "./NavBar.scss";

const NavBar = () => {
    return (
        <div className='navbar'>
            <ul className="nav">
        <li>
          <a>
            <AiOutlineHome /> Home
          </a>
        </li>
        <li>
          <a>
            <GiSkills /> Skillset
          </a>
        </li>
        <li>
          <a>
            <AiOutlineFundProjectionScreen /> Projects
          </a>
        </li>
        <li>
          <a>
            <AiOutlineContacts /> Contact Me
          </a>
        </li>
      </ul>
        </div>
    );
};

export default NavBar;