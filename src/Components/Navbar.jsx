
import React from 'react';
import { useSelector } from 'react-redux';
import { Link, Outlet } from 'react-router-dom';

const Navbar = () => {
    const cartItems = useSelector((state) => state.cart.items);

    return (
        <div>
            <Link to={'/cart'}>Корзина: {cartItems.length}</Link>
            <Outlet />
        </div>
    );
};

export default Navbar;
