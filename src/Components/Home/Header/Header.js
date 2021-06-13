import React, { useState } from 'react';
import {Link, useLocation} from 'react-router-dom'
import MenuIcon from '../../../image/icons/menu.svg'
import './Header.css'

const Header = () => {
    const [isMenuVisible, setMenuVisible] = useState(false);
    return (
        <header>
            <div className="container">
                <div className="navbar">
                    <Link className="navbar_logo" to="/">Kar Garage</Link>
                    <div className={`nav_box ${isMenuVisible ? "visible" : ""}`}>
                        <nav className="navbar_nav">
                            <Link className="navbar_link" to="/">Home</Link>
                            <a className="navbar_link" href="#services">Services</a>
                            <a className="navbar_link" href="#reviews">Reviews</a>
                            <a className="navbar_link" href="#contact">Contact Us</a>
                            <Link className="navbar_link" to="/dashboard">Dashboard</Link>
                            <Link className="navbar_link" to="/login">Login</Link>
                        </nav>
                    </div>
                    <button className="nav_menu--icon" onClick={() => setMenuVisible(!isMenuVisible)}>
                        <img src={MenuIcon} alt="Mobile Menu" />
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;