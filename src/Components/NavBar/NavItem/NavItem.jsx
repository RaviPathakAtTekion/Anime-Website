import { NavLink } from "react-router-dom";

import "./NavItem.scss";

function NavItem({ item }) {

  return (
    <NavLink className="navItem__style" to={item.url}>
    <item.image className="icons__style" />
    {item.name}
    </NavLink>
  );
}

export default NavItem;
