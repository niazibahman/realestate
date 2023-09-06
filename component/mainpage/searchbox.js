import Image from "next/image";
import { IoSearchOutline } from "react-icons/io5";
import {TfiBriefcase , TfiLocationPin} from 'react-icons/tfi'
import {RiArrowDropDownFill} from 'react-icons/ri'
import {FaBed,FaBath} from 'react-icons/fa'
import prpertytype from '../../constant/property_type.json'
import { useState,useEffect } from "react";
import URLCreator from "../../methods/URLCreator";
import { useRouter } from "next/router";

export default function SearchBox({cities,neighbourhoods}){
    const router = useRouter();
    const [showProperty,setShowProperty]=useState(false);
    const [scrollIsDown,setScrollIsDown]=useState(false);
    const [showCity,setShowCity]=useState(false);
    const [showNeighbourhood,setShowNeighbourhood]=useState(false);
    const [showAdvanceSearch,setShowAdvanceSearch]=useState(false);
    const [showBath,setShowBath]=useState(false);
    const [showBed,setShowBed]=useState(false);
    const [heating,setHeating]=useState(false);
    const [cooling,setCooling]=useState(false);
    const [yard,setYard]=useState(false);
    const [seperate,setSeperate]=useState(false);
    const [parking,setParking]=useState(false);
    const [lift,setLift]=useState(false);
    const [loan,setLoan]=useState(false);
    const [storage,setStorage]=useState(false);
    const [pool,setPool]=useState(false);
    const [searchedCities,setSearchedCities]=useState();
    const [rooms,setRooms]=useState(0);
    const [bath,setBath]=useState(false);
    const [city,setCity]=useState('');
    const [propertyType,setPropertyType]=useState('');
    const [selectNeighborhood,setSelectNeighborhood]=useState();
    const [searchedNeighborhood,setSearchedNeighborhood]=useState([])

    const listenToScroll = () => {
        let heightToHideFrom = 250;
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        if (winScroll > heightToHideFrom) {
           setScrollIsDown(true);
        } else {
            setScrollIsDown(false);
        }
    };
    const modifyShowSelectBoxesHandler=(index)=>{
        setShowCity(index === 1 ? true : false);
        setShowProperty(index === 2 ? true : false);
        setShowNeighbourhood(index === 3 ? true : false);
        setShowBath(index === 4 ? true : false);
        setShowBed(index === 5 ? true : false);
    }
    const showAdvanceSearchBoxHandler=()=>{
        modifyShowSelectBoxesHandler(0)
        setShowAdvanceSearch(!showAdvanceSearch);
    }
    const changeCityHandler=(city)=>{
        setCity(city);
        if(!cities.some(x=>x.CityName === city)){
            const tempSearchedCity= cities.filter(x=>x.CityName.includes(city));
            setSearchedCities(tempSearchedCity);
        }else{
            modifyShowSelectBoxesHandler(0);
        }
    }
    const selectPropertyTypeHandler=(property)=>{
        setPropertyType(property);
        modifyShowSelectBoxesHandler(0);
    }
    const selectNeighbourhoodHandler=(neighbour)=>{
        setSelectNeighborhood(neighbour);
        modifyShowSelectBoxesHandler(0);
    }
    const searchNeighbourhoodsHandler=(searchedNeighbour)=>{
        if(searchedNeighbour === ''){
            setSearchedNeighborhood(neighbourhoods);
        }else{
            if(city === ""){
                const tempNeighbours= neighbourhoods.filter(x=>x.neighbourName.includes(searchedNeighbour));
                setSearchedNeighborhood(tempNeighbours);
            }else{}
        }
    }
    const changeYard=()=>{setYard(!yard)}
    const changePool=()=>{setPool(!pool)}
    const changeParking=()=>{setParking(!parking)}
    const changeLift=()=>{setLift(!lift)}
    const changeStorage=()=>{setStorage(!storage)}
    const changeSeperate=()=>{setSeperate(!seperate)}
    const changeHeating=()=>{setHeating(!heating)}
    const changeCooling=()=>{setCooling(!cooling)}
    const changeLoan=()=>{setLoan(!loan)}
    const changeRoomsNumberHandler=(nums)=>{
        setRooms(nums);
        modifyShowSelectBoxesHandler(0);
    }
    const changeBathHandler=(status)=>{
        setBath(status);
        modifyShowSelectBoxesHandler(0);
    }
    const serachButtonHandler=()=>{
        router.push(URLCreator("آپارتمان","همدان",["میدان مدرس"]))
    }
    useEffect(() => {
        setSearchedCities(cities);
        setSearchedNeighborhood(neighbourhoods)
        window.addEventListener("scroll", listenToScroll);
        return () =>
           window.removeEventListener("scroll", listenToScroll);
    }, []);
    
    return(<section className="bg-home_search bg-cover bg-bottom h-165 w-full relative">
        {
            (showCity || showProperty || showNeighbourhood || showBath || showBed) &&
            <div onClick={()=>modifyShowSelectBoxesHandler(0)} className="fixed inset-0 z-20"/>
        }
        <div className="w-full h-full bg-searchbox_bg bg-opacity-40 flex flex-col justify-center items-center">
            <div className="flex flex-col justify-center items-center w-full px-4 sm:w-3/4 sm:px-0 md:container">
                <h1 className="text-white text-3xl md:text-4xl font-bold text-center mb-20">سایت جستجوی املاک کشور</h1>
                <div className="bg-white rounded-lg w-full py-2 px-3 flex flex-col md:flex-row">
                    <div className="relative border md:border-r-0 md:border-y-0 md:border-l border-searchbox_border rounded w-full flex flex-row justify-between items-center py-1 px-2 mb-1">
                        {
                            showCity &&
                            <div className={`bg-white w-full h-60 absolute right-0 rounded z-30 p-1 ${scrollIsDown===true?"top-16":"-top-64"}`}>
                                <ul className="w-full mt-1 h-52 overflow-y-scroll">
                                    {
                                        searchedCities.map((x,index)=><li onClick={()=>changeCityHandler(x.CityName)} key={index} className="w-full h-6 mb-2 cursor-pointer hover:bg-blue-600 hover:text-white">{x.CityName}</li>)
                                    }
                                </ul>
                            </div>
                        }
                        <input onClick={()=>modifyShowSelectBoxesHandler(1)} onChange={(e)=>changeCityHandler(e.target.value)} value={city} placeholder="شهر" aria-label="city" className="w-full ml-2 focus:outline-none text-gray-700 h-14"/>
                        <IoSearchOutline color="#8b9aad" fontSize={24}/>
                    </div>
                    <div onClick={()=>modifyShowSelectBoxesHandler(2)} className="relative cursor-pointer border md:border-r-0 md:border-y-0 md:border-l border-searchbox_border rounded w-full flex flex-row justify-between items-center py-1 px-2 mb-1">
                        {
                            showProperty &&
                            <div onClick={(event)=>event.stopPropagation()} className={`bg-white w-full h-60 absolute right-0 rounded z-30 p-1 ${scrollIsDown===true?"top-16":"-top-64"}`}>
                              {/*<input aria-label="search property" className="border border-searchbox_border outline-none px-2 w-full h-8"/> */}
                              <ul className="w-full mt-1 h-52 overflow-y-scroll">
                                {
                                    prpertytype.map((x,index)=><li onClick={()=>selectPropertyTypeHandler(x.name)} key={index} className="w-full h-6 mb-2 hover:bg-blue-600 hover:text-white">{x.name}</li>)
                                }
                              </ul>
                            </div>
                        }
                        <span className="w-full h-14 flex flex-row items-center justify-between ml-2">
                            <span className="text-searchbox_text">{propertyType === '' ? "نوع ملک" : propertyType}</span>
                            <RiArrowDropDownFill color="#8b9aad" fontSize={24}/>
                        </span>
                        <TfiBriefcase color="#8b9aad" fontSize={24}/>
                    </div>
                    <div onClick={()=>modifyShowSelectBoxesHandler(3)} className="relative cursor-pointer border md:border-r-0 md:border-y-0 md:border-l border-searchbox_border rounded w-full flex flex-row justify-between items-center py-1 px-2 mb-1">
                       {
                            showNeighbourhood &&
                            <div onClick={(event)=>event.stopPropagation()} className={`bg-white w-full h-60 absolute right-0 rounded z-30 p-1 ${scrollIsDown===true?"top-16":"-top-64"}`}>
                              <input onChange={(e)=>searchNeighbourhoodsHandler(e.target.value)} aria-label="search neighbourhood" className="border border-searchbox_border outline-none px-2 w-full h-8"/>
                              <ul className="w-full mt-1 h-52 overflow-y-scroll">
                                {
                                    searchedNeighborhood.map((x,index)=><li onClick={()=>selectNeighbourhoodHandler(x)} key={index} className="w-full h-6 mb-2 hover:bg-blue-600 hover:text-white">{x.neighbourName + "،" + x.cityName}</li>)
                                }
                              </ul>
                            </div>
                        }
                        <span className="w-full h-14 flex flex-row items-center justify-between ml-2">
                            <span className="text-searchbox_text">{selectNeighborhood === undefined ? "محله" : selectNeighborhood.neighbourName + "،" + selectNeighborhood.cityName}</span>
                            <RiArrowDropDownFill color="#8b9aad" fontSize={24}/>
                        </span>
                        <TfiLocationPin color="#8b9aad" fontSize={24}/>
                    </div>
                    <div onClick={showAdvanceSearchBoxHandler} className="cursor-pointer w-full mr-4 md:mr-0 md:w-56 h-14 flex items-center justify-start md:justify-center z-20">
                        <Image src="/svg/search_menu.svg" alt="advance search" width={30} height={30}/>
                    </div>
                    <button onClick={serachButtonHandler} className="bg-redTheme text-white rounded-md w-full md:w-128 py-4">جستجو</button>
                </div>
                <div className="absolute top-142 md:top-111 z-20 w-full px-4 sm:px-0 sm:w-3/4 md:container">
                   <div className={`bg-white relative shadow-radika rounded-lg overflow-hidden flex flex-col items-center transition-all duration-500 ease-in-out ${showAdvanceSearch ===true?"h-104 md:h-72 p-6":"h-0"}`}>
                    {
                        (showBath || showBed || showCity || showProperty || showNeighbourhood) && 
                        <div onClick={()=>modifyShowSelectBoxesHandler(0)} className="absolute inset-0 z-20"/>
                    }
                        <div className="w-full flex flex-col md:flex-row md:justify-between items-center h-auto">
                            <div onClick={()=>modifyShowSelectBoxesHandler(4)} className="relative border border-searchbox_border rounded w-full md:w-5/12 flex flex-row justify-around px-2 items-center cursor-pointer">
                                {
                                    showBath &&
                                    <div onClick={(event)=>event.stopPropagation()} className={`border border-searchbox_border bg-white w-full h-14 absolute right-0 rounded z-30 p-1 top-16`}>
                                        <ul>
                                            <li onClick={()=>changeBathHandler(true)} className="hover:bg-blue-600 hover:text-white">دارد</li>
                                            <li onClick={()=>changeBathHandler(false)} className="hover:bg-blue-600 hover:text-white">ندارد</li>
                                        </ul>
                                    </div>
                                }
                                <span className="w-full h-14 flex flex-row items-center justify-between ml-2">
                                    <span className="text-searchbox_text">{bath === false ? "حمام" : "حمام دارد"}</span>
                                    <RiArrowDropDownFill color="#8b9aad" fontSize={24}/>
                                </span>
                                <FaBath color="#8b9aad" fontSize={24}/>
                            </div>
                            <div onClick={()=>modifyShowSelectBoxesHandler(5)} className="relative border border-searchbox_border rounded w-full md:w-5/12 flex flex-row justify-around px-2 mt-2 md:mt-0 items-center cursor-pointer">
                                {
                                    showBed &&
                                    <div onClick={(event)=>event.stopPropagation()} className={`border border-searchbox_border bg-white w-full h-28 absolute right-0 rounded z-30 p-1 top-16`}>
                                        <ul>
                                            <li onClick={()=>changeRoomsNumberHandler(1)} className="hover:bg-blue-600 hover:text-white mb-0.5">یک خوابه</li>
                                            <li onClick={()=>changeRoomsNumberHandler(2)} className="hover:bg-blue-600 hover:text-white mb-0.5">دوخوابه</li>
                                            <li onClick={()=>changeRoomsNumberHandler(3)} className="hover:bg-blue-600 hover:text-white mb-0.5">سه خوابه</li>
                                            <li onClick={()=>changeRoomsNumberHandler(4)} className="hover:bg-blue-600 hover:text-white">چهار خوابه</li>
                                        </ul>
                                    </div>
                                }
                                <span className="w-full h-14 flex flex-row items-center justify-between ml-2">
                                    <span className="text-searchbox_text">{rooms === 0 ? "اتاق خواب" : "اتاق خواب " + rooms}</span>
                                    <RiArrowDropDownFill color="#8b9aad" fontSize={24}/>
                                </span>
                                <FaBed color="#8b9aad" fontSize={24}/>
                            </div>
                        </div>
                        <b className="w-full my-4 text-2xl text-start">امکانات</b>
                        <div className="w-full grid grid-cols-2 md:grid-cols-3 gap-4">
                            <div className="col-span-1 flex flex-row justify-start items-center">
                                <input name="heating_ck" aria-label="heating" type="checkbox" onChange={changeHeating} checked={heating} className="accent-redTheme ml-2"/>
                                <label form="heating_ck">گرمایش</label>
                            </div>
                            <div className="col-span-1 flex flex-row justify-start items-center">
                                <input name="cooling_ck" aria-label="cooler" type="checkbox" onChange={changeCooling} checked={cooling} className="accent-redTheme ml-2"/>
                                <label form="cooling_ck">کولر</label>
                            </div>
                            <div className="col-span-1 flex flex-row justify-start items-center">
                                <input name="lift_ck" aria-label="lift" type="checkbox" onChange={changeLift} checked={lift} className="accent-redTheme ml-2"/>
                                <label form="lift_ck">آسانسور</label>
                            </div>
                            <div className="col-span-1 flex flex-row justify-start items-center">
                                <input name="loan_ck" aria-label="loan" type="checkbox" onChange={changeLoan} checked={loan} className="accent-redTheme ml-2"/>
                                <label form="loan_ck">وام</label>
                            </div>
                            <div className="col-span-1 flex flex-row justify-start items-center">
                                <input name="parking_ck" aria-label="parking" type="checkbox" onChange={changeParking} checked={parking} className="accent-redTheme ml-2"/>
                                <label form="parking_ck">پارکینگ</label>
                            </div>
                            <div className="col-span-1 flex flex-row justify-start items-center">
                                <input name="pool_ck" aria-label="pool" type="checkbox" onChange={changePool} checked={pool} className="accent-redTheme ml-2"/>
                                <label form="pool_ck">استخر</label>
                            </div>
                            <div className="col-span-1 flex flex-row justify-start items-center">
                                <input name="storage_ck" aria-label="storage" type="checkbox" onChange={changeStorage} checked={storage} className="accent-redTheme ml-2"/>
                                <label form="storage_ck">انباری</label>
                            </div>
                            <div className="col-span-1 flex flex-row justify-start items-center">
                                <input name="seperate_ck" aria-label="seperate" type="checkbox" onChange={changeSeperate} checked={seperate} className="accent-redTheme ml-2"/>
                                <label form="seperate_ck">راه جدا</label>
                            </div>
                            <div className="col-span-1 flex flex-row justify-start items-center">
                                <input name="yard_ck" aria-label="yard" type="checkbox" onChange={changeYard} checked={yard} className="accent-redTheme ml-2"/>
                                <label form="yard_ck">حیاط</label>
                            </div>
                        </div>
                   </div>
                </div>
            </div>
        </div>
    </section>);
}