import React, { useContext, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';

const Header = () => {
    const {user ,logOut} = useContext(AuthContext);
    const [isActive , setIsActive] = useState(false);
    
    const handleToggleClass = () =>{
        setIsActive(!isActive);
    }

    const handleLogOut = () =>{
        logOut();
    }

   

    return (
        <div>
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
                                        <li>
                                            <NavLink to='/' activeClassName="active">Home</NavLink>
                                        </li>
                                        <li>
                                            <NavLink to='/about' activeClassName="active">About</NavLink>
                                        </li>
                                        <li>
                                            <NavLink to='/foods' activeClassName="active">All Foods</NavLink>
                                        </li>
                                        <li>
                                            <NavLink to='/404' activeClassName="active">Contact</NavLink>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="header-right-menu">
                                {
                                    user ?  
                                            <div className='login-user-profile-info'>
                                                <button onClick={handleToggleClass} className='user-img-btn'><img src={user?.photoURL} /></button>
                                                <ul className={isActive ? 'active' : ''} id="user-logout">
                                                    <li>
                                                        {user?.displayName} 
                                                        <span>{user?.email}</span>
                                                    </li>
                                                    <li>
                                                        <Link to="/dashboard/additem"> Dashboard </Link>
                                                    </li>
                                                    <li>
                                                        <button onClick={handleLogOut} className='boxed-btn logout-btn'>logout</button>
                                                    </li>
                                                </ul>
                                            </div>
                                        : 

                                        <ul>
                                            <li><Link to="/login">Login</Link></li>
                                            <li><Link to="/registration">Sign Up</Link></li>
                                            
                                        </ul>
                                }
                               
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    );
};

export default Header;