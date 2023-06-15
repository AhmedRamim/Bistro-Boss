import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import BestProductCard from './BestProductCard';

const BestProducts = () => {
    const [menu, setMenu] = useState([])
    const [seeAll, setSeeAll] = useState(true)
    const products = seeAll ? menu.slice(0, 3) : menu
    useEffect(() => {
        fetch('menu.json')
            .then(res => res.json())
            .then(data => {
                const popularItems = data.filter(item => item.category === 'popular')
                setMenu(popularItems)
            })
    }, [])
    return (
        <div>
            <SectionTitle
                SubHeading={'---Should Try---'}
                heading={'CHEF RECOMMENDS'}
            ></SectionTitle>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
                {products.map(data => <BestProductCard title={'Add To Cart'} key={data._id} items={data} ></BestProductCard>)}
            </div>
            <div className='text-center my-12'>
                {
                    seeAll ? <button onClick={() => setSeeAll(false)} className='btn btn-warning text-white'>See All</button> : ''
                }
            </div>
        </div>
    );
};

export default BestProducts;