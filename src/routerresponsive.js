import React from "react";
import Roadmap from "./components/Roadmap/Roadmap";
import { Route, Routes } from "react-router";
import HomeBackground from "./components/HomeBackground/HomeBackground";
import MenuMobile from "./components/MenuMobile/MenuMobile"


const RouterResponsive = () => {
    return (
        <Routes>
            <Route path="/" element={<><HomeBackground /><MenuMobile /></>} />
            <Route path="/roadmap" element={<><MenuMobile /><Roadmap /></> } />
        </Routes>
    )
}

export default RouterResponsive;