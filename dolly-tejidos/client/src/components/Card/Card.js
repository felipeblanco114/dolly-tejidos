import React, { useState } from 'react'
import './styles.css';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

const Card = ({ images, id, title, category, description, price, talle, alto, ancho }) => {

    const [image, setImage] = useState(0);

    const handleNext = () => {
        if(image === images.length -1) {
            setImage(0);
        } else {
            setImage(image + 1);
        }
    }
    const handleBefore = () => {
        if(image === 0) {
            setImage(images.length - 1);
        } else {
            setImage(image - 1);
        }
    }
    return (
        <div className='container-card' key={id}>
            <h2>{title}</h2>
            <h4 style={{ color: 'rgb(140,140,140)' }}>{category.toUpperCase()}</h4>
            <img src={images[image]} alt='product' />
            <ArrowBackIosIcon className='retroceder' onClick={handleBefore} disabled={image === 0} />
            <ArrowForwardIosIcon className='next' onClick={handleNext} disabled={image === (images.length - 1)} />
            <div className='card-details'>
                <p>{description}</p>
            </div>
            <div className='card-footer'>
                <div className='price'>${price}</div>
                <div className='sizes'>
                    <div><span>Talle: </span>{talle}</div>
                    <div><span>Alto: </span>{alto}</div>
                    <div><span>Ancho: </span>{ancho}</div>
                </div>
            </div>
            <button>COMPRAR</button>
        </div>
    )
}

export default Card
