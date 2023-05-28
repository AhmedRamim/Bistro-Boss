import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import slider1 from '../../../../src/assets/home/01.jpg'
import slider2 from '../../../../src/assets/home/02.jpg'
import slider3 from '../../../../src/assets/home/03.png'
import slider4 from '../../../../src/assets/home/04.jpg'
import slider5 from '../../../../src/assets/home/05.png'

const Banner = () => {
    return (
        <div>
            <Carousel autoPlay className=' text-center'>
                <div>
                    <img  src={slider1} />
                </div>
                <div>
                    <img  src={slider2} />
                </div>
                <div>
                    <img  src={slider3} />
                </div>
                <div>
                    <img  src={slider4} />
                </div>
                <div>
                    <img  src={slider5} />
                </div>
                
            </Carousel>
        </div>
    );
};

export default Banner;