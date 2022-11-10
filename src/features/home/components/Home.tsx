import React from 'react';
import { NavLink } from 'react-router-dom';
import Layout from '../../layout/components';
import './home.scss'


const Home = () => {
  return (
    <Layout>
      <div className='homePage'>
        <p className='homePage__intro'>My name is Asya</p>
        <p className='homePage__about'>and I'm taking awesome pictures</p>
        <section className='homePage__nav'>
          <NavLink className='homePage__nav_btn' to='/portfolio'>Portfolio</NavLink>
          <NavLink className='homePage__nav_btn' to='/contact'>Contact me</NavLink>
        </section>
      </div>
      <div className='homePage-cover'/>
    </Layout>
  );
};

export default Home;