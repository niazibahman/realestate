import Head from "next/head";
import ListingHeaders from '../../component/listing/listingheader';
import Pagination from '../../component/listing/pagination';
import PropertiesList from '../../component/listing/propertieslist';
import AdvanceSearch from '../../component/listing/advancesearch';
import {FiFilter} from 'react-icons/fi';
import { useEffect, useState } from "react";
import {GET_ADS_LIST} from "../../siteconfig/constant"
import axios from "axios";

export async function getServerSideProps(context) {
    let result;
    let facility = [];
    let rooms = -1;
    let page = 1;
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
    if(context.query.rooms !== null){
        rooms = Number(context.query.rooms);
        console.log(rooms)
    }
    if(context.query.facility !== null){
        facility = context.query.facility.split("-");
    }
    
    //console.log(result.data.filter(x=>x.lift === true))
    return {
      props: {}
    }
}

export default function Listing(){
    const [showFilter,setShowFilter]=useState(false);

    const openFilterHandler=()=>{setShowFilter(true)}
    const closeFilterHadnler=()=>{setShowFilter(false)}

    return(<>
        <Head>
            <title>Listing Page</title>
        </Head>
        <main>
            <ListingHeaders/>
            <div className="w-full sm:container px-6 pt-20 mx-auto grid grid-cols-3 gap-8">
                <button onClick={openFilterHandler} className="col-span-full lg:hidden text-white rounded h-14 mt-14 mb-2 flex flex-row items-center justify-center bg-listingFilter">
                    <span className="ml-2">فیلتر</span>
                    <FiFilter color="#fff" fontSize={24}/>
                </button>
                <AdvanceSearch showOnMobile={showFilter} closeAdvanceFilter={closeFilterHadnler}/>
                <PropertiesList/>
            </div>
            <Pagination currentPage={25} numPages={65} basePath={'/search'}/>
        </main>
    </>);
}