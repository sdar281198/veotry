import React from 'react'
import { FooterItems } from './FooterItems';
import './Footer.css';
import {NavLink} from 'react-router-dom';

const Footer = () => {
    return (
        <>
            <div className='footerItems'>
                <ul>
                {FooterItems.map((item,index)=>{
                    return(
                        <>
                        <li key={index}><NavLink to={item.link}>{item.title}</NavLink></li>
                        </>
                    )
                })}
                </ul>

            </div>
            <div className='lastfoot'>
                    <p>&copy; 2022 APUTEK - DERECHOS RESERVADOS <a href='#'>TERMINOS Y CONDICIONES</a></p>

                </div>
        </>
    )
}
export default Footer;
