import { FaNewspaper } from "react-icons/fa";
import AnimeBoxComponent from "./AnimeBoxComponent/AnimeBoxComponent.jsx";
import ClassLoaderMajor from "../../../ClassLoader/ClassLoaderMajor.jsx";
import ErrorMessage from "../../../ErrorOccurredComponent/ErrorMessage.jsx";
import AiringAnimesData from "./AiringAnimesApiCall.jsx";
import "../AnimesElement.scss";

// top anime airing container component
function TopAiringAnimes() {
  const { loading, airingAnimes, error } = AiringAnimesData();

  return (
    <div className="specific_anime__container" style={{ flexGrow: 1 }}>
      <div className="anime__title">
        <FaNewspaper />
        <h4>Top Airing</h4>
      </div>
      {!loading && airingAnimes.length !== 0 && error === null ? (
        <AnimeBoxComponent animesDetails={airingAnimes} />
      ) : error !== null ? (
        <div className="error_container_outer">
          <ErrorMessage />
        </div>
      ) : (
        <ClassLoaderMajor />
      )}
    </div>
  );
}

export default TopAiringAnimes;
