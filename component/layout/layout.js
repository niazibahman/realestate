import { useRouter } from "next/router";
import Footer from "../footer/footer";
import Header from "../header/header";
import TopHeader from "../top-header/topHeader";
import BackDrop from "../backdrop/backdrop";
import {useState} from "react";
import SideMenu from "../sidemenu/sidemenu";

export default function Layout(props) {
  const router = useRouter();
  const [showSideMenu,setShowSideMenu]=useState(false);

  const changeShowSideMenuHandler=()=>{
    setShowSideMenu(!showSideMenu);
  }

  if(router.pathname === "/"){
    return (
      <div className="w-full overflow-x-hidden">
        {<BackDrop click={changeShowSideMenuHandler} show={showSideMenu}/>}
        <TopHeader/>
        <Header toggle={changeShowSideMenuHandler}/>
        <SideMenu closeMenu={changeShowSideMenuHandler} show={showSideMenu}/>
        {props.children}
        <Footer />
      </div>
    );
  }else{
    return (
      <div className="w-full overflow-x-hidden">
        {<BackDrop click={changeShowSideMenuHandler} show={showSideMenu}/>}
        <Header toggle={changeShowSideMenuHandler}/>
        <SideMenu closeMenu={changeShowSideMenuHandler} show={showSideMenu}/>
        {props.children}
        <Footer />
      </div>
    );
  }

}

