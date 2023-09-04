import {IoArrowBack,IoArrowForward} from 'react-icons/io5';
import 'react-slideshow-image/dist/styles.css';
import { Slide } from 'react-slideshow-image';
import {TiTick} from 'react-icons/ti';
import {FaBed,FaBath} from 'react-icons/fa';
import Image from 'next/image';

export default function NewPropertyCard({property}){
    const properties = {
        prevArrow: <button aria-label='previousImage' className='rounded-full bg-white bg-opacity-30 p-1 ml-2'><IoArrowBack color="#effefe" fontSize={20}/></button>,
        nextArrow: <button aria-label='nextImage' className='rounded-full bg-white bg-opacity-30 p-1 mr-2'><IoArrowForward color="#effefe" fontSize={20}/></button>
    }
    return(
    <div className="w-full h-full rounded-lg bg-white shadow-radika flex flex-col items-center">
        <div className="relative w-full h-60 rounded-t-lg">
            <Slide cssClass='height:240px' {...properties} autoplay={false}>
                            {
                                property.photos.map((x,index)=><div key={index} className='relative w-full h-60'>
                                    <Image src={x} alt="slider" width={0} height={0} sizes='100vw' className={`w-full h-full rounded-t-lg object-cover`}/>
                                    <div className="w-full h-full absolute top-0 right-0 left-0 bottom-0 rounded-t-lg bg-searchbox_bg bg-opacity-30"/>
                                </div>)
                            }       
            </Slide>
            <span className="absolute right-5 bottom-5 text-white bg-white bg-opacity-10 rounded-3xl border-4 border-white border-opacity-20 px-3 py-0.5">{property.issell === true ? "فروش":"اجاره"}</span>
        </div>
        <div className='w-full px-5 py-3 flex flex-col items-start justify-start space-y-4'>
            <h3 className='font-bold flex flex-row items-center'>
                <a className='text-textColorH md:text-lg lg:text-xl'>{property.slug}</a>
                <span className='p-0.5 mr-1 bg-tickColor rounded-full'><TiTick color="#fff" fontSize={15}/></span>
            </h3>
            {
                property.issell === true ? 
                <span className='font-bold text-redTheme'>{property.price} تومان</span>:
                <div className='w-full flex flex-row justify-between items-center'>
                    <div className='flex flex-row items-center'>
                        <span>رهن:</span>
                        <span className='font-bold text-redTheme mr-1'>{property.deposit} تومان</span>
                    </div>
                    <div className='flex flex-row items-center'>
                        <span>اجاره:</span>
                        <span className='font-bold text-redTheme mr-1'>{property.rent} تومان</span>
                    </div>
                    
                    
                </div>
            }
            <div className='flex flex-row items-center text-textColorBase'>
                <div className='flex flex-row items-center'>
                    <FaBed color="#72809D" fontSize={25}/>
                    <span className='mr-2'>{property.rooms}</span>
                </div>
                {
                    /*
                    <div className='flex flex-row items-center mr-10'>
                    <FaBath color="#72809D" fontSize={20}/>
                    <span className='mr-2'>{property.facility.bath}</span>
                    </div>
                    */
                }
            </div>
        </div>
    </div>
    );
}