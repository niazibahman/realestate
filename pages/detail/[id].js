import axios from "axios";
import Head from "next/head";
import {GET_AD_DETAIL, GET_DETAIL_FEATURE_RENT_ADS, GET_DETAIL_FEATURE_SELL_ADS} from '../../siteconfig/constant'
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
import FindNewProperty from "../../component/details/findNewProperty";
import FeaturedProperty from "../../component/details/featuredProperty";

export async function getServerSideProps(context) {
    const adsType = context.params.id.toString().slice(0, 3);
    const adsCode = context.params.id.toString().slice(4, context.params.id.toString().length);
    let detailDatat;
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
    const [newSellAds,newRentAds]= await axios.all([    
        axios.get(GET_DETAIL_FEATURE_SELL_ADS),
        axios.get(GET_DETAIL_FEATURE_RENT_ADS),
    ]);
    return {
        props: {
            dataDetail : detailDatat.data[0],
            isSell : isSell,
            sellAds:JSON.parse(JSON.stringify(newSellAds.data)),
            rentAds:JSON.parse(JSON.stringify(newRentAds.data))
        }
    }
}

export default function Detail({dataDetail,isSell,sellAds,rentAds}){
    const MapWithNoSSR = dynamic(() => import('../../component/details/map'), {
        ssr: false,
    })
    return(
    <>
    <Head>
        <title>{dataDetail.slug}</title>
        <meta name="description" content="" />
        <meta property="og:title" content="" />
        <meta property="og:description" content="" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="" />
        <meta property="og:image" content="" />
        <meta property="og:url" content="" />
        <meta property="og:local" content="fa" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:description" content="" />
        <meta name="twitter:title" content="" />
        <link rel="canonical" href=""/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
    </Head>
    <main className="bg-detail_bg outline-none">
        <section className="w-screen lg:container mx-auto grid grid-cols-12 gap-0 py-20">
            <div className="col-span-full lg:col-span-8 lg:col-start-5 mx-6 mb-4"><PriceAddress property={dataDetail}/></div>
            <div className="col-span-full lg:col-span-8 lg:col-start-5 mx-6 mb-4"><DetailSlider photos={dataDetail.photos} slug={dataDetail.slug}/></div>
            <div className="col-span-full lg:col-span-8 lg:col-start-5 mx-6 mb-4"><PropertyInfo property={dataDetail}/></div>
            <div className="col-span-full lg:col-span-8 lg:col-start-5 mx-6 mb-4"><Description description={dataDetail.description}/></div>
            <div className="col-span-full lg:col-span-8 lg:col-start-5 mx-6 mb-4"><Ameneties facility={dataDetail.facility}/></div>
            <div className="col-span-full lg:col-span-8 lg:col-start-5 mx-6 mb-4"><MapWithNoSSR latlng={LatLngExtract(dataDetail.coordinate)}/></div>
            <div className="col-span-full lg:col-span-8 lg:col-start-5 mx-6 mb-4"><Review/></div>
            <div className="col-span-full lg:col-span-8 lg:col-start-5 mx-6 mb-4"><NearbyPlace/></div>
            <div className="col-span-full lg:col-span-8 lg:col-start-5 mx-6 mb-4"><WriteReview/></div>
            <div className="col-span-full lg:col-span-4 lg:row-span-6 lg:row-start-1 mx-6 flex flex-col">
                <div className="w-full mb-4"><AdvisorMessage/></div>
                <div className="w-full mb-4"><FindNewProperty/></div>
                <div className="w-full"><FeaturedProperty rentProperty={rentAds} sellProperty={sellAds}/></div>
            </div>
        </section>
    </main>
    </>
    );
}