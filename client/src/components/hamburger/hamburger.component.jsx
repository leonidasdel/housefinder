import React, { useState, useEffect, useRef } from 'react';
import {Link} from 'react-router-dom'
import AuthenticationService from '../services/AuthenticationService';
import "./hamburger.styles.scss"

function Hamburger(props) {
    const isUserLoggedIn = AuthenticationService.isUserLoggedIn();
    const username = sessionStorage.getItem("authenticatedUser")
    
    const changeCheck = () => {
        document.getElementById("checkbox_hamburger").checked = false
    }
    return (
        <>
            <label id="label-show-helper">
                <input type="checkbox" id="checkbox_hamburger" onChange={(el) => console.log(el.target.checked)}></input>
                <span className="menu">
                    <span className="hamburger"></span>
                </span>
               
                <ul>
                    <li>
                    <Link to="/houses" onClick={() => changeCheck()} className="header_list_item_text">Rent</Link>
                    </li>
                    <li>
                    <Link to="/houses" onClick={() => changeCheck()}  className="header_list_item_text">Buy</Link>
                    </li>
                    <li>
                    <Link to="/sell-house" onClick={() => changeCheck()} className="header_list_item_text">Rent your house</Link>
                    </li>
                    {!isUserLoggedIn && <li>
                        <Link to="/login-register" onClick={() => changeCheck()} className="header_list_item_text">Login</Link>
                    </li>} 
                    {!isUserLoggedIn && <li>
                        <Link to="/login-register" onClick={() => changeCheck()} className="header_list_item_text">Register</Link>
                    </li> }
                    {isUserLoggedIn && <li>
                        <Link to="/sell-house" onClick={() => changeCheck()} className="header_list_item_text">{username}</Link>
                    </li>} 
                    {isUserLoggedIn && <li>
                        <a  onClick={AuthenticationService.logout} onClick={() => changeCheck()} className="header_list_item_text">LogOut</a>
                    </li> }
                </ul>
              
               
            </label>
        
        </>
    )

}

export default Hamburger;