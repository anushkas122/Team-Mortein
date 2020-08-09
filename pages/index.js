import fetch from "node-fetch";
import Layout from "../components/layout";
import Categories from "../components/categories";
import Footer from "../components/footer";
import SideBar from "../components/sidebar";
import Header from "../components/header";

function Home() {
  return (
    <div className="h-screen flex flex-col">
      <SideBar />
      {/* {loading && <p>Loading login info...</p>}
          {!loading && !user && (
            <>
              <p>
                To view the dashboard <a href="/api/login">Login</a>
              </p>
            </>
          )}
          {user && (
            <>
              <ProfileCard user={user}>
                <button className="btn-blue" onClick={handleClick}>
                  Event
                </button>
              </ProfileCard>
              <h2>Reports</h2>
              <LinkA href="/report">Report - useEffect</LinkA>
              <LinkA href="/reportSSR">Report - SSR</LinkA>
              <LinkA href="/reportSWR">Report - SWR</LinkA>
            </>
          )}

          <Button></Button> */}
      <Header />
      <main className="container mx-auto flex-1">
      <p class = "font-black text-6xl">
        <h1>SPORTS</h1>
        <Categories category={"Sport"} />
        <h1>ACADEMIC</h1>
        <Categories category={"Academic"} />
        <h1>RELIGIOUS</h1>
        <Categories category={"Religious"} />
        <h1>CULTURE</h1>
        <Categories category={"Cultural"} />
        <h1>CAUSES</h1>
        <Categories category={"Causes"} />
      </p>
      </main>

      <Footer />
    </div>
  );
}

export default Home;
