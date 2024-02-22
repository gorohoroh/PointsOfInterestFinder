import React, {useState} from "react";
import {Typography} from 'antd';
import {Map, ZoomControl} from "pigeon-maps";
import './styles.scss';
import predefinedLocations from "./data/regions"

const {Title} = Typography;

function PointsOfInterest() {
    const [city, setCity] = useState(predefinedLocations.find(x => x.name === "Barcelona"));

    return (
        <div className="content">
            <div className="title">
                <Title>Points of Interest</Title>
            </div>

            <div className="map">
                <Map id="map"
                     key={city.name}
                     defaultCenter={[city.location.latitude, city.location.longitude]}
                     defaultZoom={13}>
                    <ZoomControl/>
                </Map>
            </div>
        </div>
    )
}

export default PointsOfInterest;
