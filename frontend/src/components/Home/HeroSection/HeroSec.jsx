import React from 'react'
import './HeroSec.css'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


// import { Navigation } from "swiper";

const HeroSec = () => {
    return (
        <>
            
            <Swiper
                // install Swiper modules
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={50}
                slidesPerView={1}
                navigation
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
            >
                <SwiperSlide><img className='herosec-img' src="https://preview.colorlib.com/theme/course/images/slider_background.jpg.webp" alt="" /></SwiperSlide>
                <SwiperSlide><img className='herosec-img' src="https://preview.colorlib.com/theme/course/images/slider_background.jpg.webp" alt="" /></SwiperSlide>
                <SwiperSlide><img className='herosec-img' src="https://preview.colorlib.com/theme/course/images/slider_background.jpg.webp" alt="" /></SwiperSlide>
                <SwiperSlide><img className='herosec-img' src="https://preview.colorlib.com/theme/course/images/slider_background.jpg.webp" alt="" /></SwiperSlide>
               
            </Swiper>

        </>
    )
}

export default HeroSec