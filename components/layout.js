import React, { Children } from 'react'
import Head from "next/head";
import Header from './header';
import Footer from './footer';
import Navbar from '@/pages/navbar';

function Layout({ children, title }) {
  return (
    <div>
      <Head>
        <title>{title}</title>
      </Head>
      <Header />
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
