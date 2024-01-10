
import React from 'react';
import { useSelector } from 'react-redux';

const Cart = () => {
    const cartItems = useSelector((state) => state.cart.items);

    return (
        <div>
            <h2>Корзина</h2>
            {cartItems.map((item) => (
                <div key={item.id}>
                    <p>{item.title}</p>
                    <p>{item.price} $.</p>
                </div>
            ))}
        </div>
    );
};

export default Cart;
