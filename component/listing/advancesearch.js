import {VscClose} from 'react-icons/vsc';
import { IoSearchOutline } from "react-icons/io5";
import {BiDollar} from "react-icons/bi";
import {FaBed,FaBath} from 'react-icons/fa'
import {RiArrowDropDownFill} from 'react-icons/ri'
import {TfiBriefcase} from 'react-icons/tfi'
import { useEffect, useRef, useState } from 'react';
import prpertytype from '../../constant/property_type.json';
import { RangeSlider } from '@mantine/core';

export default function AdvanceSearch({showOnMobile,closeAdvanceFilter}){
    const [showBed,setShowBed]=useState(false);
    const [showBath,setShowBath]=useState(false);
    const [showProperty,setShowProperty]=useState(false);
    const [showAdvancedSearch,setShowAdvancedSearch]=useState(false);
    const [value, setValue] = useState([20,80]);
    const outsideRef=useRef();
    const changeModalsPickersHandler=(index)=>{
        setShowBath((index === 1 ? true : false));
        setShowBed((index === 2 ? true : false));
        setShowProperty((index === 3 ? true : false));
    }
    const changeShowAdvancedSearchHandler=()=>{
        setShowAdvancedSearch(!showAdvancedSearch);
    }
    useEffect(()=>{
    },[])
    // useEffect(() => {
    //     function handleClickOutside(event) {
    //       if (outsideRef.current && !outsideRef.current.contains(event.target)) {
    //         setShowBath(false);
    //         setShowBed(false);
    //         setShowProperty(false);
    //       }
    //     }
    //     document.addEventListener("mousedown", handleClickOutside);
    //     return () => {
    //       document.removeEventListener("mousedown", handleClickOutside);
    //     };
    //   }, [outsideRef]);
    return(<div className={`lg:col-span-1 right-0 top-0 bottom-0 lg:static lg:flex w-full h-full lg:h-auto rounded-l-md lg:rounded-md bg-white shadow-paginationShadow lg:shadow-none lg:animate-none  lg:z-0 overflow-hidden ${showOnMobile === true ?"fixed z-10 animate-open-width":"animate-close-width hidden"} `}>  
        <div id='advancedsearch' className='w-full h-full lg:h-fit overflow-y-scroll lg:overflow-y-visible lg:border lg:border-advancedSearchBorder rounded-l-md lg:rounded-md p-5'>
            {
                (showBath || showBed || showProperty) && <div onClick={()=>changeModalsPickersHandler(0)} className='fixed inset-0 z-20'/>
            }
            <div className="w-full flex flex-row items-center justify-between lg:hidden mb-4">
                <span>بستن فیلتر</span>
                <button onClick={closeAdvanceFilter}><VscClose color="#72809D" fontSize={28}/></button>
            </div>
            <hr className='w-full lg:hidden mb-4'/>
            <h5 className='mb-4'>ملک مورد نظر را بیابید</h5>
            <div className='w-full border border-searchbox_border rounded flex flex-row justify-between items-center px-2 py-1 mb-4'>
                <input placeholder="شهر" className="w-full ml-2 focus:outline-none text-gray-700 h-12"/>
                <IoSearchOutline color="#8b9aad" fontSize={24}/>
            </div>
            <div className='w-full border border-searchbox_border rounded flex flex-row justify-between items-center px-2 py-1 mb-4'>
                <input placeholder="محله" className="w-full ml-2 focus:outline-none text-gray-700 h-12"/>
                <IoSearchOutline color="#8b9aad" fontSize={24}/>
            </div>
            <div className='grid grid-cols-2 gap-4 mb-4'>
                <div className='col-span-1 bg-gray-200 border border-searchbox_border rounded flex flex-row justify-between items-center px-1 py-1'>
                    <input disabled type='number' placeholder='حداقل قیمت' className='w-full ml-1 focus:outline-none text-gray-700 h-12'/>
                    <BiDollar color="#8b9aad" fontSize={24}/>
                </div>
                <div className='col-span-1 bg-gray-200 border border-searchbox_border rounded flex flex-row justify-between items-center px-1 py-1'>
                    <input disabled type='number' placeholder='حداکثر قیمت' className='w-full ml-1 focus:outline-none text-gray-700 h-12'/>
                    <BiDollar color="#8b9aad" fontSize={24}/>
                </div>
            </div>
            <div onClick={()=>changeModalsPickersHandler(2)} className='relative border border-searchbox_border rounded w-full h-14 flex flex-row justify-around items-center cursor-pointer px-2 mb-4'>
                <div className='w-full h-14 flex flex-row items-center justify-between ml-2'>
                    <span>اتاق خواب</span>
                    <RiArrowDropDownFill color="#8b9aad" fontSize={24}/>
                </div>
                <FaBed color="#8b9aad" fontSize={24}/>
                {
                    showBed &&
                    <div className={`border border-searchbox_border bg-white w-full h-24 absolute right-0 rounded z-20 p-1 top-16`}>
                        <ul>
                            <li className='hover:bg-blue-600 hover:text-white'>1</li>
                            <li className='hover:bg-blue-600 hover:text-white'>2</li>
                            <li className='hover:bg-blue-600 hover:text-white'>3</li>
                            <li className='hover:bg-blue-600 hover:text-white'>4</li>
                        </ul>
                    </div>
                }
            </div>
            <div onClick={()=>changeModalsPickersHandler(1)} className='relative border border-searchbox_border rounded w-full h-14 flex flex-row justify-around items-center cursor-pointer px-2 mb-4'>
                <div className='w-full h-14 flex flex-row items-center justify-between ml-2'>
                    <span>حمام</span>
                    <RiArrowDropDownFill color="#8b9aad" fontSize={24}/>
                </div>
                <FaBath color="#8b9aad" fontSize={24}/>
                {
                    showBath &&
                    <div className={`border border-searchbox_border bg-white w-full h-16 absolute right-0 rounded z-30 p-1 top-16`}>
                        <ul className='space-y-2'>
                            <li className='hover:bg-blue-600 hover:text-white'>دارد</li>
                            <li className='hover:bg-blue-600 hover:text-white'>ندارد</li>
                        </ul>
                    </div>
                }
            </div>
            <div onClick={()=>changeModalsPickersHandler(3)} className='relative border border-searchbox_border rounded w-full h-14 flex flex-row justify-around items-center cursor-pointer px-2'>
                <div className='w-full h-14 flex flex-row items-center justify-between ml-2'>
                    <span>نوع ملک</span>
                    <RiArrowDropDownFill color="#8b9aad" fontSize={24}/>
                </div>
                <TfiBriefcase color="#8b9aad" fontSize={24}/>
                {
                    showProperty &&
                    <div className={`border border-searchbox_border bg-white w-full h-24 absolute right-0 rounded z-30 p-1 top-16 overflow-y-scroll`}>
                        <ul>
                            {
                                prpertytype.map((x,index)=><li className="w-full h-6 mb-2">{x.name}</li>)
                            }
                        </ul>
                    </div>
                }
            </div>
            <div className='w-full my-8'>
                <span>قیمت</span>
                <RangeSlider size={5} thumbSize={13} mt="md" radius='lg' defaultValue={[20, 80]} 
                  styles={{ bar:{backgroundColor:'#00ba74'},thumb: { backgroundColor:'#00ba74',borderColor:'#00ba74',cursor:'ew-resize'} }}
                />
            </div>
            <div className='w-full my-6'>
                <span>متراژ</span>
                <RangeSlider size={5} thumbSize={13} mt="md" radius='lg' defaultValue={[20, 80]} color='#00ba74'
                  styles={{ bar:{backgroundColor:'#00ba74'},thumb: { backgroundColor:'#00ba74',borderColor:'#00ba74',cursor:'ew-resize'} }}
                />
            </div>
            <button onClick={changeShowAdvancedSearchHandler} className='flex flex-row items-center mt-4 mb-6'>
                <span className='bg-black text-white ml-2 pt-0.5 rounded-full w-8 h-8 flex justify-center items-center text-3xl'>{showAdvancedSearch === true ? "-":"+"}</span>
                <span>جستجوی پیشرفته</span>
            </button>
            <div className={`w-full overflow-hidden transition-all duration-300 ease-in-out ${showAdvancedSearch === true ? "h-72" : "h-0"}`}>
                <div className='w-full flex flex-row items-center mb-2'>
                    <input id='lift' type='checkbox' className='accent-redTheme ml-2'/>
                    <label form='lift' className='cursor-pointer'>آسانسور</label>
                </div>
                <div className='w-full flex flex-row items-center mb-2'>
                    <input id='storage' type='checkbox' className='accent-redTheme ml-2'/>
                    <label form='storage' className='cursor-pointer'>انباری</label>
                </div>
                <div className='w-full flex flex-row items-center mb-2'>
                    <input id='seperate' type='checkbox' className='accent-redTheme ml-2'/>
                    <label form='seperate' className='cursor-pointer'>راه جدا</label>
                </div>
                <div className='w-full flex flex-row items-center mb-2'>
                    <input id='yard' type='checkbox' className='accent-redTheme ml-2'/>
                    <label form='yard' className='cursor-pointer'>حیاط</label>
                </div>
                <div className='w-full flex flex-row items-center mb-2'>
                    <input id='pool' type='checkbox' className='accent-redTheme ml-2'/>
                    <label form='pool' className='cursor-pointer'>استخر</label>
                </div>
                <div className='w-full flex flex-row items-center mb-2'>
                    <input id='loan' type='checkbox' className='accent-redTheme ml-2'/>
                    <label form='loan' className='cursor-pointer'>وام</label>
                </div>
                <div className='w-full flex flex-row items-center mb-2'>
                    <input id='cooler' type='checkbox' className='accent-redTheme ml-2'/>
                    <label form='cooler' className='cursor-pointer'>کولر</label>
                </div>
                <div className='w-full flex flex-row items-center mb-2'>
                    <input id='heating' type='checkbox' className='accent-redTheme ml-2'/>
                    <label form='heating' className='cursor-pointer'>گرمایش</label>
                </div>
                <div className='w-full flex flex-row items-center'>
                    <input id='parking' type='checkbox' className='accent-redTheme ml-2'/>
                    <label form='parking' className='cursor-pointer'>پارکینگ</label>
                </div>
            </div>
            <button className='h-12 w-full bg-greenTheme rounded text-white'>جستجو</button>
        </div>       
    </div>);
}


