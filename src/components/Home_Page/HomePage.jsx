import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';

const Home = () => {
    return (
        <div className="content-wrapper">
            <div className="homepage">
                <div className="info-bar">
                    <span className="what-it-is">
                        Project Portfolio
                    </span>
                </div>
                <header className="header">
                    <div className="title-box">
                        <h1 className="magazine-title">CAT WOMAN</h1>
                        <div className="stacked-boxes">
                            <div className="box">Full-Stack</div>
                            <div className="box">Software</div>
                            <div className="box">Engineer</div>
                        </div>
                    </div>
                    <div className="media-container">
                        <div className="slatted-image">
                            <img
                                src="/assets/cat_woman.png"
                                alt="An image of person of interest."
                                className="image-strips"
                            />
                        </div>
                        <div className="nav-links">
                            <Link to="/">Project 1</Link>
                            <Link to="/projects">Project Deux</Link>
                            <Link to="/about">Most Amazing Project Ever</Link>
                            <Link to="/contact">Blog</Link>
                        </div>
                    </div>
                </header>

            </div>
        </div>
    );
};

export default Home;