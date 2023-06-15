import React from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import feature from '../../../assets/home/featured.jpg';
const Feature = () => {
    return (
        <div className="h-[800px] bg-fixed bg-cover my-36" style={{ backgroundImage: `url(${feature})` }}>
            <div className='bg-black h-full bg-opacity-40'>
                <div className='max-w-7xl mx-auto text-white'>
                    <div>
                        <SectionTitle
                            SubHeading={'---Check it out---'}
                            heading={'Features Item'}
                        ></SectionTitle>
                    </div>
                    <div className='md:flex justify-center items-center  py-8 px-16'>
                        <div>
                            <img src={feature} alt="" />
                        </div>
                        <div className='md:ml-12 space-y-4'>
                            <p>Aug 23, 2023</p>
                            <p className='text-xl'>WHERE CAN I GET SOME?</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
                            <button className="btn btn-outline btn-warning text-white border-0 border-b-4 ">Order Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Feature;