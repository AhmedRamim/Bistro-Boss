import React, { useState } from 'react';
import orderImg from '../../../assets/shop/banner2.jpg';
import Cover from '../../Shared/Cover/Cover';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenu from '../../../hooks/useMenu';
import BestProductCard from '../../Home/BestProducts/BestProductCard';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const Order = () => {
    const categories= ['Salad','Pizza','Soup','Desserts','Drinks']
    const {category} = useParams()
    const initialIndex = categories.indexOf(category)
    const [tabIndex, setTabIndex] = useState(initialIndex);
    const [menu] = useMenu()
    const desserts = menu.filter(dessert => dessert.category === 'dessert')
    const soup = menu.filter(dessert => dessert.category === 'soup')
    const pizza = menu.filter(dessert => dessert.category === 'pizza')
    const salad = menu.filter(dessert => dessert.category === 'salad')
    const drinks = menu.filter(dessert => dessert.category === 'drinks')
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Order Food</title>
            </Helmet>
            <Cover menuImg={orderImg} height='600px' title={'Order Food'}></Cover>
            <div className='max-w-7xl mx-auto'>
                <Tabs className='text-center my-20' selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                    <TabList>
                        <Tab>Salad</Tab>
                        <Tab>Pizza</Tab>
                        <Tab>Soup</Tab>
                        <Tab>Desserts</Tab>
                        <Tab>Drink</Tab>
                    </TabList>
                    <TabPanel>
                        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
                            {
                                salad.map(item => <BestProductCard title={"Add to Cart"}
                                    key={item._id}
                                    items={item}
                                ></BestProductCard>)
                            }
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
                            {
                                pizza.map(item => <BestProductCard title={"Order"}
                                    key={item._id}
                                    items={item}
                                ></BestProductCard>)
                            }
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
                            {
                                soup.map(item => <BestProductCard title={"Order"}
                                    key={item._id}
                                    items={item}
                                ></BestProductCard>)
                            }
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
                            {
                                desserts.map(item => <BestProductCard title={"Order"}
                                    key={item._id}
                                    items={item}
                                ></BestProductCard>)
                            }
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
                            {
                                drinks.map(item => <BestProductCard title={"Order"}
                                    key={item._id}
                                    items={item}
                                ></BestProductCard>)
                            }
                        </div>
                    </TabPanel>
                </Tabs>
                
            </div>
        </div>
    );
};

export default Order;