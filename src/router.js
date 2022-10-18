import React from "react";
import Roadmap from "./components/Roadmap/Roadmap";
import { Route, Routes } from "react-router";
import HomeBackground from "./components/HomeBackground/HomeBackground";
import Menu from "./components/Menu/Menu"


const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<><HomeBackground /><Menu /></>} />
            <Route path="/roadmap" element={<><Menu /><Roadmap /></> } />

        </Routes>
    )
}

export default Router;