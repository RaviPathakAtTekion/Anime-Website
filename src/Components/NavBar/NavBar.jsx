import { navItems } from "../../assets/navItems.js";
import NavItem from "./NavItem/NavItem.jsx";
import SearchBox from "./SearchBox/SearchBox.jsx";

import "./NavBar.scss";

function NavBar() {
  return (
    <div className="navBar__styles">
      <nav className="navItems__styles">
        {navItems.map((item) => (
          <NavItem key={item.id} item={item} />
        ))}
      </nav>
      <SearchBox />
    </div>
  );
}

export default NavBar;
