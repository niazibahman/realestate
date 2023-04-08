import Head from "next/head";
import ListingHeaders from '../../component/listing/listingheader';
import Pagination from '../../component/listing/pagination';
import PropertiesList from '../../component/listing/propertieslist';
import AdvanceSearch from '../../component/listing/advancesearch';

export async function getServerSideProps(context) {
    return {
      props: {}
    }
}

export default function Listing(){
    return(<div>
        <Head>
            <title>Listing Page</title>
        </Head>
        <main>
            <ListingHeaders/>
            <AdvanceSearch/>
            <PropertiesList/>
            <Pagination currentPage={25} numPages={65}/>
        </main>
    </div>);
}