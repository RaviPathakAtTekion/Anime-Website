import { useState, useEffect, Fragment } from "react";
import axios from "axios";
import { BASE_ANIME_API } from "../../../../assets/navItems.js";

import "./AnimeExtraInfoContainer.scss";
import Characters from "../../Segretations/Characters.jsx";
import ClassLoaderMini from "../../../ClassLoader/ClassLoaderMini.jsx";

function AnimeExtraInfoContainerCharacter({ animeId, delay, type }) {
  const [data, setData] = useState({ state: "pending" });

  const getAnimeCharacters = async () => {
    axios
      .get(BASE_ANIME_API + `/${type}` + `/${animeId}` + `/characters`)
      .then((response) => {
        setData({ state: "ok", response });
      })
      .catch((error) => {
        console.log("error occured");
        setData({ state: "error" });
      });
  };

  useEffect(() => {
    setTimeout(() => {
      getAnimeCharacters();
    }, delay);
  }, [animeId]);

  return (
    <Fragment>
      {data.state !== "error" && data.state === "ok"  ? (
        data.response.data.data.length !== 0 ? (
          <div className="anime_extra_info_segment_parts">
            <Characters characters={data.response.data.data} />
          </div>
        ) : (
          ""
        )
      ) : (
        <ClassLoaderMini />
      )}
    </Fragment>
  );
}

export default AnimeExtraInfoContainerCharacter;
