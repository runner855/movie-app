import  React, { useState} from "react";
import { NavLink, useNavigate} from "react-router-dom"
import "./NavBar.css";
import { Link } from "react-router-dom";
import { AppUrls } from "../../types/ApiTypes";
import { IconContext } from "react-icons";
import { FaBars, FaTimes } from "react-icons/fa";
import { NavBarLinks } from "../../Utilities/Utility";

export const NavBar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  const navigate = useNavigate();
  return (
    // <header className="navbar">
    //   <nav>
    //     <ul>
    //       <li>
    //         <Link className="item" to={AppUrls.UPCOMING}>
    //           Upcoming
    //         </Link>
    //       </li>
    //       <li>
    //         <Link className="item" to={AppUrls.TOP_RATED}>
    //           Top Rated
    //         </Link>
    //       </li>
    //       <li>
    //         <Link className="item" to={AppUrls.POPULAR}>
    //           Popular
    //         </Link>
    //       </li>
    //     </ul>
    //   </nav>
    // </header>
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
