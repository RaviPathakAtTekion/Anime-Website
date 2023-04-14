import AnimeExtraInfoContainerCharacter from "./AnimeExtraInfoContainer/AnimeExtraInfoContainerCharacter";
import AnimeExtraInfoContainerEpisodes from "./AnimeExtraInfoContainer/AnimeExtraInfoContainerEpisodes";
import AnimeExtraInfoContainerNews from "./AnimeExtraInfoContainer/AnimeExtraInfoContainerNews";
import AnimeExtraInfoContainerRecommendations from "./AnimeExtraInfoContainer/AnimeExtraInfoContainerRecommendations";
import "./AnimeProductionInfo.scss";

function AnimeProductionInfo({ animeContent, type }) {
  const animeId = animeContent.mal_id;
  
  return (
    <div className="anime_extra_info_container">
      <div className="anime_production_segment">
        <AnimeExtraInfoContainerCharacter
          animeId={animeId}
          delay={0}
          type={type}
        />
        {type === "manga" ? (
          ""
        ) : (
          <AnimeExtraInfoContainerEpisodes
            animeId={animeId}
            delay={100}
            type={type}
          />
        )}
        <AnimeExtraInfoContainerNews
          animeId={animeId}
          delay={2000}
          type={type}
        />
        <AnimeExtraInfoContainerRecommendations
          animeId={animeId}
          delay={3000}
          type={type}
        />
      </div>
    </div>
  );
}

export default AnimeProductionInfo;
