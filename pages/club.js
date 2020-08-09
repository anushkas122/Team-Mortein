import fetch from "node-fetch";
import { useFetchUser } from "../lib/user";
import config from "../lib/config";
import Link from "next/link";
import Button from "../components/button";
import Layout from "../components/layout";
const LinkA = ({ children, href }) => (
  <Link href={href}>
    <a className="pl-4 block pr-4 underline hover:text-white">{children}</a>
  </Link>
);

function Club() {
  // set required to true to force the page to require login.
  const { user, loading } = useFetchUser({ required: false });

  const logEvent = async (type, value) => {
    const event = {
      name: user.nickname,
      type: type,
      value: value,
      // date: added server side so we can't lie
    };
    await fetch(`${config.HOST}/api/events`, {
      method: "post",
      body: JSON.stringify(event),
    });

    // TODO handle error if event cannot be posted.
    // TODO display feedback if event is ok
  };

  const handleClick = (e) => {
    // console.log(e.target)
    logEvent("click", 1);
  };
  return (
    <div
      className="h-screen flex flex-col"
      style={{ backgroundColor: "#f7f0d8" }}
    >
      <Layout user={user} loading={loading}>
        <h1
          align="left"
          style={{ color: "#102576", padding: "10px" }}
          class="font-semibold text-4xl mt-20 ml-12"
        >
          University of Auckland Badminton Club
        </h1>
        <div class="grid grid-cols-2 gap-4 ml-12">
          <div>
            <p
              align="left"
              class="text-xl text-center"
              style={{ padding: "20px" }}
            >
              You are reading the description of most recreative, welcoming,
              diversing, and professional sports club of University of Auckland.
              We have three weekly sessions located at Gilles Ave Auckland
              Badminton Hall with players from beginners to nationals. It is the
              best chance for you to explore this fantastic sport while
              socializing. It can be a live changing place for you! Come and
              join us! We need you to join UABC!
            </p>
          </div>
          <div>
            <p className="m-6 shadow-2xl align-right">
              <img
                src="UABC image1.png"
                alt="UABC image"
                width="600"
                height="500"
                class="rounded-lg shadow-lg"
              ></img>
              <h3 class="font-bold mt-5 ml-5">
                {" "}
                Contact: Chieh-I Ko (President 2020)
              </h3>
              <h3 class="font-bold ml-5"> Email: badminton.au@gmail.com</h3>
              <h3 class="font-bold ml-5">
                {" "}
                Website:{" "}
                <a
                  href="https://www.uabc.club/"
                  target="_blank"
                  className="website"
                >
                  www.uabc.club
                </a>
              </h3>
            </p>
          </div>
        </div>

        {/* {loading && <p>Loading login info...</p>}
        {!loading && !user && (
          <>
            <p>
              To view the dashboard <a href="/api/login">Login</a>
            </p>
          </>
        )} */}
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
      </Layout>
    </div>
  );
}

export default Club;
