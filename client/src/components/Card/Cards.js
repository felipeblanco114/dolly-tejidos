import React, { useState} from 'react'
import { products } from '../../constants/products';
import './styles.css';
import Card from './Card';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import DeleteIcon from '@material-ui/icons/Delete';
import CloseIcon from '@material-ui/icons/Close';

const Cards = () => {

    const [cart, setCart] = useState([]);
    console.log(cart);

    const [showCart, setShowCart] = useState(false);
    console.log(showCart);

    const itemPrice = cart.reduce((a, c) => a + c.price, 0);

    const handleShowCart = (e) => {
        e.preventDefault();
        if(showCart === false) {
            setShowCart(true);
        } else {
            setShowCart(false);
        }
    
    }

    const removeToCart = (product) => {
        const exist = cart.find((x) => x.id === product.id);
        if(exist) {
            setCart(cart.filter((x) => x.id !== product.id));
        }
    }

    const addToCart = (product) => {
        const exist = cart.find((x) => x.id === product.id);
        if(exist) {
            return null
        } else {
            setCart([...cart, product]);
        }
    }

    const Modal = () => {
        return (
            <div className='modal'>
                <div className='modal-container'>
                <CloseIcon onClick={(e) => handleShowCart(e)} style={{ cursor: 'pointer', position: 'relative', left: '25rem', display: 'inline', top: '-1rem' }} />
                    <div style={{ height: '10%', textAlign: 'center' }}><h2> <ShoppingCartIcon /> {cart.length ? 'Carrito' : 'Carrito vacío ☹️'}</h2></div>
                    <div className='items-container'>
                        { cart.length ? cart.map((cartItem) => (
                            <div key={cartItem.id} className='cart-item'>
                                <img src={ cartItem?.imageCart} alt='cart-item' />
                                <h3>{cartItem?.title}</h3>
                                <span>${cartItem?.price}</span>
                                <DeleteIcon style={{ cursor: 'pointer', marginRight: '.5rem' }} onClick={() => removeToCart(cartItem)} />
                            </div>
                        )) : 
                            <h2 style={{ marginTop: '2.5rem', marginLeft: 'auto', marginRight: 'auto', textAlign: 'center'}} >
                            Todavía no agregaste nada al carrito ☹️
                            </h2>
                        }
                    </div>
                    { cart.length ? <div className='cart-footer'>
                        <div>
                            <h3>${itemPrice}</h3>
                        </div>
                        <h3>PROCEDER A LA COMPRA</h3>
                    </div> : null }
                </div>
            </div>
        )
    }

    return (
        <div className='container-cards'>
            <div className='shop-cart' onClick={(e) => handleShowCart(e)}>
                {cart.length ? (<div className='number-cart'><span>{cart.length}</span></div>) : null}
                <div className='cart-shopping'> 
                <ShoppingCartIcon />
                {cart.length ? (
                    <div>
                        {cart.map((item) => (
                            <h6 style={{ borderBottom: 'solid .1px rgb(200,200,200)' }}>{item.title}</h6>
                        ))} 
                        <span>${itemPrice}</span>
                    </div>) : null }
                </div>
            </div>
            { showCart ? <Modal /> : null }
            {products.map(({ id, images, title, description, category, price, talle, alto, ancho, stock }) => (
                <Card   images={images} title={title} description={description} 
                        category={category} key={id} price={price} talle={talle} 
                        alto={alto} ancho={ancho} stock={stock} cart={cart} addToCart={addToCart} id={id}
                />
            ))}
        </div>
    )
}

export default Cards
