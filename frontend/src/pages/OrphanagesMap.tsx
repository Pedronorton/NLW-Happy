import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import { FiPlus, FiArrowRight } from "react-icons/fi";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";
import Leaflet from 'leaflet'
import "../styles/pages/orphanages-map.css";
import 'leaflet/dist/leaflet.css';
import mapMakerImg from "../images/map-marker.svg";
// import mapIcon from "../utils/mapIcon";
// import api from "../services/api";

interface Orphanage {
  id: number;
  name: string;
  latitude: number;
  longitude: number;
}

const mapIcon = Leaflet.icon({
    iconUrl: mapMakerImg,
    iconSize:[58,68],
    iconAnchor:[29, 68],
    popupAnchor:[170, 2],
})

function OrphanagesMap() {

  return (
    <div id="page-map">
      <aside>
        <header>
          <img src={mapMakerImg} alt="Happy" />

          <h2>Escolha um orfanato no mapa</h2>
          <p>Muitas crianças estão esperando a sua visita :)</p>
        </header>

        <footer>
          <strong>São Gonçalo do Sapucaí</strong>
          <span>Minas Gerais</span>
        </footer>
      </aside>

      <Map
        center={[-21.8935062,-45.5912661]}
        zoom={16}
        style={{ width: "100%", height: "100%" }}
      >
        <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        {/* <TileLayer
          url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
        /> */}

        <Marker 
            icon={mapIcon}
            position={[-21.8935062,-45.5912661]}>

            <Popup
                className="map-popup"
                closeButton={false} minWidth={240} maxWidth={240}>
                Lar doce lar
                <Link to="/orphanage/1">
                    <FiArrowRight size={20} color="FFF"></FiArrowRight>
                </Link>
            </Popup>
        </Marker>

      </Map>

      <Link to="/orphanages/create" className="create-orphanage">
        <FiPlus size="32" color="#fff" />
      </Link>
    </div>
  );
};

export default OrphanagesMap;