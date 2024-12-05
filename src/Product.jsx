import React from 'react';
import { Link } from 'react-router-dom';
import './styles/Product.css';

const Product = ({ products }) => {
    return (
        <div className="container mt-4">
            <div className="row">
                {products.map((product) => (
                    <div key={product.id} className="col-md-4 col-lg-3 mb-4">
                        <div className="card product-card">
                            <img src={product.image} alt={product.title} className="card-img-top product-image" />
                            <div className="card-body">
                                <h5 className="card-title">{product.title}</h5>
                                <p className="card-text">₹{product.price}</p>
                                <Link to={`/product/${product.id}`} className="btn btn-primary">
                                    View Details
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Product;
