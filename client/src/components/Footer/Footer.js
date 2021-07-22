import React from 'react'
import InstagramIcon from '@material-ui/icons/Instagram';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';
import logo from '../NavBar/oveja.png';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import pago from '../Home/img/medios-de-pago.png';

import './style.css';

const Footer = () => {
    return (
        <footer>
            <div className='footer-container'>
                <div>
                    <h2>REDES SOCIALES</h2>
                    <div>
                        <a rel='noreferrer' target='_blank' href='https://www.instagram.com/dolly.slowfashion/'>
                            <InstagramIcon style={{ marginTop: '.5rem' }} />
                            <span style={{ paddingBottom: '.5rem' }}>Dolly Slow Fashion</span>
                        </a>
                    </div>
                </div>
                <div>
                    <h2>CONTACTO</h2>
                    <div>
                        <WhatsAppIcon style={{ marginTop: '.5rem' }} />
                        <span style={{ paddingBottom: '.5rem' }} >2926-462675</span>
                    </div>
                    <div>
                        <a href='mailto:felipeblanco114@gmail.com'>
                            <AlternateEmailIcon style={{ marginTop: '.5rem' }} />
                            <span style={{ paddingBottom: '.5rem' }}>dolly-tejidos@gmail.com</span>
                        </a>
                    </div>
                    <div>
                        <LocationOnIcon style={{ marginTop: '.5rem' }} />
                        <span style={{ paddingBottom: '.5rem' }} >Coronel Suárez, Buenos Aires</span>
                    </div> 
                </div>
                <div>
                    <h2>MEDIOS DE PAGO</h2>
                    <img src={pago} alt='medios-de-pago' />
                </div>
            </div>
            <img src={logo} style={{ maxWidth: '2rem', marginRight: '3rem' }} alt='logo' />
        </footer>
    )
}

export default Footer;
