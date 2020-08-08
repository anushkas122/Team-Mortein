import React from 'react'
import Head from 'next/head'
import Header from './header'
import ClubCard from './ClubCard'

function Layout ({ }) {
  return (
    <>
      <Head>
        <title>WDCC - App Template</title>
      </Head>

      <Header user={user} loading={loading} />
      <main className='container mx-auto'>{children}</main>
      <ClubCard/>

    </>
  )
}


export default Layout
