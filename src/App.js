import React from 'react';
import MediaQuery from "react-responsive";
import { BrowserRouter } from 'react-router-dom';
import Router from "./router"
import RouterResponsive from './routerresponsive';


function App() {
  return (
    <div>

      <MediaQuery minWidth={900}>
        <BrowserRouter>
          <div>
            <Router />
          </div>
        </BrowserRouter>
      </MediaQuery>

      <MediaQuery maxWidth={900}>
        <BrowserRouter>
          <div>
            <RouterResponsive />
          </div>
        </BrowserRouter>
      </MediaQuery>


    </div>
  );
}

export default App;