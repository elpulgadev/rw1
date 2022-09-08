import { Link, NavLink } from "react-router-dom";
import { GoThreeBars } from "react-icons/go";

import Logo from "../images/logo.png";
import "./navbar.css";

import { links } from "../data";

const Navbar = () => (
  <nav>
    <div className="container nav__container">
      <Link to="/" className="logo">
        <img src={Logo} alt="Nav logo" />
      </Link>
      <ul className="nav__links">
        {links.map(({ name, path }, index) => (
          <li key={index}>
            <NavLink to={path}>{name}</NavLink>
          </li>
        ))}
      </ul>
      <button className="nav__toggle_btn">
        <GoThreeBars />
      </button>
    </div>
  </nav>
);

export default Navbar;
