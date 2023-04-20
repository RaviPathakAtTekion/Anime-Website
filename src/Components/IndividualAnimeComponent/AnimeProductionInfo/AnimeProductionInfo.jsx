import AnimeExtraInfoContainerCharacter from "./AnimeExtraInfoContainer/AnimeExtraInfoContainerCharacter";
import AnimeExtraInfoContainerEpisodes from "./AnimeExtraInfoContainer/AnimeExtraInfoContainerEpisodes";
import AnimeExtraInfoContainerNews from "./AnimeExtraInfoContainer/AnimeExtraInfoContainerNews";
import AnimeExtraInfoContainerRecommendations from "./AnimeExtraInfoContainer/AnimeExtraInfoContainerRecommendations";
import AnimeContext from "../../AnimeContext";

import "./AnimeProductionInfo.scss";

function AnimeProductionInfo({ animeContent, type }) {
  const animeId = animeContent.mal_id;

  return (
    <AnimeContext.Provider value={animeContent}>
      <div className="anime_extra_info_container">
        <div className="anime_production_segment">
          <AnimeExtraInfoContainerCharacter
            animeId={animeId}
            type={type}
          />
          {type === "manga" ? (
            ""
          ) : (
            <AnimeExtraInfoContainerEpisodes
              animeId={animeId}
              type={type}
            />
          )}
          <AnimeExtraInfoContainerNews
            animeId={animeId}
            type={type}
          />
          <AnimeExtraInfoContainerRecommendations
            animeId={animeId}
            type={type}
          />
        </div>
      </div>
    </AnimeContext.Provider>
  );
}

export default AnimeProductionInfo;
