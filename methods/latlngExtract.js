export default function LatLngExtract(stringLatLng) {
    let latitude='';
    let longitude='';
    latitude = stringLatLng.slice(0, stringLatLng.indexOf(","));
    longitude = stringLatLng.slice(stringLatLng.indexOf(",") + 1, stringLatLng.length).replace(/\s/g, "");
    return [Number(latitude), Number(longitude)];
}