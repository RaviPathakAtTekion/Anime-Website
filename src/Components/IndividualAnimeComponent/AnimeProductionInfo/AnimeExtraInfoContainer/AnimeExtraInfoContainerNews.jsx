import { useState, useEffect, Fragment } from "react";
import axios from "axios";
import { BASE_ANIME_API } from "../../../../assets/navItems.js";

import "./AnimeExtraInfoContainer.scss";
import News from "../../Segretations/News.jsx";
import ClassLoaderMini from "../../../ClassLoader/ClassLoaderMini.jsx";

function AnimeExtraInfoContainerNews({ animeId, delay, type }) {
  const [data, setData] = useState({ state: "pending" });

  const getAnimeNews = async () => {
    axios
      .get(BASE_ANIME_API + `/${type}` + `/${animeId}` + `/news`)
      .then((response) => {
        setData({ state: "ok", response });
      })
      .catch((error) => console.log("error occured"));
  };

  useEffect(() => {
    setTimeout(() => {
      getAnimeNews();
    }, delay);
  }, [animeId]);

  return (
    <Fragment>
      {data.state === "ok" ? (
        data.response.data.data.length !== 0 ? (
          <div className="anime_extra_info_segment_parts">
            <News news={data.response.data.data} />
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

export default AnimeExtraInfoContainerNews;
