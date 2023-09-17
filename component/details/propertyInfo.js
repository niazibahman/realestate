import Seperator from "../../methods/seperator";
import { DOCUMENT_TYPE } from "../../siteconfig/constant";

export default function PropertyInfo({property}){
    return(
        <div className="w-full bg-white rounded border border-detailBorder px-10 pb-10 pt-4">
            <h2 className="font-semibold text-textColorH">اطلاعات ملک</h2>
            <hr className="my-2"/>
            <div className="w-full grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-x-0 gap-y-4 text-property_info">
                <div className="col-span-1 flex flex-col py-1">
                    <span>نوع ملک</span>
                    <span className="text-greenTheme mt-2">{property.buildingTypeName}</span>
                </div>
                <div className="col-span-1 flex flex-col py-1">
                    <span>شهر</span>
                    <span className="text-greenTheme mt-2">{property.cityName}</span>
                </div>
                <div className="col-span-1 flex flex-col py-1">
                    <span>محله</span>
                    <span className="text-greenTheme mt-2">{property.neibourhoodName}</span>
                </div>
                <div className="col-span-1 flex flex-col py-1">
                    <span>متراژ</span>
                    <span className="text-greenTheme mt-2">{property.area + " متر"}</span>
                </div>
                <div className="col-span-1 flex flex-col py-1">
                    <span>سال ساخت</span>
                    <span className="text-greenTheme mt-2">{property.buildingAge === null ? "-" : property.buildingAge}</span>
                </div>
                <div className="col-span-1 flex flex-col py-1">
                    <span>اتاق خواب</span>
                    <span className="text-greenTheme mt-2">{property.rooms}</span>
                </div>
                <div className="col-span-1 flex flex-col py-1">
                    <span>سند</span>
                    <span className="text-greenTheme mt-2">{property.issell === true ? property.documentTypeName : DOCUMENT_TYPE[property.documentType]}</span>
                </div>
                <div className="col-span-1 flex flex-col py-1">
                    <span>{property.issell === true ? "قیمت" : "رهن"}</span>
                    <span className="text-greenTheme mt-2">{property.issell === true ? (property.price === "0" ? "توافقی":Seperator(property.price)):(property.deposit === "0" ? "توافقی" : Seperator(property.deposit))}</span>
                </div>
            </div>
        </div>
    );
}