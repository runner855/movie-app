import * as React from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";
import { AppUrls } from "../../types/ApiTypes";

export const NavBar = () => {
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
        <div className="arrow-back" onClick={() => navigate(-1)}>
          <IoMdArrowRoundBack />
        </div>

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
        {/* <img
          className="pokemon_logo"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlM45KDD6bQ7uZdPmIo9ptIspxcKcZ4kcuaA&usqp=CAU"
          alt="pokemon_logo"
        /> */}
      </nav>
    </IconContext.Provider>
  </>
  );
};
