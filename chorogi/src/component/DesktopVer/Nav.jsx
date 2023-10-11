import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

const Nav = () => {
  const menuItems = document.querySelectorAll('.gnb > li');

  menuItems.forEach(function(item){
    const subMenu = item.querySelector('.sub');
  
    item.addEventListener('mouseover', function(){
      subMenu.classList.add('active');
    })
  
    // mouseleave
    item.addEventListener('mouseleave', function(){
      subMenu.classList.remove('active');
    })
  })
  return (
    <header>
      <nav>
        <h1 className="logo">
          <Link to href="">
            <img src="/images/logo_black.png" alt="logo-img" />
          </Link>
        </h1>
        <h1 className="visually-hidden">메뉴</h1>
        <ul className="gnb">
          <li><Link to=''>탄소중립이란?</Link>
            <img className='sprout' src="/images/sprout.png" alt="" />
            <ul className="sub">
              <li><Link to=''>탄소중립이란</Link></li>
              <li><Link to=''>탄소중립 생활실천</Link></li>
              <li><Link to=''>탄소중립 캠페인</Link></li>
            </ul>
          </li>
          <li><Link to=''>수거함 위치 알리미</Link>
          <img className='sprout' src="/images/sprout.png" alt="" />
            <ul className="sub">
              <li><Link to=''>의류수거함</Link></li>
              <li><Link to=''>폐건전지, 형광등</Link></li>
            </ul>
          </li>
          <li><Link to=''>지구 살리기 Tip!</Link>
          <img className='sprout' src="/images/sprout.png" alt="" />
            <ul className="sub">
              <li><Link to=''>분리수거하고 돈벌기</Link></li>
              <li><Link to=''>가까운 곳에 기부하기</Link></li>
            </ul>
          </li>
        </ul>
        <div className="data">
          <div className="weather">
            <p>날씨</p>
            <i></i>
          </div>
          <div className="dust">
            <p>미세먼지</p>
            <i></i>
          </div>
        </div>
      </nav>
    </header>
  );
};


export default Nav;