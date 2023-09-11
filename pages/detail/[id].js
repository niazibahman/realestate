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
    <main></main>
    </>
    );
}