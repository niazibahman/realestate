import axios from "axios";
import Head from "next/head";
import {GET_AD_DETAIL} from '../../siteconfig/constant'
import DetailSlider from "../../component/details/detailSlider";

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
    return(
    <>
    <Head>
        <title>جزئیات آگهی</title>
    </Head>
    <main>
        <section className="w-screen lg:container mx-auto grid grid-cols-12 gap-0 py-20 space-y-4">
            <div className="col-span-full lg:col-span-8 lg:col-start-5 mx-4">1</div>
            <div className="col-span-full lg:col-span-8 lg:col-start-5 mx-4"><DetailSlider photos={dataDetail.photos} slug={dataDetail.slug}/></div>
            <div className="col-span-full lg:col-span-8 lg:col-start-5 mx-4">3</div>
            <div className="col-span-full lg:col-span-8 lg:col-start-5 mx-4">4</div>
            <div className="col-span-full lg:col-span-8 lg:col-start-5 mx-4">5</div>
            <div className="col-span-full lg:col-span-8 lg:col-start-5 mx-4">6</div>
            <div className="col-span-full lg:col-span-8 lg:col-start-5 mx-4">7</div>
            <div className="col-span-full lg:col-span-8 lg:col-start-5 mx-4">8</div>
            <div className="col-span-full lg:col-span-8 lg:col-start-5 mx-4">9</div>
            <div className="col-span-full lg:col-span-8 lg:col-start-5 mx-4">10</div>
            <div className="col-span-full lg:col-span-4 lg:row-span-6 lg:row-start-1 mx-4 flex flex-col">
                <div className="w-full">11</div>
                <div className="w-full">12</div>
                <div className="w-full">13</div>
            </div>
        </section>
    </main>
    </>
    );
}