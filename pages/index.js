import Head from "next/head";
import SearchBox from "../component/mainpage/searchbox";
import NewProperty from "../component/mainpage/newproperty";
import CitiesProperty from "../component/mainpage/citiesproperty";
import Agents from "../component/mainpage/agents";
import SiteComments from "../component/mainpage/sitecomments";
import Articles from "../component/mainpage/articles";
import axios from "axios";
import { GET_AHWAZ_ADS, GET_CITIES, GET_HAMEDAN_ADS, GET_NEIGHBOURHOODS, GET_NEW_LET_ADS, GET_NEW_SELL_ADS, GET_SHIRAZ_ADS, GET_TABRIZ_ADS, GET_TEHRAN_ADS } from "../siteconfig/constant";

export async function getStaticProps(){
  
  const [cities,neighbours,newSellAds,newLetAds,tehranAds,tabrizAds,ahwazAds,shirazAds,hamedanAds]= await axios.all([    
    axios.get(GET_CITIES),
    axios.get(GET_NEIGHBOURHOODS),
    axios.get(GET_NEW_SELL_ADS),
    axios.get(GET_NEW_LET_ADS),
    axios.get(GET_TEHRAN_ADS),
    axios.get(GET_TABRIZ_ADS),
    axios.get(GET_AHWAZ_ADS),
    axios.get(GET_SHIRAZ_ADS),
    axios.get(GET_HAMEDAN_ADS)
  ]);

  let newAds = JSON.parse(JSON.stringify(newSellAds.data ));
  newAds= newAds.concat(JSON.parse(JSON.stringify(newLetAds.data)));

  const countAds =[
    JSON.parse(JSON.stringify(tehranAds.data)).length,
    JSON.parse(JSON.stringify(tabrizAds.data)).length,
    JSON.parse(JSON.stringify(ahwazAds.data)).length,
    JSON.parse(JSON.stringify(shirazAds.data)).length,
    JSON.parse(JSON.stringify(hamedanAds.data)).length
  ];

  return {props:{
    cities : JSON.parse(JSON.stringify(cities.data)),
    neighbourhoods : JSON.parse(JSON.stringify(neighbours.data)),
    newAds: newAds,
    countAds: countAds
  }}
}
export default function Home({cities,neighbourhoods,newAds,countAds}) {
  return (
    <>
      <Head>
        <title>صفحه اصلی</title>
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
      <main className="relative text-textColorBase">
        <SearchBox cities={cities} neighbourhoods={neighbourhoods}/>
        <NewProperty properties={newAds}/>
        <CitiesProperty countAds={countAds}/>
        <Agents />
        <SiteComments />
        <Articles />
      </main>
    </>
  );
}
