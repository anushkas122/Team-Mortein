import React from 'react'
import Head from 'next/head'
import Header from './header'
import Footer from './footer'
import Categories from './categories'
import clubInfo from './clubInfo'

function Layout ({ user, loading = false, children }) {
  return (
    <>
      <Head>
        <title>WDCC - App Template</title>
        <link rel='stylesheet' href='https://fonts.googleapis.com/css?family=Roboto:300,300italic,700,700italic' />
      </Head>
    
      <Header user={user} loading={loading} />
      SPORTS
      <Categories data={clubInfo, "Sports"}/>
      ACADEMIC
      <Categories data={clubInfo, "Academic"}/>
      RELIGIOUS
      <Categories data={clubInfo, "Religious"}/>
      CULTURE
      <Categories data={clubInfo, "Culture"}/>
      CAUSES   
      <Categories data={clubInfo, "Causes"}/>
      <Footer/>
      </>
  )
}

export default Layout;
