import React from "react";
import Roadmap from "./components/Roadmap/Roadmap";
import { Route, Routes } from "react-router";
import HomeBackground from "./components/HomeBackground/HomeBackground";
import Menu from "./components/Menu/Menu"
import Roadmap2 from "./Roadmap2/Roadmap2";


const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<><HomeBackground /><Menu /></>} />
            <Route path="/roadmap" element={<><Menu /><Roadmap /></> } />
            <Route path="/staking" element={<><Menu /><Roadmap2 /></> } />
        </Routes>
    )
}

export default Router;