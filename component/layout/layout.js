import { useRouter } from "next/router";
import Footer from "../footer/footer";
import Header from "../header/header";
import TopHeader from "../top-header/topHeader";

export default function Layout(props) {
  const router = useRouter();
  if(router.pathname === "/"){
    return (
      <div className="w-full overflow-x-hidden">
        <TopHeader/>
        <Header />
        {props.children}
        <Footer />
      </div>
    );
  }else{
    return (
      <div className="w-full overflow-x-hidden">
        <Header />
        {props.children}
        <Footer />
      </div>
    );
  }

}

