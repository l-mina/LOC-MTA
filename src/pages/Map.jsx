import { MapContainer, TileLayer, useMap, Marker, Popup } from 'react-leaflet';
import '../styles/map.css';

const Map = () => {
    return(
        <>
            <h1 className="text-xl text-center">Home/Map</h1>
            <MapContainer className='h-80 bg-red-200' center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={[51.505, -0.09]}>
                    <Popup>
                    A pretty CSS3 popup. <br /> Easily customizable.
                    </Popup>
                </Marker>
            </MapContainer>
        </>
    )
};

export default Map;