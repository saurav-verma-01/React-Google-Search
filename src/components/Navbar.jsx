import { Link } from "react-router-dom";
import Search from "./Search";

const Navbar = ({ setDarkTheme, darkTheme }) => {
  return (
    <nav className="p-5 pb-0 flex flex-wrap   sm:justify-between justify-center items-center border-b dark:border-gray-700 border-gray-200">
      <div className="flex justify-between items-center space-x-4 w-screen">
        <Link to="/">
          <p className="text-2xl bg-blue-500 font-bold text-gray-900 py-1 px-2 rounded dark:bg-gray-500 dark:text-gray-100">
            Google Search 🔎
          </p>
        </Link>
        <button
          type="button"
          onClick={() => setDarkTheme((prev) => !prev)}
          className="text-xl dark:bg-gray-50 dark:text-gray-900 bg-white border rounded-full px-2 py-1 hover:shadow-lg"
        >
          {darkTheme ? "Light 💡" : "Dark 🌙"}
        </button>
      </div>
      <Search />
    </nav>
  );
};

export default Navbar;
