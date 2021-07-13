import React, { useState } from 'react'
import './styles.css';
import logo from './oveja.png';

const NavBar = () => {
    return (
        <>
        <div className='navbar'>
            <img src={logo} alt='logo' />
            <span>Dolly</span> 
            <nav>
                <ul>
                    <li><a href='#' >SOBRE DOLLY</a></li>
                    <li><a href='#' >PRODUCTOS</a></li>
                    <li><a href='#' >CONTACTO</a></li>
                </ul>
            </nav>
        </div>
        </>
    )
}

export default NavBar;
