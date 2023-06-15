import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import { Swiper, SwiperSlide } from "swiper/react";
import { FaBeer, FaQuoteLeft } from "react-icons/fa"
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper";
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css'

const Testomonial = () => {
    const [reviews, setReviews] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (
        <div className='my-40'>
            <SectionTitle
                SubHeading={'----Testimonial----'}
                heading={'What Our Client Say'}
            ></SectionTitle>
            <div>
                <>
                    <Swiper
                        navigation={true}
                        autoplay
                        modules={[Navigation, Autoplay]} className="mySwiper">

                        {
                            reviews.map(review => <SwiperSlide key={review._id}>
                                <div className='flex text-center space-y-3 flex-col items-center m-24'>
                                    <div className='mb-2'>
                                        <Rating
                                            style={{ maxWidth: 180 }}
                                            value={review.rating}
                                            readOnly
                                        />
                                    </div>
                                    <div className='py-3'>
                                        <FaQuoteLeft className='text-6xl'></FaQuoteLeft>
                                    </div>
                                    <p>{review.details}</p>
                                    <h3 className="text-3xl text-orange-500">
                                        {review.name}
                                    </h3>
                                </div>

                            </SwiperSlide>)
                        }

                    </Swiper>
                </>
            </div>
        </div>
    );
};

export default Testomonial;