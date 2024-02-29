import React, {useEffect, useState} from "react";
import {Image, Popover, Radio, Tag, Typography} from 'antd';
import './styles.scss';
import predefinedLocations from "./data/regions"
import {getPointsOfInterestBySquare} from "./data/amadeus";
import {Map, Overlay, ZoomControl} from "pigeon-maps";

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
                        return (
                            <Overlay
                                anchor={[location.geoCode.latitude, location.geoCode.longitude]}
                            >
                                <Popover
                                    title={location.name}
                                    content={location.tags && location.tags.map(x => <Tag color="red">{x}</Tag>)}
                                >
                                    <Image
                                        src="./marker.svg"
                                        height={50}
                                        preview={false}
                                    />
                                </Popover>
                            </Overlay>
                        );
                    })}
                </Map>
            </div>
        </div>
    )
}

export default PointsOfInterest;
