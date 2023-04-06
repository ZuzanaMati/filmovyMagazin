import React from "react";
import "./Menu.css"
import { NavLink } from "react-router-dom";

const Menu = () => {

    return (
        <nav className="menu">
            <NavLink to="/"
                className={({ isActive }) => isActive ? "active" : ""} >Home</NavLink>

            <NavLink to="/reviews"
                className={({ isActive }) => isActive ? "active" : ""}>Reviews</NavLink>

            <NavLink to="/articles"
                className={({ isActive }) => isActive ? "active" : ""}>Articles</NavLink>

            <NavLink to="/movies"
                className={({ isActive }) => isActive ? "active" : ""}>Movies</NavLink>
        </nav>
    )
}

export default Menu