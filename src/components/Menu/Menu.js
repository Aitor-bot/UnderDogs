import React from 'react';
import '../Menu/Menu.scss';
import logo from '../../assets/img/logo.png'
import discord from '../../assets/img/discord.png'
import twitter from '../../assets/img/twitter.png'
import magiceden from '../../assets/img/magiceden.png'

import { Link } from "react-router-dom";



function Menu() {
  return (
    <div className='menu'>
      <div className='menu_container'>
        <nav className="nav">
          <Link to="/"><img src={logo} className="menu__logo" alt='logo'></img></Link>
          <ul className="nav__list">
            <li className="nav__item">
              <Link to="/roadmap">ROADMAP</Link>
            </li>
            <li className="nav__item"><a href='magiceden.io'>STAKING</a>
            </li>
            <li className="nav__item"><a href='magiceden.io'>ABOUT US</a>
            </li>

            <li className="nav__item"><a href='https://twitter.com/Underdogs_Sol' target="_blank" rel='noreferrer'><img src={twitter} className="menu__img" alt='twitter'></img></a></li>
            <li className="nav__item"><a href='#!' target="_blank" rel='noreferrer'><img src={discord} className="menu__img" alt='discord'></img></a></li>
            <li className="nav__item"><a href='https://magiceden.io/' target="_blank" rel='noreferrer'><img src={magiceden} className="menu__img magic" alt='discord'></img></a></li>
          </ul>
        </nav>
      </div>
    </div >
  );
}

export default Menu;