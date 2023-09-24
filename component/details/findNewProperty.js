import { IoSearchOutline } from "react-icons/io5";
import {BiDollar} from "react-icons/bi";
import {FaBed,FaBath} from 'react-icons/fa';
import {RiArrowDropDownFill} from 'react-icons/ri';
import {TfiBriefcase} from 'react-icons/tfi';

export default function FindNewProperty(){
    return(
        <div className="w-full mb-4">
            <h4 className="text-xl text-textColorH font-semibold mb-2">یافتن ملک جدید</h4>
            <div className="w-full h-16 py-2 pr-5 pl-3 bg-white shadow-sortButton rounded flex flex-row items-center mb-4">
                <IoSearchOutline color={"#8b9aad"} fontSize={24}/>
                <input placeholder="محله" aria-label="neighbourhood" className={`w-full focus:outline-none h-14 text-gray-700 mr-2`}/>
            </div>
            <div className="w-full grid grid-cols-2 gap-6 mb-4">
                <div className="col-span-1 h-16 py-2 pr-4 pl-2 bg-white shadow-sortButton rounded flex flex-row items-center">
                    <BiDollar color="#8b9aad" fontSize={24}/>
                    <input placeholder="حداقل قیمت" aria-label="neighbourhood" className={`w-full focus:outline-none h-14 text-gray-700 mr-2`}/>
                </div>
                <div className="col-span-1 h-16 py-2 pr-4 pl-2 bg-white shadow-sortButton rounded flex flex-row items-center">
                    <BiDollar color="#8b9aad" fontSize={24}/>
                    <input placeholder="حداکثر قیمت" aria-label="neighbourhood" className={`w-full focus:outline-none h-14 text-gray-700 mr-2`}/>
                </div>
            </div>
            <div className="w-full h-16 py-2 pr-5 pl-3 bg-white shadow-sortButton rounded flex flex-row items-center justify-between cursor-pointer mb-4">
                <div className="w-full flex flex-row items-center">
                    <FaBed color={"#8b9aad"} fontSize={24}/>
                    <span className="mr-2 text-gray-500">اتاق خواب</span>
                </div>
                <RiArrowDropDownFill color={"#8b9aad"} fontSize={24}/>
            </div>
            <div className="w-full h-16 py-2 pr-5 pl-3 bg-white shadow-sortButton rounded flex flex-row items-center justify-between cursor-pointer mb-4">
                <div className="w-full flex flex-row items-center">
                    <FaBath color={"#8b9aad"} fontSize={24}/>
                    <span className="mr-2 text-gray-500">حمام</span>
                </div>
                <RiArrowDropDownFill color={"#8b9aad"} fontSize={24}/>
            </div>
            <div className="w-full h-16 py-2 pr-5 pl-3 bg-white shadow-sortButton rounded flex flex-row items-center justify-between cursor-pointer mb-4">
                <div className="w-full flex flex-row items-center">
                    <TfiBriefcase color="#8b9aad" fontSize={24}/>
                    <span className="mr-2 text-gray-500">شهر</span>
                </div>
                <RiArrowDropDownFill color={"#8b9aad"} fontSize={24}/>
            </div>
            <button className="w-full h-12 bg-greenTheme rounded text-center text-white mt-2">جستجو</button>
        </div>
    );
}