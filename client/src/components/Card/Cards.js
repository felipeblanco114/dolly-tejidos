import React, { useState } from 'react'
import { products } from '../../constants/products';
import './styles.css';
import Card from './Card';

const Cards = () => {

    return (
        <div className='container-cards'>
            {products.map(({ id, images, title, description, category, price, talle, alto, ancho }) => (
                <Card   images={images} title={title} description={description} 
                        category={category} key={id} price={price} talle={talle} 
                        alto={alto} ancho={ancho} 
                />
            ))}
        </div>
    )
}

export default Cards
