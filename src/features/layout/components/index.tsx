import React, { FC } from 'react';
import './layout.scss'
import Header from './header/Header';
import Footer from './footer/Footer';

type LayoutProps = {
  children: React.ReactNode;
};
const Layout: FC<LayoutProps> = ({children}) => {
  return (
    <main className='layout'>
      <Header />
      <section className='layout__main'>
        { children }
      </section>
      <Footer/>
    </main>
  );
};

export default Layout;