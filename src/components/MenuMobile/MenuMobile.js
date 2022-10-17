import React from 'react';
import '../MenuMobile/MenuMobile.scss'
import { Link } from "react-router-dom";


import { FaDiscord } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import magiceden from '../../assets/img/magiceden.png'

import logo from '../../assets/img/logo.png'




function MenuMobile() {
  return (
    <div>
      
      <Link to="/"><img src={logo} className="menumobile__logo" alt='logo'></img></Link>

      <div className='mobilemenu__body'>

        <input type="checkbox" id="active" />
        <label htmlFor="active" className="menu-btn"><span></span></label>
        <label htmlFor="active" className="close"></label>
        <div className="wrapper">
          <ul>
            <li>
            <Link to="/roadmap">ROADMAP</Link>
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
            <li>
              <a href='https://magiceden.io/' target="_blank" rel='noreferrer'><img src={magiceden} className="menu__img magic" alt='discord'></img></a></li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default MenuMobile;