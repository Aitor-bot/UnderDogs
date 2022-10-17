import React from "react";
import Roadmap from "./components/Roadmap/Roadmap";
import { Route, Routes } from "react-router";
import HomeBackground from "./components/HomeBackground/HomeBackground";


const Router = () => {
    return (
        <Routes>
            <Route path="/roadmap" element={ <Roadmap /> } />
        </Routes>
    )
}

export default Router;