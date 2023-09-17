import Facility from "./facility";

export default function Ameneties({facility}){
    return(
        <div className="w-full bg-white rounded border border-detailBorder px-10 pb-10 pt-4">
            <h2 className="font-semibold">امکانات</h2>
            <hr className="my-2"/>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-0 gap-y-4">
                {facility.parking !==null ? <Facility title={facility.parking}/>:null}
                {facility.kitchenUnit !==null ? <Facility title={"کابینت "+facility.kitchenUnit}/>:null}
                {facility.flooring !==null ? <Facility title={"کفپوش "+facility.flooring}/>:null}
                {facility.heatingSystem !==null ? <Facility title={facility.heatingSystem}/>:null}
                {facility.lift !==null ? <Facility title={"آسانسور"}/>:null}
                {facility.storage !==null ? <Facility title={"انباری"}/>:null}
                {facility.teras !==null ? <Facility title={"تراس"}/>:null}
                {facility.wallCupboard !==null ? <Facility title={"کمد دیواری"}/>:null}
                {facility.yard !==null ? <Facility title={"حیاط"}/>:null}
                {facility.separate !==null ? <Facility title={"راه جدا"}/>:null}
                {facility.water !==null ? <Facility title={"آب"}/>:null}
                {facility.electricity !==null ? <Facility title={"برق"}/>:null}
                {facility.gas !==null ? <Facility title={"گاز"}/>:null}
                {facility.landLine !==null ? <Facility title={"تلفن"}/>:null}
                {facility.cooler !==null ? <Facility title={"کولر"}/>:null}
                {facility.securityDoor !==null ? <Facility title={"درب ضد سرقت"}/>:null}
                {facility.fireAlarm !==null ? <Facility title={"اعلام حریق"}/>:null}
                {facility.cctv !==null ? <Facility title={"دوربین مدار بسته"}/>:null}
                {facility.intruderAlarm !==null ? <Facility title={"اعلام سرقت"}/>:null}
                {facility.iphone !==null ? <Facility title={"آیفون"}/>:null}
                {facility.remoteDoor !==null ? <Facility title={"درب ریموتی"}/>:null}
                {facility.lightning !==null ? <Facility title={"نورگیر"}/>:null}
                {facility.curtain !==null ? <Facility title={"پرده"}/>:null}
                {facility.wallpaper !==null ? <Facility title={"کاغذ دیواری"}/>:null}
                {facility.toilet !==null ? <Facility title={"دستشویی"}/>:null}
                {facility.toiletWc !==null ? <Facility title={"دستشویی فرنگی"}/>:null}
                {facility.bathroom !==null ? <Facility title={"حمام"}/>:null}
                {facility.bath !==null ? <Facility title={"وان حمام"}/>:null}
                {facility.swimmingPool !==null ? <Facility title={"استخر"}/>:null}
                {facility.sauna !==null ? <Facility title={"سونا"}/>:null}
                {facility.jacuzzi !==null ? <Facility title={"جکوزی"}/>:null}
                {facility.gym !==null ? <Facility title={"سالن ورزشی"}/>:null}
                {facility.lobby !==null ? <Facility title={"لابی"}/>:null}
                {facility.duplex !==null ? <Facility title={"دوبلکس"}/>:null}
                {facility.fireplace !==null ? <Facility title={"شومینه"}/>:null}
                {facility.shooting !==null ? <Facility title={"شوتینگ"}/>:null}
                {facility.fountain !==null ? <Facility title={"آبنما"}/>:null}
                {facility.penthouse !==null ? <Facility title={"پنت هاوس"}/>:null}
                {facility.loan !==null ? <Facility title={"وام"}/>:null}
                {facility.waterWarmer !==null ? <Facility title={"آبگرمکن"}/>:null}
                {facility.package !==null ? <Facility title={"پکیج"}/>:null}
                {facility.centralHeating !==null ? <Facility title={"گرمایش مرکزی"}/>:null}
            </div>
        </div>
    );
}