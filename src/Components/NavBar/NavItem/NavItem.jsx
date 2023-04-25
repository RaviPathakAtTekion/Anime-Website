import { NavLink } from "react-router-dom";

import "./NavItem.scss";

function NavItem({ item, type }) {
  return type === "larger" ? (
    <NavLink className="navItem__style" to={item.url}>
      <item.image className="icons__style" />
      {item.name}
    </NavLink>
  ) : (
    <NavLink className="navItem__style_smaller" to={item.url}>
      <item.image className="icons__style_smaller" />
      {item.name}
    </NavLink>
  );
}

export default NavItem;
