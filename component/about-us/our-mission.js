import Image from "next/image";
import {CiLock} from "react-icons/ci";
import {TfiTwitter} from "react-icons/tfi";
import {HiOutlineDuplicate} from "react-icons/hi"

export default function OurMission(){
    return(
        <section className="w-full bg-white">
            <div className="w-full py-20 sm:container mx-auto grid grid-cols-1 md:grid-cols-2 gap-0">
                <div className="col-span-full flex flex-col items-center justify-center">
                    <h2 className="text-textColorH text-3xl font-semibold">اهداف ما</h2>
                </div>
                <div className="col-span-1 px-4 flex flex-col justify-center">
                    <div className="w-full mt-5 px-8 py-5 rounded-md shadow-radika flex flex-row items-center">
                        <CiLock color='#00ba74' size={55}/>
                        <div className="w-full flex flex-col pt-3 pr-4 text-textColorBase">
                            <h3 className="text-textColorH text-xl font-semibold text-right mb-1">کاملا امن و پشتبانی 24 ساعته</h3>
                            <p className="mb-2">هدف ما ارائه خدمات امن و پشتیبانی 24 است.</p>
                        </div>
                    </div>
                    <div className="w-full mt-5 px-8 py-5 rounded-md shadow-radika flex flex-row items-center">
                        <TfiTwitter color='#00ba74' size={55}/>
                        <div className="w-full flex flex-col pt-3 pr-4 text-textColorBase">
                            <h3 className="text-textColorH text-xl font-semibold text-right mb-1">ما را در شبکه های اجتماعی دنبال کنید</h3>
                            <p className="mb-2">آخرین اخبار ما را از شبکه های اجتماعی دنبال کنید.</p>
                        </div>
                    </div>
                    <div className="w-full mt-5 px-8 py-5 rounded-md shadow-radika flex flex-row items-center">
                        <HiOutlineDuplicate color='#00ba74' size={55}/>
                        <div className="w-full flex flex-col pt-3 pr-4 text-textColorBase">
                            <h3 className="text-textColorH text-xl font-semibold text-right mb-1">تلاش ما جلب رضایت شماست</h3>
                            <p className="mb-2">جلب رضایت شما هدف ما میباشد.</p>
                        </div>
                    </div>
                </div>
                <div className="col-span-1 px-4">
                    <Image src="/our-mission.png" alt="our story" width={0} height={0} sizes='100vw' className="w-full max-h-120 object-contain"/>
                </div>
            </div>
        </section>
    );
}