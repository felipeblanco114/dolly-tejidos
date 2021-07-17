import React, { useState } from 'react'
import './styles.css';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

const Card = ({ images, id, title, category, description, price, talle, alto, ancho, stock }) => {

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
            { !stock ? <div className='stock'>SIN STOCK </div> : <div className='c-stock'>STOCK ÚNICO</div> }
            <h2>{title}</h2>
            <h4 style={{ color: 'rgb(140,140,140)' }}>{category.toUpperCase()}</h4>
            <img src={images[image]} alt='product' className={!stock ? 'sin-stock' : ''} />
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
            <button disabled={!stock}><ShoppingCartIcon style={{ maxWidth: '1rem', float: 'left', marginLeft: '.5rem' }} /> <span>COMPRAR</span></button>
        </div>
    )
}

export default Card
