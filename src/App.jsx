import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Header';
import Product from './Product';
import ProductDetails from './ProductDetails'; 
import axios from 'axios';
import './styles/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


const App = () => {
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [search, setSearch] = useState("");

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get('https://fakestoreapi.com/products');
                setProducts(response.data);
                setFilteredProducts(response.data);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching products:", error);
                setLoading(false);
            }
        };
        fetchProducts();
    }, []);

    const handleSearch = (event) => {
        const keyword = event.target.value.toLowerCase();
        setSearch(keyword);
        const filtered = products.filter((product) =>
            product.title.toLowerCase().includes(keyword)
        );
        setFilteredProducts(filtered);
    };

    if (loading) {
        return <div className="loading">Loading products from Store...</div>;
    }

    return (
        <Router>
            <Header search={search} handleSearch={handleSearch} />
            <Routes>
                <Route path="/" element={<Product products={filteredProducts} />} />
                <Route path="/product/:id" element={<ProductDetails products={products} />} />
            </Routes>
        </Router>
    );
};

export default App;
