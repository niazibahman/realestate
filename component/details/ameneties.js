import Facility from "./facility";

export default function Ameneties({facility}){
    return(
        <div className="w-full bg-white rounded border border-detailBorder px-10 pb-10 pt-4">
            <h2 className="font-semibold text-textColorH">امکانات</h2>
            <hr className="my-2"/>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-0 gap-y-4 text-textColorBase">
                {facility.parking !==null ? <Facility title={"پارکینگ "+facility.parking}/>:null}
                {facility.kitchenUnit !==null ? <Facility title={"کابینت "+facility.kitchenUnit}/>:null}
                {facility.flooring !==null ? <Facility title={"کفپوش "+facility.flooring}/>:null}
                {facility.heatingSystem !==null ? <Facility title={facility.heatingSystem}/>:null}
                {facility.lift === true ? <Facility title={"آسانسور"}/>:null}
                {facility.storage === true ? <Facility title={"انباری"}/>:null}
                {facility.teras === true ? <Facility title={"تراس"}/>:null}
                {facility.wallCupboard === true ? <Facility title={"کمد دیواری"}/>:null}
                {facility.yard === true ? <Facility title={"حیاط"}/>:null}
                {facility.separate === true ? <Facility title={"راه جدا"}/>:null}
                {facility.water === true ? <Facility title={"آب"}/>:null}
                {facility.electricity === true ? <Facility title={"برق"}/>:null}
                {facility.gas === true ? <Facility title={"گاز"}/>:null}
                {facility.landLine === true ? <Facility title={"تلفن"}/>:null}
                {facility.cooler === true ? <Facility title={"کولر"}/>:null}
                {facility.securityDoor === true ? <Facility title={"درب ضد سرقت"}/>:null}
                {facility.fireAlarm === true ? <Facility title={"اعلام حریق"}/>:null}
                {facility.cctv === true ? <Facility title={"دوربین مدار بسته"}/>:null}
                {facility.intruderAlarm === true ? <Facility title={"اعلام سرقت"}/>:null}
                {facility.iphone === true ? <Facility title={"آیفون"}/>:null}
                {facility.remoteDoor === true ? <Facility title={"درب ریموتی"}/>:null}
                {facility.lightning === true ? <Facility title={"نورگیر"}/>:null}
                {facility.curtain === true ? <Facility title={"پرده"}/>:null}
                {facility.wallpaper === true ? <Facility title={"کاغذ دیواری"}/>:null}
                {facility.toilet === true ? <Facility title={"دستشویی"}/>:null}
                {facility.toiletWc === true ? <Facility title={"دستشویی فرنگی"}/>:null}
                {facility.bathroom === true ? <Facility title={"حمام"}/>:null}
                {facility.bath === true ? <Facility title={"وان حمام"}/>:null}
                {facility.swimmingPool === true ? <Facility title={"استخر"}/>:null}
                {facility.sauna === true ? <Facility title={"سونا"}/>:null}
                {facility.jacuzzi === true ? <Facility title={"جکوزی"}/>:null}
                {facility.gym === true ? <Facility title={"سالن ورزشی"}/>:null}
                {facility.lobby === true ? <Facility title={"لابی"}/>:null}
                {facility.duplex === true ? <Facility title={"دوبلکس"}/>:null}
                {facility.fireplace === true ? <Facility title={"شومینه"}/>:null}
                {facility.shooting === true ? <Facility title={"شوتینگ"}/>:null}
                {facility.fountain === true ? <Facility title={"آبنما"}/>:null}
                {facility.penthouse === true ? <Facility title={"پنت هاوس"}/>:null}
                {facility.loan === true ? <Facility title={"وام"}/>:null}
                {facility.waterWarmer === true ? <Facility title={"آبگرمکن"}/>:null}
                {facility.package === true ? <Facility title={"پکیج"}/>:null}
                {facility.centralHeating === true ? <Facility title={"گرمایش مرکزی"}/>:null}
            </div>
        </div>
    );
}