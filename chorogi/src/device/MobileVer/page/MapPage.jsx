import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import './MapPage.css'
import { Icon } from '@iconify/react';
import { collectionBoxMapData, collectionBoxDetailData } from '../component/CollectionBoxData';
import LocationMap from '../component/LocationMap';
import LocationList from '../component/LocationList';

const MapPage = () => {
  const [isActive, setIsActive] = useState('false');
  const { mapSlug } = useParams();

  const listToggle = () => {
    setIsActive(active => !active);
  }

  const getLocationList = (mapSlug) => {
    return collectionBoxMapData.find((location) => location.slug === mapSlug);
  }
  
  const locationList = getLocationList(mapSlug);

  return (
    <div>
      <div className="map-title-box">
        <div className="map-title">
          <p>{locationList.menu}</p>
          <h3>{locationList.title}</h3>
        </div>
        <div className="map-title-btn">
          <Link to="/"><Icon icon="uiw:left" /></Link>
          <Link to=""><Icon icon="octicon:info-24" /></Link>
        </div>
      </div>
      <div className="map">
        <LocationMap locationList={locationList}/>
        <div className={`location-box ${isActive ? '' : 'active'}`}>
          <div className="location-list-icon" onClick={listToggle}>
            <Icon icon="uiw:up" />
            <Icon icon="uiw:down" />
          </div>
          <LocationList locationList={locationList}/>
        </div>
      </div>
    </div>
  );
};

export default MapPage;