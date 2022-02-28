import React from "react"
import "../assets/css/style.css"
import logo from "../assets/img/logo.png"
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <>
        <div className="topnav">
            <a href="">
                <img src={logo} width="70" />
            </a>
            <Link to="/">Home</Link>
            <Link to="/mobile-list">Movie List</Link>
            <Link to="/about">About</Link>

            <form>
                <input type="text" />
                <input type="submit" value="Cari" />
            </form>
        </div>
        </>
    )
}

export default Navbar
