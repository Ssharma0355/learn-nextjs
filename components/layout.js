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
        <meta property="og:title" content="My page title" key="title" />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.7/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-LN+7fdVzj6u52u30Kp6M/trliBMCMKTyK833zpbD+pXdCLuTusPj697FH4R/5mcr"
          crossorigin="anonymous"
        ></link>
      </Head>
      <Header />
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
