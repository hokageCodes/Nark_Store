import React from "react";
import './nav-bar.css'
import logo from '../assets/narkLogo.png'


function NavBar() {
    return(
        // <h1>Navigation Components</h1>
        <nav className="nav-container">
            <div className="logo">
                <img src={logo} alt="Logo" />
                <h3>nark store</h3>
            </div>
            <input className="nav-input" type="search" placeholder="collections, Nfts or Users"/>
            <ul className="nav-links">
                <li className="discover">Discover |</li>
                <li>Collections |</li>
                <li>Categories |</li>
                <li>FAQs</li>
            </ul>
            <div className="nav-buttons">
                <button className="sign-in">Sign In</button>
                <button className="mint">Mint</button>
            </div>
        </nav>
    )
}


export default NavBar
