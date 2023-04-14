import { useState, useEffect, Fragment } from "react";
import axios from "axios";
import { BASE_ANIME_API } from "../../../../assets/navItems.js";
import Recommendations from "../../Segretations/Recommendations.jsx";

import "./AnimeExtraInfoContainer.scss";
import ClassLoaderMini from "../../../ClassLoader/ClassLoaderMini.jsx";

function AnimeExtraInfoContainerRecommendations({ animeId, delay, type }) {
  const [data, setData] = useState({ state: "pending" });

  const getAnimeRecommendations = async () => {
    axios
      .get(BASE_ANIME_API + `/${type}` + `/${animeId}` + `/recommendations`)
      .then((response) => {
        setData({ state: "ok", response });
      })
      .catch((error) => console.log("error occured"));
  };

  useEffect(() => {
    setTimeout(() => {
      getAnimeRecommendations();
    }, delay);
  }, [animeId]);

  return (
    <Fragment>
      {data.state === "ok" ? (
        data.response.data.data.length !== 0 ? (
          <div className="anime_extra_info_segment_parts">
            <Recommendations recommendations={data.response.data.data} />
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

export default AnimeExtraInfoContainerRecommendations;
