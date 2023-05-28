import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../pages/Shared/Footer/Footer';
import NavBar from '../pages/Shared/NavBar/NavBar';

const Main = () => {
    return (
        <div>
            <div className=' bg-black bg-opacity-30 fixed z-10 w-full'>
            <NavBar></NavBar>
            </div>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;