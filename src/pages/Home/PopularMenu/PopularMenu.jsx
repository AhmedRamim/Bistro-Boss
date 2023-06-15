import React from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import MenuItem from '../../Shared/MenuItem/MenuItem';
import useMenu from '../../../hooks/useMenu';

const PopularMenu = () => {
    const [menu,loading] = useMenu()
    const popular = menu.filter(item => item.category === 'popular')

    return (
        <section className='my-44'>
            <SectionTitle
                SubHeading={'---Popular Items---'}
                heading={'FROM OUR MENU'}
            ></SectionTitle>
            <div className='grid  md:grid-cols-2 gap-10'>
                {popular.map(data => <MenuItem key={data._id} item={data}></MenuItem>)}
            </div>
        </section>
    );
};

export default PopularMenu;