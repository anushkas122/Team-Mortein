import React from 'react'
import Head from 'next/head'
import Header from './header'
import ClubCard from './ClubCard'
import Footer from "./footer";
import SideBar from "./sidebar";

function Layout ({user, loading = false, children }) {
  return (
    <>
      <div className="left">
        <SideBar />
      </div>

      <Header user={user} loading={loading} />
      <main className="container mx-auto flex-1">{children}</main>
      <ClubCard/>
      <Footer user={user} loading={loading} />
    </>
  );
}

export default Layout
