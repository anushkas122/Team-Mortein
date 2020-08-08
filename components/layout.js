import React from 'react'
import Head from 'next/head'
import Header from './header'
import Footer from './footer'
import ClubCard from '.ClubCard'

function Layout ({ user, loading = false, children }) {
  return (
    <>
      <Head>
        <title>WDCC - App Template</title>
        <link rel='stylesheet' href='https://fonts.googleapis.com/css?family=Roboto:300,300italic,700,700italic' />
      </Head>
    
      <Header user={user} loading={loading} />
      SPORTS
      <ClubCard data={name=clubName, picLink=pictureResource, blurb=blurb}> </ClubCard>;
      <ClubCard data={name=clubName, picLink=pictureResource, blurb=blurb}> </ClubCard>;
      <ClubCard data={name=clubName, picLink=pictureResource, blurb=blurb}> </ClubCard>;
      <ClubCard data={name=clubName, picLink=pictureResource, blurb=blurb}> </ClubCard>;
      <ClubCard data={name=clubName, picLink=pictureResource, blurb=blurb}> </ClubCard>;
      <ClubCard data={name=clubName, picLink=pictureResource, blurb=blurb}> </ClubCard>;
      ACADEMIC
      <ClubCard data={name=clubName, picLink=pictureResource, blurb=blurb}> </ClubCard>;
      <ClubCard data={name=clubName, picLink=pictureResource, blurb=blurb}> </ClubCard>;
      <ClubCard data={name=clubName, picLink=pictureResource, blurb=blurb}> </ClubCard>;
      <ClubCard data={name=clubName, picLink=pictureResource, blurb=blurb}> </ClubCard>;
      <ClubCard data={name=clubName, picLink=pictureResource, blurb=blurb}> </ClubCard>;
      <ClubCard data={name=clubName, picLink=pictureResource, blurb=blurb}> </ClubCard>;
      RELIGIOUS
      <ClubCard data={name=clubName, picLink=pictureResource, blurb=blurb}> </ClubCard>;
      <ClubCard data={name=clubName, picLink=pictureResource, blurb=blurb}> </ClubCard>;
      <ClubCard data={name=clubName, picLink=pictureResource, blurb=blurb}> </ClubCard>;
      <ClubCard data={name=clubName, picLink=pictureResource, blurb=blurb}> </ClubCard>;
      <ClubCard data={name=clubName, picLink=pictureResource, blurb=blurb}> </ClubCard>;
      CULTURE
      <ClubCard data={name=clubName, picLink=pictureResource, blurb=blurb}> </ClubCard>;
      <ClubCard data={name=clubName, picLink=pictureResource, blurb=blurb}> </ClubCard>;
      <ClubCard data={name=clubName, picLink=pictureResource, blurb=blurb}> </ClubCard>;
      <ClubCard data={name=clubName, picLink=pictureResource, blurb=blurb}> </ClubCard>;
      <ClubCard data={name=clubName, picLink=pictureResource, blurb=blurb}> </ClubCard>;
      <ClubCard data={name=clubName, picLink=pictureResource, blurb=blurb}> </ClubCard>;
      CAUSES   
      <ClubCard data={name=clubName, picLink=pictureResource, blurb=blurb}> </ClubCard>;
      <ClubCard data={name=clubName, picLink=pictureResource, blurb=blurb}> </ClubCard>;
      <ClubCard data={name=clubName, picLink=pictureResource, blurb=blurb}> </ClubCard>;
      <ClubCard data={name=clubName, picLink=pictureResource, blurb=blurb}> </ClubCard>;
      <ClubCard data={name=clubName, picLink=pictureResource, blurb=blurb}> </ClubCard>;
      <ClubCard data={name=clubName, picLink=pictureResource, blurb=blurb}> </ClubCard>;
      <Footer/>
      </>
  )
}

export default Layout;
