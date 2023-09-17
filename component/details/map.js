import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Icon } from "leaflet";
import "leaflet/dist/leaflet.css";

export default function Map({latlng}){
    return(
        <div className="w-full bg-white rounded border border-detailBorder px-10 pb-10 pt-4">
            <h2 className="font-semibold text-textColorH">موقعیت روی نقشه</h2>
            <hr className="my-2"/>
            <div className="w-full h-64 sm:h-72 md:h-80">
                <MapContainer id="map1" center={latlng} zoom={16} className="w-full h-full z-0">
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker position={latlng} icon={new Icon({ iconUrl: "/svg/marker.svg", iconSize: [34, 50], iconAnchor: [17, 50] })} >
                        <Popup>
                            جزئیات آگهی
                        </Popup>
                    </Marker>
                </MapContainer>
            </div>
        </div>
    );
}