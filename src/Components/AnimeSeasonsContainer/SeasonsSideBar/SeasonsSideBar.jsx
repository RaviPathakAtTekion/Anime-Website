import { useState, useEffect, Fragment } from "react";
import axios from "axios";
import { BASE_ANIME_API } from "../../../assets/navItems.js";
import SidebarSeasons from "./SidebarSeasons/SidebarSeasons.jsx";

import "./SeasonsSideBar.scss";
import ClassLoaderMini from "../../ClassLoader/ClassLoaderMini.jsx";

// seasons sidebar container
function SeasonsSideBar({getSeason}) {
  
  // state to get api data
  const [seasonsList, setSeasonsList] = useState({state: "pending"});

  // api call fuction
  const getSeasonsList = async () => {
    axios
      .get(BASE_ANIME_API + "/seasons")
      .then((response) => {
        setSeasonsList({ state: "ok", response });
      })
      .catch((error) => console.log("error occured"));
  };

  // calling api function in useeffect (initial rendering), with zero dependency
  useEffect(() => {
    getSeasonsList();
  }, []);

  return (
    <Fragment>
        {seasonsList.state === "ok" ? (
        <div className="sidebars_container">
        <h2>Seasons</h2>
          <SidebarSeasons seasons={seasonsList.response.data.data.slice(0, 30)} getSeason={getSeason}/>
        </div>
      ) : (
        <ClassLoaderMini />
      )}
    </Fragment>
  )
}

export default SeasonsSideBar;
