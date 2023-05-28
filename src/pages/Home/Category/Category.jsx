import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper";

import slide1 from '../../../assets/home/slide1.jpg'
import slide2 from '../../../assets/home/slide2.jpg'
import slide3 from '../../../assets/home/slide3.jpg'
import slide4 from '../../../assets/home/slide4.jpg'
import slide5 from '../../../assets/home/slide5.jpg'
import moduleName from '../../../assets/home/chef-service.jpg';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';

const Category = () => {
    return (
        <div className='my-20'>
            <SectionTitle
            SubHeading={'---From 11:00am to 10:00pm---'}
            heading={'Online Order'}
            ></SectionTitle>
            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                autoplay
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination,Autoplay]}
                className="mySwiper mb-24"
            >
                <SwiperSlide>
                    <img className='h-[400px]' src={slide1} alt="" />
                    <h3 className='text-white font-bold text-center -mt-16 text-4xl mr-12 uppercase'>Salads</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img className='h-[400px]' src={slide2} alt="" />
                    <h3 className='text-white font-bold text-center -mt-16 text-4xl mr-12 uppercase'>Soups</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img className='h-[400px]' src={slide3} alt="" />
                    <h3 className='text-white font-bold text-center -mt-16 text-4xl mr-12 uppercase'>Pizzas</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img className='h-[400px]' src={slide4} alt="" />
                    <h3 className='text-white font-bold text-center -mt-16 text-4xl mr-12 uppercase'>Desserts</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img className='h-[400px]' src={slide5} alt="" />
                    <h3 className='text-white font-bold text-center -mt-16 text-4xl mr-12 uppercase'>Salads</h3>
                </SwiperSlide>

            </Swiper>
            <div className="bg-cover bg-center h-[578px] flex items-center justify-center" style={{ backgroundImage: `url(${moduleName})` }}>
                <div className='h-[335px] bg-white w-3/4 flex flex-col items-center justify-center rounded-lg space-y-6'>
                    <h1 className='text-5xl font-thin text-center'>Bistro Boss</h1>
                    <p className='text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus laborum deserunt ratione dolor officiis praesentium! Deserunt magni aperiam dolor eius dolore at, nihil iusto ducimus incidunt quibusdam nemo.</p>
                </div>
            </div>

        </div>
    );
};

export default Category;