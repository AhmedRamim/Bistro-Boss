import React from 'react';
import Banner from '../Banner/Banner';
import Category from '../Category/Category';
import PopularMenu from '../PopularMenu/PopularMenu';



const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <div className='max-w-7xl mx-auto'>
                <Category></Category>
                <PopularMenu></PopularMenu>
            </div>
        </div>
    );
};

export default Home;