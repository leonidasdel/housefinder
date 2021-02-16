import React,{Component} from 'react';
import "./header.styles.scss"
import {Link} from 'react-router-dom'
import header_logo from '../../assets/logo.png';
import AuthenticationService from '../services/AuthenticationService';
import Hamburger from '../hamburger/hamburger.component';

class Header extends Component {
    constructor(props){
        super(props)
    }
    render(){
        const isUserLoggedIn = AuthenticationService.isUserLoggedIn();
        const username = sessionStorage.getItem("authenticatedUser")
        return(
            <header className="header">
                <div className="header_container">
                <nav>
                <ul className="header_container_list">
                    <li className="header_container_list_item">
                        <Link to="/houses" className="header_container_list_item_text">Rent</Link>
                    </li>
                    <li className="header_container_list_item">
                        <Link to="/houses" className="header_container_list_item_text">Buy</Link>
                    </li>
                    <li className="header_container_list_item">
                        <Link to="/sell-house" className="header_container_list_item_text">Rent your house</Link>
                    </li>
                    {!isUserLoggedIn && <li className="header_container_list_item">
                        <Link to="/login-register" className="header_container_list_item_text">Login</Link>
                    </li>} 
                    {!isUserLoggedIn && <li className="header_container_list_item">
                        <Link to="/login-register" className="header_container_list_item_text">Register</Link>
                    </li> }
                    {isUserLoggedIn && <li className="header_container_list_item">
                        <Link to="/sell-house" className="header_container_list_item_text">{username}</Link>
                    </li>} 
                    {isUserLoggedIn && <li className="header_container_list_item">
                        <a  onClick={AuthenticationService.logout} className="header_container_list_item_text">LogOut</a>
                    </li> }

                </ul>
                </nav>
                <Link className="header_image" to="/"><img src={header_logo} alt="header-logo" className="header_image_icon"/></Link>
                </div>
      

                <Hamburger />
            </header>
        )
    }
}

export default Header;