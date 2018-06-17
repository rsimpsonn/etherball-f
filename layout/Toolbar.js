import React from 'react';

import { NavLink } from 'react-router-dom';
import '../themes.css';
import logo from '../assets/etherball_logo.png';

//Need to insert logo
//Functional component to render a tollbar

const Toolbar = props => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light" style={{ borderWidth: "0px" }}>
            <a className="navbar-brand" style={{ fontSize: "30px" }}>
                <img src={logo} alt="logo" style={{ height: "70px" }} /> 
                <strong> &ensp;Etherball </strong>
            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor03" aria-controls="navbarColor03" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse my-2 my-lg-0" id="navbarColor03" />

            <div className="form-inline my-2 my-lg-0" style={{ fontWeight:"bold" }}>
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <NavLink to="/marketplace" className="nav-link" activeStyle={{ color: "black" }} exact> Marketplace </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/profile" className="nav-link" activeStyle={{ color: "black" }} exact> My Team </NavLink>  
                    </li>
                    <li className="nav-item">
                        <NavLink to="/game" activeStyle={{ color: "black" }} exact>
                            <button style={{ marginLeft: "10px", fontWeight: "bold" }} className="btn btn-primary">Play</button>
                        </NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Toolbar;