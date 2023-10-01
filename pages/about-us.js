import Head from "next/head";
import AboutHead from "../component/about-us/head";
import OurStory from "../component/about-us/our-story";
import OurMission from "../component/about-us/our-mission";

export default function About(){
    return(
        <div>
            <Head>
                <title>درباره ما</title>
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
                <AboutHead/>
                <OurStory/>
                <OurMission/>
            </main>
        </div>
    );
}