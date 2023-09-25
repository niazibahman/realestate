import Link from 'next/link';
import {AiOutlineHome} from 'react-icons/ai';
import {TfiEmail,TfiMobile} from 'react-icons/tfi';

export default function ContactBridge(){
    return(
        <div className="col-span-1 md:col-span-5 px-4 flex flex-col">
            <h2 className="text-3xl text-textColorH font-semibold mb-2">ارتباط با ما</h2>
            <p className="mb-3 text-textColorBase">از طریق راه های زیر می توانید با ما در ارتباط باشید</p>
            <div className="w-full mb-6 flex flex-row items-center text-textColorBase">
                <div className='h-full flex flex-col items-center justify-center'>
                    <AiOutlineHome color='#00ba74' size={42}/>
                </div>
                <div className='flex flex-col mr-3'>
                    <h3 className='text-textColorH font-semibold mb-1'>آدرس</h3>
                    <address>ایران، همدان</address>
                </div>
            </div>
            <div className="w-full mb-6 flex flex-row items-center">
                <div className='h-full flex flex-col items-center justify-center'>
                    <TfiEmail color='#00ba74' size={42}/>
                </div>
                <div className='flex flex-col mr-3'>
                    <h3 className='text-textColorH font-semibold mb-1'>ایمیل</h3>
                    <Link href="mail:bahman.n.1992@gmail.com">bahman.n.1992@gmail.com</Link>
                </div>
            </div>
            <div className="w-full mb-6 flex flex-row items-center">
                <div className='h-full flex flex-col items-center justify-center'>
                    <TfiMobile color='#00ba74' size={42}/>
                </div>
                <div className='flex flex-col mr-3'>
                    <h3 className='text-textColorH font-semibold mb-1'>تلفن</h3>
                    <Link href="tel:09187116041">09187116041</Link>
                </div>
            </div>
        </div>
    );
}