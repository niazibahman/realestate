import Image from "next/image";
import Link from "next/link";
import {VscLocation} from "react-icons/vsc";
import Seperator from "../../methods/seperator";

export default function FeatureAdCard({property}){
    return(
        <div className="w-full p-4 bg-white rounded border border-detailBorder flex flex-row items-center mb-4">
            <Image src={property.photos[0]} alt={property.slug} width={100} height={130} className="rounded object-cover"/>
            <div className="w-full flex flex-col justify-between mr-3">
                <Link href={property.issell === true ? ("/detail/sel-" + property.sellId) : ("/detail/let-" + property.letId)}>
                    <h4 className="text-textColorH mb-0.5">{property.slug}</h4>
                </Link>
                <div className="w-full flex flex-row items-center">
                    <VscLocation color="#72809D" fontSize={18}/>
                    <span className="mr-1 text-sm text-textColorBase">{property.address.main !== null ? property.address.main + " " + (property.address.detail !== null ? property.address.detail :""): property.neighbourhoodName + "،" + property.cityName}</span>
                </div>
                <div className="w-full flex flex-row items-center justify-between py-2">
                    <span className={`w-14 py-1 text-center text-sm rounded-xl ${property.issell === true ? "text-detailFeatureAdSell bg-detailFeatureAdSell bg-opacity-10":"text-detailFeatureAdRent bg-detailFeatureAdRent bg-opacity-10"}`}>{property.issell === true ?"فروش":"اجاره"}</span>
                    <span className="text-textColorH font-semibold">{property.issell ===true ? Seperator(property.price):Seperator(property.rent)} تومان</span>
                </div>
            </div>
        </div>
    );
}