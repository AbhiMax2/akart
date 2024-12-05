import React from 'react';
import { Link } from 'react-router-dom';
import './styles/Header.css';

const Header = ({ search, handleSearch }) => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
            <div className="container">
                <Link className="navbar-brand" to="/">
                    aKART
                </Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">
                                Home
                            </Link>
                        </li>
                    </ul>
                    <form className="d-flex">
                        <input
                            className="form-control me-2"
                            type="search"
                            placeholder="Search products"
                            aria-label="Search"
                            value={search}
                            onChange={handleSearch}
                        />
                    </form>
                </div>
            </div>
        </nav>
    );
};

export default Header;
