import Head from "next/head";
import ListingHeaders from '../../component/listing/listingheader';
import Pagination from '../../component/listing/pagination';
import PropertiesList from '../../component/listing/propertieslist';
import AdvanceSearch from '../../component/listing/advancesearch';
import {FiFilter} from 'react-icons/fi';
import { useState } from "react";
import {GET_ADS_LIST} from "../../siteconfig/constant"
import axios from "axios";

export async function getServerSideProps(context) {
    let result;
    var facility = [];
    let rooms = -1;
    let page = 1;
    let totalADs = 0;
    let totalPage = 0;
    const path = context?.params.slug;

    let reqURL = "";
    if(path.length === 2){
        if(path[0] === "املاک"){
            reqURL = GET_ADS_LIST + path[1].replaceAll("-", " ");
        }else{
            reqURL = GET_ADS_LIST + path[1].replaceAll("-", " ") + "&buildingTypeName=" + path[0].replaceAll("-", " ");
        }
        result = await axios.get(reqURL);
    }else if(path.length === 3){
        if(path[0] === "املاک"){
            reqURL = GET_ADS_LIST + path[2].replaceAll("-", " ") + "&neibourhoodName=" + path[1].replaceAll("-", " ");
        }else{
            reqURL = GET_ADS_LIST + path[2].replaceAll("-", " ") + "&buildingTypeName=" + path[0].replaceAll("-", " ") + "&neibourhoodName=" + path[1].replaceAll("-", " ");
        }
        result = await axios.get(reqURL);
    }
    let propertyList = result.data;
    if(context.query.rooms !== null && context.query.rooms !== undefined){
        rooms = Number(context.query.rooms);
        propertyList = propertyList.filter(x=> x.rooms === rooms);
    }
    if(context.query.page !== null && context.query.page !== undefined){
        page = Number(context.query.page)
    }
    if(context.query?.facility !== null && context.query?.facility !== undefined){
        facility = context.query.facility?.split("-");
    }
    if(facility?.some(x=>x === "loan")){
        propertyList = propertyList.filter(x=> x.facility.loan !== null)
    }
    if(facility?.some(x=>x === "bath")){
        propertyList = propertyList.filter(x=> (x.facility.bathroom !== null || x.facility.bath !== null))
    }
    if(facility?.some(x=>x === "heating")){
        propertyList = propertyList.filter(x=> x.facility.heatingSystem !== null)
    }
    if(facility?.some(x=>x === "cooling")){
        propertyList = propertyList.filter(x=> x.facility.cooler !== null)
    }
    if(facility?.some(x=>x === "lift")){
        propertyList = propertyList.filter(x=> x.lift !== null)
    }
    if(facility?.some(x=>x === "parking")){
        propertyList = propertyList.filter(x=> (x.parking !== null && x.parking !== 'ندارد'))
    }
    if(facility?.some(x=>x === "pool")){
        propertyList = propertyList.filter(x=> x.pool !== null)
    }
    if(facility?.some(x=>x === "storage")){
        propertyList = propertyList.filter(x=> x.storage !== null)
    }
    if(facility?.some(x=>x === "seperate")){
        propertyList = propertyList.filter(x=> x.seprate !== null)
    }
    if(facility?.some(x=>x === "yard")){
        propertyList = propertyList.filter(x=> x.yard !== null)
    }
    totalADs = propertyList.length;
    if(  propertyList.length === 0){
        totalPage = 0;
        page = 0;
    }else if(propertyList.length > 10){
        totalPage = Math.ceil(propertyList.length/10);
        propertyList = propertyList.slice(((page*10)-10),(page*10));
        propertyList.sort(x=>Math.random() - 0.5)
    }
    return {
      props: {
        adsList:propertyList,
        totalAds:totalADs,
        totalPages:totalPage,
        currentPage:page
      }
    }
}

export default function Listing({adsList,totalAds,totalPages,currentPage}){
    const [showFilter,setShowFilter]=useState(false);

    const openFilterHandler=()=>{setShowFilter(true)}
    const closeFilterHadnler=()=>{setShowFilter(false)}

    return(<>
        <Head>
            <title>جستجوی ملک</title>
        </Head>
        <main>
            <ListingHeaders/>
            <div className="w-full sm:container px-6 pt-20 mx-auto grid grid-cols-3 gap-8">
                <button onClick={openFilterHandler} className="col-span-full lg:hidden text-white rounded h-14 mt-14 mb-2 flex flex-row items-center justify-center bg-listingFilter">
                    <span className="ml-2">فیلتر</span>
                    <FiFilter color="#fff" fontSize={24}/>
                </button>
                <AdvanceSearch showOnMobile={showFilter} closeAdvanceFilter={closeFilterHadnler}/>
                <PropertiesList adsList={adsList} totalAds={totalAds}/>
            </div>
            {
                totalPages !== 0 &&
                <Pagination currentPage={currentPage} numPages={totalPages} basePath={'/search'}/>
            }
        </main>
    </>);
}