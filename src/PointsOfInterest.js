import React from "react";
import {Typography} from 'antd';
import {Map, ZoomControl} from "pigeon-maps";
import './styles.scss';

const {Title} = Typography;

function PointsOfInterest() {

    return (
        <div className="content">
            <div className="title">
                <Title>Points of Interest</Title>
            </div>

            <div className="map">
                <Map id="map"
                     defaultZoom={13}>
                    <ZoomControl/>
                </Map>
            </div>
        </div>
    )
}

export default PointsOfInterest;
