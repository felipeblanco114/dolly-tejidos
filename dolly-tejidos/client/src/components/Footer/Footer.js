import React from 'react'
import InstagramIcon from '@material-ui/icons/Instagram';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';
import logo from '../NavBar/oveja.png';

import './style.css';

const Footer = () => {
    return (
        <footer>
            <div className='footer-container'>
                <div>
                    <a target='_blank' href='https://www.instagram.com/dolly.slowfashion/'>
                        <InstagramIcon style={{ marginTop: '.5rem' }} />
                        <span style={{ paddingBottom: '.5rem' }}>Dolly Slow Fashion</span>
                    </a>
                </div>
                <div>
                    <WhatsAppIcon style={{ marginTop: '.5rem' }} />
                    <span style={{ paddingBottom: '.5rem' }} >2926-462675</span>
                </div>
                <div>
                    <a href='mailto:felipeblanco114@gmail.com'>
                        <AlternateEmailIcon style={{ marginTop: '.5rem' }} />
                        <span style={{ paddingBottom: '.5rem' }}>felipeblanco114@gmail.com</span>
                    </a>
                </div>
            </div>
            <img src={logo} style={{ maxWidth: '2rem', marginRight: '3rem' }} alt='logo' />
        </footer>
    )
}

export default Footer;
