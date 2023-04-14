import { useEffect, useState } from "react";
import { FaNewspaper } from "react-icons/fa";
import axios from "axios";
import AnimeBoxComponent from "./AnimeBoxComponent/AnimeBoxComponent.jsx";
import { BASE_ANIME_API } from "../../../../assets/navItems.js";

import "../AnimesElement.scss";
import ClassLoaderMajor from "../../../ClassLoader/ClassLoaderMajor.jsx";

function TopAiringAnimes() {
  const [animesDetails, setAnimesDetails] = useState({ state: "pending" });
  const topAiring = "/top/anime";
  const filter = "?filter=airing";

  const getAiringAnimeDetails = async () => {
    axios
      .get(BASE_ANIME_API + topAiring + filter)
      .then((response) => {
        setAnimesDetails({ state: "ok", response });
      })
      .catch((error) => console.log("error occured"));
  };

  useEffect(() => {
    getAiringAnimeDetails();
  }, []);

  return (
    <div className="specific_anime__container" style={{ flexGrow: 1 }}>
      <div className="anime__title">
        <FaNewspaper />
        <h4>Top Airing</h4>
      </div>
      {animesDetails.state === "ok" ? (
        <AnimeBoxComponent animesDetails={animesDetails.response.data} />
      ) : (
        <ClassLoaderMajor />
      )}
    </div>
  );
}

export default TopAiringAnimes;
