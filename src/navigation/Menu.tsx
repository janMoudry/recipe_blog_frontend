import { useRef } from "react";
import { isBrowser } from "react-device-detect";
import { FaFileContract, FaHome, FaReceipt, FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import "../styles/navigation/Menu/Menu.css";

const Menu = () => {
  const searchInput = useRef(null);

  const image = require("../assets/cutlery.gif");

  return (
    <nav className="menu">
      <NavLink className="logo" to={"/"}>
        <p>Mňam</p>
        <p>doPíči</p>
      </NavLink>
      <li>
        <ul>
          <NavLink
            className={(e) => (e.isActive ? "focused_link" : "link")}
            to={"/Recipes"}
          >
            <FaHome color={"white"} />
            <p id="home">Recepty</p>
          </NavLink>
        </ul>
        <ul>
          <NavLink
            className={(e) => (e.isActive ? "focused_link" : "link")}
            to={"/CreateRecipes"}
          >
            <FaReceipt color={"white"} />
            <p id="recipe">Vytvořit recept</p>
          </NavLink>
        </ul>
        <ul>
          <NavLink
            className={(e) => (e.isActive ? "focused_link" : "link")}
            to={"/Contact"}
          >
            <FaFileContract color={"white"} />
            <p id="contact">Kontakt</p>
          </NavLink>
        </ul>
        {isBrowser && (
          <ul>
            <div className="search">
              <Link to={"/search"} className="link">
                <FaSearch color={"white"} />
              </Link>
              <input type={"text"} ref={searchInput} />
            </div>
          </ul>
        )}
      </li>
    </nav>
  );
};

export default Menu;
