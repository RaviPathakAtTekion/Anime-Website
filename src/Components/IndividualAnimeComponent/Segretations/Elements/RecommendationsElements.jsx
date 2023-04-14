import { useState } from "react";
import { BASE_ANIME_API } from "../../../../assets/navItems";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import "./RecommendationsElements.scss";

function RecommendationsElements({ recommendedAnime }) {
  const [data, setData] = useState({ state: "pending" });
  const navigate = useNavigate();

  const getAnimeData = async (id) => {
    axios
      .get(BASE_ANIME_API + `/${"anime"}` + `/${id}`)
      .then((response) => {
        setData({ state: "ok", response });
        navigate(`/anime/${id}`, {
          state: { content: response.data.data, type: "anime" },
        });
      })
      .catch((error) => {
        console.log("error occured");
        setData({ state: "error" });
      });
  };

  return (
    <div
      className="recommended_animes_container"
      onClick={() => getAnimeData(recommendedAnime.entry.mal_id)}
    >
      <div className="recommended_anime_image_container">
        <img
          src={recommendedAnime.entry.images.jpg.image_url}
          alt={recommendedAnime.entry.title}
        />
      </div>
      <div className="overlay_anime_data">
        <h5>Title - {recommendedAnime.entry.title}</h5>
        <p>Votes - {recommendedAnime.votes}</p>
      </div>
    </div>
  );
}

export default RecommendationsElements;
