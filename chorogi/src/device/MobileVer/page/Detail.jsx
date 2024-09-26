import React from 'react';
import { Link, useParams } from 'react-router-dom';
import './Detail.css';
import { Icon } from '@iconify/react';
import { collectionBoxDetailData } from '../component/CollectionBoxData';


const Detail = () => {
  const { detailSlug } = useParams();

  const getContents = (detailSlug) => {
    return collectionBoxDetailData.find((content) => content.slug === detailSlug);
  }

  const contents = getContents(detailSlug);
  console.log(contents)
  return (
    <div>
      <div className="map-title-box">
        <div className="map-title">
          <p>수거 위치 알리미</p>
          <h3>의류 수거함</h3>
        </div>
        <div className="map-title-btn">
          <Link to="/"><Icon icon="uiw:left" /></Link>
        </div>
      </div>
      {
        collectionBoxDetailData.map((item, index) => {
          console.log(item)
          return (
            <div class="box-list">
              <div class="box-item">
                <img src={item.mainImg} alt={item.title} />
                <h2>{item.mainTitle}</h2>
                <p>{item.mainContent}</p>
              </div>
              <div class="box-item">
                <Icon icon="ic:outline-circle" width="80px" color="5B92FB"/>
                <span>{item.subTitle1}</span>
                <p>{item.subContent1}</p>
              </div>
              <div class="box-item">
                <Icon icon="ph:x-bold" width="80px" color="FF1212"/>
                <span>{item.subTitle2}</span>
                <p>{item.subContent2}</p>
              </div>
            </div>
          )
        })
      }
    </div>
  );
};

export default Detail;