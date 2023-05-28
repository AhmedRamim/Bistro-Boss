import React from 'react';

const SectionTitle = ({SubHeading,heading}) => {
    return (
        <div className='text-center space-y-4 my-20'>
            <h1 className='text-orange-400'>{SubHeading}</h1>
            <h1 className='border-y-4 uppercase text-5xl   inline-block py-4 px-16 border-gray-400-500'>{heading}</h1>
        </div>
    );
};

export default SectionTitle;