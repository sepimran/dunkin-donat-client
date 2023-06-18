import React from 'react';
import DashboardLeftMenu from '../Shared/DashboardLeftMenu/DashboardLeftMenu';

const AddItem = () => {
    return (
        <div>
            <div className="dashboard-area">
                <DashboardLeftMenu></DashboardLeftMenu>
                <div className="dashboard-right-area">
                    <h1>Right</h1>
                </div>
            </div>
        </div>
    );
};

export default AddItem;