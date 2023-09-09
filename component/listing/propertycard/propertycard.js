import Image from "next/image";
import Link from "next/link";

export default function PropertyCard({property}){
    return(<div className="shadow-radika w-full h-auto rounded-lg grid grid-cols-1 lg:grid-cols-5 gap-0">
        <div className="col-span-1 lg:col-span-2 lg:col-start-4 h-auto">
            <div className="relative w-full h-60 md:h-64">
                <Link href={"/"}><Image src={"/p-1.webp"} alt={"a"} width={0} height={0} sizes='100vw' className="w-full h-full object-cover"/></Link>
                <div className="absolute w-full h-2/3 bottom-0 inset-x-0 bg-gradient-to-b from-transparent to-listingCardbg bg-opacity-5"/>
                <div className="absolute bottom-5 left-5 text-2xl text-white">
                    <span className={`ml-2`}>✩</span>
                    <span className={`ml-2`}>✩</span>
                    <span className={`ml-2`}>✩</span>
                    <span className={`ml-2`}>✩</span>
                    <span className={`text-star`}>✩</span>
                </div>
                <div className="absolute top-5 right-5 w-20 h-7 bg-white text-adTypeTag text-sm flex flex-col justify-center items-center shadow-listingTag rounded-3xl">فروش</div>
                <div className="absolute top-5 left-5 w-9 h-9 bg-white rounded-full flex flex-col justify-center items-center text-center text-red-500 text-3xl shadow-listingHeart pt-2">♡</div>
            </div>
        </div>
        <div className="col-span-1 lg:col-span-3 lg:col-start-1 lg:row-start-1 rounded-b-lg h-auto flex flex-col justify-between">
            <div className="w-full px-4 py-5 flex flex-row items-center justify-between">
                <div className="flex flex-col">
                    <Link href={"/"}><h2 className="font-bold text-lg text-textColorH">آپارتمان 50 متری در آجودانیه</h2></Link>
                    <div className="flex flex-row items-center text-sm text-textColorBase mt-1">آدرس</div>
                </div>
                <Image src={"/user-1.jpg"} alt="مشاور" width={40} height={40} className="rounded-full"/>
            </div>
            <div className="w-full px-4 py-5 flex flex-row items-center justify-between text-textColorBase">
                <span>اتاق خواب: 2</span>
                <span>حمام: 1</span>
                <span>متراژ: 50</span>
            </div>
            <div className="w-full px-4 py-5 flex flex-row items-center justify-between border-t">
                <span className="text-priceTag font-bold">8,000,000,000 تومان</span>
                <Link href={"/"} className="bg-greenTheme text-white py-2 px-3 rounded-sm">اطلاعات بیشتر</Link>
            </div>
        </div>
    </div>);
}