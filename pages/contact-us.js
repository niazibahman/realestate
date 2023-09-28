import Head from "next/head";
import SendRequest from "../component/contact-us/sendRequest";
import ContactBridge from "../component/contact-us/contactBridge";

export default function ContactUs(){
    return(
        <div>
            <Head>
                <title>ارتباط با ما</title>
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
            <main>
                <section className="w-full h-32 bg-listingHeader">
                    <h1 className="w-full sm:container h-full mx-auto px-4 flex flex-col justify-center font-bold text-3xl">
                    ارتبا با ما
                    </h1>
                </section>
                <section className="w-full sm:container mx-auto px-4 py-20 grid grid-cols-1 md:grid-cols-12 gap-0">
                    <SendRequest/>
                    <ContactBridge/>
                </section>
            </main>
        </div>
    );
}