import Image from "next/image";
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode,Pagination,Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import {TfiTwitter,TfiInstagram,TfiLinkedin,TfiFacebook} from "react-icons/tfi";
export default function OurTeamS(){

    return(
        <section className="w-full bg-detail_bg relative">
            <div className="w-full py-20 sm:container mx-auto flex flex-col px-4">
                <div className="w-full flex flex-col items-center mb-4">
                    <h2 className="text-textColorH text-3xl font-semibold">تیم ما</h2>
                </div>
                <div className="w-full">
                <Swiper
                style={{
                    "--swiper-pagination-color": "#ced0d6",
                    "--swiper-pagination-bullet-inactive-color": "#01295b",
                    "--swiper-pagination-bullet-inactive-opacity": "0.4",
                    "--swiper-pagination-bullet-size": "16px",
                    "--swiper-pagination-bullet-horizontal-gap": "6px",
                  }}
        slidesPerView={1}
        spaceBetween={30}
        autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          freeMode={true}
        pagination={{
          clickable: true,
        }}
        breakpoints={{640: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 30,
          },}}
        modules={[ Pagination,Autoplay,FreeMode]}
        className="mySwiper h-96"
      >
        <SwiperSlide>
            <div className="bg-white py-12 rounded-lg shadow-radika flex flex-col justify-center items-center">
                <Image src="/user-1.jpg" width={130} height={130} className="rounded-full"/>
                <div className="py-4 text-center">
                    <h4 className="text-textColorH font-semibold text-xl">بهمن نیازی</h4>
                    <span className="text-textColorBase">برنامه نویس</span>
                </div>
                <div className="w-5/6 mx-auto flex flex-row items-center justify-evenly">
                    <TfiLinkedin color="#0075b5" size={20}/>
                    <TfiInstagram color="#dd2a7b" size={20}/>
                    <TfiTwitter color="#1da1f2" size={20}/>
                    <TfiFacebook color="#4267B2" size={20}/>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="bg-white py-12 rounded-lg shadow-radika flex flex-col justify-center items-center">
                <Image src="/user-2.jpg" width={130} height={130} className="rounded-full"/>
                <div className="py-4 text-center">
                    <h4 className="text-textColorH font-semibold text-xl">پگاه سرافرازی</h4>
                    <span className="text-textColorBase">برنامه نویس</span>
                </div>
                <div className="w-5/6 mx-auto flex flex-row items-center justify-around">
                    <TfiLinkedin color="#0075b5" size={20}/>
                    <TfiInstagram color="#dd2a7b" size={20}/>
                    <TfiTwitter color="#1da1f2" size={20}/>
                    <TfiFacebook color="#4267B2" size={20}/>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="bg-white py-12 rounded-lg shadow-radika flex flex-col justify-center items-center">
                <Image src="/user-3.jpg" width={130} height={130} className="rounded-full"/>
                <div className="py-4 text-center">
                    <h4 className="text-textColorH font-semibold text-xl">محمد مرادی</h4>
                    <span className="text-textColorBase">برنامه نویس</span>
                </div>
                <div className="w-5/6 mx-auto flex flex-row items-center justify-around">
                    <TfiLinkedin color="#0075b5" size={20}/>
                    <TfiInstagram color="#dd2a7b" size={20}/>
                    <TfiTwitter color="#1da1f2" size={20}/>
                    <TfiFacebook color="#4267B2" size={20}/>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="bg-white py-12 rounded-lg shadow-radika flex flex-col justify-center items-center">
                <Image src="/user-1.jpg" width={130} height={130} className="rounded-full"/>
                <div className="py-4 text-center">
                    <h4 className="text-textColorH font-semibold text-xl">رضا اسدی</h4>
                    <span className="text-textColorBase">برنامه نویس</span>
                </div>
                <div className="w-5/6 mx-auto flex flex-row items-center justify-around">
                    <TfiLinkedin color="#0075b5" size={20}/>
                    <TfiInstagram color="#dd2a7b" size={20}/>
                    <TfiTwitter color="#1da1f2" size={20}/>
                    <TfiFacebook color="#4267B2" size={20}/>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="bg-white py-12 rounded-lg shadow-radika flex flex-col justify-center items-center">
                <Image src="/user-2.jpg" width={130} height={130} className="rounded-full"/>
                <div className="py-4 text-center">
                    <h4 className="text-textColorH font-semibold text-xl">زهرا کیانی</h4>
                    <span className="text-textColorBase">برنامه نویس</span>
                </div>
                <div className="w-5/6 mx-auto flex flex-row items-center justify-around">
                    <TfiLinkedin color="#0075b5" size={20}/>
                    <TfiInstagram color="#dd2a7b" size={20}/>
                    <TfiTwitter color="#1da1f2" size={20}/>
                    <TfiFacebook color="#4267B2" size={20}/>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="bg-white py-12 rounded-lg shadow-radika flex flex-col justify-center items-center">
                <Image src="/user-3.jpg" width={130} height={130} className="rounded-full"/>
                <div className="py-4 text-center">
                    <h4 className="text-textColorH font-semibold text-xl">بهروز جهانی</h4>
                    <span className="text-textColorBase">برنامه نویس</span>
                </div>
                <div className="w-5/6 mx-auto flex flex-row items-center justify-around">
                    <TfiLinkedin color="#0075b5" size={20}/>
                    <TfiInstagram color="#dd2a7b" size={20}/>
                    <TfiTwitter color="#1da1f2" size={20}/>
                    <TfiFacebook color="#4267B2" size={20}/>
                </div>
            </div>
        </SwiperSlide>
      </Swiper>
                </div>
            </div>
            <Image src="/pattern.png" alt="pattern of comment" width={0} height={0} sizes="100vw" className="absolute inset-0 w-full h-full object-cover"/>
        </section>
    );
}