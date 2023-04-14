import { useState, useEffect, Fragment } from "react";
import axios from "axios";
import { BASE_ANIME_API } from "../../../assets/navItems.js";
import SidebarSeasons from "./SidebarSeasons/SidebarSeasons.jsx";

import "./SeasonsSideBar.scss";
import ClassLoaderMini from "../../ClassLoader/ClassLoaderMini.jsx";

function SeasonsSideBar({getSeason}) {
  const [seasonsList, setSeasonsList] = useState({state: "pending"});

  const getSeasonsList = async () => {
    axios
      .get(BASE_ANIME_API + "/seasons")
      .then((response) => {
        setSeasonsList({ state: "ok", response });
      })
      .catch((error) => console.log("error occured"));
  };

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
