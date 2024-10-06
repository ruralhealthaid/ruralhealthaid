// import L from "leaflet";
// import styles from "./Map.module.css";
// import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

// const LeafletMap: React.FC = () => {
//   var map = L.map("map").setView([51.505, -0.09], 13);
//   L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
//     maxZoom: 19,
//     attribution:
//       '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
//   }).addTo(map);
//   return (
//     // <div id="map" className={styles.wrapper}>
//     <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
//       <TileLayer
//         attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//         url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//       />
//       <Marker position={[51.505, -0.09]}>
//         <Popup>
//           A pretty CSS3 popup. <br /> Easily customizable.
//         </Popup>
//       </Marker>
//     </MapContainer>
//     // </div>
//   );
// };

// export default LeafletMap;

import React from "react";

const Map = () => {
  return <div>Map</div>;
};

export default Map;
