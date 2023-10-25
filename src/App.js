/**
 * Import Third Party
 */
import React from 'react';
import style from './style.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Common from "./pages/Common";
import User from "./pages/User";
import Navbar from "./Components/Navbar";

const App = () => {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={ <Home /> } />
                <Route path="/blog" element={ <Blogs /> } />
                <Route path="/blog/:title" element={ <Blog /> } />
                <Route path="/contact" element={ <Contact /> } />
                <Route path="/user/:userId" element={ <User /> } />
                <Route path="*" element={ <Common /> } />
            </Routes>
        </BrowserRouter>
    );
};

export default App;