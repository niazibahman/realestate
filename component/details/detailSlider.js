import { FiArrowRight,FiArrowLeft } from 'react-icons/fi';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import { EffectFade,FreeMode, Navigation, Thumbs } from 'swiper/modules';
import { useState } from "react";
import Image from 'next/image';

export default function DetailSlider({photos,slug}){
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    return(
    <div className="w-full flex flex-col"> 
        <div className='w-full h-0 pt-3/4 relative'>
            <div className='absolute top-0 w-full h-full'>
            <Swiper style={{
              '--swiper-navigation-color': '#fff',
              '--swiper-pagination-color': '#fff',direction:'rtl'
              }}  loop={true} spaceBetween={0} effect={'fade'} navigation={false} thumbs={{ swiper:  thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }} modules={[EffectFade , Thumbs]} className="mySwiper h-5/6">
                {
                    photos.map((x,index)=><SwiperSlide key={index}>
                        <Image src={x} alt={slug} width={0} height={0} sizes='100vw' className={`w-full h-full object-cover`} />
                    </SwiperSlide>)
                }
            </Swiper>
            <Swiper style={{direction:'rtl'}} onSwiper={setThumbsSwiper} loop={true} spaceBetween={0} centeredSlides={true} pagination={true} slidesPerView={2} freeMode={true} watchSlidesProgress={true} modules={[FreeMode, Navigation, Thumbs]} className="mySwiper h-1/6"
                navigation={{
                    prevEl:'.previose1',
                    nextEl:'.next1',
                    enabled:true
                }}>
                <div className='previose1 absolute right-0 inset-y-0 z-50 flex flex-col justify-center'>
                    <button className="w-6 sm:w-8 md:w-10 h-6 sm:h-8 md:h-10 rounded-l-sm bg-white bg-opacity-50 flex flex-col justify-center items-center"><FiArrowRight color='#fff'/></button>
                </div>
                <div className='next1 absolute left-0 inset-y-0 z-50 flex flex-col justify-center'>
                    <button className="w-6 sm:w-8 md:w-10 h-6 sm:h-8 md:h-10 rounded-r-sm bg-white bg-opacity-50 flex flex-col justify-center items-center"><FiArrowLeft color='#fff'/></button>
                </div>
                {
                    photos.map((x,index)=><SwiperSlide key={index}>
                        <Image src={x} alt={slug} width={0} height={0} sizes='100vw' className={`w-full h-full object-cover`} />
                    </SwiperSlide>)
                }
            </Swiper>
            </div>
        </div>
    </div>
    );
}