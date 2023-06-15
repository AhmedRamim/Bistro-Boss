import React from 'react';
import Banner from '../Banner/Banner';
import Category from '../Category/Category';
import PopularMenu from '../PopularMenu/PopularMenu';
import BestProducts from '../BestProducts/BestProducts';
import Feature from '../Feature/Feature';
import Testomonial from '../Testomonial/Testomonial';
import { Helmet } from 'react-helmet-async';



const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro Boss Restaurant</title>
            </Helmet>
            <Banner></Banner>
            <div className='max-w-7xl mx-auto'>
                <Category></Category>
                <PopularMenu></PopularMenu>
                <BestProducts></BestProducts>
            </div>
            <Feature></Feature>
            <div className='max-w-7xl mx-auto'>
            <Testomonial></Testomonial>
            </div>
        </div>
    );
};

export default Home;