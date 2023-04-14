import axios from "axios";
import { useEffect, useState } from "react";
import { BASE_ANIME_API } from "../../../../assets/navItems.js";
import AnimeBox from "./TopAnimeBox/AnimeBox.jsx";
import { AiFillFire } from "react-icons/ai";

import "../AnimesElement.scss";
import ClassLoaderMini from "../../../ClassLoader/ClassLoaderMini.jsx";

function TopAnimes({ BsLaptop }) {
  const type = "/top/anime";
  const filter = "?filter=favorite";

  const [animesDetails, setAnimesDetails] = useState({ state: "pending" });

  const callTopAnimesApi = async () => {
    axios
      .get(BASE_ANIME_API + type + filter)
      .then((response) => {
        setAnimesDetails({ state: "ok", response });
      })
      .catch((error) => console.log("error occured"));
  };

  useEffect(() => {
    setTimeout(() => {
      callTopAnimesApi();
    }, 1000);
  }, []);

  return (
    <div className="animes_container_style">
      <div className="animes_title_style">
        <BsLaptop />
        <h4>Top Anime</h4>
      </div>
      {animesDetails.state === "ok" ? (
        <AnimeBox
          animesDetails={animesDetails.response.data.data}
          InfoImage={AiFillFire}
        />
      ) : (
        <ClassLoaderMini />
      )}
    </div>
  );
}

export default TopAnimes;
