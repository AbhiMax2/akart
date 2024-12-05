import React from 'react';
import { useParams } from 'react-router-dom';
import './styles/ProductDetails.css';

const ProductDetails = ({ products }) => {
    const { id } = useParams();
    const product = products.find((p) => p.id === parseInt(id));

    if (!product) {
        return <div className="container mt-4">Product not found!</div>;
    }

    return (
        <div className="container mt-4 product-details">
            <div className="row">
                <div className="col-md-6 d-flex justify-content-center align-items-center">
                    <div className="product-image-container">
                        <img src={product.image} alt={product.title} />
                    </div>
                </div>
                <div className="col-md-6">
                    <h2>{product.title}</h2>
                    <p><strong>Price:</strong> ₹{product.price}</p>
                    <p><strong>Description:</strong> {product.description}</p>
                    <p><strong>Category:</strong> {product.category}</p>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;
