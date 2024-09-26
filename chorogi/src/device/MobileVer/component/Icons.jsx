import React from 'react';
import { Link } from 'react-router-dom';
import './Icons.css';
import { Icon } from '@iconify/react';

const Icons = () => {
  const quickMenu = [
    {
      title : '의류',
      icon : 'iconoir:t-shirt',
      to : '/Clothes'
    },
    {
      title : '폐건전지‧형광등',
      icon : 'clarity:battery-line',
      to : '/Batteries-Fluorescent-lights'
    },
    {
      title : '네프론',
      icon : 'guidance:plastic',
      to : '/Nephron'
    },
    {
      title : '기부하기',
      icon : 'ph:heart',
      to : '/Donation'
    }
  ]

  return (
    <section className='quick-menu'>
      <h2>
        <span>환경 보호</span>를 위해<br/>
        <span>쓰레기 수거함 위치</span>를<br/>
        안내해드립니다.
      </h2>
      <div className="quick-menu-list">
        {
          quickMenu.map((item, index) => {
            return(
              <div className="quick-menu-item" key={index}>
                <Link to={item.to}>
                  <div>
                    <Icon icon={item.icon} />
                  </div>
                </Link>
                <p>{item.title}</p>
              </div>
            )
          })
        }
      </div>
      <div className='img-box'>
        <img src="/images/plastic bottle.png" alt="main character" />
      </div>
    </section>
  );
};

export default Icons;