import { useCallback, useState } from "react";
import SeasonsSideBar from "./SeasonsSideBar/SeasonsSideBar.jsx";
import SeasonalAnimes from "./SeasonalAnimes/SeasonalAnimes.jsx";
import { year, animeSeason } from "../../assets/navItems.js";

import "./AnimeSeasonsContainer.scss";

// anime season page container
function AnimeSeasonsContainer() {

  // state to manage season and year change
  const [seasonAndYear, setSeasonAndYear] = useState({
    year: year,
    season: animeSeason,
  });

  // state change function (in parent call)
  const getSeason = useCallback((season, year) => {
    setSeasonAndYear({ year: year, season: season });
  }, []);

  return (
    <div className="seasons_container">
      <div className="seasons_sidebar_container">
        <SeasonsSideBar getSeason={getSeason} />
      </div>
      <div className="seasons_animes_container">
        <SeasonalAnimes selectedSeason={seasonAndYear} />
      </div>
    </div>
  );
}

export default AnimeSeasonsContainer;
