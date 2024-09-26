import React from 'react';
import { Link } from 'react-router-dom';
import './LocationList.css';
import { Icon } from '@iconify/react';

const LocationList = (props) => {
  const locationList = props.locationList

  return (
    <ul className="location-list">
    {
      locationList.item.map((item, index) => {
        return (
          <li className="location-item" key={index}>
            <div className="location-info">
              <img src={locationList.img} alt={locationList.title} />
              <div>
                <p>{item.name} <span>300m</span></p>
                <p>{item.address}</p>
              </div>
            </div>
            <div className="location-item-btn">
              <Link to="">
                  <Icon icon="solar:share-bold-duotone" />
                  <span>공유하기</span>
              </Link>
              <Link to="">
                  <Icon icon="fluent:directions-24-regular" />
                  <span>길찾기</span>
              </Link>
            </div>
          </li>
        );
      })
    }
  </ul>
  )

  
};

export default LocationList;