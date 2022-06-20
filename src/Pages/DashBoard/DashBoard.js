import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const DashBoard = () => {
    return (
        <div className="drawer drawer-mobile">
            <input id="dashboard-sidebar" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col">
                {/* <!-- Page content here --> */}
                <h2 className='text-3xl text-purple-500 font-bold  mb-[15px]'>Welcome to my Dashboard</h2>
                <Outlet />
            </div>
            <div className="drawer-side">
                <label htmlFor="dashboard-sidebar" className="drawer-overlay"></label>
                <ul className="menu p-4 overflow-y-auto w-48 bg-base-100 text-base-content">
                    {/* <!-- Sidebar content here --> */}
                    <li><Link to='/dashboard' >My Appointments</Link></li>
                    <li><Link to='/dashboard/reviews'>My Reviews</Link></li>
                    <li><Link to='/dashboard/history'>My History</Link></li>
                    <li><Link to='/dashboard/users'>All Users</Link></li>
                </ul>

            </div>
        </div>
    );
};

export default DashBoard;