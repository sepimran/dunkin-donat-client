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
                    <li><Link to="/additem"> <FontAwesomeIcon icon={faPlus} /> Add Food</Link></li>
                    <li><Link to="/foods"><FontAwesomeIcon icon={faEye} /> All Foods</Link></li>
                </ul>
            </div>

            <div className="dashboard-bottom-menu">
                <ul>
                    <li><Link to="/"> <FontAwesomeIcon icon={faHome} /> Home</Link></li>
                    <li><Link to="/about"><FontAwesomeIcon icon={faInfo} />  About</Link></li>
                    <li><Link to="/404"><FontAwesomeIcon icon={faHeadphones} />  Contact</Link></li>
                </ul>
            </div>

            <div className="account-menu-area">
                <Link><button className='account-setting-btn'><span><FontAwesomeIcon icon={faUser} /></span> My Account</button> </Link>
            </div>
        </div>
    );
};

export default DashboardLeftMenu;