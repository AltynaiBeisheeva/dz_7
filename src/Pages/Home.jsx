
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ProductList from '../components/ProductList';
import { setProducts } from '../store/productsSlice';
import axios from 'axios';

const Home = () => {
    const dispatch = useDispatch();
    const { items } = useSelector((state) => state.products);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get('https://dummyjson.com/products');
                const data = response.data;
                console.log(data);
                dispatch(setProducts(data.products));
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        fetchProducts();
    }, [dispatch]);

    return <ProductList products={items} />;
};

export default Home;
