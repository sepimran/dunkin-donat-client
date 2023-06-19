import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus , faEye , faHome , faInfo ,faHeadphones ,faUser} from '@fortawesome/free-solid-svg-icons'

const DashboardLeftMenu = () => {
    return (
        <div className='dashboard-left-menu-area'>
            <div className="logo">
                <Link to="/"><img src="/logo.png" alt="" /></Link>
            </div>

            <div className="dashboard-menu">
                <ul>
                    <li><Link to="/dashboard/additem"> <span><FontAwesomeIcon icon={faPlus} /></span> Add Food</Link></li>
                    <li><Link to="/foods"><span><FontAwesomeIcon icon={faEye} /></span> All Foods</Link></li>
                </ul>
            </div>

            <div className="dashboard-bottom-menu">
                <ul>
                    <li><Link to="/"> <span><FontAwesomeIcon icon={faHome} /></span> Home</Link></li>
                    <li><Link to="/about"><span><FontAwesomeIcon icon={faInfo} /> </span> About</Link></li>
                    <li><Link to="/404"><span><FontAwesomeIcon icon={faHeadphones} /></span>  Contact</Link></li>
                </ul>
            </div>

            <div className="account-menu-area">
                <Link><button className='account-setting-btn'><span><FontAwesomeIcon icon={faUser} /></span> My Account</button> </Link>
            </div>
        </div>
    );
};

export default DashboardLeftMenu;