import React from 'react';
import { Link } from 'react-router-dom';

const DashboardLeftMenu = () => {
    return (
        <div className='dashboard-left-menu-area'>
            <div className="logo">
                <Link><img src="/logo.png" alt="" /></Link>
            </div>

            <div className="dashboard-menu">
                <ul>
                    <li><Link to="/additem">Add Food</Link></li>
                    <li><Link to="/foods">All Foods</Link></li>
                </ul>
            </div>

            <div className="dashboard-botom-menu">
                <ul>
                    <li><Link to="/additem">Add Food</Link></li>
                    <li><Link to="/foods">All Foods</Link></li>
                </ul>
            </div>
        </div>
    );
};

export default DashboardLeftMenu;