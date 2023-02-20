import Image from "next/image";
import { IoSearchOutline } from "react-icons/io5";
import {TfiBriefcase , TfiLocationPin} from 'react-icons/tfi'
import {RiArrowDropDownFill} from 'react-icons/ri'
import prpertytype from '../../constant/property_type.json'
import { useState,useEffect } from "react";

export default function SearchBox(){
    const [showProperty,setShowProperty]=useState(false);
    const [scrollIsDown,setScrollIsDown]=useState(false);

    useEffect(() => {
        window.addEventListener("scroll", listenToScroll);
        return () =>
           window.removeEventListener("scroll", listenToScroll);
    }, []);

    const listenToScroll = () => {
        let heightToHideFrom = 250;
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        if (winScroll > heightToHideFrom) {
           setScrollIsDown(true);
        } else {
            setScrollIsDown(false);
        }
    };

    const showPropertySelectorBoxHandler=()=>{
        setShowProperty(!showProperty);
    }

    return(<section className="bg-home_search bg-cover bg-bottom h-165 w-full">
        <div className="w-full h-full bg-searchbox_bg bg-opacity-40 flex flex-col justify-center items-center">
            <div className="flex flex-col justify-center items-center w-full px-4 sm:w-3/4 sm:px-0 md:container">
                <h1 className="text-white text-3xl md:text-4xl font-bold text-center mb-20">سایت جستجوی املاک کشور</h1>
                <div className="bg-white rounded-lg w-full py-2 px-3 flex flex-col md:flex-row">
                    <div className="border md:border-r-0 md:border-y-0 md:border-l border-searchbox_border rounded w-full flex flex-row justify-between items-center py-1 px-2 mb-1">
                        <input placeholder="شهر" className="w-full ml-2 focus:outline-none text-gray-700 h-14"/>
                        <IoSearchOutline color="#8b9aad" fontSize={24}/>
                    </div>
                    <div onClick={showPropertySelectorBoxHandler} className="relative cursor-pointer border md:border-r-0 md:border-y-0 md:border-l border-searchbox_border rounded w-full flex flex-row justify-between items-center py-1 px-2 mb-1">
                        {
                            showProperty &&
                            <div className={`bg-white w-full h-60 absolute right-0 rounded z-20 p-1 ${scrollIsDown===true?"top-16":"-top-64"}`}>
                              <input className="border border-searchbox_border w-full h-6"/>
                              <ul className="w-full mt-1 h-52 overflow-y-scroll">
                                {
                                    prpertytype.map((x,index)=><li className="w-full h-6 mb-2">{x.name}</li>)
                                }
                              </ul>
                            </div>
                        }
                        <span className="w-full h-14 flex flex-row items-center justify-between ml-2">
                            <span className="text-searchbox_text">نوع ملک</span>
                            <RiArrowDropDownFill color="#8b9aad" fontSize={24}/>
                        </span>
                        <TfiBriefcase color="#8b9aad" fontSize={24}/>
                    </div>
                    <div className="cursor-pointer border md:border-r-0 md:border-y-0 md:border-l border-searchbox_border rounded w-full flex flex-row justify-between items-center py-1 px-2 mb-1">
                        <span className="w-full h-14 flex flex-row items-center justify-between ml-2">
                            <span className="text-searchbox_text">محله</span>
                            <RiArrowDropDownFill color="#8b9aad" fontSize={24}/>
                        </span>
                        <TfiLocationPin color="#8b9aad" fontSize={24}/>
                    </div>
                    <div className="cursor-pointer w-full mr-4 md:mr-0 md:w-56 h-14 flex items-center justify-start md:justify-center">
                        <Image src="/svg/search_menu.svg" alt="advance search" width={30} height={30}/>
                    </div>
                    <button className="bg-redTheme text-white rounded-md w-full md:w-128 py-4">جستجو</button>
                </div>
            </div>
        </div>
    </section>);
}