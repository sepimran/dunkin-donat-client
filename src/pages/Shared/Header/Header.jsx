import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <div className="header-top-area">

            </div>
            <header className='header-area' id='header-area'>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-3">
                            <div className="logo-area">
                                <Link to="/">
                                    <img src="/logo.png" alt="Dunkin Donat" />
                                </Link>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="navigation-area">
                                <nav>                    
                                    <ul>
                                        <li className='active'><Link to="/">Home</Link></li>
                                        <li><Link to="/about">About</Link></li>
                                        <li><Link to="/foods">All Foods</Link></li>
                                        <li><Link to="/404">Contact</Link></li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="header-right-menu">
                                <ul>
                                    <li><Link to="/login">Login</Link></li>
                                    <li><Link to="/registration">Sign Up</Link></li>
                                    
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    );
};

export default Header;