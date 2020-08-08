import Head from "next/head";
import Header from "./header";

function Button({ user, loading }) {
  const handleClick = (e) => {
    console.log(e.target);
  };

  return (
    <>
      <button
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
        onClick={handleClick}
      >
        Button
      </button>
    </>
  );
}

export default Button;
