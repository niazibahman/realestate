import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import {GrClose} from "react-icons/gr";

export default function SideMenu({show,closeMenu}){
    const router=useRouter();
    const [activeItem,setActiveItem]=useState(Array(6).fill(false));
    useEffect(()=>{
        const tempItem = [...activeItem];
        switch (router.pathname) {
            case "/":
                tempItem[0]=true;
                setActiveItem([...tempItem]);
                break;
            default:
                break;
        }
    },[router]);
    return(
    <div className={`fixed inset-y-0 right-0 overflow-hidden bg-white z-40 lg:hidden w-3/5 max-w-sm transition-all duration-300 ${show === true ? "translate-x-0" : "translate-x-full"}`}>
        <div className="w-full h-full overflow-y-auto py-3">
            <div className="w-full flex flex-row items-center justify-end px-3 mb-3">
                <button aria-label="closeMenu" onClick={closeMenu}><GrClose color="#72809D" size={26}/></button>
            </div>
            <hr/>
            <ul className="w-full text-header_text">
                <li>
                    <Link href={'/'} className="w-full"><p className={`w-full px-3 my-3 active:text-greenTheme hover:text-greenTheme ${activeItem[0] === true ? "text-greenTheme" : ""}`}>صفحه اصلی</p></Link>
                </li>
                <hr/>
                <li>
                    <Link href={'/'} className="w-full"><p className={`w-full px-3 my-3 active:text-greenTheme hover:text-greenTheme ${activeItem[1] === true ? "text-greenTheme" : ""}`}>مشاورین املاک</p></Link>
                </li>
                <hr/>
                <li>
                    <Link href={'/'} className="w-full"><p className={`w-full px-3 my-3 active:text-greenTheme hover:text-greenTheme ${activeItem[2] === true ? "text-greenTheme" : ""}`}>خدمات</p></Link>
                </li>
                <hr/>
                <li>
                    <Link href={'/'} className="w-full"><p className={`w-full px-3 my-3 active:text-greenTheme hover:text-greenTheme ${activeItem[3] === true ? "text-greenTheme" : ""}`}>وبلاگ</p></Link>
                </li>
                <hr/>
                <li>
                    <Link href={'/'} className="w-full"><p className={`w-full px-3 my-3 active:text-greenTheme hover:text-greenTheme ${activeItem[4] === true ? "text-greenTheme" : ""}`}>درباره ما</p></Link>
                </li>
                <hr/>
                <li>
                    <Link href={'/'} className="w-full"><p className={`w-full px-3 my-3 active:text-greenTheme hover:text-greenTheme ${activeItem[5] === true ? "text-greenTheme" : ""}`}>تماس با ما</p></Link>
                </li>
                <hr/>
            </ul>
        </div>
    </div>
    );
}