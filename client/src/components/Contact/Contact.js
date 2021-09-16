import React from 'react';
import './style.css';
import image from './maddison-fantillo-AWfOfjF8hyM-unsplash.jpg';

const Contact = () => {
    return (
        <div className='contact-container'>
            <h2>
                ¡CONTÁCTANOS!
            </h2>
            <div className='contact-form'>
                <div className='contact-left'>
                    <img src={image} alt='dolly' />
                </div>
                <div className='contact-right'>
                    <h3>¡Contáctanos!</h3>
                    <input className='field' type='text' placeholder='Nombre' />
                    <input className='field' type='email' placeholder='Email' />
                    <input className='field' type='text' placeholder='Teléfono' />
                    <textarea className='field area' placeholder='Mensaje'></textarea>
                    <button className='contact-btn'>Enviar</button>
                </div>
            </div>
        </div>
    )
}

export default Contact
