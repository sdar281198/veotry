import React, { Component } from 'react';
import { MenuItems } from './MenuItems';
import { Button } from '../Button';
import './Navbar.css';
import {NavLink} from 'react-router-dom';
import ReactDOM from "react-dom";
import {useLocation} from "react-router-dom";

class Navbar extends Component {

    state = {clicked: false}

    handleClick=()=>{
        this.setState({clicked: !this.state.clicked})
    }
    render(){
        return(
            <nav className='NavbarItems'>
                <NavLink to="/" className='navbar-logo'>Veo365</NavLink>
                <div className='menu-icon' onClick={this.handleClick}>
                    <i className={this.state.clicked ? 'fas fa-times-circle' : 'fas fa-bars'}></i>
                </div>
                <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                    {MenuItems.map((item, index) =>{
                        return (
                            <li key={index}>
                                <NavLink to={item.link} className={item.cName}>
                                    {item.title}
                                </NavLink>
                            </li>
                            
                        )
                    })}
                    <Button><a className='whats' href='https://api.whatsapp.com/send?phone=[51][991935157]'>Whatsapp <i class="fab fa-whatsapp"></i></a></Button>
                </ul>
                
                
            </nav>
        )
    }
}

export default Navbar;
