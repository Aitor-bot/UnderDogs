import React from 'react';
import MediaQuery from "react-responsive";
import { BrowserRouter } from 'react-router-dom';
import Router from "./router"

import HomeBackground from './components/HomeBackground/HomeBackground';
import Menu from './components/Menu/Menu';
import MenuMobile from './components/MenuMobile/MenuMobile'
import Roadmap from './components/Roadmap/Roadmap'



function App() {
  return (
    <div>
      <BrowserRouter>
      <HomeBackground></HomeBackground>
        <Menu />
        <div>
          <Router />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;

/*      <MediaQuery minWidth={900}>

        <Router>
          <HomeBackground></HomeBackground>
          <Menu></Menu>
          <Routes>
            <Route path="roadmap" element={<Roadmap />}>
            </Route>
          </Routes>
        </Router>
      </MediaQuery>

      <MediaQuery maxWidth={900}>

        <Router>
        <HomeBackground></HomeBackground>
        <MenuMobile></MenuMobile>
          <Routes>
            <Route path="/" element={<Roadmap />}>
            </Route>
          </Routes>
        </Router>
      </MediaQuery>*/