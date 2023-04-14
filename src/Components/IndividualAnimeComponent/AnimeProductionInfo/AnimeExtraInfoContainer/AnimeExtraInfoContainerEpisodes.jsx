import { useState, useEffect, Fragment } from "react";
import axios from "axios";
import { BASE_ANIME_API } from "../../../../assets/navItems.js";

import "./AnimeExtraInfoContainer.scss";
import Episodes from "../../Segretations/Episodes.jsx";
import ClassLoaderMini from "../../../ClassLoader/ClassLoaderMini.jsx";

function AnimeExtraInfoContainerEpisodes({ animeId, delay, type }) {
  const [data, setData] = useState({ state: "pending" });

  const getAnimeEpisodes = async () => {
    axios
      .get(BASE_ANIME_API + `/${type}` + `/${animeId}` + `/episodes`)
      .then((response) => {
        setData({ state: "ok", response });
      })
      .catch((error) => console.log("error occured"));
  };

  useEffect(() => {
    setTimeout(() => {
      getAnimeEpisodes();
    }, delay);
  }, [animeId]);

  return (
    <Fragment>
      {data.state === "ok" ? (
        data.response.data.data.length !== 0 ? (
          <div className="anime_extra_info_segment_parts">
            <Episodes episodes={data.response.data.data} />
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

export default AnimeExtraInfoContainerEpisodes;
