export default function URLCreator(building,city,neighbourhoods,rooms,facility){
    let url = "/search/";
    url += building.replace(/\s/g, '-')+ "/";
    if(neighbourhoods.length > 0){
        url += neighbourhoods[0].replace(/\s/g, '-') + "/";
    }
    url += city.replace(/\s/g, '-') ;


    if (rooms > 0){
        if (url.includes("?")) {
            url += "&" + "rooms" + "=" + rooms;
        }
        else {
            url += "?" + "rooms" + "=" + rooms;
        }
    }
    if (facility.length>0){
        if (url.includes("?")) {
            url += "&" + "facility" + "=";
        }
        else {
            url += "?" + "facility" + "=";
        }
        facility.map((item, index) => {
            if (index < facility.length - 1) {
                url += item + "-";
            } else {
                url += item;
            }
        });
    }

    return url;
}