import React from "react";
import Roadmap from "./components/Roadmap/Roadmap";
import { Route, Routes } from "react-router";
import HomeBackground from "./components/HomeBackground/HomeBackground";
import MenuMobile from "./components/MenuMobile/MenuMobile"
import Roadmap2 from "./Roadmap2/Roadmap2";


const RouterResponsive = () => {
    return (
        <Routes>
            <Route path="/" element={<><HomeBackground /><MenuMobile /></>} />
            <Route path="/roadmap" element={<><Roadmap /><MenuMobile /></> } />
            <Route path="/staking" element={<><Roadmap2 /><MenuMobile /></> } />
        </Routes>
    )
}

export default RouterResponsive;