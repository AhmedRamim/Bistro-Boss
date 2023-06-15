import React from 'react';
import { Helmet } from 'react-helmet-async';
import Cover from '../../Shared/Cover/Cover';
import menuImg from '../../../assets/menu/banner3.jpg';
import dessertImg from '../../../assets/menu/dessert-bg.jpeg';
import pizzaImg from '../../../assets/menu/pizza-bg.jpg';
import soupImg from '../../../assets/menu/soup-bg.jpg';
import saladImg from '../../../assets/menu/salad-bg.jpg';
import MenuCategory from '../MenuCategory/MenuCategory';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import useMenu from '../../../hooks/useMenu';

const Menu = () => {
    const [menu] = useMenu()
    const desserts = menu.filter(dessert => dessert.category === 'dessert')
    const soup = menu.filter(dessert => dessert.category === 'soup')
    const pizza = menu.filter(dessert => dessert.category === 'pizza')
    const salad = menu.filter(dessert => dessert.category === 'salad')
    const offered = menu.filter(dessert => dessert.category === 'offered')
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Menu</title>
            </Helmet>

            <Cover menuImg={menuImg} height='600px' title={'Our menu'}></Cover>
            {/* main cover */}
            <SectionTitle SubHeading="-----Don't Miss-----" heading="Today's Offer"></SectionTitle>

            {/* offered menu items */}
            <div className='max-w-7xl mx-auto'>
                <MenuCategory items={offered}></MenuCategory>
                {/* desert menu item */}
                
                <MenuCategory title={'Dessert'} items={desserts} coverImg={dessertImg}></MenuCategory>
                {/* Pizza menu item */}
                
                <MenuCategory title={'Pizza'} items={pizza} coverImg={pizzaImg}></MenuCategory>
                {/* soup menu item */}
                
                <MenuCategory title={'Soup'} items={soup} coverImg={soupImg}></MenuCategory>
                {/* Salad menu item */}
                
                <MenuCategory title={'Salad'} items={salad} coverImg={saladImg}></MenuCategory>
            </div>

           
        </div>
    );
};

export default Menu;