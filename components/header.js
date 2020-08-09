import Link from "next/link";
import ReactTooltip from "react-tooltip";

const MenuItem = ({ children, href }) => (
  <Link href={href}>
    <li className="block mt-4 inline-block  rounded-md text-center bg-orange-200 hover:bg-orange-500 px-4 py-2 m-2 lg:mt-0 hover:text-white mr-4">
      <a className="no-underline hover:text-white">{children}</a>
    </li>
  </Link>
);

function Header({ user, loading }) {
  return (
    <div
      class="w-full pb-2 md:flex md:items-center md:justify-between md:pb-0"
      style={{
        backgroundColor: "#a6d6dd",
        paddingLeft: "100px",
        position: "fixed",
      }}
    >
      <nav className="container flex items-center justify-between  py-2 ">
        <div id="Brand" className="text-3xl text-black-700">
          Clever Clubs
        </div>
        <ul className=" flex   ">
          <input
            type="text"
            class="w-full px-4 py-3 mx-4 leading-tight text-sm rounded placeholder-gray-200 focus:outline-none focus:shadow-outline"
            style={{ backgroundColor: "#ffffff", color: "black" }}
            placeholder="search"
          />
        </ul>
      </nav>
    </div>
  );
}

export default Header;
