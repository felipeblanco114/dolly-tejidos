import React, { useState } from 'react'
import './styles.css';
import logo from './oveja.png';
import { Link, useHistory } from 'react-router-dom';

const NavBar = () => {

    const history = useHistory();
    return (
        <>
        <div className='navbar'>
            <img src={logo} alt='logo' onClick={() => history.push('/')} style={{ cursor: 'pointer' }} />
            <span onClick={ () => history.push('/')} style={{  cursor: 'pointer' }}>Dolly</span>
            <nav>
                <ul>
                    <li><a href='#' >SOBRE DOLLY</a></li>
                    <li><Link to='/products' >PRODUCTOS</Link></li>
                    <li><a href='#' >CONTACTO</a></li>
                </ul>
            </nav>
        </div>
        </>
    )
}

export default NavBar;
