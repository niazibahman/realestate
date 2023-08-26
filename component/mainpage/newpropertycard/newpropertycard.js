import {IoArrowBack,IoArrowForward} from 'react-icons/io5';
import 'react-slideshow-image/dist/styles.css';
import { Slide } from 'react-slideshow-image';
import {TiTick} from 'react-icons/ti';
import {FaBed,FaBath} from 'react-icons/fa';

export default function NewPropertyCard(props){
    const properties = {
        prevArrow: <button className='rounded-full bg-white bg-opacity-30 p-1 ml-2'><IoArrowBack color="#effefe" fontSize={20}/></button>,
        nextArrow: <button className='rounded-full bg-white bg-opacity-30 p-1 mr-2'><IoArrowForward color="#effefe" fontSize={20}/></button>
    }
    return(
    <div className="w-full h-full rounded-lg bg-white shadow-radika flex flex-col items-center">
        <div className="relative w-full h-60 rounded-t-lg">
            <Slide cssClass='height:240px' {...properties} autoplay={false}>
                            {
                                props.image.map((x,index)=><div className='relative w-full h-60'>
                                    <img src={x} alt="slider" className={`w-full h-full rounded-t-lg object-cover`}/>
                                    <div className="w-full h-full absolute top-0 right-0 left-0 bottom-0 rounded-t-lg bg-searchbox_bg bg-opacity-30"/>
                                </div>)
                            }       
            </Slide>
            <span className="absolute right-5 bottom-5 text-white bg-white bg-opacity-10 rounded-3xl border-4 border-white border-opacity-20 px-3 py-0.5">فروش</span>
        </div>
        <div className='w-full px-5 py-3 flex flex-col items-start justify-start space-y-4'>
            <h4 className='font-bold flex flex-row items-center'>
                <a className='text-textColorH md:text-lg lg:text-xl'>{props.title}</a>
                <span className='p-0.5 mr-1 bg-tickColor rounded-full'><TiTick color="#fff" fontSize={15}/></span>
            </h4>
            <span className='font-bold text-redTheme'>{props.price} تومان</span>
            <div className='flex flex-row items-center text-textColorBase'>
                <div className='flex flex-row items-center'>
                    <FaBed color="#72809D" fontSize={25}/>
                    <span className='mr-2'>2</span>
                </div>
                <div className='flex flex-row items-center mr-10'>
                    <FaBath color="#72809D" fontSize={20}/>
                    <span className='mr-2'>3</span>
                </div>
            </div>
        </div>
    </div>
    );
}