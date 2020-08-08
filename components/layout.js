import Head from 'next/head'
import Header from './header'
import Footer from './footer'


function Layout({ user, loading = false, children }) {
  return (
    <>
      <Head>
        <title>WDCC - App Template</title>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,300italic,700,700italic"
        />
      </Head>

      <Header user={user} loading={loading} />
      <main className='container mx-auto'>{children}</main>
      <Footer user={user} loading={loading} /> 
    </>
  );
}

export default Layout;
