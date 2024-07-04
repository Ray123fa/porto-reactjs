import { useState, useContext } from "react";
import * as Icon from "react-feather";
import "../helpers/checkCookie";
import Context from "../helpers/Context";

const NavMenu = () => {
  const { navbar } = useContext(Context);
  const [isDarkMode, setIsDarkMode] = useState(localStorage.getItem("theme") === "dracula");

  const toggleDarkMode = () => {
    if (isDarkMode) {
      document.documentElement.setAttribute("data-theme", "light");
      localStorage.setItem("theme", "light");
      setIsDarkMode(false);
      window.location.reload();
    } else {
      document.documentElement.setAttribute("data-theme", "dracula");
      localStorage.setItem("theme", "dracula");
      setIsDarkMode(true);
      window.location.reload();
    }
  };

  return (
    <>
      {navbar.map((item, index) => (
        <li key={index}>
          <a href={item.link} className="text-base">
            {item.name}
          </a>
        </li>
      ))}
      <li className="rounded-full" onClick={toggleDarkMode}>
        <span onClick={toggleDarkMode}>{isDarkMode ? <Icon.Moon /> : <Icon.Sun />}</span>
      </li>
    </>
  );
};

const Navbar = () => {
  return (
    <nav className="navbar !h-2 shadow-slate-400 bg-gray-300 dark:bg-gray-500 shadow-sm fixed backdrop-blur-[5px] top-0 left-0 right-0 px-4 z-10">
      <div className="navbar-start">
        <a className="btn btn-ghost font-bold text-xl">Rayhan F</a>
      </div>

      <div className="navbar-end">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost md:hidden">
            <Icon.Menu />
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 pr-12 bg-base-100 rounded-box w-max shadow-slate-400 shadow-sm right-0">
            <NavMenu />
          </ul>
        </div>

        <div className="hidden md:flex">
          <ul className="menu menu-horizontal px-1">
            <NavMenu />
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
