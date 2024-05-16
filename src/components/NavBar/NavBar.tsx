import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";
import { IconContext } from "react-icons";
import { FaBars, FaTimes } from "react-icons/fa";
import { NavBarLinks } from "../../Utilities/Utility";

export const NavBar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <nav className="navbar">
          <div className="menu-icon" onClick={handleClick}>
            {click ? <FaTimes /> : <FaBars />}
          </div>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            {NavBarLinks.map((item, index) => {
              return (
                <li className="nav-item" key={index}>
                  <NavLink
                    to={item.to}
                    className={({ isActive }) =>
                      "nav-links" + (isActive ? " activated" : "")
                    }
                    onClick={closeMobileMenu}
                  >
                    {item.link_label}
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
};
