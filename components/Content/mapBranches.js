import React, { useState } from "react";
import { useRouter } from "next/router";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const mapContainerStyle = {
  height: "700px",
};

export default function MapBox() {
  const [mapInstance, setMapInstance] = useState(false);

  const location = useRouter();

  const markers = location.pathname.includes("/sarwa-Life")
    ? [{ id: 1, position: { lat: 30.047063, lng: 31.237313 } }]
    : [
        {
          id: 1,
          position: { lat: 31.19895, lng: 29.91949 },
        },
        {
          id: 2,
          position: { lat: 30.040438, lng: 31.208813 },
        },
        {
          id: 3,
          position: { lat: 30.047063, lng: 31.238062 },
        },
        {
          id: 4,
          position: { lat: 30.095188, lng: 31.325938 },
        },
        {
          id: 4,
          position: { lat: 31.270313, lng: 32.288812 },
        },
      ];

  const onLoad = (marker) => {};

  return (
    <div>
      <div style={{ background: "white" }}>
        <LoadScript googleMapsApiKey="AIzaSyBUQUZh1KHcrl2R-tbouYTowdRxjZcLODE">
          <GoogleMap
            mapContainerStyle={mapContainerStyle}
            center={{ lat: 30.04048, lng: 31.20948 }}
            zoom={8}
            onLoad={(map) => setTimeout(() => setMapInstance(map))}
          >
            {mapInstance &&
              markers.map(({ id, position }) => (
                <Marker
                  key={id}
                  position={position}
                  onLoad={onLoad}
                  onClick={() =>
                    window.open(
                      `http://maps.google.com?q=${position.lat},${position.lng}`,
                      "_blank"
                    )
                  }
                />
              ))}
          </GoogleMap>
        </LoadScript>
      </div>
    </div>
  );
}