/**
 

 {
            (showBath || showBed || showProperty) && <div onClick={()=>changeModalsPickersHandler(0)} className='absolute inset-0 z-20'/>
        }
        <div className="w-full flex flex-col overflow-y-scroll">
            <div className="w-full flex flex-row items-center justify-between lg:hidden mb-4">
                <span>بستن فیلتر</span>
                <button onClick={closeAdvanceFilter}><VscClose color="#72809D" fontSize={28}/></button>
            </div>
            <hr className='w-full lg:hidden mb-4'/>
            <h5 className='mb-4'>ملک مورد نظر را بیابید</h5>
            <div className='w-full border border-searchbox_border rounded flex flex-row justify-between items-center px-2 py-1 mb-4'>
                <input placeholder="استان" className="w-full ml-2 focus:outline-none text-gray-700 h-12"/>
                <IoSearchOutline color="#8b9aad" fontSize={24}/>
            </div>
            <div className='w-full border border-searchbox_border rounded flex flex-row justify-between items-center px-2 py-1 mb-4'>
                <input placeholder="شهر" className="w-full ml-2 focus:outline-none text-gray-700 h-12"/>
                <IoSearchOutline color="#8b9aad" fontSize={24}/>
            </div>
            <div className='grid grid-cols-2 gap-4 mb-4'>
                <div className='col-span-1 border border-searchbox_border rounded flex flex-row justify-between items-center px-1 py-1'>
                    <input type='number' placeholder='حداقل قیمت' className='w-full ml-1 focus:outline-none text-gray-700 h-12'/>
                    <BiDollar color="#8b9aad" fontSize={24}/>
                </div>
                <div className='col-span-1 border border-searchbox_border rounded flex flex-row justify-between items-center px-1 py-1'>
                    <input type='number' placeholder='حداکثر قیمت' className='w-full ml-1 focus:outline-none text-gray-700 h-12'/>
                    <BiDollar color="#8b9aad" fontSize={24}/>
                </div>
            </div>
            <div onClick={()=>changeModalsPickersHandler(2)} className='relative border border-searchbox_border rounded w-full h-14 flex flex-row justify-around items-center cursor-pointer px-2 mb-4'>
                <div className='w-full h-14 flex flex-row items-center justify-between ml-2'>
                    <span>اتاق خواب</span>
                    <RiArrowDropDownFill color="#8b9aad" fontSize={24}/>
                </div>
                <FaBed color="#8b9aad" fontSize={24}/>
                {
                    showBed &&
                    <div className={`border border-searchbox_border bg-white w-full h-24 absolute right-0 rounded z-20 p-1 top-16`}>
                        <ul>
                            <li>1</li>
                            <li>2</li>
                            <li>3</li>
                            <li>4</li>
                        </ul>
                    </div>
                }
            </div>
            <div onClick={()=>changeModalsPickersHandler(1)} className='relative border border-searchbox_border rounded w-full h-14 flex flex-row justify-around items-center cursor-pointer px-2 mb-4'>
                <div className='w-full h-14 flex flex-row items-center justify-between ml-2'>
                    <span>حمام</span>
                    <RiArrowDropDownFill color="#8b9aad" fontSize={24}/>
                </div>
                <FaBath color="#8b9aad" fontSize={24}/>
                {
                    showBath &&
                    <div className={`border border-searchbox_border bg-white w-full h-24 absolute right-0 rounded z-30 p-1 top-16`}>
                        <ul>
                            <li>1</li>
                            <li>2</li>
                            <li>3</li>
                            <li>4</li>
                        </ul>
                    </div>
                }
            </div>
            <div onClick={()=>changeModalsPickersHandler(3)} className='relative border border-searchbox_border rounded w-full h-14 flex flex-row justify-around items-center cursor-pointer px-2'>
                <div className='w-full h-14 flex flex-row items-center justify-between ml-2'>
                    <span>نوع ملک</span>
                    <RiArrowDropDownFill color="#8b9aad" fontSize={24}/>
                </div>
                <TfiBriefcase color="#8b9aad" fontSize={24}/>
                {
                    showProperty &&
                    <div className={`border border-searchbox_border bg-white w-full h-24 absolute right-0 rounded z-30 p-1 top-16`}>
                        <ul>
                            {
                                prpertytype.map((x,index)=><li className="w-full h-6 mb-2">{x.name}</li>)
                            }
                        </ul>
                    </div>
                }
            </div>
            <div className='w-full my-8'>
                <span>قیمت</span>
                <RangeSlider size={5} thumbSize={13} mt="md" radius='lg' defaultValue={[20, 80]} 
                  styles={{ bar:{backgroundColor:'#00ba74'},thumb: { backgroundColor:'#00ba74',borderColor:'#00ba74',cursor:'ew-resize'} }}
                />
            </div>
            <div className='w-full my-6'>
                <span>متراژ</span>
                <RangeSlider size={5} thumbSize={13} mt="md" radius='lg' defaultValue={[20, 80]} color='#00ba74'
                  styles={{ bar:{backgroundColor:'#00ba74'},thumb: { backgroundColor:'#00ba74',borderColor:'#00ba74',cursor:'ew-resize'} }}
                />
            </div>
            <button onClick={changeShowAdvancedSearchHandler} className='flex flex-row items-center mt-4 mb-6'>
                <span className='bg-black text-white ml-2 rounded-full w-7 h-7 flex justify-center items-center text-3xl'>{showAdvancedSearch === true ? "-":"+"}</span>
                <span>جستجوی پیشرفته</span>
            </button>
            <div className={`w-full overflow-hidden transition-all duration-300 ease-in-out ${showAdvancedSearch === true ? "h-36" : "h-0"}`}>
                <div>gffgfhyh</div>
                <div>fhfy</div>
                <div>hyh</div>
                <div>fhdf</div>
                <div>hf</div>
            </div>
            <button className='h-12 w-full bg-greenTheme rounded text-white'>جستجو</button>
        </div>




 */