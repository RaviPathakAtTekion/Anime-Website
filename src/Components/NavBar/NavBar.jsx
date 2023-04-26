import { useEffect, useState } from "react";
import { navItems } from "../../assets/navItems.js";
import NavItem from "./NavItem/NavItem.jsx";
import SearchBox from "./SearchBox/SearchBox.jsx";
import { AiOutlineMenu } from "react-icons/ai";
import Auth from "./AuthButtons/Auth.jsx";

import "./NavBar.scss";

function NavBar() {
  const [showStatus, setShowStatus] = useState(false);

  const userDetails = JSON.parse(window.sessionStorage.getItem("userDetails"));

  const handleNavigationItemsDisplay = () => {
    setShowStatus((prevState) => {
      return prevState ? (prevState = false) : (prevState = true);
    });
  };

  return (
    <div className="navBar__styles">
      <div className="navbar_main-div">
        <nav className="navItems__styles">
          <div className="hamburger_menu">
            Menu
            <AiOutlineMenu
              className="menu_icon_style"
              onClick={handleNavigationItemsDisplay}
            ></AiOutlineMenu>
            {showStatus ? (
              <div className="nav_items_mapping_style">
                {navItems.map((item) => (
                  <NavItem key={item.id} item={item} type={"smaller"} />
                ))}
                {window.screen.width < 500 ? (
                  <Auth userDetails={userDetails} />
                ) : (
                  ""
                )}
              </div>
            ) : (
              ""
            )}
          </div>
          {navItems.map((item) => (
            <NavItem key={item.id} item={item} type={"larger"} />
          ))}
        </nav>
      </div>
      <SearchBox />
    </div>
  );
}

export default NavBar;
