import { Fragment } from "react";

import "./Header.scss";

import NavBar from "../../NavBar/NavBar.jsx";
import AnimeImageAuth from "../../NavBar/AnimeImageAuth/AnimeImageAuth.jsx";

function Header() {
  const userDetails = JSON.parse(window.sessionStorage.getItem("userDetails"));
  
  return (
    <Fragment>
      <div className="nav__style">
        <AnimeImageAuth userDetails={userDetails} />
        <NavBar />
      </div>
    </Fragment>
  );
}

export default Header;
