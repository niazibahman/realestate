import { useEffect, useRef, useState } from "react";
import PropertyCard from "./propertycard/propertycard";
import {FiChevronDown} from "react-icons/fi";

export default function PropertiesList({adsList,totalAds}){
    const [showArrange,setShowArrange]=useState(false);
    const outsideRef=useRef();
    
    const changeShowArrangeHandler=()=>{
        setShowArrange(!showArrange);
    }
    useEffect(() => {
        function handleClickOutside(event) {
          if (outsideRef.current && !outsideRef.current.contains(event.target)) {
            setShowArrange(false)
          }
        }
        document.body.addEventListener("mousedown", handleClickOutside);
        return () => {
          document.body.removeEventListener("mousedown", handleClickOutside);
        };
      }, [outsideRef]);
    return(<div className="col-span-3 lg:col-span-2">
        <div className="w-full flex flex-row items-center justify-between">
            <div className="flex flex-row items-center text-xl font-bold">
                <span>آگهی های یافت شده:</span>
                <span className="text-greenTheme mr-2">{totalAds}</span>
            </div>
            <button onClick={changeShowArrangeHandler} className="relative px-4 py-2 text-header_text rounded shadow-sortButton flex flex-row items-center justify-center">
                <span>مرتب سازی</span>
                <FiChevronDown color="#647392" fontSize={24}/>
                {
                    showArrange &&
                    <div className="absolute inset-0"/>
                }
                {
                    showArrange &&
                    <div onClick={(event)=>event.stopPropagation()} ref={outsideRef} className={`absolute top-full left-0 cursor-default mt-1 w-48 px-4 py-1 flex flex-col rounded border border-arrangeBorder bg-white z-10 transition-all ${showArrange === true ? "animate-rotat-x" : ""}`}>
                        <ul className="w-full space-y-1 text-arrangeText">
                            <li onClick={changeShowArrangeHandler} className="w-full text-right cursor-pointer hover:text-greenTheme">جدیدترین</li>
                            <li onClick={changeShowArrangeHandler} className="w-full text-right cursor-pointer hover:text-greenTheme">پربازدیدترین</li>
                            <li onClick={changeShowArrangeHandler} className="w-full text-right cursor-pointer hover:text-greenTheme">محبوبترین</li>
                        </ul>
                    </div>
                }
            </button>
        </div>
        {
            totalAds > 0 ?
            adsList.map((x,index)=><PropertyCard key={index} property={x}/>):
            null
        }
    </div>);
}