import Image from "next/image";
import { useState,useEffect } from "react";
export default function SiteComments(){
    const [currentContent,setCurrentcontent]=useState(0);
    const comments=[{img:"/user-1.jpg",name:"محمود اسدی",job:"سئوکار",comment:"لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد."},{img:"/user-2.jpg",name:"خانم ربانی",job:"مشاور املاک",comment:"لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد."}];
    const changecurrentHandler=(index)=>{
        setCurrentcontent(index)
    }
    const changeComment =() => {
        if(currentContent == 1){
            changecurrentHandler(0)
        }
        if(currentContent == 0){
            changecurrentHandler(1)
        }
    }

    useEffect(() => {
        const intervalId= setInterval(changeComment, 4000);
        return () => clearInterval(intervalId);
    }, [changeComment])
    return(
    <section className="w-full h-auto bg-commentBackground relative">
        <div className="w-full h-auto sm:container flex flex-col md:flex-row items-center md:justify-between px-6  sm:px-0 mx-auto text-commentText pt-6">
            <div className="w-full overflow-x-hidden md:w-1/2 flex flex-col items-start mb-4">
                <h2 className="text-xl font-bold lg:text-3xl">نظرات مردم درباره ریکادا</h2>
                <div className="w-full h-48 relative">
                    <div className={`w-full absolute top-0 flex flex-col items-start transition-all ${currentContent===0?"enterIn":"exitOut"}`}>
                        <p className="my-4 text-justify">{comments[0].comment}</p>
                        <div className="w-full flex flex-row items-center">
                            <Image src={comments[0].img} alt="" width={85} height={85} className="rounded-full border-8 border-white border-opacity-30"/>
                            <div className="flex flex-col mr-4">
                                <h3 className="font-semibold text-lg mb-2">{comments[0].name}</h3>
                                <span className="text-justify">{comments[0].job}</span>
                            </div>
                        </div>
                    </div>
                    <div className={`w-full absolute top-0 flex flex-col items-start transition-all ${currentContent===1?"enterIn":"exitOut"}`}>
                        <p className="my-4 text-justify">{comments[1].comment}</p>
                        <div className="w-full flex flex-row items-center">
                            <Image src={comments[1].img} alt="" width={85} height={85} className="rounded-full border-8 border-white border-opacity-30"/>
                            <div className="flex flex-col mr-4">
                                <h3 className="font-semibold text-lg mb-2">{comments[1].name}</h3>
                                <span>{comments[1].job}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Image src="/commentperson.png" alt="" width={0} height={0} sizes="100vw" className="w-2/3 lg:w-2/5 object-center"/>
        </div>
        <Image src="/pattern.png" alt="pattern of comment" width={0} height={0} sizes="100vw" className="absolute inset-0 w-full h-full object-cover"/>
    </section>
    );
}