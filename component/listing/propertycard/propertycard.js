import Image from "next/image";
import Link from "next/link";
import Seperator from "../../../methods/seperator";
import {VscLocation} from "react-icons/vsc"

export default function PropertyCard({property}){
    return(<div className="shadow-radika w-full rounded-lg grid grid-cols-1 lg:grid-cols-5 gap-0 my-10">
        <div className="col-span-1 lg:col-span-2 lg:col-start-4 rounded-r-lg">
            <div className="relative w-full h-64 rounded-r-lg">
                <Link href={"/"} className="w-full"><Image src={property.photos[0]} alt={property.slug} width={0} height={0} sizes='100%' className="w-full h-full object-cover rounded-t-lg lg:rounded-t-none lg:rounded-tl-lg lg:rounded-bl-lg"/></Link>
                <Link href={"/"}><div className="absolute w-full h-2/3 bottom-0 inset-x-0 bg-gradient-to-b from-transparent to-listingCardbg bg-opacity-5 lg:rounded-bl-lg"/></Link>
                <div className="absolute bottom-5 left-5 text-2xl text-white">
                    <span className={`ml-2 ${Math.ceil(property.ranking/300) >=4 ?"text-star":""}`}>✩</span>
                    <span className={`ml-2 ${Math.ceil(property.ranking/300) >= 3 ?"text-star":""}`}>✩</span>
                    <span className={`ml-2 ${Math.ceil(property.ranking/300) >= 2 ?"text-star":""}`}>✩</span>
                    <span className={`ml-2 ${Math.ceil(property.ranking/300) >= 1 ?"text-star":""}`}>✩</span>
                    <span className={` ${Math.ceil(property.ranking/300) >= 0 ?"text-star":""}`}>✩</span>
                </div>
                <div className="absolute top-5 right-5 w-20 h-7 bg-white text-adTypeTag text-sm flex flex-col justify-center items-center shadow-listingTag rounded-3xl">{property.issell === true ? "فروش" : "اجاره"}</div>
                <div className="absolute top-5 left-5 w-9 h-9 bg-white rounded-full flex flex-col justify-center items-center text-center text-red-500 text-3xl shadow-listingHeart pt-2">♡</div>
            </div>
        </div>
        <div className="col-span-1 lg:col-span-3 lg:col-start-1 lg:row-start-1 rounded-b-lg h-auto flex flex-col justify-between">
            <div className="w-full px-4 py-5 flex flex-row items-center justify-between">
                <div className="flex flex-col">
                    <Link href={"/"}><h2 className="font-bold text-lg text-textColorH">{property.slug}</h2></Link>
                    <div className="flex flex-row items-center text-sm text-textColorBase mt-1">
                        <VscLocation color="#72809D" fontSize={22}/>
                        <span className="mr-1">{property.address.main !== null ? property.address.main + " " + (property.address.detail !== null ? property.address.detail :""): property.neighbourhoodName + "،" + property.cityName}</span>
                    </div>
                </div>
                <Image src={"/user-1.jpg"} alt="مشاور" width={40} height={40} className="rounded-full"/>
            </div>
            <div className="w-full px-4 py-5 flex flex-row items-center justify-between text-textColorBase">
                <span>اتاق خواب: {property.rooms}</span>
                <span>حمام: {property.facility.bath === true || property.facility.bathroom === true ? "دارد" : "ندارد"}</span>
                <span>متراژ: {property.area}</span>
            </div>
            <div className="w-full px-4 py-5 flex flex-row items-center justify-between border-t">
                {
                    property.issell === true ?
                    <div className="flex flex-row items-center">
                        <span>قیمت:</span>
                        <span className="text-priceTag font-bold mr-1">{property.price !== "0"? Seperator(property.price) +" تومان" : "توافقی"}</span>
                    </div>:
                    <div className="flex flex-col">
                        <div className="flex flex-row items-center mb-1">
                            <span>رهن:</span>
                            <span className="text-priceTag font-bold mr-1">{property.deposit !== "0"? Seperator(property.deposit) +" تومان" : "توافقی"}</span>
                        </div>
                        <div className="flex flex-row items-center">
                            <span>اجاره:</span>
                            <span className="text-priceTag font-bold mr-1">{property.rent !== "0"? Seperator(property.rent) +" تومان" : "توافقی"}</span>
                        </div>
                    </div>
                }
                <Link href={"/"} className="bg-greenTheme text-white py-2 px-3 rounded-sm">اطلاعات بیشتر</Link>
            </div>
        </div>
    </div>);
}