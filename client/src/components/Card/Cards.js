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

    const [ categorySelected, setCategorySelected ] = useState('');

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

    const filterCards = products.filter((product) => product.category === categorySelected);

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

    const handleSetCategory = (category) => {
        setCategorySelected(category);
    }

    const Modal = () => {
        return (
            <div className='modal'>
                <div className='modal-container'>
                <CloseIcon onClick={(e) => handleShowCart(e)} className='close-modal' />
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
        <div className='container-cards-categories'>
            <div className='categories'>
                <h3 className={categorySelected === '' ? 'selected' : ''} onClick={() => handleSetCategory('')}>TODO</h3>
                <h3 className={categorySelected === 'Accesorios' ? 'selected' : ''} onClick={() => handleSetCategory('Accesorios')}>ACCESORIOS</h3>
                <h3 className={categorySelected === 'Sweaters' ? 'selected' : ''} onClick={() => handleSetCategory('Sweaters')}>SWEATERS</h3>
                <h3 className={categorySelected === 'Pantalones' ? 'selected' : ''} onClick={() => handleSetCategory('Pantalones')}>PANTALONES</h3>
            </div>
            <div className='container-cards'>
                <div className='shop-cart' onClick={(e) => handleShowCart(e)}>
                    {cart.length ? (<div className='number-cart'><span>{cart.length}</span></div>) : null}
                    <div className='cart-shopping'> 
                    <ShoppingCartIcon />
                    {cart.length ? (
                        <div>
                            {cart.map((item) => (
                                <h6 key={item.id} style={{ borderBottom: 'solid .1px rgb(200,200,200)' }}>{item.title}</h6>
                            ))} 
                            <span>${itemPrice}</span>
                        </div>) : null }
                    </div>
                </div>
                { showCart ? <Modal /> : null }
                { categorySelected === '' ? 
                products.map((product) => (
                    <Card   images={product.images} title={product.title} description={product.description} 
                            category={product.category} price={product.price} talle={product.talle} key={product.id}
                            alto={product.alto} ancho={product.ancho} stock={product.stock} cart={cart} addToCart={addToCart} id={product.id}
                    />
                )) :
                filterCards.map((product) => (
                    <Card   images={product.images} title={product.title} description={product.description} 
                            category={product.category} price={product.price} talle={product.talle} key={product.id}
                            alto={product.alto} ancho={product.ancho} stock={product.stock} cart={cart} addToCart={addToCart} id={product.id}
                    />
                ))}
            </div>
        </div>
    )
}

export default Cards
