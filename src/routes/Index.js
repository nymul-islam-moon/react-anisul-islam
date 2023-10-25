import React, {useState} from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
/**
 * Pages
 */
import Home from "../pages/Home";
import AddBlog from "../pages/AddBlog";
import About from "../pages/About";
import Error from "../pages/Error";
import Navbar from "../layout/Navbar";
import Protected from "./Protected";

const Index = () => {

    const [ isLoggedIn, setLoggedIn ] = useState( false )

    return (
        <BrowserRouter>
            <Navbar />
            { isLoggedIn ? <button onClick={() => {setLoggedIn(!isLoggedIn)}}>Log Out</button> : <button onClick={() => {setLoggedIn(!isLoggedIn)}}>Log In</button> }
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/add-blog" element={ <Protected isLoggedIn={isLoggedIn}> <AddBlog /> </Protected> } />
                <Route path="/about" element={<About />} />
                <Route path="/*" element={<Error />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Index;