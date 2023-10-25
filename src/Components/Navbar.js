import React from "react";
import {Link, NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <nav>
            <NavLink to="/" className="nav-link"> Home </NavLink>
            <NavLink to="/contact" className="nav-link"> Contact </NavLink>
            <NavLink to="/blog" className="nav-link"> Blogs </NavLink>
            <NavLink to="/user" className="nav-link"> User </NavLink>
        </nav>
    );
};

export default Navbar;