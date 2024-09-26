import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Slide.css';

const Slide = () => {

  const settings = {
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    dots: true,
    arrows: false,
    infinite: true,
    speed: 1000,
    fade: true,
    cssEase: 'liner',
  };

  return (
    <section className='slide-content'>
      <div className='slide-title'>
        <h2>
          탄소중립 생활 실천
        </h2>
        <p>누구나 언제·어디서든 탄소중립을 실천할 수 있어요!</p>
      </div>

        <Slider {...settings}>
          <div className='slide-item'>
            <Link to='https://www.gihoo.or.kr/zerolife/menu.es?mid=a10202000000'>
              <div className='slide-img slide1'>
                <img src="/images/home.png" alt="가정에서" />
              </div>
              <div className='slide-txt'>
                <h1>가정에서</h1>
                <p>친환경 소비를 실천하는 방법</p>
                <Link to='https://www.gihoo.or.kr/zerolife/menu.es?mid=a10202000000'>
                  <h3 className='slide-link'>자세히 보기 <Icon icon="akar-icons:link-out" /></h3>
                </Link>
              </div>
            </Link>
          </div>

          <div className='slide-item'>
            <Link to='https://www.gihoo.or.kr/zerolife/menu.es?mid=a10202000000'>
              <div className='slide-img slide2'>
                <img src="/images/school.png" alt="학교에서" />
              </div>
              <div className='slide-txt'>
                <h1>학교에서</h1>
                <p>친환경 소비를 실천하는 방법</p>
                <Link to='https://www.gihoo.or.kr/zerolife/menu.es?mid=a10202000000'>
                  <h3 className='slide-link'>자세히 보기 <Icon icon="akar-icons:link-out" /></h3>
                </Link>
              </div>
            </Link>
          </div>

          <div className='slide-item'>
            <Link to='https://www.gihoo.or.kr/zerolife/menu.es?mid=a10202000000'>
              <div className='slide-img slide3'>
                <img src="/images/company.png" alt="기업에서" />
              </div>
              <div className='slide-txt'>
                <h1>기업에서</h1>
                <p>친환경 소비를 실천하는 방법</p>
                <Link to='https://www.gihoo.or.kr/zerolife/menu.es?mid=a10202000000'>
                  <h3 className='slide-link'>자세히 보기 <Icon icon="akar-icons:link-out" /></h3>
                </Link>
              </div>
            </Link>
          </div>
        </Slider>
    </section>
  );
};

export default Slide;

