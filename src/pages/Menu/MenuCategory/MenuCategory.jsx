import React from 'react';
import MenuItem from '../../Shared/MenuItem/MenuItem';
import Cover from '../../Shared/Cover/Cover';
import { Link } from 'react-router-dom';

const MenuCategory = ({ items, title, coverImg }) => {

    return (
        < >
            {title && <Cover menuImg={coverImg} height='600px' title={title}></Cover>
            }             <div className='grid  md:grid-cols-2 gap-10 md:my-20'>
                {items?.map(data => <MenuItem key={data._id} item={data}></MenuItem>)}
            </div>
            <div className="text-center">
            <Link to={`/order/${title}`}> <button className='btn btn-outline border-0 border-b-4 my-4'>Order Now</button></Link>
            </div>
        </>
    );
};

export default MenuCategory;