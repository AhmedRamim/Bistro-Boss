import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../pages/Shared/Footer/Footer';
import NavBar from '../pages/Shared/NavBar/NavBar';

const Main = () => {
    const location = useLocation()
    const isHeaderFooter = location.pathname.includes('login')
    return (
        <div>
            <div className=' bg-black bg-opacity-30 fixed z-10 w-full'>
            {isHeaderFooter ||<NavBar></NavBar>}
            </div>
            <Outlet></Outlet>
            {isHeaderFooter ||<Footer></Footer>}
        </div>
    );
};

export default Main;