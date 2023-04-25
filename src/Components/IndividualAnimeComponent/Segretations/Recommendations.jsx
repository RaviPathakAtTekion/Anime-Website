import RecommendationsElements from "./Elements/RecommendationsElements";
import "../AnimeExtraInfo.scss";

function Recommendations({ recommendations }) {
  
  return (
    <div className="recommendation_anime_container">
      <h2 className="anime_specific_title">Recommendations</h2>
      <h2 className="total_recommendations">Recommendations - {recommendations.length}</h2>
      <div className="anime_recommendations_inside_container">
        {recommendations.map((recommendedAnime, id) => (
          <RecommendationsElements
            key={id}
            recommendedAnime={recommendedAnime}
          />
        ))}
      </div>
    </div>
  );
}

export default Recommendations;
