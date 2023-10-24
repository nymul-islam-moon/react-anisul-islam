/**
 * Import Third Party
 */
import React from 'react';
import style from './style.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
import Common from "./pages/Common";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/home" element={ <Home /> } />
                <Route path="/blog" element={ <Blogs /> } />
                <Route path="/contact" element={ <Contact /> } />
                <Route path="*" element={ <Common /> } />
            </Routes>
        </BrowserRouter>
    );
};

export default App;