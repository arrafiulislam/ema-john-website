/* eslint-disable react/prop-types */
import React from 'react';
import './Product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
const Product = (props) => {
    const { name, img, seller, price, ratings, quantity } = props.product;
    const handleAddtoCart = props.handleAddtoCart;
   
    return (
        <div className='product'>
            <img src={img} alt="" />
            <h6 className='product-name'>{name}</h6>
            <div className='product-info'>
                <p>Price: ${price}</p>
                <p>Manufacturer: {seller}</p>
                <p>Rating: {ratings}</p>
            </div>
            <button onClick={()=>handleAddtoCart(props.product)} className='btn-cart'>Add to Cart
            <FontAwesomeIcon icon={faShoppingCart} /></button>
        </div>
    );
};

export default Product;