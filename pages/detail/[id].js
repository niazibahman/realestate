import axios from "axios";
import Head from "next/head";
import {GET_AD_DETAIL} from '../../siteconfig/constant'
import DetailSlider from "../../component/details/detailSlider";
import Description from "../../component/details/description";
import dynamic from "next/dynamic";
import LatLngExtract from "../../methods/latlngExtract";
import PriceAddress from "../../component/details/priceAddress";
import Ameneties from "../../component/details/ameneties";
import PropertyInfo from "../../component/details/propertyInfo";
import Review from "../../component/details/review";
import NearbyPlace from "../../component/details/nearbyPlace";
import WriteReview from "../../component/details/writeReview";
import AdvisorMessage from "../../component/details/advisorMessage";

export async function getServerSideProps(context) {
    const adsType = context.params.id.toString().slice(0, 3);
    const adsCode = context.params.id.toString().slice(4, context.params.id.toString().length);
    let detailDatat;
    let title='';
    let description='';
    let isSell = true;
    if (adsType == "let") {
        detailDatat =await axios.get(GET_AD_DETAIL+"letId="+adsCode);
        isSell = true;
    }
    if (adsType == "sel") {
        detailDatat = await axios.get(GET_AD_DETAIL+"sellId="+adsCode);
        isSell=false;
    }
    return {
        props: {
            dataDetail : detailDatat.data[0],
            isSell : isSell
        }
    }
}

export default function Detail({dataDetail,isSell}){
    const MapWithNoSSR = dynamic(() => import('../../component/details/map'), {
        ssr: false,
    })
    return(
    <>
    <Head>
        <title>جزئیات آگهی</title>
    </Head>
    <main className="bg-detail_bg outline-none">
        <section className="w-screen lg:container mx-auto grid grid-cols-12 gap-0 py-20 space-y-4">
            <div className="col-span-full lg:col-span-8 lg:col-start-5 mx-6"><PriceAddress property={dataDetail}/></div>
            <div className="col-span-full lg:col-span-8 lg:col-start-5 mx-6"><DetailSlider photos={dataDetail.photos} slug={dataDetail.slug}/></div>
            <div className="col-span-full lg:col-span-8 lg:col-start-5 mx-6"><PropertyInfo property={dataDetail}/></div>
            <div className="col-span-full lg:col-span-8 lg:col-start-5 mx-6"><Description description={dataDetail.description}/></div>
            <div className="col-span-full lg:col-span-8 lg:col-start-5 mx-6"><Ameneties facility={dataDetail.facility}/></div>
            <div className="col-span-full lg:col-span-8 lg:col-start-5 mx-6"><MapWithNoSSR latlng={LatLngExtract(dataDetail.coordinate)}/></div>
            <div className="col-span-full lg:col-span-8 lg:col-start-5 mx-6"><Review/></div>
            <div className="col-span-full lg:col-span-8 lg:col-start-5 mx-6"><NearbyPlace/></div>
            <div className="col-span-full lg:col-span-8 lg:col-start-5 mx-6"><WriteReview/></div>
            <div className="col-span-full lg:col-span-4 lg:row-span-6 lg:row-start-1 mx-6 flex flex-col">
                <div className="w-full"><AdvisorMessage/></div>
                <div className="w-full">12</div>
                <div className="w-full">13</div>
            </div>
        </section>
    </main>
    </>
    );
}