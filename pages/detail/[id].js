import Head from "next/head";

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
        <section className="w-screen grid grid-cols-12 gap-0 py-20">
            <div className="col-span-full lg:col-span-8 lg:col-start-5 h-40 mx-4 bg-yellow-300 mb-4">1</div>
            <div className="col-span-full lg:col-span-8 lg:col-start-5 h-40 mx-4 bg-red-300 mb-4">2</div>
            <div className="col-span-full lg:col-span-8 lg:col-start-5 h-40 mx-4 bg-blue-300 mb-4">3</div>
            <div className="col-span-full lg:col-span-8 lg:col-start-5 h-40 mx-4 bg-green-300 mb-4">4</div>
            <div className="col-span-full lg:col-span-8 lg:col-start-5 h-40 mx-4 bg-orange-300 mb-4">5</div>
            <div className="col-span-full lg:col-span-8 lg:col-start-5 h-40 mx-4 bg-teal-300 mb-4">6</div>
            <div className="col-span-full lg:col-span-8 lg:col-start-5 h-40 mx-4 bg-cyan-300 mb-4">7</div>
            <div className="col-span-full lg:col-span-8 lg:col-start-5 h-40 mx-4 bg-indigo-300 mb-4">8</div>
            <div className="col-span-full lg:col-span-8 lg:col-start-5 h-40 mx-4 bg-gray-300 mb-4">9</div>
            <div className="col-span-full lg:col-span-8 lg:col-start-5 h-40 mx-4 bg-sky-300 mb-4">10</div>
            <div className="col-span-full lg:col-span-4 lg:row-span-6 lg:row-start-1 mx-4 flex flex-col">
                <div className="w-full h-44 bg-amber-300 mb-4">11</div>
                <div className="w-full h-48 bg-zinc-300 mb-4">12</div>
                <div className="w-full h-40 bg-lime-300 mb-4">13</div>
            </div>
        </section>
    </main>
    </>
    );
}

{/*  */}