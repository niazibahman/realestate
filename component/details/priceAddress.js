import {VscLocation} from "react-icons/vsc";
import Seperator from "../../methods/seperator";

export default function PriceAddress({property}){
    return(
        <div className="w-full flex flex-col">
            <h1 className="font-bold text-lg text-textColorH">{property.slug}</h1>
            <div className="w-full flex flex-row items-center mt-1">
                {
                    property.issell ===true ? 
                    (property.price === "0" ? 
                    <><span className="text-textColorH">قیمت توافقی</span><span className="bg-detail_tag rounded-sm text-sm text-white mr-3 px-3 py-1">فروش</span></>: <><span className="text-textColorBase">متری</span><span className="mr-2 font-bold text-textColorH">{ Seperator(Math.floor(Number(property.price)/property.area).toString())}</span><span className="bg-detail_tag rounded-sm text-sm text-white mr-3 px-3 py-1">فروش</span></> )
                    :
                    (property.rent === "0"  ? <><span>اجاره توافقی</span><span className="bg-detail_tag rounded-sm text-sm text-white mr-3 px-3 py-1">اجاره</span></>: <><span>ماهانه</span><span className="mr-2 font-bold text-textColorH">{Seperator(property.rent)}</span><span className="bg-detail_tag rounded-sm text-sm text-white mr-3 px-3 py-1">اجاره</span></> )
                }
            </div>
            <div className="w-full flex flex-row items-center text-textColorBase">
                <VscLocation color="#72809D" fontSize={22}/>
                <span className="mr-1">{property.address.main !== null ? property.address.main + " " + (property.address.detail !== null ? property.address.detail :""): property.neighbourhoodName + "،" + property.cityName}</span>
            </div>
        </div>
    );
}