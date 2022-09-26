import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { GoThreeBars } from "react-icons/go";

import Logo from "../images/logo.png";
import "./navbar.css";

import { links } from "../data";

const Navbar = () => {
  const [isNavShowing, setIsNavShowing] = useState(false);

  return (
    <nav>
      <div className="container nav__container">
        <Link to="/" onClick={() => setIsNavShowing(false)} className="logo">
          <img src={Logo} alt="Nav logo" />
        </Link>
        <ul
          className={`nav__links ${isNavShowing ? "show__nav" : "hide__nav"}`}
        >
          {links.map(({ name, path }, index) => (
            <li key={index}>
              <NavLink
                onClick={() =>
                  setIsNavShowing((isNavShowingPrev) => !isNavShowingPrev)
                }
                to={path}
                className={({ isActive }) => (isActive ? "active-nav" : "")}
              >
                {name}
              </NavLink>
            </li>
          ))}
        </ul>
        <button
          onClick={() =>
            setIsNavShowing((isNavShowingPrev) => !isNavShowingPrev)
          }
          className="nav__toggle-btn"
        >
          <GoThreeBars />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
