import React, { useState, useEffect, useRef } from "react";
import mapboxgl from "mapbox-gl";
import MapboxGeocoder from "mapbox-gl-geocoder";
import "mapbox-gl/dist/mapbox-gl.css";

const Map = ({
  lng = "43.8563",
  lat = "18.4131",
  setMapLocation = ["Skenderija bb", "Sarajevo", 71000, "BiH", lat, lng],
}) => {
  const [map, setMap] = useState(null);
  const mapContainer = useRef(null);

  useEffect(() => {
    mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_KEY;
    const initializeMap = ({ setMap, mapContainer }) => {
      const map = new mapboxgl.Map({
        container: mapContainer.current,
        style: "mapbox://styles/vedov/cksbvw66y5an817qupf9zqrwx", // stylesheet location
        center: [lat, lng],
        zoom: 12,
        attributionControl: false,
      });

      /* const nav = new mapboxgl.NavigationControl({
        visualizePitch: true,
      }); */
      const marker = new mapboxgl.Marker({
        color: "orange",
      })
        .setLngLat([lat, lng])
        .addTo(map);

      const geocoder = new MapboxGeocoder({
        accessToken: mapboxgl.accessToken,
        mapboxgl: mapboxgl,
        marker: {
          color: "orange",
        },
        autocomplete: true,
      });

      map.addControl(geocoder);

      map.on("load", () => {
        geocoder.on("result", function (e) {
          const marker = new mapboxgl.Marker({
            color: "orange",
          })
            .setLngLat(e.result.center)
            .addTo(map);
          console.log(e.result);
          const location = e.result.place_name.split(",");
          console.log(location);
          const address = location[0];
          const zipCode = location[1].split(" ")[1];
          const city = location[1].split(" ")[2];
          const Country = location[2];
          console.log(e.result);
          console.log(address);
          console.log(city);
          console.log(zipCode);
          console.log(Country);
          setMapLocation([
            address,
            city,
            zipCode,
            Country,
            e.result.center[0],
            e.result.center[1],
          ]);
        });

        setMap(map);
        map.resize();
      });
    };

    if (!map) initializeMap({ setMap, mapContainer });
  }, [map]);

  return (
    <>
      <div ref={(el) => (mapContainer.current = el)} className="map-wrapper" />
    </>
  );
};

export default Map;
