import {RxShuffle} from 'react-icons/rx';
import {TfiPrinter} from 'react-icons/tfi';
import {CiShare1} from 'react-icons/ci'

export default function AdvisorMessage(){
    return(
        <div className='w-full'>
            <div className="w-full flex flex-row items-center justify-start mb-4">
                <div className='flex flex-col justify-center items-center bg-detailSymbols w-10 h-10 rounded-sm ml-2'>
                    <CiShare1 className='social-icons w-5 h-5'/>
                </div>
                <div className='flex flex-col justify-center items-center bg-detailSymbols w-10 h-10 rounded-sm ml-2'>
                    <TfiPrinter className='social-icons w-5 h-5'/>
                </div>
                <div className='flex flex-col justify-center items-center bg-detailSymbols w-10 h-10 rounded-sm ml-2'>
                    <RxShuffle className="social-icons w-5 h-5"/>
                </div>
                <div className='flex flex-col justify-center items-center bg-detailSymbols w-10 h-10 rounded-sm ml-2'>
                    <span className='text-red-600 text-2xl'>❤</span>
                </div>
            </div>
            <div className="w-full bg-white rounded border border-detailBorder text-nearbyText px-10 pb-10 pt-4"></div>
        </div>
    );
}