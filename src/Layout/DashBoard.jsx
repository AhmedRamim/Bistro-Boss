import React from 'react';
import { Helmet } from 'react-helmet-async';
import { FaBook, FaCalendarAlt, FaHamburger, FaHome, FaPizzaSlice, FaShoppingCart, FaUser, FaUtensilSpoon, FaUtensils, FaWallet } from 'react-icons/fa';
import { NavLink, Outlet } from 'react-router-dom';
import useCart from '../hooks/useCarts';
import useAdmin from '../hooks/useAdmin';

const DashBoard = () => {
    const [cart] = useCart()
    // TODO: load data on the server have dynamic on the database
    // const isAdmin = true;
    const [isAdmin] = useAdmin()



    return (

        <div className="drawer  lg:drawer-mobile">
            <Helmet>
                <title>DashBoard | Bistro Boss</title>
            </Helmet>
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content mx-auto md:w-[900px] ">
                {/* Page content here */}
                <Outlet />
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

            </div>
            <div className="drawer-side ">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 h-full bg-rose-300">
                    {/* Sidebar content here */}
                    {
                        isAdmin ? <>
                            <li><NavLink to={'/dashboard/home'}><FaHome /> Admin Home </NavLink></li>
                            <li><NavLink to={'/dashboard/reservation'}><FaUtensils/> Reservation </NavLink></li>
                            <li><NavLink to={'/dashboard/additem'}><FaWallet /> Add Items</NavLink></li>
                            <li><NavLink to={'/dashboard/paymentHistory'}><FaBook/> Manage Bookings</NavLink></li>
                            <li><NavLink to={'/dashboard/allusers'}><FaUser/> All Users</NavLink></li>
                            
                        </> : <>
                            <li><NavLink to={'/dashboard/home'}><FaHome /> User Home </NavLink></li>
                            <li><NavLink to={'/dashboard/reservation'}><FaCalendarAlt /> Reservation </NavLink></li>
                            <li><NavLink to={'/dashboard/paymentHistory'}><FaWallet /> Payment History</NavLink></li>
                            <li><NavLink to={'/dashboard/mycart'}><FaShoppingCart /> <span className='ml-3'>My Cart</span> <div className="absolute top-0 left-10 inline"><span className='text-white'>{cart?.length || 0}</span></div></NavLink></li>
                        </>
                    }

                    <div className="divider"></div>
                    <li className='hover:text-orange-500 transition-all duration-100'><NavLink to={'/'}><FaHome /> Home</NavLink></li>
                    <li className='hover:text-orange-500 transition-all duration-100'><NavLink to={'/menu'}><FaHamburger /> Our Menu</NavLink></li>
                    <li className='hover:text-orange-500 transition-all duration-100'><NavLink to={'/Order/Salad'}><FaPizzaSlice /> Order Food</NavLink></li>
                </ul>

            </div>
        </div>

    );
};

export default DashBoard;