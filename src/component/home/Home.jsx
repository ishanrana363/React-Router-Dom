import React from 'react'
import Header from './../header/Header';
import Footer from '../footer/Footer';
import { Outlet } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  )
}

export default Home
