import React, { useState } from 'react'
import './styles.css';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';

const Card = ({ images, id, title, category, description, price, talle, alto, ancho, stock, cart, addToCart }) => {

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

    const imageCart = images[0];
    return (
        <div className='container-card'>
            { stock > 1 ? <div className='c-stock'>QUEDAN {stock}</div> : !stock ? <div className='stock'>SIN STOCK </div> : <div className='c-stock'>STOCK ÚNICO</div> }
            <h2>{title}</h2>
            <h4 style={{ color: 'rgb(140,140,140)' }}>{category.toUpperCase()}</h4>
            <div className='container-image'>
                <img src={images[image]} alt='product' className={!stock ? 'sin-stock' : ''} />
                { images.length > 1 ? (
                    <div className='arrows'>
                    <ArrowBackIosIcon className='retroceder' onClick={handleBefore} disabled={image === 0} />
                    <ArrowForwardIosIcon className='next' onClick={handleNext} disabled={image === (images.length - 1)} />
                    </div> ) 
                : null }
            </div>
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
            <button onClick={() => addToCart({imageCart, title, price, id })} disabled={!stock}><AddShoppingCartIcon style={{ maxWidth: '1rem', float: 'left', marginLeft: '.5rem' }} /> 
                <span>AGREGAR AL CARRITO</span>
            </button>
        </div>
    )
}

export default Card
