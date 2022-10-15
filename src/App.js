import React from 'react';
import HomeBackground from './components/HomeBackground/HomeBackground';
import Menu from './components/Menu/Menu';
import MenuMobile from './components/MenuMobile/MenuMobile'

import MediaQuery from "react-responsive";




function App() {
  return (
    <div>
      <MediaQuery minWidth={900}>
        <HomeBackground></HomeBackground>
        <Menu></Menu>


      </MediaQuery>

      <MediaQuery maxWidth={900}>
        <HomeBackground></HomeBackground>
        <MenuMobile></MenuMobile>

      </MediaQuery>
    </div>
  );
}

export default App;
