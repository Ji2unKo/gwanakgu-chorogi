import React from 'react';
import { Outlet } from 'react-router-dom';
import './Index.css';
import Header from './Header';
import Footer from './Footer';

const Index = () => {
  return (
    <div>
      <Header/>
        <main>
          <Outlet/>
        </main>
        <Footer/>
    </div>
  );
};

export default Index;