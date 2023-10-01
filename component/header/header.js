import Image from "next/image";
import Link from "next/link";
import {RxHamburgerMenu} from "react-icons/rx" 
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

const Header = ({ toggle }) => {
  const [ScrollNav, setScrollNav] = useState(false);
  const router=useRouter();
  const [activeItem,setActiveItem]=useState(Array(6).fill(false));
  
  const listenToScroll = () => {
    let heightToHideFrom = 75;
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    if (winScroll > heightToHideFrom) {
      document.body.style.paddingTop= "80px"
      setScrollNav(true);
    } else {
      setScrollNav(false);
      document.body.style.paddingTop= "0px"
    }
  };

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
  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
    return () =>
       window.removeEventListener("scroll", listenToScroll);
  }, []);

  return (
    <header className={`w-screen h-20 overflow-y-hidden flex flex-col z-30 items-center justify-center shadow-header bg-white text-sm ${ScrollNav === true ?  "fixed top-0 animate-sticked-header":""}`}>
      <div className="relative w-full content-center z-10">
        <div className="px-4 py-3 sm:container mx-auto grid grid-cols-4 lg:grid-cols-10 gap-2 max-w-6xl justify-center items-center">
          <div onClick={toggle} className="lg:hidden">
            <RxHamburgerMenu color="#8b9aad" size={26}/>
          </div>
          <div className="col-span-2 col-start-2 lg:col-start-1 flex flex-col justify-center items-center lg:items-start ">
            <Link href="/" className="cursor-pointer">
              <Image src="/logo-header.png" alt="site-logo" width={200} height={50}/>
            </Link>
          </div>
          <ul className="hidden lg:flex flex-row justify-start items-center col-span-8 list-none navmenu text-header_text">
            <li className="ml-8">
              <Link href="/" className={`flex flex-row items-center cursor-pointer active:text-greenTheme hover:text-greenTheme ${activeItem[0] === true ? "text-greenTheme" : ""}`}>صفحه اصلی</Link>
            </li>
            <li className="ml-8">
              <Link href="/" className={`flex flex-row items-center cursor-pointer active:text-greenTheme hover:text-greenTheme ${activeItem[1] === true ? "text-greenTheme" : ""}`}>مشاورین املاک</Link>
            </li>
            <li className="ml-8">
              <Link href="/" className={`flex flex-row items-center cursor-pointer active:text-greenTheme hover:text-greenTheme ${activeItem[2] === true ? "text-greenTheme" : ""}`}>خدمات</Link>
            </li>
            <li className="ml-8">
              <Link href="/" className={`flex flex-row items-center cursor-pointer active:text-greenTheme hover:text-greenTheme ${activeItem[3] === true ? "text-greenTheme" : ""}`}>وبلاگ</Link>
            </li>
            <li className="ml-8">
              <Link href="/about-us" className={`flex flex-row items-center cursor-pointer active:text-greenTheme hover:text-greenTheme ${activeItem[4] === true ? "text-greenTheme" : ""}`}>درباره ما</Link>
            </li>
            <li className="ml-8">
              <Link href="/contact-us" className={`flex flex-row items-center cursor-pointer active:text-greenTheme hover:text-greenTheme ${activeItem[5] === true ? "text-greenTheme" : ""}`}>تماس با ما</Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;