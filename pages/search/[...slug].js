import Head from "next/head";
import ListingHeaders from '../../component/listing/listingheader';
import Pagination from '../../component/listing/pagination';
import PropertiesList from '../../component/listing/propertieslist';
import AdvanceSearch from '../../component/listing/advancesearch';
import {FiFilter} from 'react-icons/fi';
import { useEffect, useState } from "react";

export async function getServerSideProps(context) {
    return {
      props: {}
    }
}

export default function Listing(){
    const [showFilter,setShowFilter]=useState(false);

    const openFilterHandler=()=>{setShowFilter(true)}
    const closeFilterHadnler=()=>{setShowFilter(false)}

    useEffect(()=>{
        if(showFilter === true){

        }
    },[showFilter]);

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