import axios from "axios";
import { GET_CITIES } from "../siteconfig/constant";
export default async function GetCitiesApi(){
        const cityResult = await axios.get(GET_CITIES);
        return cityResult;
}