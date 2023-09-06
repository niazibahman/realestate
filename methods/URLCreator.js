export default function URLCreator(building,city,neighbourhoods){
    let url = "/search/";
    if(neighbourhoods.length > 0){
        url += neighbourhoods[0].replace(/\s/g, '-') + "/";
    }
    url += city.replace(/\s/g, '-') + "/";
    url += building.replace(/\s/g, '-');
    return url;
}