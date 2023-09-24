import {RxShuffle} from 'react-icons/rx';
import {TfiPrinter} from 'react-icons/tfi';
import {CiShare1} from 'react-icons/ci';
import {AiOutlinePhone} from 'react-icons/ai';
import Image from 'next/image';
import Link from 'next/link';

export default function AdvisorMessage(){
    return(
        <div className='w-full'>
            <div className="w-full flex flex-row items-center justify-start mb-4">
                <div className='flex flex-col justify-center items-center bg-detailSymbols w-10 h-10 rounded-sm ml-2'>
                    <CiShare1 className='social-icons w-5 h-5 cursor-pointer'/>
                </div>
                <div className='flex flex-col justify-center items-center bg-detailSymbols w-10 h-10 rounded-sm ml-2'>
                    <TfiPrinter className='social-icons w-5 h-5 cursor-pointer'/>
                </div>
                <div className='flex flex-col justify-center items-center bg-detailSymbols w-10 h-10 rounded-sm ml-2'>
                    <RxShuffle className="social-icons w-5 h-5 cursor-pointer"/>
                </div>
                <div className='flex flex-col justify-center items-center bg-detailSymbols w-10 h-10 rounded-sm ml-2'>
                    <span className='text-red-600 text-2xl cursor-pointer'>❤</span>
                </div>
            </div>
            <div className="w-full bg-white rounded border border-detailBorder text-nearbyText p-8">
                <div className='flex flex-row items-center mb-8'>
                    <div className='flex flex-col items-center justify-center w-24'>
                        <Image src="/user-1.jpg" alt="user 1" width={80} height={80} className="rounded-full"/>
                    </div>
                    <div className='flex flex-col items-start mr-8 -translate-y-4'>
                        <h3 className='text-topHeader text-xl font-semibold mb-1'>علی اکبر قهرمانی</h3>
                        <div className='flex flex-row items-center'>
                            <AiOutlinePhone color='#2caf31' className='w-6 h-6'/>
                            <Link href='tel:09187116041' className='text-advisorPhone'>09187116041</Link>
                        </div>
                    </div>
                </div>
                <input type="text" placeholder="ایمیل" className="w-full h-14 border border-inputBorder focus:border-sky-400 text-inputText px-3 py-2 transition-all duration-150 ease-in-out outline-none mb-4"/>
                <input type="text" placeholder="تلفن" className="w-full h-14 border border-inputBorder focus:border-sky-400 text-inputText px-3 py-2 transition-all duration-150 ease-in-out outline-none mb-4"/>
                <textarea name="review" id="review" placeholder="دیدگاه شما" rows="8" className="w-full border border-inputBorder focus:border-sky-400 text-inputText px-3 py-2 transition-all duration-150 ease-in-out outline-none"/>
                <button className="w-full h-12 bg-greenTheme rounded text-center text-white mt-2">ارسال</button>
            </div>
        </div>
    );
}