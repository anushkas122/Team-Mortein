// import Head from "next/head";
// import Header from "./header";
import Footer from "./footer";
import SideBar from "./sidebar";

function Layout({ user, loading = false, children }) {
  return (
    <>
      <div className="left">
        <SideBar />
      </div>

      {/* <Header user={user} loading={loading} /> */}
      <main className="container mx-auto">{children}</main>
      <Footer user={user} loading={loading} />
    </>
  )
}

export default Layout
