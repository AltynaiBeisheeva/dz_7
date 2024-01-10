
import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../store/cartSlice';
import img from "../img/phone.png"

const ProductList = ({ products }) => {
    const dispatch = useDispatch();

    const handleBuyClick = (product) => {
        dispatch(addToCart(product));
    };



    return (
        <div>
            <h2>Товары</h2>
            {products.map((product) => (
                <div key={product.id}>
                    <img style={{width:"100px"}} src={img} alt="phone"/>
                    <p>{product.title}</p>
                    <p>{product.price} $.</p>
                    <button onClick={() => handleBuyClick(product)}>Купить</button>
                </div>
            ))}
        </div>
    );

};

export default ProductList;
