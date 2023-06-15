import React from 'react';

const MenuItem = ({item}) => {
    const {name,image,price,recipe} = item;
    return (
        <div className='flex space-x-4 items-center'>
            <img style={{borderRadius:'0px 200px 200px 200px'}} className='w-[100px] ' src={image} alt="" />
            <div>
                <h1 className='uppercase'>{name}-----------</h1>
                <h4>{recipe}</h4>
            </div>
            <p className='text-yellow-500'> {'$'+price}</p>
        </div>
    );
};

export default MenuItem;