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
    <>
      <Layout user={user} loading={loading}>
      <img src = "UABC image1.png" alt="UABC image"></img>
        <h1>Page heading</h1>
        <p>It can be a live changing club for you! Come and join us! We need you to join UABC!</p>

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

        <Button  onclick="window.history.back()">Back</Button>
      </Layout>
    </>
  );
}

export default Club;
