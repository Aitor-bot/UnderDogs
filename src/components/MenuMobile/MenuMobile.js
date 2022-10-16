import React from 'react';
import '../MenuMobile/MenuMobile.scss'


import { FaDiscord } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import magiceden from '../../assets/img/magiceden.png'

import logo from '../../assets/img/logo.png'




function MenuMobile() {
  return (
    <div>
      <img src={logo} className="menumobile__logo" alt='logo'></img>

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
            <li>
              <a href='https://magiceden.io/' target="_blank" rel='noreferrer'><img src={magiceden} className="menu__img magic" alt='discord'></img></a></li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default MenuMobile;