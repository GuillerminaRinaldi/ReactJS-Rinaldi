import React from 'react';
import './NavBar.css';
import { CartWidget } from "../CartWidget/CartWidget";


export const NavBar = () => {
    return (
        <nav className="navbar">
            <img src="" alt="Logo" className="navbar-logo"/>
            <ul className="navbar-menu">
                <li><a href="#link1">Link 1</a></li>
                <li><a href="#link2">Link 2</a></li>
                <li><a href="#link3">Link 3</a></li>
            </ul>
            <CartWidget />
        </nav>
    );
}
