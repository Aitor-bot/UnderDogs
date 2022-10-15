import React from 'react';
import '../MenuMobile/MenuMobile.scss'

import { Link } from "react-scroll";

import { FaDiscord } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';


function MenuMobile() {
  return (
    <div className='mobilemenu__body'>

      <input type="checkbox" id="active" />
      <label for="active" className="menu-btn"><span></span></label>
      <label for="active" className="close"></label>
      <div className="wrapper">
        <ul>
          <li>
            <a href="#!">ROADMAP</a>
          </li>
          <li>
            <a href="#!">STAKING</a>
          </li>
          <li>
            <a href="#!">ABOUT US</a>
          </li>

          <li>
            <a href="#!"><FaDiscord /></a></li>
          <li>
            <a href="#!"><FaTwitter /></a></li>
        </ul>
      </div>
    </div>
  );
}

export default MenuMobile;