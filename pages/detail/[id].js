import Head from "next/head";
import Flicking from "@egjs/react-flicking";
import "@egjs/react-flicking/dist/flicking.css";

export async function getServerSideProps(context) {
    return {
        props: {
        }
    }
}

export default function Detail(){

    return(
    <>
    <Head>
        <title>جزئیات آگهی</title>
    </Head>
    <main>
        <section className="w-screen grid grid-cols-12 gap-0">
            <div className="col-span-full md:col-span-7 md:col-start-6">
            <Flicking resizeOnContentsReady={false} renderOnSameKey={false} align="center" horizontal={true} circular={true}>
              <img src="/p-1.webp" alt="1" className="w-full h-full object-cover"/>
              <img src="/p-2.webp" alt="1" className="w-full h-full object-cover"/>
              <img src="/p-3.webp" alt="1" className="w-full h-full object-cover"/>
              <img src="/p-4.webp" alt="1" className="w-full h-full object-cover"/>
              <img src="/p-5.webp" alt="1" className="w-full h-full object-cover"/>
              <img src="/p-6.webp" alt="1" className="w-full h-full object-cover"/>
            </Flicking>
            </div>
            <div className="col-span-full md:col-span-5 md:row-start-1"></div>
            <div className="col-span-full md:col-span-full"></div>
        </section>
    </main>
    </>
    );
}