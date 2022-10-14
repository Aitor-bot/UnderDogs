import React from 'react';
import '../Menu/Menu.scss';
import logo from '../../assets/img/logo.png'
import discord from '../../assets/img/discord.png'
import twitter from '../../assets/img/twitter.png'
import magiceden from '../../assets/img/magiceden.png'




function Menu() {
  return (
    <div className='menu'>
      <div className='menu_container'>
        <nav class="nav">
          <img src={logo} className="menu__logo" alt='logo'></img>
          <ul class="nav__list">
            <li class="nav__item"><a href='magiceden.io'>ROADMAP</a></li>
            <li class="nav__item"><a href='magiceden.io'>STAKING</a></li>
            <li class="nav__item"><a href='magiceden.io'>ABOUT US</a></li>
            <li class="nav__item"><a href='https://twitter.com/Underdogs_Sol' target="_blank" rel='noreferrer'><img src={twitter} className="menu__img" alt='twitter'></img></a></li>
            <li class="nav__item"><a href='#!'target="_blank" rel='noreferrer'><img src={discord} className="menu__img" alt='discord'></img></a></li>
            <li class="nav__item"><a href='https://magiceden.io/' target="_blank" rel='noreferrer'><img src={magiceden} className="menu__img magic" alt='discord'></img></a></li>

          </ul>

        </nav>
      </div>
    </div >
  );
}

export default Menu;