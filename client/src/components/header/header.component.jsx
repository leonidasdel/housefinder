import React,{Component} from 'react';
import "./header.styles.scss"
import {Link} from 'react-router-dom'
import header_logo from '../../assets/logo.png';
class Header extends Component {
    constructor(props){
        super(props)
    }
    render(){
        return(
            <header className="header">
                <nav>
                <ul className="header_list">
                    <li className="header_list_item">
                        <Link to="/houses" className="header_list_item_text">Ενοικίασε</Link>
                    </li>
                    <li className="header_list_item">
                        <Link to="/houses" className="header_list_item_text">Αγόρασε</Link>
                    </li>
                    <li className="header_list_item">
                        <Link to="/sell-house" className="header_list_item_text">Πούλησε</Link>
                    </li>
                    <li className="header_list_item">
                        <Link to="/login-register" className="header_list_item_text">Login</Link>
                    </li>
                    <li className="header_list_item">
                        <Link to="/login-register" className="header_list_item_text">Register</Link>
                    </li>
                </ul>
                </nav>
                <Link className="header_image" to="/"><img src={header_logo} alt="header-logo" className="header_image_icon"/></Link>
            </header>
        )
    }
}

export default Header;