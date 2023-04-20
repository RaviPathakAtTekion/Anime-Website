import axios from "axios";
import { useState, useEffect, Fragment } from "react";
import { BASE_ANIME_API } from "../../../assets/navItems.js";
import DetailsContent from "../../MainComponent/DetailsContent/DetailsContent.jsx";

import "../../MainComponent/MainComponent.scss";

// season anime container
function SeasonalAnimes({ selectedSeason }) {
  
  
  // state for selected season and year with props and page number
  const [seasonsData, setSeasonsData] = useState({ state: "pending" });
  const [currentPage, setCurrentPage] = useState(1);
  
  // function for season and page api calling
  const getAnimeSeason = async (year, season, page) => {
    axios
    .get(BASE_ANIME_API + "/seasons" + `/${year}` + `/${season}`, {
      params: { page: page },
    })
    .then((response) => {
      setSeasonsData({ state: "ok", response });
    })
    .catch((error) => console.log("error occured"));
  };
  
  // next navigation function
  const nextPageContent = (lastIndex) => {
    setCurrentPage((prevPage) => {
      return prevPage === lastIndex ? prevPage = 1 : prevPage + 1;
    });
  };
  
  // prev navigation function
  const prevPageContent = () => {
    setCurrentPage((prevPage) => {
      return prevPage === 1 ? prevPage = 1 : prevPage - 1;
    });
  };
  
  // calling the anime api function with page and season change in dependency
  useEffect(() => {
    getAnimeSeason(selectedSeason.year, selectedSeason.season, currentPage);
  }, [selectedSeason, currentPage]);

  return (
    <Fragment>
      {seasonsData.state === "ok" ? (
        <div className="details_container_loader">
          <DetailsContent
            data={seasonsData.response.data.data}
            type={selectedSeason.season + " " + selectedSeason.year}
            nextPageContent={() => nextPageContent(seasonsData.response.data.pagination.last_visible_page)}
            prevPageContent={prevPageContent}
          />
        </div>
      ) : (
        <div className="loader_container">
          <div className="anime_loader"></div>
        </div>
      )}
    </Fragment>
  );
}

export default SeasonalAnimes;
