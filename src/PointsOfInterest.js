import React, {useEffect, useState} from "react";
import {Radio, Typography} from 'antd';
import {Map, Marker, ZoomControl} from "pigeon-maps";
import './styles.scss';
import predefinedLocations from "./data/regions"
import {getPointsOfInterestBySquare} from "./data/amadeus";

const {Title} = Typography;

function PointsOfInterest() {
    const [city, setCity] = useState(predefinedLocations.find(x => x.name === "Barcelona"));
    const [pointsOfInterest, setPointsOfInterest] = useState();

    const getPointsOfInterest = async () => {
        const poi = await getPointsOfInterestBySquare(city.location.square);
        return setPointsOfInterest(poi);
    }

    useEffect(() => {
        getPointsOfInterest()
    }, [city])

    const handleLocationChange = e => {
        e.preventDefault()
        setCity(predefinedLocations.find(x => x.name === e.target.value));
    };

    return ( pointsOfInterest &&
        <div className="content">
            <div className="title">
                <Title>Points of Interest</Title>
            </div>

            <div className="controls">
                <Radio.Group
                    className="locations"
                    value={city.name}
                    onChange={handleLocationChange}
                    size="large">
                    {predefinedLocations.map(x => (
                        <Radio.Button key={x.name} value={x.name}>{x.name}</Radio.Button>
                    ))}
                </Radio.Group>
            </div>

            <div className="map">
                <Map id="map"
                     key={city.name}
                     defaultCenter={[city.location.latitude, city.location.longitude]}
                     defaultZoom={13}>
                    <ZoomControl/>

                    {pointsOfInterest.length > 0 && pointsOfInterest.map(location => {
                        return (<Marker
                                width={50}
                                anchor={[location.geoCode.latitude, location.geoCode.longitude]}
                            />

                        );
                    })}

                </Map>
            </div>
        </div>
    )
}

export default PointsOfInterest;
