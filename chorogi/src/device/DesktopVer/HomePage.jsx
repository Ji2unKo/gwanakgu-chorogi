import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';

const HomePage = () => {
  const collectionBox = [
    {
      to : '/clothes',
      title : '의류',
      img : '/images/icon-clothes-9752702.png',
      text : '바르게 알고 바르게 버려요!'
    },
    {
      to : '/batteries',
      title : '폐건전지, 형광등',
      img : '/images/icon-light bulb and research.png',
      text : '그냥 버리면 환경오염\n제대로 수거하면 재활용 가능!'
    },
    {
      to : '/saveTheEarth',
      title : '지구 살리기 Tip',
      img : '/images/icon-planet-earth-1542833.png',
      text : '환경도 살리고\n돈도 벌 수 있다고?'
    }
  ]

  const carbonNeutral = [
    {
      to : '',
      title : '가정',
      img : '/images/home.png'
    },
    {
      to : '',
      title : '학교',
      img : '/images/school.png'
    },
    {
      to : '',
      title : '회사',
      img : '/images/company.png'
    }
  ]

  return (
    <div>
      <main>
        <section className='collection-box'>
          <div className="collection-box-info">
            <h2>환경 보호를 위한<br/>쓰레기 수거함 위치를 안내해드립니다.</h2>
            <div className="collection-box-list">
            {
                collectionBox.map((item, index) => {
                  return (
                    <div className="collection-box-item" key={index}>
                      <Link to={item.to}>
                        <p className='title'>{item.title}</p>
                        <img src={item.img} alt={item.title} />
                        <p>{item.text}</p>
                      </Link>
                    </div>
                  )
                })
              }
            </div>
          </div>
        </section>
        
        <section className="carbon-neutral">
          <div className="carbon-neutral-text">
            <p>탄소중립 생활 실천</p>
            <h2>일상 속 친환경 소비<br/>실천 수칙을 알아볼까요?</h2>
            <p>누구나 언제·어디서든 탄소중립을 실천할 수 있어요!</p>
          </div>
          <div className="card-list">
            {
              carbonNeutral.map((item, index) => {
                return (
                  <div className="card-item" key={index}>
                    <h3>#{item.title}에서</h3>
                    <div className="caption">
                      <ul>
                        <li>난방온도 2도 낮추고 냉방온도 2도 높이기</li>
                        <li>전기밥솥 보온기능 사용 줄이기</li>
                        <li>냉장고 적정용량 유지하기</li>
                        <li>비데 절전기능 사용하기</li>
                        <li>물은 받아서 사용하기</li>
                        <li>텔레비전 시청 시간 줄이기</li>
                      </ul>
                      <button><Link to={item.to}>자세히 보기</Link></button>
                    </div>
                    <img src={item.img} alt={item.title} />
                  </div>
                )
              })
            }
          </div>
        </section>
      </main>
    </div>
  );
};

export default HomePage;